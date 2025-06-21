import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, Zap } from "lucide-react"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      phase: "Фаза 1",
      title: "MVP и основные механики",
      status: "completed",
      quarter: "Q1 2024",
      items: [
        { task: "Базовый игровой движок", completed: true },
        { task: "Система аутентификации", completed: true },
        { task: "Основные игровые механики", completed: true },
        { task: "UI/UX дизайн", completed: true },
      ],
    },
    {
      phase: "Фаза 2",
      title: "Расширенный функционал",
      status: "in-progress",
      quarter: "Q2 2024",
      items: [
        { task: "Система достижений", completed: true },
        { task: "Мультиплеер", completed: false },
        { task: "Система рейтингов", completed: false },
        { task: "Социальные функции", completed: false },
      ],
    },
    {
      phase: "Фаза 3",
      title: "Оптимизация и масштабирование",
      status: "planned",
      quarter: "Q3 2024",
      items: [
        { task: "Производительность", completed: false },
        { task: "Аналитика", completed: false },
        { task: "A/B тестирование", completed: false },
        { task: "Локализация", completed: false },
      ],
    },
    {
      phase: "Фаза 4",
      title: "Монетизация и развитие",
      status: "planned",
      quarter: "Q4 2024",
      items: [
        { task: "Система покупок", completed: false },
        { task: "Премиум контент", completed: false },
        { task: "Партнерские интеграции", completed: false },
        { task: "Глобальный запуск", completed: false },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-400" />
      case "planned":
        return <Circle className="h-5 w-5 text-slate-400" />
      default:
        return <Circle className="h-5 w-5 text-slate-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/10 text-green-400 border-green-500/20">Завершено</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">В процессе</Badge>
      case "planned":
        return <Badge className="bg-slate-500/10 text-slate-400 border-slate-500/20">Запланировано</Badge>
      default:
        return <Badge className="bg-slate-500/10 text-slate-400 border-slate-500/20">Неизвестно</Badge>
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ROADMAP
        </h1>
        <p className="text-xl text-slate-300">План развития мобильной игры "Сообщение 404" на 2024 год</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
            <CheckCircle className="h-3 w-3 mr-1" />
            Завершено
          </Badge>
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
            <Clock className="h-3 w-3 mr-1" />В процессе
          </Badge>
          <Badge variant="outline" className="bg-slate-500/10 text-slate-400 border-slate-500/20">
            <Circle className="h-3 w-3 mr-1" />
            Запланировано
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-cyan-400" />
            Общий прогресс
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Общий прогресс проекта</span>
              <span className="text-cyan-400 font-semibold">45%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">8</div>
                <div className="text-xs text-slate-400">Завершено</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">4</div>
                <div className="text-xs text-slate-400">В процессе</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-400">8</div>
                <div className="text-xs text-slate-400">Запланировано</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">4</div>
                <div className="text-xs text-slate-400">Фазы</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {roadmapItems.map((phase, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(phase.status)}
                  <div>
                    <CardTitle className="text-white">
                      {phase.phase}: {phase.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">{phase.quarter}</CardDescription>
                  </div>
                </div>
                {getStatusBadge(phase.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    {item.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Circle className="h-4 w-4 text-slate-400" />
                    )}
                    <span className={`text-sm ${item.completed ? "text-slate-300" : "text-slate-400"}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Прогресс фазы</span>
                  <span className="text-cyan-400 font-semibold">
                    {Math.round((phase.items.filter((item) => item.completed).length / phase.items.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1 rounded-full"
                    style={{
                      width: `${(phase.items.filter((item) => item.completed).length / phase.items.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Ключевые метрики</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100K+</div>
              <div className="text-sm text-slate-400">Целевые пользователи</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.5+</div>
              <div className="text-sm text-slate-400">Рейтинг в App Store</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{"<"}100ms</div>
              <div className="text-sm text-slate-400">Время отклика API</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
