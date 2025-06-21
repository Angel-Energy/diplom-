"use client";

import { useEffect, useState } from "react"

const MermaidSimple = ({ id, content }: { id: string; content: string }) => {
  const [svgContent, setSvgContent] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') {
      setError("Компонент должен выполняться в браузере")
      setIsLoading(false)
      return
    }

    const waitForMermaid = () => {
      return new Promise<void>((resolve, reject) => {
        const checkMermaid = () => {
          if ((window as any).mermaid) {
            console.log("Mermaid найден")
            resolve()
          } else {
            console.log("Mermaid еще не загружен, ждем...")
            setTimeout(checkMermaid, 100)
          }
        }
        
        // Ждем максимум 10 секунд
        const timeout = setTimeout(() => {
          reject(new Error("Timeout: Mermaid не загрузился за 10 секунд"))
        }, 10000)
        
        checkMermaid()
        
        // Очищаем timeout при успешной загрузке
        return () => clearTimeout(timeout)
      })
    }

    const initializeMermaid = () => {
      try {
        const mermaid = (window as any).mermaid
        
        if (!mermaid) {
          throw new Error("Mermaid не найден")
        }
        
        console.log("Инициализируем Mermaid...")
        
        // Инициализация с поддержкой русского языка
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "base",
          darkMode: true,
          fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
          fontSize: 14,
          // Настройки для темы как на скриншоте
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          themeVariables: {
            // Финальный стиль по референсам
            background: 'transparent',

            // Основные узлы, участники, заголовки ERD
            primaryColor: '#0f172a',
            primaryBorderColor: '#06b6d4',
            primaryTextColor: '#e2e8f0',

            // Строки в ERD, фон подграфов
            secondaryColor: '#1e293b',
            tertiaryColor: '#1e293b',

            // Линии и стрелки
            lineColor: '#06b6d4',
            signalColor: '#e2e8f0',
            signalTextColor: '#e2e8f0',

            // Стили для группировок (subgraphs/clusters)
            clusterBkg: 'transparent', // Фон подграфа
            clusterBorder: '#06b6d4', // Обводка подграфа

            // Остальные элементы для консистентности
            labelBoxBkgColor: '#0f172a',
            labelTextColor: '#e2e8f0',
            labelBoxBorderColor: 'transparent',
            actorBorder: '#06b6d4',
            actorBkg: '#0f172a',
            actorTextColor: '#e2e8f0',
            loopTextColor: '#e2e8f0',
            noteBkgColor: '#0f172a',
            noteTextColor: '#e2e8f0',
            noteBorderColor: '#06b6d4',
            activationBorderColor: '#06b6d4',
            activationBkgColor: '#1e293b',
            sequenceNumberColor: '#e2e8f0',
            classText: '#e2e8f0',
            classBkg: '#0f172a',
            classBorder: '#06b6d4',
            errorBkgColor: '#450a0a',
            errorTextColor: '#ef4444',
            errorBorderColor: '#ef4444',
            
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            fontSize: '14px'
          }
        })

        console.log("Mermaid инициализирован, начинаем рендеринг...")
        renderDiagram(mermaid)
      } catch (e) {
        console.error("Ошибка инициализации Mermaid:", e)
        setError("Ошибка инициализации Mermaid")
        setIsLoading(false)
      }
    }

    const renderDiagram = async (mermaid: any) => {
      try {
        console.log(`Рендеринг диаграммы ${id}...`)
        
        if (!content || content.trim() === '') {
          setError("Контент диаграммы пустой")
          setIsLoading(false)
          return
        }

        const uniqueId = `mermaid-${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        const { svg } = await mermaid.render(uniqueId, content)
        
        // Вся лишняя обработка SVG убрана для чистоты
        setSvgContent(svg)
        setIsLoading(false)
      } catch (e) {
        console.error("Ошибка рендеринга диаграммы:", e)
        setError(`Ошибка рендеринга: ${e instanceof Error ? e.message : 'Неизвестная ошибка'}`)
        setIsLoading(false)
      }
    }

    const loadDiagram = async () => {
      try {
        console.log("Ожидаем загрузки Mermaid...")
        await waitForMermaid()
        initializeMermaid()
      } catch (e) {
        console.error("Ошибка загрузки Mermaid:", e)
        setError("Mermaid не загрузился")
        setIsLoading(false)
      }
    }

    loadDiagram()
  }, [id, content])

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center min-h-[200px]">
        <div className="text-slate-400 text-sm">Загрузка диаграммы...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center min-h-[200px]">
        <div className="p-4 border border-orange-500 rounded bg-orange-900/20 max-w-md">
          <p className="text-orange-400 text-sm font-semibold mb-2">Mermaid недоступен</p>
          <p className="text-orange-300 text-xs mb-3">Диаграмма не может быть отрендерена. Показан код диаграммы.</p>
          <details className="mb-2">
            <summary className="text-orange-300 text-xs cursor-pointer">Показать код диаграммы</summary>
            <pre className="text-xs text-orange-200 bg-orange-900/30 p-2 rounded overflow-auto max-h-32 mt-2">{content}</pre>
          </details>
          <p className="text-orange-300 text-xs">
            Ошибка: {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex justify-center items-center min-h-[200px]">
      {svgContent && (
        <div 
          className="w-full h-full flex justify-center items-center"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  )
}

export default MermaidSimple; 