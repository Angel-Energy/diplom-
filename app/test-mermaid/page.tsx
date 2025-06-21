"use client";

import { useEffect, useState } from 'react';
import MermaidDiagram from "@/components/mermaid-diagram"

export default function TestMermaidPage() {
  const testDiagram = {
    title: "Тестовая диаграмма с группировками",
    description: "Диаграмма для тестирования настроек группировок (subgraphs)",
    mermaidCode: `graph TD
    subgraph "Группа 1"
        A[Элемент A] --> B[Элемент B]
        B --> C[Элемент C]
    end
    
    subgraph "Группа 2"
        D[Элемент D] --> E[Элемент E]
        E --> F[Элемент F]
    end
    
    C --> D`,
    category: "Тест",
    conclusion: "Эта диаграмма показывает, как должны отображаться группировки с обводкой и без фона."
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Тест диаграмм с группировками</h1>
      <MermaidDiagram
        title={testDiagram.title}
        description={testDiagram.description}
        mermaidCode={testDiagram.mermaidCode}
        category={testDiagram.category}
        conclusion={testDiagram.conclusion}
      />
    </div>
  )
} 