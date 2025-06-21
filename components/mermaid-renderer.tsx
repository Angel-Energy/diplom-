"use client";

import { useEffect, useState, useRef } from "react"

const MermaidRenderer = ({ id, content }: { id: string; content: string }) => {
  const [svgContent, setSvgContent] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const mermaidRef = useRef<any>(null)

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        setIsLoading(true)
        setError(null)
        setSvgContent("")
        console.log(`Рендеринг диаграммы ${id}:`, content.substring(0, 100) + "...")
        
        if (!content) {
          console.error("Контент диаграммы пустой")
          setError("Контент диаграммы пустой")
          setIsLoading(false)
          return
        }

        // Динамически импортируем Mermaid
        let mermaid: any
        try {
          const mermaidModule = await import('mermaid')
          mermaid = mermaidModule.default
          console.log("Mermaid загружен локально")
        } catch (importError) {
          console.log("Локальный Mermaid недоступен, пробуем CDN...")
          
          // Fallback на CDN
          mermaid = (window as any).mermaid
          if (!mermaid) {
            // Загружаем Mermaid из CDN
            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11.7.0/dist/mermaid.min.js'
            script.onload = () => {
              console.log("Mermaid загружен из CDN")
              mermaid = (window as any).mermaid
              mermaidRef.current = mermaid
              renderWithMermaid(mermaid)
            }
            script.onerror = () => {
              console.error("Не удалось загрузить Mermaid из CDN")
              setError("Не удалось загрузить Mermaid")
              setIsLoading(false)
            }
            document.head.appendChild(script)
            return
          }
        }

        mermaidRef.current = mermaid
        renderWithMermaid(mermaid)

      } catch (e) {
        console.error("Ошибка рендеринга Mermaid для ID", id, e)
        setError(e instanceof Error ? e.message : "Неизвестная ошибка")
        setIsLoading(false)
      }
    }

    const renderWithMermaid = async (mermaid: any) => {
      try {
        // Инициализация Mermaid
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "dark",
          darkMode: true,
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
        })

        console.log("Mermaid инициализирован, начинаем рендеринг...")

        // Создаем уникальный ID для этой диаграммы
        const uniqueId = `${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

        // Рендеринг SVG
        const { svg } = await mermaid.render(uniqueId, content)
        console.log("SVG сгенерирован, размер:", svg.length)
        
        setSvgContent(svg)
        setIsLoading(false)
        console.log(`Диаграмма ${id} успешно отрендерена`)
      } catch (e) {
        console.error("Ошибка рендеринга с Mermaid:", e)
        setError(e instanceof Error ? e.message : "Неизвестная ошибка")
        setIsLoading(false)
      }
    }

    // Увеличим задержку для надежности
    const timer = setTimeout(renderDiagram, 100)
    
    // Очистка при размонтировании
    return () => {
      clearTimeout(timer)
    }
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
            <a href="https://mermaid.live" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Открыть в Mermaid Live Editor
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      id={id} 
      className="w-full h-full flex justify-center items-center min-h-[200px]"
    >
      {svgContent && (
        <div 
          className="w-full h-full flex justify-center items-center"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  )
}

export default MermaidRenderer; 