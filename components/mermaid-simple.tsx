'use client';

import { useEffect, useState } from 'react';

const MermaidSimple = ({ id, content, title }: { id: string; content: string; title: string }) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueId] = useState(() => `mermaid-${id}`);

  useEffect(() => {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') {
      setError('Компонент должен выполняться в браузере');
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadMermaidFromCDN = () => {
      return new Promise<void>((resolve, reject) => {
        if ((window as any).mermaid) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11.7.0/dist/mermaid.min.js';
        script.onload = () => {
          console.log('Mermaid загружен из CDN');
          resolve();
        };
        script.onerror = () => {
          reject(new Error('Не удалось загрузить Mermaid из CDN'));
        };
        document.head.appendChild(script);
      });
    };

    const waitForMermaid = () => {
      return new Promise<void>((resolve, reject) => {
        const checkMermaid = () => {
          if ((window as any).mermaid) {
            console.log('Mermaid найден');
            resolve();
          } else {
            console.log('Mermaid еще не загружен, ждем...');
            setTimeout(checkMermaid, 100);
          }
        };

        // Ждем максимум 5 секунд
        const timeout = setTimeout(() => {
          console.log('Timeout: Mermaid не загрузился, пробуем CDN...');
          loadMermaidFromCDN().then(resolve).catch(reject);
        }, 5000);

        checkMermaid();

        // Очищаем timeout при успешной загрузке
        return () => clearTimeout(timeout);
      });
    };

    const initializeMermaid = () => {
      try {
        const mermaid = (window as any).mermaid;

        if (!mermaid) {
          throw new Error('Mermaid не найден');
        }

        console.log('Инициализируем Mermaid...');

        // Инициализация с поддержкой русского языка
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: 'base',
          darkMode: true,
          fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
          fontSize: 14,
          // Настройки для темы как на скриншоте
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            curve: 'basis',
          },
          er: {
            useMaxWidth: false,
            htmlLabels: true,
            diagramPadding: 8,
            layoutDirection: 'TB',
            minEntityWidth: 100,
            minEntityHeight: 75,
            entityPadding: 15,
            stroke: '#06b6d4',
            fill: '#1e293b',
            fontSize: 12,
          },
          sequence: {
            useMaxWidth: false,
            htmlLabels: true,
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            mirrorActors: true,
            bottomMarginAdj: 1,
            rightAngles: false,
            showSequenceNumbers: false,
            actorFontSize: 14,
            actorFontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            noteFontSize: 14,
            noteFontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            messageFontSize: 16,
            messageFontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            wrap: true,
            wrapPadding: 10,
            labelBoxWidth: 50,
            labelBoxHeight: 20,
            loopTextWidth: 75,
            loopTextHeight: 100,
            noteAlign: 'center',
            messageAlign: 'center',
            forceMenus: false,
          },
          themeVariables: {
            // Улучшенные стили для лучшей видимости
            background: '#0f172a',

            // Основные узлы, участники, заголовки ERD
            primaryColor: '#1e293b',
            primaryBorderColor: '#06b6d4',
            primaryTextColor: '#ffffff',

            // Строки в ERD, фон подграфов
            secondaryColor: '#334155',
            tertiaryColor: '#475569',

            // Линии и стрелки
            lineColor: '#06b6d4',
            signalColor: '#e2e8f0',
            signalTextColor: '#ffffff',

            // Стили для группировок (subgraphs/clusters)
            clusterBkg: '#1e293b', // Фон подграфа
            clusterBorder: '#06b6d4', // Обводка подграфа

            // Остальные элементы для консистентности
            labelBoxBkgColor: '#1e293b',
            labelTextColor: '#ffffff',
            labelBoxBorderColor: '#06b6d4',
            actorBorder: '#06b6d4',
            actorBkg: '#1e293b',
            actorTextColor: '#ffffff',
            loopTextColor: '#ffffff',
            noteBkgColor: '#1e293b',
            noteTextColor: '#ffffff',
            noteBorderColor: '#06b6d4',
            activationBorderColor: '#06b6d4',
            activationBkgColor: '#334155',
            sequenceNumberColor: '#ffffff',
            classText: '#ffffff',
            classBkg: '#1e293b',
            classBorder: '#06b6d4',
            errorBkgColor: '#450a0a',
            errorTextColor: '#ef4444',
            errorBorderColor: '#ef4444',

            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            fontSize: '14px',
          },
        });

        console.log('Mermaid инициализирован, начинаем рендеринг...');
        if (isMounted) {
          renderDiagram(mermaid);
        }
      } catch (e) {
        console.error('Ошибка инициализации Mermaid:', e);
        if (isMounted) {
          setError('Ошибка инициализации Mermaid');
          setIsLoading(false);
        }
      }
    };

    const renderDiagram = async (mermaid: any) => {
      try {
        console.log(`Рендеринг диаграммы ${id}...`);

        if (!content || content.trim() === '') {
          if (isMounted) {
            setError('Контент диаграммы пустой');
            setIsLoading(false);
          }
          return;
        }

        const { svg } = await mermaid.render(uniqueId, content);

        // Вся лишняя обработка SVG убрана для чистоты
        if (isMounted) {
          setSvgContent(svg);
          setIsLoading(false);
        }
      } catch (e) {
        console.error('Ошибка рендеринга диаграммы:', e);
        if (isMounted) {
          setError(`Ошибка рендеринга: ${e instanceof Error ? e.message : 'Неизвестная ошибка'}`);
          setIsLoading(false);
        }
      }
    };

    const loadDiagram = async () => {
      try {
        console.log('Ожидаем загрузки Mermaid...');
        await waitForMermaid();
        initializeMermaid();
      } catch (e) {
        console.error('Ошибка загрузки Mermaid:', e);
        if (isMounted) {
          setError('Mermaid не загрузился');
          setIsLoading(false);
        }
      }
    };

    loadDiagram();

    // Add isMounted cleanup
    return () => {
      isMounted = false;
    };
  }, [id, content]);

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center min-h-[200px]'>
        <div className='text-center'>
          <div className='text-slate-400 text-sm mb-2'>Рендеринг диаграммы...</div>
          <div className='w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto' />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-full flex justify-center items-center min-h-[200px]'>
        <div className='p-4 border border-orange-500 rounded bg-orange-900/20 max-w-md'>
          <p className='text-orange-400 text-sm font-semibold mb-2'>Mermaid недоступен</p>
          <p className='text-orange-300 text-xs mb-3'>
            Диаграмма не может быть отрендерена. Показан код диаграммы.
          </p>
          <details className='mb-2'>
            <summary className='text-orange-300 text-xs cursor-pointer'>
              Показать код диаграммы
            </summary>
            <pre className='text-xs text-orange-200 bg-orange-900/30 p-2 rounded overflow-auto max-h-32 mt-2'>
              {content}
            </pre>
          </details>
          <p className='text-orange-300 text-xs'>Ошибка: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative w-full h-full group cursor-pointer transition-all duration-200'>
      <div
        className='w-full h-full flex justify-center items-center overflow-hidden rounded border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-200'
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
        <div className='bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-slate-300 border border-slate-700/50'>
          Диаграмма загружена
        </div>
      </div>
    </div>
  );
};

export default MermaidSimple;
