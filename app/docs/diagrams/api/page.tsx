"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MermaidDiagram from "@/components/mermaid-diagram";

export default function ApiDiagramsPage() {
  const diagrams = [
    {
      title: "Диаграмма эндпоинтов Ktor API",
      description: "Диаграмма описывает Ktor-эндпоинты для игры: /auth (анонимная авторизация), /messages (чаты с персонажами), /progress (игровой прогресс), /mini-games (данные мини-игр), /choices (сохранение выборов), /sync (синхронизация). Все запросы используют TLS 1.2+ и JSON формат.",
      conclusion: "Диаграмма упрощает разработку Retrofit-клиента и Ktor-роутов. QA создают тест-кейсы для каждого эндпоинта, а разработчики обеспечивают стабильность API для мессенджер-интерфейса.",
      mermaidCode: `graph TD
    A[Android App] -->|"POST /auth<br/>Анонимная авторизация<br/>userId generation"| B[Ktor Server]
    A -->|"GET /messages/{day}<br/>Получение чатов<br/>JSON response"| B
    A -->|"GET /progress<br/>Сохранение прогресса<br/>Sync data"| B
    A -->|"GET /mini-games/{id}<br/>Данные мини-игр<br/>Game content"| B
    A -->|"POST /choices<br/>Сохранение выборов<br/>Dialog decisions"| B
    A -->|"GET /sync<br/>Синхронизация<br/>Conflict resolution"| B
    
    B -->|"JSON ответ<br/>TLS 1.2+"| A
    B -->|"MySQL<br/>XAMPP"| C[Database]`,
      category: "API"
    },
    {
      title: "Диаграмма состояний API",
      description: "Показывает состояния API: Активен (сервер доступен), Офлайн (нет Wi-Fi), Синхронизация (отправка данных), Ошибка (превышен лимит подключений). Реализует отказоустойчивость для офлайн-режима.",
      conclusion: "Диаграмма улучшает UX, помогая разработчикам реализовать ретраи и уведомления. QA тестируют сценарии потери Wi-Fi, а администраторы настраивают лимиты подключений.",
      mermaidCode: `stateDiagram-v2
    [*] --> Активен : Подключение к Wi-Fi
    Активен --> Синхронизация : Отправка данных
    Синхронизация --> Активен : Успешная синхронизация
    Активен --> Офлайн : Потеря Wi-Fi
    Офлайн --> Активен : Восстановление Wi-Fi
    Активен --> Ошибка : Превышен лимит (10)
    Ошибка --> Активен : Освобождение слота
    Офлайн --> [*] : Закрытие приложения`,
      category: "API"
    },
    {
      title: "Диаграмма форматов данных API",
      description: "Описывает JSON форматы для обмена данными: авторизация (userId), сообщения (чаты), прогресс (дни, сцены), мини-игры (типы, решения), выборы (диалоги). Поддерживает офлайн-режим и синхронизацию.",
      conclusion: "Диаграмма стандартизирует обмен данными между Android и Ktor. Разработчики используют её для создания моделей данных, а QA — для тестирования валидации JSON.",
      mermaidCode: `graph LR
    subgraph "Форматы запросов"
        A["Auth Request<br/>{&quot;userId&quot;: &quot;ANON_123&quot;}"]
        B["Progress Request<br/>{&quot;day&quot;: 1, &quot;scene&quot;: &quot;office&quot;}"]
        C["Choice Request<br/>{&quot;choiceId&quot;: &quot;dialog_1&quot;, &quot;option&quot;: &quot;trust&quot;}"]
    end
    
    subgraph "Форматы ответов"
        D["Auth Response<br/>{&quot;token&quot;: &quot;xyz&quot;, &quot;status&quot;: &quot;ok&quot;}"]
        E["Messages Response<br/>{&quot;messages&quot;: [...]}"]
        F["Progress Response<br/>{&quot;completed&quot;: true, &quot;flags&quot;: {...}}"]
    end
    
    A --> D
    B --> E
    C --> F`,
      category: "API"
    },
    {
      title: "Диаграмма безопасности API",
      description: "Показывает механизмы безопасности: TLS 1.2+ для шифрования, анонимная авторизация (без персональных данных), лимит подключений (10), валидация userId. Соответствует требованиям 152-ФЗ и ГОСТ Р 34.12-2015.",
      conclusion: "Диаграмма обеспечивает безопасность данных и соответствие российскому законодательству. Администраторы настраивают сервер, разработчики реализуют защиту, QA тестируют сценарии атак.",
      mermaidCode: `graph TD
    A[Android App] -->|"TLS 1.2+
    HTTPS"| B[Ktor Server]
    B -->|"Валидация userId
    Анонимная авторизация"| C[Security Layer]
    C -->|"Лимит 10 подключений
    Rate limiting"| D[MySQL Database]
    
    E["Wi-Fi Network
    Message404-Dev
    WPA2 Security"] --> A
    F["phpMyAdmin
    Локальное управление"] --> D`,
      category: "API"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          API диаграммы
        </h1>
        <p className="text-xl text-slate-300">
          {diagrams.length} диаграмм API системы «Сообщение 404»
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Endpoints
          </Badge>
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Форматы
          </Badge>
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Состояния API
          </Badge>
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Безопасность
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">О API диаграммах</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm space-y-2">
            <span>• Ktor API обеспечивает RESTful взаимодействие между Android и сервером</span><br/>
            <span>• TLS 1.2+ и анонимная авторизация соответствуют 152-ФЗ</span><br/>
            <span>• JSON форматы стандартизируют обмен данными</span><br/>
            <span>• Состояния API обеспечивают отказоустойчивость</span><br/>
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
