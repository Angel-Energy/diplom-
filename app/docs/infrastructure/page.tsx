import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/mermaid-diagram"
import { Server, Shield, Monitor, HardDrive } from "lucide-react"

export default function InfrastructurePage() {
  const infrastructureDiagrams = [
    {
      title: "Сетевая топология",
      description:
        "Локальная Wi-Fi сеть: ноутбук как точка доступа, Android-устройства подключаются для синхронизации с Ktor-сервером и MySQL.",
      mermaid: `graph LR
    A[Ноутбук] -->|Wi-Fi| B[Телефон 1]
    A -->|Wi-Fi| C[Телефон 2]
    A -->|MySQL| D[(game.db)]
    A -->|Ktor| B
    A -->|Ktor| C`,
      conclusion: "Диаграмма упрощает настройку локальной сети для разработки и тестирования.",
    },
    {
      title: "Диаграмма безопасности",
      description: "Многоуровневая защита: AES-256 для Room, TLS 1.2+ для API, управление правами доступа к MySQL.",
      mermaid: `graph TD
    A[Клиент] -->|AES-256| B[Room]
    A -->|TLS 1.2+| C[Ktor Server]
    C -->|MySQL| D[(game.db)]
    D --> E[phpMyAdmin]`,
      conclusion: "Диаграмма обеспечивает соответствие стандартам 152-ФЗ и ГОСТ Р 34.12-2015.",
    },
    {
      title: "Диаграмма мониторинга",
      description: "Мониторинг системы через phpMyAdmin для просмотра данных, логов и состояния базы данных.",
      mermaid: `sequenceDiagram
    participant D as Разработчик
    participant P as phpMyAdmin
    participant M as MySQL
    D->>P: Вход через браузер
    P->>M: SQL-запрос
    M-->>P: Данные
    P-->>D: Визуализация`,
      conclusion: "Диаграмма упрощает администрирование и отладку базы данных.",
    },
    {
      title: "Диаграмма резервного копирования",
      description: "Стратегия бэкапов: ежедневное автоматическое копирование MySQL и ручной экспорт в CSV/JSON.",
      mermaid: `graph LR
    A[MySQL] --> B[Ежедневная копия]
    A --> C[Ручной экспорт CSV/JSON]`,
      conclusion: "Диаграмма минимизирует риск потери данных и обеспечивает восстановление.",
    },
  ]

  const infrastructureComponents = [
    {
      title: "Локальный сервер",
      icon: Server,
      color: "text-cyan-400",
      specs: [
        "Ktor-сервер на Kotlin",
        "HTTP API на порту 8080",
        "Поддержка до 10 подключений",
        "Автоматический перезапуск",
      ],
    },
    {
      title: "База данных",
      icon: HardDrive,
      color: "text-purple-400",
      specs: ["MySQL через XAMPP", "Локальное хранение game.db", "phpMyAdmin для управления", "Ежедневные бэкапы"],
    },
    {
      title: "Безопасность",
      icon: Shield,
      color: "text-cyan-400",
      specs: ["AES-256 шифрование Room", "TLS 1.2+ для API", "Соответствие 152-ФЗ", "Анонимная авторизация"],
    },
    {
      title: "Мониторинг",
      icon: Monitor,
      color: "text-purple-400",
      specs: ["phpMyAdmin веб-интерфейс", "Логи Ktor-сервера", "Мониторинг подключений", "Статистика использования"],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Инфраструктура
        </h1>
        <p className="text-xl text-slate-300">
          Локальная инфраструктура проекта "Сообщение 404" для разработки и тестирования
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Локальная сеть
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            XAMPP + MySQL
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Ktor-сервер
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {infrastructureComponents.map((component, index) => {
          const Icon = component.icon
          return (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon className={`h-6 w-6 mr-3 ${component.color}`} />
                  {component.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {component.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Требования к инфраструктуре</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Аппаратные требования</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Ноутбук с Wi-Fi адаптером</li>
                <li>• Минимум 4 ГБ RAM</li>
                <li>• 10 ГБ свободного места</li>
                <li>• Android-устройства API 21+</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Программные требования</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• XAMPP (Apache, MySQL, PHP)</li>
                <li>• JDK 17 для Ktor-сервера</li>
                <li>• Android Studio для разработки</li>
                <li>• Веб-браузер для phpMyAdmin</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Инфраструктурные диаграммы</h2>
        <div className="space-y-8">
          {infrastructureDiagrams.map((diagram, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{diagram.title}</CardTitle>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                    Инфраструктура
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm">{diagram.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <MermaidDiagram chart={diagram.mermaid} id={`infra-diagram-${index}`} />
                <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Вывод:</h4>
                  <p className="text-sm text-slate-300">{diagram.conclusion}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Инструкции по настройке</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">1. Настройка XAMPP</h4>
              <div className="bg-slate-900/50 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  1. Скачайте и установите XAMPP
                  <br />
                  2. Запустите Apache и MySQL
                  <br />
                  3. Откройте phpMyAdmin (localhost/phpmyadmin)
                  <br />
                  4. Создайте базу данных 'game'
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-purple-400 font-semibold mb-2">2. Запуск Ktor-сервера</h4>
              <div className="bg-slate-900/50 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  cd server
                  <br />
                  ./gradlew run
                  <br /># Сервер запустится на порту 8080
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">3. Настройка Wi-Fi сети</h4>
              <div className="bg-slate-900/50 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  1. Создайте точку доступа на ноутбуке
                  <br />
                  2. Подключите Android-устройства
                  <br />
                  3. Проверьте доступ к 192.168.1.100:8080
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
