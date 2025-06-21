"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Gamepad2, Code, Save } from "lucide-react"

export default function GameMechanicsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Игровые механики
        </h1>
        <p className="text-xl text-slate-300">Подробное описание всех игровых механик проекта "Сообщение 404"</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Чат-интерфейс
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            60 мини-игр
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Ветвящиеся диалоги
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MessageCircle className="h-6 w-6 mr-3 text-cyan-400" />
            Чат-система
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-cyan-400 font-semibold">Основные функции</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Имитация мессенджера с пузырьками сообщений, эмодзи и файлами</li>
              <li>• Игрок получает сообщения от NPC с задержкой (имитация набора текста)</li>
              <li>• История сообщений с возможностью прокрутки</li>
              <li>• Поддержка скрытых сообщений, раскрываемых через мини-игры</li>
              <li>• Поддержка шифрованных сообщений</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-purple-400 font-semibold mb-2">Пример чата:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-cyan-500/20 p-2 rounded-lg max-w-xs">
                <p className="text-slate-300">Алексей, нужно поговорить. Встретимся после работы?</p>
                <p className="text-xs text-slate-400 mt-1">Елена • 14:32</p>
              </div>
              <div className="bg-purple-500/20 p-2 rounded-lg max-w-xs ml-auto">
                <p className="text-slate-300">Конечно. Что случилось?</p>
                <p className="text-xs text-slate-400 mt-1">Вы • 14:35</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Система выборов</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-purple-400 font-semibold">Механика выборов</h4>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• 2–4 варианта ответа в диалогах</li>
              <li>• Выборы влияют на флаги: доверие (0–100), угроза (0–100), доступ к информации (true/false)</li>
              <li>• Последствия выборов влияют на отношения, уровень угрозы и финал</li>
              <li>• Множественные варианты ответов в диалогах</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-cyan-400 font-semibold mb-2">Пример выбора:</h4>
            <p className="text-slate-300 text-sm mb-3">
              Елена просит вас скрыть информацию от начальства. Что вы ответите?
            </p>
            <div className="space-y-2">
              <div className="bg-green-500/10 p-2 rounded border border-green-500/20">
                <p className="text-green-400 text-sm">1. "Конечно, я тебе доверяю" (+20 доверие Елены)</p>
              </div>
              <div className="bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                <p className="text-yellow-400 text-sm">2. "Мне нужно подумать" (нейтрально)</p>
              </div>
              <div className="bg-red-500/10 p-2 rounded border border-red-500/20">
                <p className="text-red-400 text-sm">3. "Я должен сообщить начальству" (-30 доверие, +15 угроза)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="h-6 w-6 mr-3 text-purple-400" />
            Мини-игры
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Типы мини-игр</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Поиск ошибок в Python-коде</li>
                <li>• Расшифровка сообщений</li>
                <li>• Анализ логов</li>
                <li>• Логические головоломки</li>
                <li>• Проверка целостности кода</li>
                <li>• Диалоговые задачи</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Реализация</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 60 мини-игр (6 на день)</li>
                <li>• Встроенный Python/JS интерпретатор</li>
                <li>• Интеграция с основным сюжетом</li>
                <li>• Влияние результатов на прогресс</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-cyan-400 font-semibold mb-2">Пример мини-игры:</h4>
            <p className="text-slate-300 text-sm mb-3">Найдите ошибку в коде расшифровки:</p>
            <pre className="bg-slate-800 p-3 rounded text-sm text-slate-300 overflow-x-auto">
              {`# Найти ошибку
def decrypt(message):
    result = ""
    for char in message:
        result += chr(ord(char) - 1)  # Ошибка: должно быть +1
    return result`}
            </pre>
            <p className="text-purple-400 text-sm mt-2">Ошибка: для расшифровки нужно прибавлять 1, а не вычитать</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Save className="h-6 w-6 mr-3 text-green-400" />
            Прогресс и концовки
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Структура игры</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 10 игровых дней</li>
                <li>• 6 мини-игр на каждый день</li>
                <li>• 3–5 ключевых выборов в день</li>
                <li>• 5 различных концовок</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Сохранение</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Локальное сохранение в Room</li>
                <li>• Настройки в DataStore</li>
                <li>• Синхронизация с MySQL</li>
                <li>• Офлайн-режим</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="text-green-400 font-semibold mb-2">Примеры концовок:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">"Союзник Елена"</span>
                <span className="text-cyan-400">доверие &gt; 80</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">"Одинокий волк"</span>
                <span className="text-purple-400">доверие &lt; 30, угроза &lt; 50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">"Корпоративный шпион"</span>
                <span className="text-red-400">угроза &gt; 70</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Gamepad2 className="h-6 w-6 mr-3 text-cyan-400" />
            Game Loop
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-300">
              Основной игровой цикл: Загрузка → Рендеринг UI → Обработка ввода → Обновление состояния
            </p>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-purple-400 font-semibold">Производительность</h4>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                  60 FPS
                </Badge>
              </div>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Время загрузки сцены &lt; 300 мс</li>
                <li>• Плавная анимация чата (60 FPS)</li>
                <li>• Оптимизированный рендеринг</li>
                <li>• Поддержка устройств с 2 ГБ RAM</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
