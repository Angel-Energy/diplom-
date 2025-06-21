"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MermaidDiagram from "@/components/mermaid-diagram";

export default function ArchitectureDiagramsPage() {
  const diagrams = [
    {
      title: "Системный контекст (C4 Level 1)",
      description: "Диаграмма показывает систему «Сообщение 404» в контексте взаимодействия с игроком, который расследует корпоративный заговор через интерфейс мессенджера. Система работает автономно с возможностью синхронизации через локальный Wi-Fi.",
      conclusion: "Диаграмма демонстрирует автономность системы, что критично для игрового процесса без интернета. Локальная синхронизация обеспечивает приватность данных и соответствие российскому законодательству.",
      mermaidCode: `graph TD
    subgraph "Игрок"
        A["Алексей Соколов<br/>Программист"]
    end
    
    subgraph "Сообщение 404"
        B["Мобильная игра-детектив<br/>Мессенджер-интерфейс<br/>60 мини-игр Python/JS"]
    end
    
    subgraph "Локальная среда"
        C["Ktor-сервер<br/>MySQL через XAMPP<br/>Wi-Fi точка доступа"]
    end
    
    A -->|"Расследует заговор<br/>Решает мини-игры<br/>Анализирует чаты"| B
    B -->|"Синхронизация прогресса<br/>HTTP/TLS 1.2+"| C
    B -.->|"Офлайн-режим<br/>Room + DataStore"| B`,
      category: "Архитектура"
    },
    {
      title: "Контейнерная диаграмма (C4 Level 2)",
      description: "Детализирует контейнеры системы: Android-приложение с Jetpack Compose, Ktor-сервер на Kotlin, MySQL база данных через XAMPP. Показывает протоколы взаимодействия и ответственность каждого контейнера.",
      conclusion: "Диаграмма делает структуру доступной для всех участников команды. Android-приложение обеспечивает офлайн-функциональность, а Ktor-сервер поддерживает синхронизацию и администрирование.",
      mermaidCode: `graph TD
    subgraph "Android-устройство"
        A["Android App<br/>Kotlin + Compose<br/>API 21+"]
    end
    
    subgraph "Локальный сервер"
        B["Ktor Server<br/>Kotlin<br/>Port 8080"]
        C["MySQL Database<br/>XAMPP<br/>phpMyAdmin"]
    end
    
    A -->|"HTTP/HTTPS<br/>JSON API"| B
    B -->|"JDBC<br/>Exposed ORM"| C
    
    A -.->|"Room Database<br/>AES-256 шифрование"| A
    A -.->|"DataStore<br/>Настройки"| A`,
      category: "Архитектура"
    },
    {
      title: "Компонентная диаграмма (C4 Level 3)",
      description: "Показывает внутренние компоненты Android-приложения: Chat UI (мессенджер), MiniGame Engine (60 игр), DataManager (Room + DataStore), NetworkManager (Ktor API). Реализует MVVM архитектуру.",
      conclusion: "Диаграмма упрощает модульное тестирование и расширение функционала. Четкое разделение ответственности между компонентами обеспечивает масштабируемость и поддерживаемость кода.",
      mermaidCode: `graph TD
    subgraph "Presentation Layer"
        A["Chat UI<br/>Jetpack Compose<br/>Мессенджер-интерфейс"]
        B["MiniGame UI<br/>60 игр Python/JS<br/>Интерактивные элементы"]
    end
    
    subgraph "Domain Layer"
        C["ChatViewModel<br/>MVVM Pattern<br/>Бизнес-логика"]
        D["GameViewModel<br/>Управление прогрессом<br/>Состояние игры"]
    end
    
    subgraph "Data Layer"
        E["ChatRepository<br/>Room Database<br/>Локальные сообщения"]
        F["GameRepository<br/>DataStore<br/>Настройки и прогресс"]
        G["NetworkRepository<br/>Ktor API<br/>Синхронизация"]
    end
    
    A --> C
    B --> D
    C --> E
    D --> F
    E --> G
    F --> G`,
      category: "Архитектура"
    },
    {
      title: "Диаграмма слоев (Clean Architecture)",
      description: "Иллюстрирует трехслойную архитектуру: Presentation (UI компоненты), Domain (UseCases, бизнес-логика), Data (репозитории, источники данных). Обеспечивает независимость слоев и тестируемость.",
      conclusion: "Диаграмма обеспечивает Clean Architecture, упрощая тестирование и поддержку. Каждый слой имеет четкую ответственность, что позволяет независимо развивать UI, бизнес-логику и работу с данными.",
      mermaidCode: `graph TD
    subgraph "Presentation Layer"
        A["ChatScreen<br/>GameScreen<br/>SettingsScreen"]
        B["ViewModels<br/>State Management<br/>UI Logic"]
    end
    
    subgraph "Domain Layer"
        C["UseCases<br/>GetChatMessages<br/>StartMiniGame<br/>SaveProgress"]
        D["Entities<br/>Message<br/>GameState<br/>UserProgress"]
    end
    
    subgraph "Data Layer"
        E["Repositories<br/>ChatRepository<br/>GameRepository<br/>NetworkRepository"]
        F["Data Sources<br/>Room Database<br/>DataStore<br/>Ktor API"]
    end
    
    A --> B
    B --> C
    C --> D
    C --> E
    E --> F`,
      category: "Архитектура"
    },
    {
      title: "Диаграмма развертывания",
      description: "Показывает физическое развертывание компонентов: Android-приложение на устройствах игроков, Ktor-сервер и MySQL на локальном ноутбуке с Wi-Fi точкой доступа. Включает сетевую топологию.",
      conclusion: "Диаграмма важна для DevOps и системных администраторов. Локальное развертывание обеспечивает приватность данных, соответствие законодательству и автономность игрового процесса.",
      mermaidCode: `graph TD
    subgraph "Игроки (Android-устройства)"
        A1["Android Phone 1<br/>192.168.1.101"]
        A2["Android Phone 2<br/>192.168.1.102"]
        A3["Android Phone 3<br/>192.168.1.103"]
    end
    
    subgraph "Локальный сервер (Ноутбук)"
        B["Ktor Server<br/>192.168.1.100:8080<br/>Kotlin Application"]
        C["MySQL Database<br/>localhost:3306<br/>XAMPP"]
        D["phpMyAdmin<br/>localhost/phpmyadmin<br/>Web Interface"]
        E["Wi-Fi AP<br/>Message404-Dev<br/>WPA2 Security"]
    end
    
    A1 -->|"Wi-Fi"| E
    A2 -->|"Wi-Fi"| E
    A3 -->|"Wi-Fi"| E
    E --> B
    B --> C
    D --> C`,
      category: "Архитектура"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Архитектурные диаграммы
        </h1>
        <p className="text-xl text-slate-300">
          {diagrams.length} диаграмм архитектуры системы «Сообщение 404»
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            C4 Model
          </Badge>
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            Clean Architecture
          </Badge>
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            MVVM
          </Badge>
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            Deployment
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">О архитектурных диаграммах</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm space-y-2">
            <span>• C4 модель обеспечивает понимание системы на разных уровнях абстракции</span><br/>
            <span>• Clean Architecture гарантирует независимость слоев и тестируемость</span><br/>
            <span>• MVVM паттерн обеспечивает разделение UI и бизнес-логики</span><br/>
            <span>• Локальное развертывание обеспечивает приватность и автономность</span><br/>
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
  );
}
