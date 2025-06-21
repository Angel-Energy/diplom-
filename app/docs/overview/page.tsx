import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Database, Target } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Общие сведения
        </h1>
        <p className="text-xl text-slate-300">
          Подробный обзор проекта "Сообщение 404" - мобильной игры-квеста в жанре психологического детектива
        </p>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Target className="h-6 w-6 mr-3 text-cyan-400" />
            Концепция проекта
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-300">
            "Сообщение 404" — это инновационная мобильная игра, которая сочетает элементы текстового квеста,
            психологического детектива и образовательного контента в области программирования. Игра представляет собой
            интерактивный мессенджер, где игрок расследует корпоративный заговор через анализ чатов, документов и
            решение мини-игр на Python/JavaScript.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Уникальные особенности</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Реалистичный интерфейс мессенджера</li>
                <li>• 60 образовательных мини-игр</li>
                <li>• Ветвящийся сюжет с 5 концовками</li>
                <li>• Офлайн-режим с синхронизацией</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Образовательная ценность</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Изучение Python и JavaScript</li>
                <li>• Отладка и поиск ошибок в коде</li>
                <li>• Криптография и безопасность</li>
                <li>• Анализ данных и логов</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Smartphone className="h-6 w-6 mr-3 text-cyan-400" />
              Техническая платформа
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-1">Мобильное приложение</h4>
                <p className="text-slate-300 text-sm">Android (API 21+), портретный режим</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-1">Технологии</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">
                    Kotlin
                  </Badge>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs">
                    Jetpack Compose
                  </Badge>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">
                    MVVM
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-1">Требования</h4>
                <p className="text-slate-300 text-sm">2 ГБ RAM, Android 5.0+</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="h-6 w-6 mr-3 text-purple-400" />
              Серверная часть
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="text-purple-400 font-semibold mb-1">Локальный сервер</h4>
                <p className="text-slate-300 text-sm">Ktor-сервер на Kotlin</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-1">База данных</h4>
                <p className="text-slate-300 text-sm">MySQL через XAMPP</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-1">Администрирование</h4>
                <p className="text-slate-300 text-sm">phpMyAdmin для управления БД</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-1">Безопасность</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                    AES-256
                  </Badge>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">
                    TLS 1.2+
                  </Badge>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs">
                    152-ФЗ
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Игровой процесс</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">10 игровых дней</h4>
              <p className="text-slate-300 text-sm">
                Каждый день содержит 6 мини-игр и 3-5 ключевых выборов, влияющих на развитие сюжета
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">60 мини-игр</h4>
              <p className="text-slate-300 text-sm">
                Поиск ошибок в Python-коде, расшифровка сообщений, анализ логов, логические головоломки
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">5 концовок</h4>
              <p className="text-slate-300 text-sm">
                Финал зависит от накопленных флагов: доверие, угроза, доступ к информации
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-purple-400 font-semibold mb-3">Пример игрового дня:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-300">Утро: Получение сообщений от коллег</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-slate-300">День: Решение 3 мини-игр по программированию</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-300">Вечер: Ключевой выбор, влияющий на отношения</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-slate-300">Ночь: Получение загадочного сообщения</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Архитектурные принципы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-cyan-400 font-semibold">Офлайн-первый подход</h4>
              <p className="text-slate-300 text-sm">
                Игра полностью функциональна без интернета. Данные сохраняются локально в Room и DataStore, а при
                наличии Wi-Fi синхронизируются с Ktor-сервером.
              </p>

              <h4 className="text-purple-400 font-semibold">Clean Architecture</h4>
              <p className="text-slate-300 text-sm">
                Разделение на слои: Presentation (Compose), Domain (UseCase), Data (Repository). Это обеспечивает
                тестируемость и масштабируемость.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-cyan-400 font-semibold">Безопасность данных</h4>
              <p className="text-slate-300 text-sm">
                Локальные данные шифруются AES-256, API-запросы защищены TLS 1.2+. Соответствие требованиям 152-ФЗ и
                ГОСТ Р 34.12-2015.
              </p>

              <h4 className="text-purple-400 font-semibold">Модульность</h4>
              <p className="text-slate-300 text-sm">
                Четкое разделение на пакеты core, data, domain, presentation обеспечивает гибкость разработки и простоту
                тестирования.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
