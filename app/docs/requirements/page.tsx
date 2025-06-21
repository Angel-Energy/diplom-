import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield, Smartphone, Database, Users } from "lucide-react"

export default function RequirementsPage() {
  const functionalRequirements = [
    {
      title: "Чат-система",
      icon: Users,
      color: "text-cyan-400",
      requirements: [
        "Реалистичный интерфейс мессенджера с поддержкой текста, эмодзи и файлов",
        "История сообщений с возможностью прокрутки и поиска",
        "Поддержка шифрованных и скрытых сообщений",
        "Имитация набора текста NPC (задержка 0.5–2 сек)",
      ],
    },
    {
      title: "Система выборов",
      icon: CheckCircle,
      color: "text-purple-400",
      requirements: [
        "2–4 варианта ответа в диалогах",
        "Влияние на флаги: доверие (0–100), угроза (0–100), доступ (true/false)",
        "Последствия выборов отражаются в сюжете и концовках",
        "Множественные варианты ответов в диалогах",
      ],
    },
    {
      title: "Мини-игры",
      icon: Zap,
      color: "text-cyan-400",
      requirements: [
        "60 мини-игр (6 на день, 10 дней)",
        "Поиск ошибок в Python-коде",
        "Расшифровка сообщений и анализ логов",
        "Встроенный интерпретатор Python/JS",
      ],
    },
    {
      title: "Прогресс и сохранения",
      icon: Database,
      color: "text-purple-400",
      requirements: [
        "Сохранение прогресса локально в Room",
        "Хранение настроек в DataStore",
        "Синхронизация с MySQL через Ktor-сервер",
        "Поддержка 5 концовок, зависящих от флагов",
      ],
    },
  ]

  const nonFunctionalRequirements = [
    {
      category: "Производительность",
      icon: Zap,
      color: "text-cyan-400",
      requirements: [
        { metric: "Время загрузки сцены", target: "< 300 мс" },
        { metric: "Плавность анимаций", target: "60 FPS" },
        { metric: "Потребление памяти", target: "< 200 МБ на 2 ГБ RAM" },
        { metric: "Время отклика API", target: "< 100 мс" },
      ],
    },
    {
      category: "Безопасность",
      icon: Shield,
      color: "text-purple-400",
      requirements: [
        { metric: "Шифрование локальных данных", target: "AES-256 для Room" },
        { metric: "Защита API-запросов", target: "TLS 1.2+" },
        { metric: "Соответствие стандартам", target: "152-ФЗ, ГОСТ Р 34.12-2015" },
        { metric: "Авторизация", target: "Анонимная (без персональных данных)" },
      ],
    },
    {
      category: "Совместимость",
      icon: Smartphone,
      color: "text-cyan-400",
      requirements: [
        { metric: "Версия Android", target: "API 21+ (Lollipop и выше)" },
        { metric: "Минимальные требования", target: "2 ГБ RAM, экран 720p+" },
        { metric: "Локализация", target: "Русский (основной), английский (опционально)" },
        { metric: "Ориентация экрана", target: "Портретный режим" },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Требования к проекту
        </h1>
        <p className="text-xl text-slate-300">
          Функциональные и нефункциональные требования к мобильной игре "Сообщение 404"
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Функциональные
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Нефункциональные
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Производительность
          </Badge>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Функциональные требования</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {functionalRequirements.map((section, index) => {
            const Icon = section.icon
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon className={`h-6 w-6 mr-3 ${section.color}`} />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Нефункциональные требования</h2>
        <div className="space-y-6">
          {nonFunctionalRequirements.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon className={`h-6 w-6 mr-3 ${category.color}`} />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                        <span className="text-slate-300 text-sm">{req.metric}</span>
                        <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                          {req.target}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Критерии приемки</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Обязательные функции</h4>
              <ul className="space-y-2">
                {[
                  "Все 60 мини-игр работают корректно",
                  "Офлайн-режим с сохранением прогресса",
                  "Синхронизация с сервером при наличии Wi-Fi",
                  "5 различных концовок доступны",
                  "Шифрование данных AES-256",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Критерии производительности</h4>
              <ul className="space-y-2">
                {[
                  "Загрузка сцены менее 300 мс",
                  "Стабильные 60 FPS анимаций",
                  "Работа на устройствах с 2 ГБ RAM",
                  "Потребление памяти менее 200 МБ",
                  "Время отклика API менее 100 мс",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Ограничения и предположения</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-cyan-400 font-semibold">Ограничения</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Только портретный режим экрана</li>
              <li>• Локальная сеть для синхронизации (без интернета)</li>
              <li>• Максимум 10 одновременных подключений к серверу</li>
              <li>• Поддержка только Android (iOS не планируется)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-purple-400 font-semibold">Предположения</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Пользователи имеют базовые знания программирования</li>
              <li>• Устройства поддерживают Wi-Fi подключение</li>
              <li>• Разработка ведется в локальной среде</li>
              <li>• Соответствие российскому законодательству обязательно</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
