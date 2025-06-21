"use client";

import { useEffect, useState } from 'react';

export default function TestMermaidPage() {
  const [status, setStatus] = useState<string>('Проверяем...');
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const testMermaid = async () => {
      try {
        setStatus('Ожидаем загрузки Mermaid...');
        
        // Ждем загрузки Mermaid
        let attempts = 0;
        while (!(window as any).mermaid && attempts < 50) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }
        
        if (!(window as any).mermaid) {
          setStatus('Mermaid не загрузился');
          return;
        }
        
        setStatus('Mermaid найден, инициализируем...');
        
        const mermaid = (window as any).mermaid;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "dark",
          darkMode: true,
          fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
          fontSize: 14
        });
        
        setStatus('Рендерим тестовую диаграмму...');
        
        const testCode = `
graph TD
    A[Начало] --> B{Условие?}
    B -->|Да| C[Действие 1]
    B -->|Нет| D[Действие 2]
    C --> E[Конец]
    D --> E
        `.trim();
        
        const { svg } = await mermaid.render('test-diagram', testCode);
        setSvgContent(svg);
        setStatus('Диаграмма отрендерена успешно!');
        
      } catch (error) {
        console.error('Ошибка тестирования Mermaid:', error);
        setStatus(`Ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
      }
    };
    
    testMermaid();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Тест Mermaid</h1>
        
        <div className="bg-slate-800 p-4 rounded-lg mb-6">
          <h2 className="text-xl text-slate-200 mb-2">Статус:</h2>
          <p className="text-slate-300">{status}</p>
        </div>
        
        {svgContent && (
          <div className="bg-slate-800 p-4 rounded-lg">
            <h2 className="text-xl text-slate-200 mb-4">Результат:</h2>
            <div 
              className="flex justify-center"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        )}
        
        <div className="bg-slate-800 p-4 rounded-lg mt-6">
          <h2 className="text-xl text-slate-200 mb-2">Тестовый код:</h2>
          <pre className="text-sm text-slate-300 bg-slate-900 p-3 rounded overflow-auto">
{`graph TD
    A[Начало] --> B{Условие?}
    B -->|Да| C[Действие 1]
    B -->|Нет| D[Действие 2]
    C --> E[Конец]
    D --> E`}
          </pre>
        </div>
      </div>
    </div>
  );
} 