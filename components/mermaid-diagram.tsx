"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import MermaidSimple from "./mermaid-simple"

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
  const { toast } = useToast()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mermaidCode)
      toast({
        title: "Код скопирован",
        description: "Код диаграммы скопирован в буфер обмена",
      })
    } catch (err) {
      toast({
        title: "Ошибка копирования",
        description: "Не удалось скопировать код",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full bg-cyber-card rounded-lg p-4 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-cyan-400 mb-2">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <CardDescription className="text-slate-300 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </div>
          <div className="flex gap-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="text-slate-400 hover:text-slate-200"
            >
              {showCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="text-slate-400 hover:text-slate-200"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <div className="mermaid-svg-container w-full min-h-[200px] flex justify-center items-center">
            <MermaidSimple 
              id={`mermaid-${title.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`}
              content={mermaidCode}
            />
          </div>
          
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-2 py-1 text-xs bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 rounded border border-slate-600/50 transition-colors"
              title="Показать/скрыть код диаграммы"
            >
              {showCode ? "Скрыть код" : "Показать код"}
            </button>
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
      </CardContent>
    </Card>
  )
}

export default MermaidDiagram
