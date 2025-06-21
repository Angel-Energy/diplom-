"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function DiagramsPage() {
  const diagramCategories = [
    {
      title: "Архитектура",
      short_description: "C4 модель, системный контекст, контейнеры, компоненты, слои",
      count: 5,
      href: "/docs/diagrams/architecture",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
      title: "Данные",
      short_description: "Концептуальная модель, ERD, потоки данных, миграция, репликация",
      count: 5,
      href: "/docs/diagrams/data",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "API",
      short_description: "Ktor эндпоинты, форматы запросов, состояния API, документация",
      count: 4,
      href: "/docs/diagrams/api",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "Динамические",
      short_description: "Игровой процесс, состояния, мини-игры, синхронизация",
      count: 4,
      href: "/docs/diagrams/dynamic",
      badgeColor: "bg-lime-500/10 text-lime-400 border-lime-500/20"
    },
    {
      title: "Игровые механики",
      short_description: "Game Loop, диалоги, мини-игры, прогрессия, концовки",
      count: 6,
      href: "/docs/diagrams/game",
      badgeColor: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "UI/UX",
      short_description: "User Flow, мессенджер-интерфейс, состояния UI, адаптивность",
      count: 4,
      href: "/docs/diagrams/ui",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Инфраструктура",
      short_description: "Локальная сеть, безопасность, мониторинг, резервное копирование",
      count: 4,
      href: "/docs/diagrams/infrastructure",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ]

  const totalDiagrams = diagramCategories.reduce((sum, category) => sum + category.count, 0)
  
  const architecturalDiagrams = diagramCategories
    .filter(cat => ['Архитектура', 'Данные', 'Инфраструктура'].includes(cat.title))
    .reduce((sum, cat) => sum + cat.count, 0)
  
  const functionalDiagrams = diagramCategories
    .filter(cat => ['Игровые механики', 'API', 'UI/UX', 'Динамические'].includes(cat.title))
    .reduce((sum, cat) => sum + cat.count, 0)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Диаграммы проекта
        </h1>
        <p className="text-xl text-slate-300">
          Все {totalDiagrams} диаграмм проекта «Сообщение 404» в текстовом формате с описаниями и выводами
        </p>
        <div className="flex flex-wrap gap-2">
          {diagramCategories.map((category, index) => (
            <Badge key={index} variant="outline" className={category.badgeColor}>
              {category.title}: {category.count}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Общая статистика</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{totalDiagrams}</div>
              <div className="text-sm text-slate-400">Всего диаграмм</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{diagramCategories.length}</div>
              <div className="text-sm text-slate-400">Категорий</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{architecturalDiagrams}</div>
              <div className="text-sm text-slate-400">Архитектурных</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{functionalDiagrams}</div>
              <div className="text-sm text-slate-400">Функциональных</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-3">О диаграммах проекта «Сообщение 404»</h3>
        <p className="text-slate-300 text-sm space-y-2">
          <span>• Все диаграммы созданы специально для мобильной игры-детектива с мессенджер-интерфейсом</span><br/>
          <span>• Учтена специфика проекта: 10 игровых дней, 60 мини-игр, 5 концовок, офлайн-режим</span><br/>
          <span>• Технический стек: Kotlin, Jetpack Compose, MVVM, Ktor, MySQL, XAMPP, Wi-Fi точка доступа</span><br/>
          <span>• Соответствие российскому законодательству: 152-ФЗ, ГОСТ Р 34.12-2015, анонимная авторизация</span><br/>
          <span>• Локальная инфраструктура: автономность, приватность, синхронизация через Wi-Fi</span><br/>
          <span>• Каждая диаграмма содержит практический вывод для разработчиков, QA и геймдизайнеров</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {diagramCategories.map((category, index) => {
          const percentage = totalDiagrams > 0 ? Math.round((category.count / totalDiagrams) * 100) : 0
          return (
            <Link key={index} href={category.href} className="block group">
              <Card className="bg-slate-800/50 border-slate-700/50 h-full group-hover:border-cyan-400 transition-colors flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white group-hover:text-cyan-400">{category.title}</CardTitle>
                    <Badge className={category.badgeColor}>{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-slate-400 text-sm mb-4">{category.short_description}</p>
                  <div className="space-y-2 mt-auto">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-slate-400 text-center">
                      {percentage}% от общего количества
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
