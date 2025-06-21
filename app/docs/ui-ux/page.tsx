"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MermaidDiagram from "@/components/mermaid-diagram"
import { Smartphone, Palette, Navigation, Eye, Zap, Maximize2, X } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function UiUxPage() {
  const [expandedDiagram, setExpandedDiagram] = useState<{ mermaidCode: string; title: string } | null>(null)

  const diagrams = [
    {
      title: "Навигационный граф",
      description:
        "Эта диаграмма — дорожная карта для пользователя 'Сообщение 404'. Она показывает все экраны и переходы между ними: от главного меню до экрана чата и настроек. Для UI/UX дизайнеров это основной инструмент для проектирования интуитивно понятной и логичной навигации в приложении.",
      mermaidCode: `graph TD
    A[Главный экран] --> B[Экран чата]
    A --> C[Настройки]
    B --> A
    C --> A`,
      category: "UI/UX"
    },
    {
      title: "Компонентная иерархия",
      description:
        "Для frontend-разработчиков 'Сообщение 404' эта диаграмма — ключ к пониманию структуры UI. Она показывает, как экраны строятся из переиспользуемых компонентов Jetpack Compose: от Scaffold до кастомных Button и MessageBubble. Это ускоряет разработку и обеспечивает консистентность интерфейса.",
      mermaidCode: `graph TD
    A[Screen] --> B(Scaffold)
    B --> C(TopAppBar)
    B --> D(MessageList)
    D --> E(MessageBubble)
    B --> F(InputBar)`,
      category: "UI/UX"
    },
    {
      title: "Диаграмма состояний UI",
      description:
        "Эта диаграмма важна для обеспечения качественного UX в 'Сообщение 404'. Она показывает все состояния экрана чата: загрузка, отображение сообщений, ввод текста, отправка, ошибка. Правильная реализация этих состояний (например, показ скелетонов при загрузке) делает интерфейс отзывчивым и понятным.",
      mermaidCode: `stateDiagram-v2
    [*] --> Loading
    Loading --> Idle : Сообщения загружены
    Idle --> Typing : Пользователь печатает
    Typing --> Idle : Сообщение отправлено
    Idle --> Error : Ошибка отправки
    Error --> Idle : Повторная попытка`,
      category: "UI/UX"
    },
  ]

  const designPrinciples = [
    {
      title: "Тёмная тема",
      icon: Eye,
      color: "text-cyan-400",
      description: "Основной фон #121212, акценты #BB86FC для комфорта глаз",
    },
    {
      title: "Портретный режим",
      icon: Smartphone,
      color: "text-purple-400",
      description: "Оптимизация под экраны 720p+ в вертикальной ориентации",
    },
    {
      title: "Плавные анимации",
      icon: Zap,
      color: "text-cyan-400",
      description: "60 FPS анимации появления сообщений и переходов",
    },
    {
      title: "Интуитивная навигация",
      icon: Navigation,
      color: "text-purple-400",
      description: "Jetpack Navigation с минимальной кривой обучения",
    },
  ]

  // Макеты приложения с простыми SVG
  const mockups = [
    {
      title: "Экран чата - Светлая тема",
      svg: (
        <svg
          viewBox="0 0 320 568"
          className="w-full h-auto rounded-lg border bg-white"
        >
          <rect width="320" height="568" fill="#FFFFFF" />
          <rect x="10" y="10" width="300" height="40" fill="#F0F0F0" />
          <text
            x="160"
            y="35"
            textAnchor="middle"
            fill="#000000"
            fontSize="16"
          >
            Елена
          </text>
          <rect x="10" y="60" width="220" height="40" rx="10" fill="#E0E0E0" />
          <text x="20" y="85" fill="#000000" fontSize="14">
            Привет! Как дела?
          </text>
          <rect
            x="90"
            y="110"
            width="220"
            height="40"
            rx="10"
            fill="#007AFF"
          />
          <text x="100" y="135" fill="#FFFFFF" fontSize="14">
            Привет, все хорошо!
          </text>
          <rect x="10" y="518" width="300" height="40" fill="#F0F0F0" />
          <text x="20" y="543" fill="#8E8E93" fontSize="14">
            Написать сообщение...
          </text>
        </svg>
      ),
    },
    {
      title: "Экран чата - Темная тема",
      svg: (
        <svg
          viewBox="0 0 320 568"
          className="w-full h-auto rounded-lg border border-slate-700 bg-slate-900"
        >
          <rect width="320" height="568" fill="#1C1C1E" />
          <rect x="10" y="10" width="300" height="40" fill="#2C2C2E" />
          <text
            x="160"
            y="35"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="16"
          >
            Елена
          </text>
          <rect x="10" y="60" width="220" height="40" rx="10" fill="#3A3A3C" />
          <text x="20" y="85" fill="#FFFFFF" fontSize="14">
            Привет! Как дела?
          </text>
          <rect
            x="90"
            y="110"
            width="220"
            height="40"
            rx="10"
            fill="#0A84FF"
          />
          <text x="100" y="135" fill="#FFFFFF" fontSize="14">
            Привет, все хорошо!
          </text>
          <rect x="10" y="518" width="300" height="40" fill="#2C2C2E" />
          <text x="20" y="543" fill="#8E8E93" fontSize="14">
            Написать сообщение...
          </text>
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          UI/UX дизайн
        </h1>
        <p className="text-xl text-slate-300">
          Пользовательский интерфейс и опыт взаимодействия с игрой "Сообщение 404"
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Тёмная тема
          </Badge>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Jetpack Compose
          </Badge>
          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            60 FPS анимации
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {designPrinciples.map((principle, index) => {
          const Icon = principle.icon
          return (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon className={`h-6 w-6 mr-3 ${principle.color}`} />
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">{principle.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Макеты приложения */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Мокапы интерфейса</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((mockup, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 flex flex-col">
              <CardHeader>
                <CardTitle className="text-white text-lg">{mockup.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <div className="bg-slate-900 p-2 rounded-lg w-full">
                  {mockup.svg}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Palette className="h-6 w-6 mr-3 text-cyan-400" />
            Цветовая схема
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Основные цвета</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-slate-900 rounded border border-slate-600"></div>
                  <span className="text-slate-300 text-sm">#121212 - Основной фон</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-slate-800 rounded border border-slate-600"></div>
                  <span className="text-slate-300 text-sm">#1F1F1F - Карточки</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Акцентные цвета</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                  <span className="text-slate-300 text-sm">#06B6D4 - Основной акцент</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded"></div>
                  <span className="text-slate-300 text-sm">#BB86FC - Вторичный акцент</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">UI/UX диаграммы</h2>
        <div className="space-y-8">
          {diagrams.map((diagram, index) => (
            <MermaidDiagram
              key={index}
              title={diagram.title}
              description={diagram.description}
              mermaidCode={diagram.mermaidCode}
              category={diagram.category}
            />
          ))}
        </div>
      </div>

      {/* Модальное окно для развернутой диаграммы */}
      <Dialog open={!!expandedDiagram} onOpenChange={() => setExpandedDiagram(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center justify-between">
              <span>{expandedDiagram?.title}</span>
              <button
                onClick={() => setExpandedDiagram(null)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogTitle>
          </DialogHeader>
          <div className="bg-slate-900 p-6 rounded-lg">
            {expandedDiagram && (
              <MermaidDiagram
                title={expandedDiagram.title}
                description="Развернутая диаграмма"
                mermaidCode={expandedDiagram.mermaidCode}
                category="UI/UX"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
