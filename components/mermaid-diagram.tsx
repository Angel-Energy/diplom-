'use client';

import { Copy, Eye, EyeOff, Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, memo } from 'react';

import { Button } from '@/components/ui/button';
import { handleError } from '@/lib/error-handler';

// Динамический импорт MermaidSimple для избежания проблем с SSR
const MermaidSimple = dynamic(() => import('./mermaid-simple'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-full flex justify-center items-center min-h-[200px] animate-pulse'>
      <div className='text-slate-400 text-sm'>Загрузка диаграммы...</div>
    </div>
  ),
});

// Типы для компонента
interface MermaidDiagramProps {
  title: string;
  description: string;
  mermaidCode?: string;
  src?: string; // путь к .mmd файлу
  category: string;
  conclusion?: string;
  id?: string;
}

interface CopyState {
  copied: boolean;
  timeoutId?: NodeJS.Timeout;
}

// Компонент кнопки копирования
const CopyButton = memo(({ onCopy, className }: { onCopy: () => void; className?: string }) => {
  const [copyState, setCopyState] = useState<CopyState>({ copied: false });

  const handleCopy = useCallback(async () => {
    try {
      await onCopy();
      setCopyState(prev => {
        if (prev.timeoutId) {
          clearTimeout(prev.timeoutId);
        }
        const timeoutId = setTimeout(() => {
          setCopyState({ copied: false });
        }, 2000);
        return { copied: true, timeoutId };
      });
    } catch (error) {
      handleError(error, 'copy to clipboard');
    }
  }, [onCopy]);

  useEffect(() => {
    return () => {
      if (copyState.timeoutId) {
        clearTimeout(copyState.timeoutId);
      }
    };
  }, [copyState.timeoutId]);

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={handleCopy}
      className={cn(
        'p-1.5 sm:p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded transition-all duration-200',
        className
      )}
      aria-label={copyState.copied ? 'Код скопирован' : 'Копировать код'}
    >
      {copyState.copied ? (
        <Check className='h-3 w-3 sm:h-4 sm:w-4 text-green-400' />
      ) : (
        <Copy className='h-3 w-3 sm:h-4 sm:w-4' />
      )}
    </Button>
  );
});

CopyButton.displayName = 'CopyButton';

// Утилита для объединения классов
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Основной компонент MermaidDiagram
const MermaidDiagram = memo(
  ({ title, description, mermaidCode, src, category, conclusion, id }: MermaidDiagramProps) => {
    const [showCode, setShowCode] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(!!src);
    const [hasError, setHasError] = useState(false);
    const [loadedCode, setLoadedCode] = useState<string | undefined>(undefined);
    const [diagramId] = useState(
      () => id || `mermaid-${title.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
    );

    useEffect(() => {
      setIsClient(true);
    }, []);

    // Загружаем .mmd файл, если передан src
    useEffect(() => {
      if (src) {
        setIsLoading(true);
        fetch(src)
          .then(res => {
            if (!res.ok) throw new Error('Ошибка загрузки диаграммы');
            return res.text();
          })
          .then(text => {
            setLoadedCode(text);
            setIsLoading(false);
          })
          .catch(err => {
            setHasError(true);
            setIsLoading(false);
            handleError(err, 'fetch mermaid diagram');
          });
      }
    }, [src]);

    const codeToShow = src ? loadedCode : mermaidCode;

    const copyToClipboard = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(codeToShow || '');
        console.log('Код скопирован в буфер обмена');
      } catch (err) {
        handleError(err, 'copy to clipboard');
      }
    }, [codeToShow]);

    const toggleCodeVisibility = useCallback(() => {
      setShowCode(prev => !prev);
    }, []);

    return (
      <article
        className='w-full bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:border-slate-600/50'
        aria-labelledby={`${diagramId}-title`}
      >
        {/* Header */}
        <header className='mb-3 sm:mb-4'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex-1 min-w-0'>
              <h3
                id={`${diagramId}-title`}
                className='text-base sm:text-lg font-semibold text-cyan-400 mb-2 break-words'
              >
                {title}
              </h3>
              <span
                className='inline-block px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded mb-2'
                aria-label={`Категория: ${category}`}
              >
                {category}
              </span>
              <p className='text-slate-300 text-xs sm:text-sm leading-relaxed'>{description}</p>
            </div>
            <div className='flex gap-1 sm:gap-2 ml-2 sm:ml-4 flex-shrink-0'>
              <Button
                variant='ghost'
                size='sm'
                onClick={toggleCodeVisibility}
                className='p-1.5 sm:p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded transition-all duration-200'
                aria-label={showCode ? 'Скрыть код диаграммы' : 'Показать код диаграммы'}
                aria-expanded={showCode}
              >
                {showCode ? (
                  <EyeOff className='h-3 w-3 sm:h-4 sm:w-4' />
                ) : (
                  <Eye className='h-3 w-3 sm:h-4 sm:w-4' />
                )}
              </Button>
              <CopyButton onCopy={copyToClipboard} />
            </div>
          </div>
        </header>

        {/* Diagram Content */}
        <div className='space-y-3 sm:space-y-4'>
          <div className='relative'>
            <div className='w-full min-h-[200px] flex justify-center items-center'>
              {isClient ? (
                <MermaidSimple id={diagramId} content={codeToShow || ''} title={title} />
              ) : (
                <div className='text-slate-400 text-sm animate-pulse'>Загрузка диаграммы...</div>
              )}

              {isLoading && (
                <div className='absolute inset-0 flex items-center justify-center bg-slate-800/50 rounded'>
                  <div className='text-slate-400 text-sm'>Рендеринг диаграммы...</div>
                </div>
              )}

              {hasError && (
                <div className='absolute inset-0 flex items-center justify-center bg-red-900/20 border border-red-700/50 rounded'>
                  <div className='text-red-400 text-sm text-center'>
                    Ошибка рендеринга диаграммы
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code Section */}
          {showCode && (
            <section
              className='mt-3 p-2 sm:p-3 bg-slate-900/50 rounded border border-slate-700/50'
              aria-label='Код диаграммы'
            >
              <div className='flex justify-between items-center mb-2'>
                <span className='text-xs text-slate-400 font-medium'>Код диаграммы:</span>
                <CopyButton
                  onCopy={copyToClipboard}
                  className='px-2 py-1 text-xs bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 rounded border border-cyan-500/30'
                />
              </div>
              <pre
                className='text-xs text-slate-300 bg-slate-800/50 p-2 rounded overflow-auto max-h-32 font-mono'
                aria-label='Mermaid код'
              >
                <code>{codeToShow}</code>
              </pre>
            </section>
          )}

          {/* Conclusion Section */}
          {conclusion && (
            <section
              className='bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 sm:p-4'
              aria-label='Заключение'
            >
              <h4 className='text-blue-300 font-semibold text-sm mb-2'>Заключение</h4>
              <div
                className='text-blue-200 text-sm leading-relaxed whitespace-pre-line'
                dangerouslySetInnerHTML={{ __html: conclusion }}
              />
            </section>
          )}
        </div>
      </article>
    );
  }
);

MermaidDiagram.displayName = 'MermaidDiagram';

export default MermaidDiagram;
