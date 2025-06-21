"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MermaidDiagram from "@/components/mermaid-diagram"

export default function DynamicDiagramsPage() {
  const dynamicDiagrams = [
    {
      title: "Последовательность игрового процесса",
      description: "Диаграмма показывает последовательность игрового процесса: Запуск → Авторизация → Загрузка дня → Получение сообщений → Диалог → Выбор → Мини-игра → Сохранение → Синхронизация. Мессенджер-интерфейс обеспечивает погружение.",
      conclusion: "Диаграмма помогает разработчикам реализовать основной игровой цикл, а QA — тестировать последовательность действий. Геймдизайнеры используют для планирования пользовательского опыта.",
      mermaid: `sequenceDiagram
    participant P as Игрок
    participant A as Android App
    participant R as Room DB
    participant K as Ktor Server
    participant M as MySQL
    
    P->>A: Запуск приложения
    A->>A: Генерировать анонимный userId
    A->>K: POST /auth {userId}
    K->>M: Создать запись пользователя
    K->>A: Возвратить токен
    
    A->>R: Загрузить прогресс дня
    A->>K: GET /messages {day}
    K->>M: Получить сообщения
    K->>A: Возвратить чаты
    
    P->>A: Выбор ответа в диалоге
    A->>R: Сохранить выбор локально
    A->>A: Запустить мини-игру
    
    P->>A: Решение мини-игры
    A->>R: Сохранить результат
    A->>K: POST /sync {progress}
    K->>M: Обновить прогресс
    K->>A: Подтверждение синхронизации`,
    },
    {
      title: "Состояния игрового процесса",
      description: "Показывает состояния игрового процесса: Загрузка → Главное меню → Мессенджер → Диалог → Выбор → Мини-игра → Сохранение → Синхронизация → Офлайн. Обеспечивает плавные переходы между сценами.",
      conclusion: "Диаграмма улучшает UX, помогая разработчикам реализовать навигацию между состояниями. QA тестируют переходы, а геймдизайнеры планируют пользовательский опыт.",
      mermaid: `stateDiagram-v2
    [*] --> Загрузка : Запуск приложения
    Загрузка --> Главное_меню : Данные загружены
    Загрузка --> Ошибка_загрузки : Ошибка
    
    Главное_меню --> Мессенджер : Выбор дня
    Мессенджер --> Диалог : Получение сообщения
    Диалог --> Выбор : Появление вариантов ответа
    
    Выбор --> Мини_игра : Выбор сделан
    Выбор --> Диалог : Продолжение диалога
    
    Мини_игра --> Сохранение : Игра завершена
    Сохранение --> Синхронизация : Wi-Fi доступен
    Сохранение --> Офлайн : Нет Wi-Fi
    
    Синхронизация --> Мессенджер : Успешная синхронизация
    Синхронизация --> Ошибка_синхронизации : Ошибка
    Офлайн --> Мессенджер : Восстановление Wi-Fi
    
    Ошибка_загрузки --> [*] : Закрытие приложения
    Ошибка_синхронизации --> Офлайн : Переход в офлайн`,
    },
    {
      title: "Активность мини-игры",
      description: "Описывает активность мини-игры: Запуск → Загрузка контента → Отображение задачи → Ввод решения → Валидация → Результат → Сохранение прогресса. Поддерживает Python, JavaScript и логические задачи.",
      conclusion: "Диаграмма помогает разработчикам реализовать интерактивные мини-игры, а QA — тестировать игровой процесс. Геймдизайнеры используют для планирования сложности и образовательной ценности.",
      mermaid: `graph TD
    A[Запуск мини-игры] --> B[Загрузка контента<br/>Python/JS код]
    B --> C[Отображение задачи<br/>Интерфейс игры]
    C --> D[Ввод решения<br/>Код/Логика]
    D --> E{Валидация решения}
    
    E -->|Правильно| F[Успешный результат<br/>+1 к прогрессу]
    E -->|Неправильно| G[Ошибка<br/>Подсказка]
    
    F --> H[Сохранение прогресса<br/>Room + DataStore]
    G --> D
    
    H --> I[Синхронизация<br/>Ktor API]
    I --> J[Возврат в мессенджер<br/>Следующая сцена]`,
    },
    {
      title: "Временная диаграмма синхронизации",
      description: "Показывает временные характеристики синхронизации: Локальное сохранение (мгновенно) → Проверка Wi-Fi (100мс) → Отправка данных (500мс) → Обработка сервером (200мс) → Ответ (300мс). Обеспечивает отзывчивость.",
      conclusion: "Диаграмма помогает разработчикам оптимизировать производительность синхронизации, а QA — тестировать временные характеристики. Администраторы используют для настройки сервера.",
      mermaid: `sequenceDiagram
    participant A as Android
    participant R as Room
    participant W as Wi-Fi
    participant K as Ktor
    participant M as MySQL
    
    Note over A,R: Локальное сохранение
    A->>R: Сохранить прогресс
    R-->>A: Подтверждение (0мс)
    
    Note over A,W: Проверка соединения
    A->>W: Проверить Wi-Fi
    W-->>A: Статус (100мс)
    
    Note over A,K: Отправка данных
    A->>K: POST /sync {data}
    K->>M: Обновить БД
    M-->>K: Подтверждение (200мс)
    K-->>A: JSON ответ (300мс)
    
    Note over A: Общее время: 1100мс
    Note over A: Цель: < 2000мс`,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Динамические
        </h1>
        <p className="text-xl text-slate-300">4 диаграммы, описывающие Sequence, State, Activity и Timing для проекта «Сообщение 404».</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            Sequence
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            State
          </Badge>
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Activity
          </Badge>
          <Badge variant="outline" className="bg-lime-500/10 text-lime-400 border-lime-500/20">
            Timing
          </Badge>
        </div>
      </div>

      <div className="space-y-8">
        {dynamicDiagrams.map((diagram, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">{diagram.title}</CardTitle>
                <Badge variant="outline" className="bg-lime-500/10 text-lime-400 border-lime-500/20">
                  Динамические
                </Badge>
              </div>
              <p className="text-slate-400 text-sm">{diagram.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <MermaidDiagram
                title={diagram.title}
                mermaidCode={diagram.mermaid}
                description=""
                category="Динамические"
              />
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Вывод:</h4>
                <p className="text-sm text-slate-300">{diagram.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
