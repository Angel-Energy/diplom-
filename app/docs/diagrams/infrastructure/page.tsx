"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MermaidDiagram from "@/components/mermaid-diagram";

export default function InfrastructureDiagramsPage() {
  const diagrams = [
    {
      title: "Сетевая топология",
      description: "Показывает локальную сетевую инфраструктуру: Wi-Fi точка доступа (Message404-Dev), Android-устройства игроков (192.168.1.101-103), Ktor-сервер (192.168.1.100:8080), MySQL через XAMPP. Обеспечивает автономность и приватность.",
      conclusion: "Диаграмма помогает системным администраторам настроить локальную сеть, а разработчикам — понять сетевую архитектуру. DevOps используют для планирования развертывания.",
      mermaidCode: `graph TD
    A[Wi-Fi AP<br/>Message404-Dev<br/>192.168.1.1<br/>WPA2 Security] --> B1[Android Phone 1<br/>192.168.1.101]
    A --> B2[Android Phone 2<br/>192.168.1.102]
    A --> B3[Android Phone 3<br/>192.168.1.103]
    A --> B4[Android Phone 4<br/>192.168.1.104]
    A --> B5[Android Phone 5<br/>192.168.1.105]
    
    B1 --> C[Ktor Server<br/>192.168.1.100:8080<br/>Kotlin Application]
    B2 --> C
    B3 --> C
    B4 --> C
    B5 --> C
    
    C --> D[MySQL Database<br/>localhost:3306<br/>XAMPP]
    E[phpMyAdmin<br/>localhost/phpmyadmin<br/>Web Interface] --> D`,
      category: "Инфраструктура"
    },
    {
      title: "Архитектура безопасности",
      description: "Показывает механизмы безопасности: TLS 1.2+ для API-запросов, AES-256 шифрование данных в Room, анонимная авторизация (без персональных данных), WPA2 защита Wi-Fi. Соответствует требованиям 152-ФЗ и ГОСТ Р 34.12-2015.",
      conclusion: "Диаграмма помогает разработчикам реализовать безопасность, а аудиторам — проверить соответствие российскому законодательству. Администраторы используют для настройки защиты данных.",
      mermaidCode: `graph TD
    subgraph "Уровень приложения"
        A[Android App<br/>AES-256 шифрование<br/>Room Database]
        B[Анонимная авторизация<br/>userId без персональных данных]
    end
    
    subgraph "Сетевой уровень"
        C[TLS 1.2+<br/>HTTPS для API]
        D[WPA2 защита<br/>Wi-Fi сети]
    end
    
    subgraph "Серверный уровень"
        E[Ktor Server<br/>Валидация запросов<br/>Rate limiting]
        F[MySQL Database<br/>Локальное хранение<br/>XAMPP]
    end
    
    subgraph "Соответствие"
        G[152-ФЗ<br/>Защита персональных данных]
        H[ГОСТ Р 34.12-2015<br/>Криптографическая защита]
    end
    
    A --> C
    B --> E
    C --> D
    E --> F
    A --> G
    C --> H`,
      category: "Инфраструктура"
    },
    {
      title: "Система мониторинга",
      description: "Описывает мониторинг локальной инфраструктуры: Логи Ktor-сервера (запросы, ошибки), Метрики MySQL (производительность, подключения), phpMyAdmin (управление БД), Wi-Fi мониторинг (подключения). Обеспечивает стабильность работы.",
      conclusion: "Диаграмма помогает администраторам мониторить систему, а разработчикам — отлаживать проблемы. DevOps используют для настройки алертов и обеспечения стабильности.",
      mermaidCode: `graph TD
    subgraph "Мониторинг Ktor-сервера"
        A[Логи запросов<br/>HTTP API calls]
        B[Логи ошибок<br/>Exception handling]
        C[Метрики производительности<br/>Response time]
    end
    
    subgraph "Мониторинг базы данных"
        D[MySQL метрики<br/>Query performance]
        E[phpMyAdmin<br/>Web interface]
        F[Подключения<br/>Active connections]
    end
    
    subgraph "Сетевой мониторинг"
        G[Wi-Fi статус<br/>Connected devices]
        H[Сетевая производительность<br/>Bandwidth usage]
    end
    
    subgraph "Алерты и уведомления"
        I[Сервер недоступен<br/>Email/SMS]
        J[Превышение лимита<br/>10 подключений]
        K[Ошибки базы данных<br/>Log monitoring]
    end
    
    A --> I
    B --> I
    D --> K
    F --> J
    G --> I`,
      category: "Инфраструктура"
    },
    {
      title: "Стратегия резервного копирования",
      description: "Показывает стратегию бэкапов: Ежедневные автоматические копии MySQL через XAMPP, Ручной экспорт в CSV/JSON, Локальное хранение на ноутбуке, Восстановление через phpMyAdmin. Защищает от потери данных игроков.",
      conclusion: "Диаграмма помогает администраторам настроить надежную систему бэкапов, а DevOps — автоматизировать процесс. QA тестируют восстановление данных, обеспечивая надежность.",
      mermaidCode: `graph LR
    subgraph "Источники данных"
        A[MySQL Database<br/>XAMPP<br/>Игровые данные]
        B[Room Database<br/>Android devices<br/>Локальные данные]
    end
    
    subgraph "Автоматические бэкапы"
        C[Ежедневные копии<br/>MySQL dump<br/>2:00 AM]
        D[Автоматическое архивирование<br/>Сжатие данных]
    end
    
    subgraph "Ручные операции"
        E[Экспорт в CSV<br/>Игровые отчеты]
        F[Экспорт в JSON<br/>Аналитика]
    end
    
    subgraph "Хранение"
        G[Локальное хранение<br/>Ноутбук<br/>Backup folder]
        H[Внешний диск<br/>Дополнительная защита]
    end
    
    subgraph "Восстановление"
        I[phpMyAdmin<br/>Web interface]
        J[MySQL restore<br/>Command line]
    end
    
    A --> C
    A --> E
    A --> F
    C --> D
    D --> G
    G --> H
    G --> I
    G --> J`,
      category: "Инфраструктура"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Диаграммы инфраструктуры
        </h1>
        <p className="text-xl text-slate-300">
          {diagrams.length} диаграмм инфраструктуры системы «Сообщение 404»
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Сеть
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Безопасность
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Мониторинг
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Бэкапы
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">О диаграммах инфраструктуры</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm space-y-2">
            <span>• Локальная сетевая инфраструктура обеспечивает автономность и приватность</span><br/>
            <span>• Безопасность соответствует российскому законодательству (152-ФЗ, ГОСТ)</span><br/>
            <span>• Мониторинг обеспечивает стабильность работы системы</span><br/>
            <span>• Резервное копирование защищает от потери данных</span><br/>
            <span>• Каждая диаграмма содержит практические выводы для администраторов</span>
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {diagrams.map((diagram, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">{diagram.title}</CardTitle>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                  Инфраструктура
                </Badge>
              </div>
              <p className="text-slate-400 text-sm">{diagram.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <MermaidDiagram
                title={diagram.title}
                mermaidCode={diagram.mermaidCode}
                description=""
                category="Инфраструктура"
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
  );
}
