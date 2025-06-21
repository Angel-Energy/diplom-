"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Динамический импорт MermaidSimple для избежания проблем с SSR
const MermaidSimple = dynamic(() => import("./mermaid-simple"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex justify-center items-center min-h-[200px]">
      <div className="text-slate-400 text-sm">Загрузка диаграммы...</div>
    </div>
  )
})

interface MermaidDiagramProps {
  title: string
  description: string
  mermaidCode: string
  category: string
  conclusion?: string
}

const MermaidDiagram = ({ 
  title, 
  description, 
  mermaidCode, 
  category, 
  conclusion 
}: MermaidDiagramProps) => {
  const [showCode, setShowCode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mermaidCode)
      console.log("Код скопирован в буфер обмена")
    } catch (err) {
      console.error("Ошибка копирования:", err)
    }
  }

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 transition-all duration-300">
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              {title}
            </h3>
            <span className="inline-block px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded mb-2">
              {category}
            </span>
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded"
            >
              {showCode ? "Скрыть" : "Показать код"}
            </button>
            <button
              onClick={copyToClipboard}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded"
            >
              Копировать
            </button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <div className="w-full min-h-[200px] flex justify-center items-center">
            {isClient ? (
              <MermaidSimple 
                id={`mermaid-${title.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`}
                content={mermaidCode}
              />
            ) : (
              <div className="text-slate-400 text-sm">
                Загрузка диаграммы...
              </div>
            )}
          </div>
        </div>
        
        {showCode && (
          <div className="mt-3 p-3 bg-slate-900/50 rounded border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400 font-medium">Код диаграммы:</span>
              <button
                onClick={() => navigator.clipboard.writeText(mermaidCode)}
                className="px-2 py-1 text-xs bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 rounded border border-cyan-500/30 transition-colors"
                title="Копировать код"
              >
                Копировать
              </button>
            </div>
            <pre className="text-xs text-slate-300 bg-slate-800/50 p-2 rounded overflow-auto max-h-32">
              {mermaidCode}
            </pre>
          </div>
        )}
        
        {conclusion && (
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold text-sm mb-2">Заключение</h4>
            <p className="text-blue-200 text-sm leading-relaxed">{conclusion}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MermaidDiagram
