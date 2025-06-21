import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  FileText,
  BarChart3Icon as Diagram3,
  Code,
  Gamepad2,
  Palette,
  Server,
  TestTube,
  MapPin,
  Scale,
} from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const sections = [
    {
      title: "Введение",
      description: "Обзор проекта и цели документации",
      icon: BookOpen,
      href: "/docs/introduction",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      title: "Общие сведения",
      description: "Основная информация о игре",
      icon: FileText,
      href: "/docs/overview",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Архитектура системы",
      description: "C4 диаграммы, компоненты, развертывание",
      icon: Diagram3,
      href: "/docs/architecture",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      title: "API Reference",
      description: "OpenAPI 3.0 спецификация",
      icon: Code,
      href: "/docs/api",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Игровые механики",
      description: "Game Loop, прогрессия, выборы",
      icon: Gamepad2,
      href: "/docs/game-mechanics",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      title: "UI/UX",
      description: "User Flow, навигация, состояния UI",
      icon: Palette,
      href: "/docs/ui-ux",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Инфраструктура",
      description: "Топология, безопасность, бэкапы",
      icon: Server,
      href: "/docs/infrastructure",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      title: "QA тестирование",
      description: "Чеклисты, автотесты, метрики",
      icon: TestTube,
      href: "/docs/qa",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "ROADMAP",
      description: "Планы развития проекта",
      icon: MapPin,
      href: "/docs/roadmap",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      title: "Юридика",
      description: "MIT License, Terms, Privacy",
      icon: Scale,
      href: "/docs/legal",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Документация
        </h1>
        <p className="text-xl text-slate-300">
          Полная техническая документация мобильной игры "Сообщение 404" - текстового квеста в жанре психологического
          детектива для Android
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            60 мини-игр
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Kotlin + Compose
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            MVVM + Clean Architecture
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <Link key={index} href={section.href}>
              <Card
                className={`bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-200 hover:scale-105 ${section.color}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6" />
                    <CardTitle className="text-white">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{section.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Быстрый старт</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-cyan-400 font-semibold">1. Изучите игровые механики</h4>
            <p className="text-slate-300 text-sm">
              Начните с раздела "Игровые механики" для понимания чат-интерфейса и мини-игр
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-purple-400 font-semibold">2. Настройте окружение</h4>
            <p className="text-slate-300 text-sm">Android Studio + XAMPP для Ktor-сервера и MySQL</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-cyan-400 font-semibold">3. Просмотрите все 42 диаграммы</h4>
            <p className="text-slate-300 text-sm">
              Mermaid.js диаграммы покрывают архитектуру, данные, API и игровые механики
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
