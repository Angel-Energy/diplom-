"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useRef, useEffect } from "react"
import MermaidDiagram from "@/components/mermaid-diagram"

export default function ArchitecturePage() {
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const modalRef = useRef<HTMLDivElement>(null)

  const diagrams = {
    "system-context": `┌─────────────┐    Wi-Fi     ┌─────────────┐    MySQL    ┌─────────────┐
│   Игрок     │ ──────────── │ Android App │ ─────────── │ Ktor Server │
└─────────────┘              └─────────────┘             └─────────────┘
                                     │                           │
                                     │ Room +                    │
                                     │ DataStore                 │
                                     ▼                           ▼
                             ┌─────────────┐             ┌─────────────┐
                             │   Локальное │             │    MySQL    │
                             │   хранение  │             │  через XAMPP│
                             └─────────────┘             └─────────────┘
                                                                │
                                                                │
                                                         ┌─────────────┐
                                                         │ phpMyAdmin  │
                                                         └─────────────┘`,
    "container": `                    ┌─────────────────────────────┐
                    │         Игрок               │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────▼───────────────┐
                    │    Android Приложение       │
                    │  Kotlin + Jetpack Compose   │
                    └─────────────┬───────────────┘
                                  │ HTTP по Wi-Fi
                    ┌─────────────▼───────────────┐
                    │      Ktor Server            │
                    │    Локальный сервер         │
                    └─────────────┬───────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         ▼                         │
┌───────▼────────┐                              ┌─────────▼────────┐
│ Room + DataStore│                              │ MySQL через XAMPP│
│ Локальное       │                              │ Хранение прогресса│
│ хранение        │                              └─────────┬────────┘
└─────────────────┘                                        │
                                                 ┌─────────▼────────┐
                                                 │   phpMyAdmin     │
                                                 │ Администрирование│
                                                 └──────────────────┘`,
    "component": `┌─────────────────────────────────────────────────────────┐
│                   Android App                           │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Chat UI   │  │ MiniGame    │  │ DataStore   │     │
│  │   Jetpack   │  │ Engine      │  │ Настройки   │     │
│  │   Compose   │  │ Python/JS   │  │             │     │
│  └─────┬───────┘  └─────┬───────┘  └─────────────┘     │
│        │                │                              │
│        │                │          ┌─────────────┐     │
│        │                └─────────▶│    Room     │     │
│        │                           │ Локальное   │     │
│        │                           │ хранение    │     │
│        └──────────────────────────▶│             │     │
│                                    └─────┬───────┘     │
└──────────────────────────────────────────┼─────────────┘
                                           │ Wi-Fi
                                           │ Синхронизация
                              ┌────────────▼────────────┐
                              │      Ktor API           │
                              │      Kotlin             │
                              └────────────┬────────────┘
                                           │
                              ┌────────────▼────────────┐
                              │ MySQL через XAMPP      │
                              │ База данных             │
                              └────────────┬────────────┘
                                           │
                              ┌────────────▼────────────┐
                              │     phpMyAdmin          │
                              │   Управление БД         │
                              └─────────────────────────┘`,
    "layers": `┌─────────────────────────────────────────────────────────┐
│              Presentation Layer                         │
│         Jetpack Compose + ViewModel                     │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│               Domain Layer                              │
│          UseCase + бизнес-логика                        │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                Data Layer                               │
│               Репозитории                               │
└─────────┬─────────────────────────────────────┬─────────┘
          │                                     │
┌─────────▼─────────┐                 ┌─────────▼─────────┐
│  Local Storage    │                 │   Remote API      │
│ Room + DataStore  │                 │   Ktor Server     │
└───────────────────┘                 └─────────┬─────────┘
                                                │
                                      ┌─────────▼─────────┐
                                      │      MySQL        │
                                      │   через XAMPP     │
                                      └───────────────────┘`
  }

  const diagramTitles = {
    "system-context": "Системный контекст (C4 Level 1)",
    "container": "Контейнерная диаграмма (C4 Level 2)",
    "component": "Компонентная диаграмма (C4 Level 3)",
    "layers": "Диаграмма слоев"
  }

  const handleDiagramClick = (diagramKey: string) => {
    setSelectedDiagram(diagramKey)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleCloseModal = () => {
    setSelectedDiagram(null)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom(prev => Math.max(0.5, Math.min(3, prev * delta)))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }

    if (selectedDiagram) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedDiagram])

  const architectureDiagrams = [
    {
      title: "Системный контекст (C4 Level 1)",
      description: "Диаграмма показывает взаимодействие между игроком, приложением и сервером. Это верхнеуровневое представление системы.",
      conclusion: "Показывает границы системы и основные потоки данных.",
      mermaidCode: `graph TD
    A[Игрок] -->|Взаимодействует через Wi-Fi| B(Android App)
    B -->|Синхронизирует прогресс| C(Ktor Server)
    C -->|Хранит данные| D(MySQL)
    D -->|Управляется через| E(phpMyAdmin)`
    },
    {
      title: "Контейнерная диаграмма (C4 Level 2)",
      description: "Детализирует компоненты системы. Показывает, что Android-приложение использует локальную базу данных и взаимодействует с Ktor-сервером.",
      conclusion: "Определяет основные технологические блоки и их взаимодействие.",
      mermaidCode: `graph TD
    subgraph Android-устройство
        A(Android App) -->|Локально| B(Room + DataStore)
    end
    subgraph Локальный сервер
        C(Ktor Server) -->|Хранит| D(MySQL)
        E(phpMyAdmin) -->|Управляет| D
    end
    A -->|HTTP по Wi-Fi| C`
    },
    {
      title: "Компонентная диаграмма (C4 Level 3)",
      description: "Фокусируется на внутреннем устройстве Android-приложения и сервера.",
      conclusion: "Помогает понять внутреннюю структуру каждого компонента.",
      mermaidCode: `graph TD
    subgraph Android App
        UI(Chat UI) --> ViewModel
        ViewModel --> Repository
        Repository --> DB(Room)
        Repository --> API(Ktor Client)
    end
    subgraph Ktor Server
        Controller --> Service
        Service --> DB_Access(Exposed ORM)
        DB_Access --> MySQL
    end
    API --> Controller`
    },
    {
      title: "Диаграмма слоев",
      description: "Иллюстрирует слоеную архитектуру (Clean Architecture) приложения.",
      conclusion: "Разделение на слои обеспечивает гибкость и тестируемость.",
      mermaidCode: `graph TD
    Presentation[Presentation Layer] --> Domain[Domain Layer]
    Domain --> Data[Data Layer]
    Data --> Local(Local Storage)
    Data --> Remote(Remote API)`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Архитектура системы
        </h1>
        <p className="text-xl text-slate-300">Детальное описание архитектуры мобильной игры "Сообщение 404" с использованием модели C4.</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            C4 Model
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Clean Architecture
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            Ktor + MySQL
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Принципы архитектуры</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">MVVM + Clean Architecture</h4>
              <p className="text-slate-300 text-sm">
                Разделение UI (Jetpack Compose) и логики (ViewModel). Слои Presentation, Domain, Data для независимости
                бизнес-логики.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Офлайн-режим</h4>
              <p className="text-slate-300 text-sm">
                Локальное хранение в Room и DataStore, синхронизация с MySQL через Ktor.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Безопасность</h4>
              <p className="text-slate-300 text-sm">
                Шифрование (AES-256, TLS 1.2+), соответствие 152-ФЗ и ГОСТ Р 34.12-2015.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Модульность</h4>
              <p className="text-slate-300 text-sm">Четкое разделение на пакеты core, data, domain, presentation.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8 mt-8">
        {architectureDiagrams.map((diagram, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">{diagram.title}</CardTitle>
              <p className="text-slate-400 text-sm">{diagram.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <MermaidDiagram
                title={diagram.title}
                mermaidCode={diagram.mermaidCode}
                description=""
                category="Архитектура"
              />
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Вывод:</h4>
                <p className="text-sm text-slate-300">{diagram.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Технологический стек</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Frontend</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Kotlin</li>
                <li>• Jetpack Compose</li>
                <li>• Jetpack Navigation</li>
                <li>• MVVM Architecture</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Backend</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Ktor-сервер (Kotlin)</li>
                <li>• MySQL через XAMPP</li>
                <li>• Exposed ORM</li>
                <li>• Room + DataStore</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">DevOps</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• XAMPP (локальная разработка)</li>
                <li>• phpMyAdmin</li>
                <li>• Wi-Fi синхронизация</li>
                <li>• AES-256 шифрование</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Модальное окно для диаграммы */}
      {selectedDiagram && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          onClick={handleCloseModal}
        >
          {/* Заголовок */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-slate-900/95 border-b border-slate-700/50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{diagramTitles[selectedDiagram as keyof typeof diagramTitles]}</h3>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            <div className="text-sm text-slate-400 mt-2">
              Колесико мыши для масштабирования • Перетаскивание для перемещения • ESC для закрытия
            </div>
          </div>

          {/* Контейнер с диаграммой на весь экран */}
          <div 
            className="absolute inset-0 top-20"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
              className="p-6"
            >
              <pre className="text-slate-300 font-mono whitespace-pre text-sm">
                {diagrams[selectedDiagram as keyof typeof diagrams]}
              </pre>
            </div>
          </div>

          {/* Информация о масштабе */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/95 border border-slate-700/50 rounded-lg px-4 py-2">
            <div className="text-sm text-slate-400">
              Масштаб: {Math.round(zoom * 100)}%
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
