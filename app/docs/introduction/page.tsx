import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Users, Code, Shield } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Введение
        </h1>
        <p className="text-xl text-slate-300">Добро пожаловать в документацию проекта "Сообщение 404"</p>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Gamepad2 className="h-6 w-6 mr-3 text-cyan-400" />О проекте
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Название проекта</h4>
              <p className="text-slate-300">Сообщение 404</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Платформа</h4>
              <p className="text-slate-300">Android (портретный режим)</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Жанр</h4>
              <p className="text-slate-300">Текстовый квест / Психологический детектив / Триллер</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Целевая аудитория</h4>
              <p className="text-slate-300">16+, любители детективов и текстовых квестов</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Цель игры</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">
            Игрок расследует корпоративный заговор через интерфейс мессенджера, анализируя чаты, документы и решая
            мини-игры. Каждый выбор влияет на развитие сюжета и отношения с персонажами.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Основные особенности</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-cyan-400 font-semibold">Реалистичный интерфейс мессенджера</h4>
                <p className="text-slate-300 text-sm">Тёмная тема, пузырьки сообщений, эмодзи</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-purple-400 font-semibold">Ветвящиеся диалоги</h4>
                <p className="text-slate-300 text-sm">Выборы влияют на сюжет и отношения с персонажами</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-cyan-400 font-semibold">60 мини-игр</h4>
                <p className="text-slate-300 text-sm">Поиск ошибок в коде, расшифровка, анализ логов</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h4 className="text-purple-400 font-semibold">Офлайн-режим</h4>
                <p className="text-slate-300 text-sm">Room + DataStore с синхронизацией через Ktor-сервер</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="h-6 w-6 mr-3 text-cyan-400" />
            Персонажи
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {[
              { name: "Алексей Соколов", role: "Программист, главный герой", color: "text-cyan-400" },
              { name: "Максим Журавлёв", role: "Начальник, скрывает правду", color: "text-red-400" },
              { name: "Елена Васильева", role: "Коллега, возможный союзник или предатель", color: "text-purple-400" },
              { name: "Павел Семёнов", role: "Загадочный информатор", color: "text-yellow-400" },
              { name: "Ольга Серебрякова", role: "HR-менеджер, следит за сотрудниками", color: "text-orange-400" },
              { name: "Неизвестный отправитель", role: "Аноним с неясными намерениями", color: "text-gray-400" },
            ].map((character, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                <div>
                  <h4 className={`font-semibold ${character.color}`}>{character.name}</h4>
                  <p className="text-slate-300 text-sm">{character.role}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="h-6 w-6 mr-3 text-purple-400" />
            Технологии
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-6 w-6 mr-3 text-green-400" />
            Безопасность и соответствие
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              152-ФЗ
            </Badge>
            <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              ГОСТ Р 34.12-2015
            </Badge>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              AES-256
            </Badge>
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              TLS 1.2+
            </Badge>
          </div>
          <p className="text-slate-300 text-sm">
            Все упоминания Back4App заменены на локальный Ktor-сервер с MySQL через XAMPP для обеспечения автономности и
            соответствия требованиям российского законодательства.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
