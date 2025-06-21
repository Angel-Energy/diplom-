"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MermaidDiagram from "@/components/mermaid-diagram"

export default function DataDiagramsPage() {
  const diagrams = [
    {
      title: "Концептуальная модель данных",
      description: "Диаграмма описывает основные сущности игры: Игрок (анонимный userId), Игровой день (10 дней), Сообщения (чаты с персонажами), Мини-игры (60 игр Python/JS), Выборы (диалоги), Флаги (доверие, угроза), Концовки (5 финалов). Основа для сюжета детектива.",
      conclusion: "Диаграмма связывает геймдизайн и разработку, помогая сценаристам проектировать ветвящийся сюжет, а разработчикам — структуру базы данных. Обеспечивает разнообразие игрового опыта и офлайн-доступ.",
      mermaidCode: `graph TD
    A[Игрок<br/>userId, name] --> B[Игровой день<br/>1-10 дни]
    B --> C[Сообщения<br/>Чаты с персонажами]
    B --> D[Мини-игры<br/>60 игр Python/JS]
    B --> E[Выборы<br/>Диалоги с NPC]
    E --> F[Флаги<br/>Доверие, угроза]
    F --> G[Концовки<br/>5 финалов]
    
    C --> H[Персонажи<br/>Алексей, Елена, Максим]
    D --> I[Прогресс<br/>Решенные игры]
    E --> J[Сюжетные ветки<br/>Влияние выборов]`,
      category: "Данные"
    },
    {
      title: "Логическая модель данных",
      description: "Детализирует связи между сущностями: Игрок → Игровые дни → Сцены (6 сцен на день), Сообщения (мессенджер), Мини-игры (6 на день), Выборы (влияют на отношения), Флаги (определяют концовку). Поддерживает ветвление сюжета.",
      conclusion: "Диаграмма помогает геймдизайнерам создавать сложные сюжетные линии, а разработчикам — проектировать репозитории и UseCase. QA используют для тестирования влияния выборов на сюжет.",
      mermaidCode: `graph TD
    A[Игрок] --> B[Игровой день]
    B --> C[Сцены<br/>6 сцен на день]
    B --> D[Сообщения<br/>Мессенджер-интерфейс]
    B --> E[Мини-игры<br/>6 игр на день]
    B --> F[Выборы<br/>Диалоги с NPC]
    
    C --> G[Персонажи<br/>Алексей, Елена, Максим,<br/>Павел, Ольга, Неизвестный]
    F --> H[Флаги<br/>Доверие, угроза, доступ]
    H --> I[Концовки<br/>5 различных финалов]
    
    D --> J[Типы сообщений<br/>Текст, эмодзи, файлы]
    E --> K[Типы мини-игр<br/>Python, JavaScript,<br/>Логика, Криптография]`,
      category: "Данные"
    },
    {
      title: "Физическая модель данных (ERD)",
      description: "Описывает таблицы MySQL и Room: users (userId, name), game_days (день, сцена, прогресс), messages (чаты), mini_games (игры), choices (выборы), flags (флаги), endings (концовки). Room зеркалирует структуру с AES-256 шифрованием.",
      conclusion: "Диаграмма — основа для настройки MySQL через XAMPP и Room в Android. Упрощает SQL-запросы, управление через phpMyAdmin и тестирование целостности данных.",
      mermaidCode: `erDiagram
    ИГРОК {
        string userId PK
        string deviceId
        datetime createdAt
        datetime lastSync
    }
    
    ИГРОВОЙ_ДЕНЬ {
        int dayNumber PK
        string title
        string description
        boolean isCompleted
    }
    
    СООБЩЕНИЕ {
        int messageId PK
        int dayNumber FK
        string characterName
        string content
        datetime timestamp
        string messageType
    }
    
    МИНИ_ИГРА {
        int gameId PK
        int dayNumber FK
        string title
        string description
        string gameType
        string difficulty
    }
    
    ВЫБОР {
        int choiceId PK
        int messageId FK
        string text
        string trustLevel
        string consequence
    }
    
    ФЛАГ {
        int flagId PK
        string userId FK
        string flagName
        string flagValue
        datetime updatedAt
    }
    
    КОНЦОВКА {
        int endingId PK
        string title
        string description
        string requirements
    }
    
    ИГРОК ||--o{ ФЛАГ : "имеет"
    ИГРОВОЙ_ДЕНЬ ||--o{ СООБЩЕНИЕ : "содержит"
    ИГРОВОЙ_ДЕНЬ ||--o{ МИНИ_ИГРА : "включает"
    СООБЩЕНИЕ ||--o{ ВЫБОР : "предлагает"
    ИГРОК ||--o{ КОНЦОВКА : "достигает"`,
      category: "Данные"
    },
    {
      title: "Диаграмма потоков данных (DFD)",
      description: "Показывает потоки данных: Игрок делает выбор → Android сохраняет в Room → Синхронизирует с Ktor (при Wi-Fi) → Ktor записывает в MySQL. Обеспечивает офлайн-режим и целостность данных.",
      conclusion: "DFD помогает выявить узкие места в передаче данных и спроектировать эффективную систему кэширования. Критично для хорошего UX в условиях нестабильного Wi-Fi соединения.",
      mermaidCode: `graph TD
    subgraph "Android-устройство"
        A[Игрок делает выбор] --> B[Android App]
        B --> C[Room Database<br/>AES-256 шифрование]
        B --> D[DataStore<br/>Настройки]
    end
    
    subgraph "Локальный сервер"
        E[Ktor Server<br/>HTTP API] --> F[MySQL Database<br/>XAMPP]
        G[phpMyAdmin<br/>Управление БД] --> F
    end
    
    B -->|"Wi-Fi синхронизация<br/>HTTP/TLS 1.2+"| E
    C -->|"Локальное кэширование"| C
    E -->|"JSON ответ"| B`,
      category: "Данные"
    },
    {
      title: "Диаграмма синхронизации данных",
      description: "Описывает процесс синхронизации: Room (локально) ↔ Ktor API ↔ MySQL (сервер). Включает конфликт-резолюцию, версионирование данных, офлайн-режим. Поддерживает соответствие 152-ФЗ.",
      conclusion: "Диаграмма помогает разработчикам спланировать надежную синхронизацию без потерь данных. QA используют для тестирования сценариев потери связи и восстановления.",
      mermaidCode: `graph LR
    subgraph "Локальное хранение"
        A[Room Database<br/>AES-256 шифрование<br/>Локальные данные]
        B[DataStore<br/>Настройки<br/>Прогресс]
    end
    
    subgraph "Сетевое взаимодействие"
        C[Ktor API<br/>HTTP/TLS 1.2+<br/>JSON формат]
        D[Синхронизация<br/>Конфликт-резолюция<br/>Версионирование]
    end
    
    subgraph "Серверное хранение"
        E[MySQL Database<br/>XAMPP<br/>phpMyAdmin]
        F[Резервные копии<br/>Ежедневные бэкапы<br/>CSV/JSON экспорт]
    end
    
    A -->|"Отправка изменений"| C
    A -->|"Резервное копирование"| F
    B -->|"Запрос настроек"| C
    C -->|"Ответ с настройками"| B
    C -->|"Синхронизация"| D
    D -->|"Обновление данных"| E
    D -->|"Конфликт-резолюция"| D
    F -->|"Создание бэкапа"| E
    E -->|"Восстановление"| F`,
      category: "Данные"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Диаграммы данных
        </h1>
        <p className="text-xl text-slate-300">
          {diagrams.length} диаграмм данных системы «Сообщение 404»
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            ERD
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            Потоки данных
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            Синхронизация
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            Безопасность
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">О диаграммах данных</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm space-y-2">
            <span>• ERD модели обеспечивают целостность данных и соответствие 152-ФЗ</span><br/>
            <span>• Потоки данных показывают безопасную передачу через Wi-Fi</span><br/>
            <span>• Синхронизация обеспечивает офлайн-режим и резервное копирование</span><br/>
            <span>• AES-256 шифрование защищает локальные данные</span><br/>
            <span>• Каждая диаграмма содержит практические выводы для разработки</span>
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {diagrams.map((diagram, index) => (
          <MermaidDiagram
            key={index}
            title={diagram.title}
            description={diagram.description}
            mermaidCode={diagram.mermaidCode}
            category={diagram.category}
            conclusion={diagram.conclusion}
          />
        ))}
      </div>
    </div>
  )
} 