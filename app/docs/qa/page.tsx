"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, TestTube, BarChart, FileText, Download, TrendingUp, Shield } from "lucide-react"

export default function QAPage() {
  const testingAreas = [
    {
      title: "UI/UX тестирование",
      icon: TestTube,
      color: "text-cyan-400",
      items: [
        "Тестирование анимаций чата на слабых устройствах (60 FPS)",
        "Проверка адаптивности под разные размеры экранов",
        "Тестирование тёмной темы и читаемости текста",
        "Проверка навигации между экранами",
      ],
    },
    {
      title: "Функциональное тестирование",
      icon: CheckCircle,
      color: "text-purple-400",
      items: [
        "Тестирование офлайн-режима и синхронизации",
        "Проверка сохранения прогресса в Room",
        "Тестирование мини-игр Python/JS интерпретатора",
        "Проверка ветвящихся диалогов и выборов",
      ],
    },
    {
      title: "Производительность",
      icon: BarChart,
      color: "text-cyan-400",
      items: [
        "Время загрузки сцены < 300 мс",
        "Плавность анимаций (60 FPS)",
        "Потребление памяти на устройствах с 2 ГБ RAM",
        "Время отклика API < 100 мс",
      ],
    },
    {
      title: "Безопасность",
      icon: Shield,
      color: "text-purple-400",
      items: [
        "Тестирование шифрования AES-256 для Room",
        "Проверка TLS 1.2+ для API-запросов",
        "Соответствие требованиям 152-ФЗ",
        "Аудит безопасности локальных данных",
      ],
    },
  ]

  const testingTools = [
    { name: "Espresso", purpose: "UI-тесты Android", type: "UI" },
    { name: "JUnit", purpose: "Модульные тесты", type: "Unit" },
    { name: "Mockito", purpose: "Мокирование зависимостей", type: "Mock" },
    { name: "Room Testing", purpose: "Тестирование базы данных", type: "DB" },
    { name: "Ktor Test", purpose: "Тестирование API", type: "API" },
    { name: "Compose Testing", purpose: "Тестирование UI компонентов", type: "UI" },
  ]

  const testMetrics = [
    { metric: "Покрытие кода", target: "> 80%", current: "75%" },
    { metric: "Время загрузки", target: "< 300 мс", current: "250 мс" },
    { metric: "FPS анимаций", target: "60 FPS", current: "58 FPS" },
    { metric: "Успешность синхронизации", target: "> 95%", current: "97%" },
  ]

  // Отчеты тестирования
  const testReports = [
    {
      title: "Отчет функционального тестирования",
      date: "15.01.2024",
      status: "Пройден",
      coverage: "85%",
      issues: 3,
    },
    {
      title: "Отчет производительности",
      date: "12.01.2024",
      status: "Пройден",
      coverage: "92%",
      issues: 1,
    },
    {
      title: "Отчет безопасности",
      date: "10.01.2024",
      status: "В процессе",
      coverage: "78%",
      issues: 5,
    },
    {
      title: "Отчет UI/UX тестирования",
      date: "08.01.2024",
      status: "Пройден",
      coverage: "90%",
      issues: 2,
    },
  ]

  const handleDownloadReport = (reportTitle: string) => {
    // Генерация отчета
    const reportContent = `
ОТЧЕТ ТЕСТИРОВАНИЯ: ${reportTitle}
=====================================

Дата: ${new Date().toLocaleDateString("ru-RU")}
Проект: Сообщение 404
Версия: 1.0.0

РЕЗУЛЬТАТЫ ТЕСТИРОВАНИЯ:
- Всего тестов: 156
- Пройдено: 142
- Провалено: 8
- Пропущено: 6

ПОКРЫТИЕ КОДА: 85%

КРИТИЧЕСКИЕ ОШИБКИ: 0
ВАЖНЫЕ ОШИБКИ: 3
НЕЗНАЧИТЕЛЬНЫЕ ОШИБКИ: 5

РЕКОМЕНДАЦИИ:
1. Исправить ошибки синхронизации
2. Оптимизировать загрузку мини-игр
3. Улучшить обработку ошибок сети

© 2024 QA Team - Сообщение 404
`

    const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${reportTitle.replace(/\s+/g, "_")}_report.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          QA тестирование
        </h1>
        <p className="text-xl text-slate-300">
          Комплексное тестирование мобильной игры "Сообщение 404" для обеспечения качества и стабильности
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Автоматизированное тестирование
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Производительность
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Безопасность
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testingAreas.map((area, index) => {
          const Icon = area.icon
          return (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon className={`h-6 w-6 mr-3 ${area.color}`} />
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Отчеты тестирования */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-cyan-400" />
            Отчеты тестирования
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-cyan-400 font-semibold">{report.title}</h4>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-slate-400">
                    <span>Дата: {report.date}</span>
                    <span>Покрытие: {report.coverage}</span>
                    <span>Проблемы: {report.issues}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    variant="outline"
                    className={
                      report.status === "Пройден"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : report.status === "В процессе"
                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                    }
                  >
                    {report.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownloadReport(report.title)}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Инструменты тестирования</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testingTools.map((tool, index) => (
              <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-cyan-400 font-semibold">{tool.name}</h4>
                  <Badge
                    variant="outline"
                    className={
                      tool.type === "UI"
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        : tool.type === "Unit"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : tool.type === "API"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    }
                  >
                    {tool.type}
                  </Badge>
                </div>
                <p className="text-slate-300 text-sm">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Метрики качества</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div>
                  <h4 className="text-cyan-400 font-semibold">{metric.metric}</h4>
                  <p className="text-slate-400 text-sm">Цель: {metric.target}</p>
                </div>
                <div className="text-right">
                  <div className="text-purple-400 font-semibold">{metric.current}</div>
                  <div className="text-xs text-slate-400">Текущее значение</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Чеклист тестирования</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-cyan-400 font-semibold">Перед релизом</h4>
            <div className="space-y-2">
              {[
                "Все автотесты проходят успешно",
                "Производительность соответствует требованиям",
                "Офлайн-режим работает корректно",
                "Синхронизация с сервером стабильна",
                "Мини-игры выполняются без ошибок",
                "Безопасность данных обеспечена",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-purple-400 font-semibold">Регрессионное тестирование</h4>
            <div className="space-y-2">
              {[
                "Тестирование на разных версиях Android",
                "Проверка на устройствах с разным объемом памяти",
                "Тестирование при нестабильном Wi-Fi",
                "Проверка восстановления после сбоев",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyan-400" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
