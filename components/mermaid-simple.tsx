"use client";

import { useEffect, useState } from "react"

const MermaidSimple = ({ id, content }: { id: string; content: string }) => {
  const [svgContent, setSvgContent] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
          // Настройки для русского языка и кастомной темы
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          themeVariables: {
            // Основные цвета
            background: '#0f172a',
            primaryColor: '#0f172a',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#06b6d4',
            lineColor: '#94a3b8',
            
            // Цвета для подграфов
            secondaryColor: '#334155',
            tertiaryColor: '#334155',

            // Цвета для текста на связях (ребрах)
            labelBoxBkgColor: 'transparent',
            labelTextColor: '#94a3b8',
            labelBoxBorderColor: 'transparent',

            // Другие элементы для консистентности
            actorBorder: '#06b6d4',
            actorBkg: '#0f172a',
            actorTextColor: '#e2e8f0',
            loopTextColor: '#e2e8f0',
            noteBkgColor: '#1e293b',
            noteTextColor: '#e2e8f0',
            noteBorderColor: '#334155',
            activationBorderColor: '#334155',
            activationBkgColor: '#0f172a',
            sequenceNumberColor: '#e2e8f0',
            
            // Шрифты
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

        // Создаем уникальный ID
        const uniqueId = `mermaid-${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

        console.log("Контент диаграммы:", content.substring(0, 100) + "...")

        // Рендеринг
        const { svg } = await mermaid.render(uniqueId, content)
        console.log(`Диаграмма ${id} отрендерена успешно`)
        
        // Добавляем стили для поддержки русского текста
        const styledSvg = svg.replace(
          '<svg',
          '<svg style="font-family: \'Segoe UI\', \'Roboto\', \'Arial\', sans-serif; font-size: 14px;"'
        )
        
        setSvgContent(styledSvg)
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