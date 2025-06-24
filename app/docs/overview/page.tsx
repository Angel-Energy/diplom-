'use client';

import { Database, Target, Smartphone, Server, Gamepad2, Shield, Zap } from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function OverviewHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
        Обзор системы «Сообщение 404»
      </h1>
      <p className='text-xl text-slate-300'>
        Комплексный анализ архитектуры, функциональности и технических решений мобильной
        игры-детектива
      </p>
      <OverviewBadges />
    </div>
  );
}

function OverviewBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Android + Kotlin
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Clean Architecture
      </Badge>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Ktor + MySQL
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Офлайн-режим
      </Badge>
    </div>
  );
}

function SectionList({ sections }: { sections: { title: string; description: string }[] }) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {sections.map(s => (
        <SectionCard key={s.title} title={s.title} description={s.description} />
      ))}
    </div>
  );
}

function SectionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className='bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg'>
      <h3 className='text-lg font-semibold text-cyan-400 mb-2'>{title}</h3>
      <p className='text-slate-300'>{description}</p>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className='w-full max-w-none'>
      <div className='space-y-8'>
        <OverviewHeader />
        <SectionList sections={[]} />
      </div>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Target className='h-6 w-6 mr-3 text-cyan-400' />
            Системное видение
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Архитектурная философия</h4>
            <p className='text-slate-300 leading-relaxed'>
              «Сообщение 404» построена на принципах Clean Architecture с акцентом на автономность,
              безопасность и соответствие российскому законодательству. Система спроектирована как
              офлайн-первое приложение с возможностью синхронизации через локальный Ktor-сервер.
            </p>
            <p className='text-slate-300 leading-relaxed'>
              Ключевые принципы: модульность, тестируемость, масштабируемость и соответствие
              требованиям 152-ФЗ и ГОСТ Р 34.12-2015.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-purple-400 font-semibold'>Автономность</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Полная функциональность без интернета</li>
                <li>• Локальное хранение в Room Database</li>
                <li>• Шифрование AES-256</li>
                <li>• Автосохранение каждого действия</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-purple-400 font-semibold'>Безопасность</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Соответствие 152-ФЗ</li>
                <li>• ГОСТ Р 34.12-2015</li>
                <li>• TLS 1.2+ для синхронизации</li>
                <li>• JWT аутентификация</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-purple-400 font-semibold'>Масштабируемость</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Clean Architecture</li>
                <li>• Dependency Injection (Koin)</li>
                <li>• Модульная структура</li>
                <li>• Поддержка DLC</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Smartphone className='h-6 w-6 mr-3 text-purple-400' />
            Клиентская архитектура (Android)
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Слой Presentation</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Jetpack Compose UI</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Material 3 Design System</li>
                  <li>• Тёмная тема (#121212)</li>
                  <li>• Адаптивный дизайн (360-1080dp)</li>
                  <li>• Анимации и переходы</li>
                  <li>• Accessibility (TalkBack)</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>ViewModel + State</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• MVVM архитектура</li>
                  <li>• StateFlow для реактивности</li>
                  <li>• Корутины для асинхронности</li>
                  <li>• Обработка жизненного цикла</li>
                  <li>• Сохранение состояния</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Слой Domain</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Use Cases</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• GetSceneUseCase</li>
                  <li>• SaveProgressUseCase</li>
                  <li>• SyncDataUseCase</li>
                  <li>• ValidateChoiceUseCase</li>
                  <li>• ProcessMinigameUseCase</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Entities</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Scene (сцена)</li>
                  <li>• Dialogue (диалог)</li>
                  <li>• Choice (выбор)</li>
                  <li>• Progress (прогресс)</li>
                  <li>• Flag (флаг)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Слой Data</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Локальное хранение</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Room Database (SQLite)</li>
                  <li>• DataStore (Preferences)</li>
                  <li>• AES-256 шифрование</li>
                  <li>• Миграции схемы</li>
                  <li>• Резервное копирование</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Сетевое взаимодействие</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Retrofit + OkHttp</li>
                  <li>• Ktor API клиент</li>
                  <li>• JWT токены</li>
                  <li>• Certificate Pinning</li>
                  <li>• Обработка ошибок</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
            <h5 className='text-cyan-400 font-semibold mb-3'>Пример структуры пакетов</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`com.message404/
├── core/
│   ├── di/                 # Dependency Injection
│   ├── network/            # Сетевые утилиты
│   ├── security/           # Криптография
│   └── utils/              # Общие утилиты
├── data/
│   ├── local/              # Room Database
│   │   ├── dao/           # Data Access Objects
│   │   ├── entities/      # Сущности БД
│   │   └── database/      # Room Database
│   ├── remote/             # API клиент
│   │   ├── api/           # Retrofit интерфейсы
│   │   ├── models/        # DTO модели
│   │   └── interceptors/  # HTTP перехватчики
│   └── repositories/       # Реализации репозиториев
├── domain/
│   ├── entities/           # Бизнес-сущности
│   ├── repositories/       # Интерфейсы репозиториев
│   └── usecases/          # Use Cases
└── presentation/
    ├── screens/            # Экраны приложения
    │   ├── chat/          # Чат-интерфейс
    │   ├── minigame/      # Мини-игры
    │   └── settings/      # Настройки
    ├── components/         # Переиспользуемые компоненты
    ├── viewmodels/        # ViewModels
    └── navigation/        # Навигация`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Server className='h-6 w-6 mr-3 text-cyan-400' />
            Серверная архитектура (Ktor)
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>API Endpoints</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Аутентификация</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• POST /auth/login</li>
                  <li>• POST /auth/refresh</li>
                  <li>• POST /auth/logout</li>
                  <li>• JWT токены (24 часа)</li>
                  <li>• Rate limiting</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Игровые данные</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• GET /scenes/{'{sceneId}'}</li>
                  <li>• GET /scenes/list</li>
                  <li>• POST /progress/sync</li>
                  <li>• GET /progress/{'{userId}'}</li>
                  <li>• POST /minigame/validate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>База данных</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>MySQL через XAMPP</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• База данных: game_db</li>
                  <li>• Порт: 3306</li>
                  <li>• ORM: Exposed</li>
                  <li>• Миграции</li>
                  <li>• Резервное копирование</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Основные таблицы</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• users (пользователи)</li>
                  <li>• scenes (сцены)</li>
                  <li>• dialogues (диалоги)</li>
                  <li>• choices (выборы)</li>
                  <li>• progress (прогресс)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
            <h5 className='text-cyan-400 font-semibold mb-3'>Пример конфигурации Ktor</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`// Application.kt
fun Application.module() {
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
        })
    }
    
    install(Authentication) {
        jwt("auth-jwt") {
            realm = "Message404"
            verifier(JWTConfig.verifier)
            validate { credential ->
                JWTConfig.validateCredential(credential)
            }
        }
    }
    
    install(RateLimit) {
        register(RateLimitName("default")) {
            rateLimiter(limit = 100, refillPeriod = 60.seconds)
        }
    }
    
    configureRouting()
    configureDatabases()
}

// Routes.kt
fun Application.configureRouting() {
    routing {
        route("/api/v1") {
            authRoutes()
            sceneRoutes()
            progressRoutes()
            minigameRoutes()
        }
    }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Gamepad2 className='h-6 w-6 mr-3 text-purple-400' />
            Игровые механики и контент
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Структура контента</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Временная структура</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• 10 игровых дней</li>
                  <li>• 3 сцены в день (утро/день/вечер)</li>
                  <li>• 6 мини-игр в день</li>
                  <li>• 60+ сюжетных путей</li>
                  <li>• 6 уникальных концовок</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Типы контента</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Диалоги с персонажами</li>
                  <li>• Мини-игры по программированию</li>
                  <li>• Логические головоломки</li>
                  <li>• Криптографические задачи</li>
                  <li>• Анализ логов и кода</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Система флагов</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Основные флаги</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Доверие (0-100)</li>
                  <li>• Подозрение (0-100)</li>
                  <li>• Доступ к информации (0-100)</li>
                  <li>• Уровень угрозы (0-100)</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Влияние на сюжет</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Доступность контента</li>
                  <li>• Реакция персонажей</li>
                  <li>• Разблокировка сцен</li>
                  <li>• Определение концовки</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
            <h5 className='text-cyan-400 font-semibold mb-3'>Пример структуры сцены</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`{
  "sceneId": "day1_morning_elena",
  "title": "Утреннее сообщение от Елены",
  "background": "office_morning",
  "dialogues": [
    {
      "id": "msg_001",
      "character": "Елена",
      "message": "Алексей, у нас проблема с сервером...",
      "timestamp": "09:15",
      "type": "incoming",
      "avatar": "elena_avatar.png"
    }
  ],
  "choices": [
    {
      "id": "choice_trust",
      "text": "Расскажи подробнее",
      "flagImpact": {
        "trust": 10,
        "threat": 5
      },
      "nextScene": "day1_morning_trust",
      "requirements": {
        "minTrust": 0,
        "maxThreat": 100
      }
    }
  ],
  "minigame": {
    "id": "game_007",
    "type": "code_review",
    "title": "Найди ошибку в коде",
    "description": "Проверь Python код на наличие синтаксических ошибок",
    "code": "def check_log(log):\\n    for line in log:\\n        if line = \"ERROR\":\\n            return True\\n    return False",
    "solution": "line = \"ERROR\" should be line == \"ERROR\"",
    "difficulty": "medium"
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Shield className='h-6 w-6 mr-3 text-green-400' />
            Безопасность и соответствие
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Законодательные требования</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>152-ФЗ (О персональных данных)</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Локальное хранение данных</li>
                  <li>• Минимальная обработка ПД</li>
                  <li>• Анонимная авторизация</li>
                  <li>• Отсутствие передачи за границу</li>
                  <li>• Право на удаление данных</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>ГОСТ Р 34.12-2015</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Использование криптографических алгоритмов</li>
                  <li>• AES-256 шифрование</li>
                  <li>• TLS 1.2+ для передачи</li>
                  <li>• Безопасное хранение ключей</li>
                  <li>• Аудит безопасности</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Техническая безопасность</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Клиентская безопасность</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Шифрование Room Database</li>
                  <li>• Certificate Pinning</li>
                  <li>• Проверка целостности APK</li>
                  <li>• Защита от отладки</li>
                  <li>• Обфускация кода</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Серверная безопасность</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• JWT аутентификация</li>
                  <li>• Rate limiting</li>
                  <li>• Валидация входных данных</li>
                  <li>• Логирование безопасности</li>
                  <li>• Защита от SQL-инъекций</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
            <h5 className='text-cyan-400 font-semibold mb-3'>Пример JWT токена</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`// Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload (минимальные данные согласно 152-ФЗ)
{
  "sub": "user_123456789",
  "iss": "message404",
  "aud": "players",
  "iat": 1705312200,
  "exp": 1705398600,
  "deviceId": "android_123456789",
  "permissions": ["read", "write"]
}

// Signature
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret_key
)`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Zap className='h-6 w-6 mr-3 text-yellow-400' />
            Производительность и оптимизация
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Клиентская оптимизация</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>UI/UX оптимизация</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• LazyColumn для списков</li>
                  <li>• Кэширование изображений</li>
                  <li>• Оптимизация анимаций</li>
                  <li>• Минимизация перерисовок</li>
                  <li>• Адаптивный дизайн</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>Память и батарея</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Эффективное управление памятью</li>
                  <li>• Оптимизация запросов к БД</li>
                  <li>• Фоновая синхронизация</li>
                  <li>• Минимизация сетевых запросов</li>
                  <li>• Кэширование данных</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-cyan-400 font-semibold text-lg'>Серверная оптимизация</h4>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>База данных</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Индексы для быстрых запросов</li>
                  <li>• Оптимизация SQL запросов</li>
                  <li>• Connection pooling</li>
                  <li>• Кэширование результатов</li>
                  <li>• Партиционирование данных</li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h5 className='text-purple-400 font-semibold'>API оптимизация</h5>
                <ul className='text-slate-300 text-sm space-y-2'>
                  <li>• Пагинация результатов</li>
                  <li>• Сжатие ответов (gzip)</li>
                  <li>• Кэширование HTTP</li>
                  <li>• Асинхронная обработка</li>
                  <li>• Мониторинг производительности</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
            <h5 className='text-cyan-400 font-semibold mb-3'>Метрики производительности</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`// Целевые метрики
{
  "client": {
    "startup_time": "< 3 секунд",
    "frame_rate": "60 FPS",
    "memory_usage": "< 200 МБ",
    "battery_impact": "минимальный",
    "offline_functionality": "100%"
  },
  "server": {
    "response_time": "< 100 мс",
    "throughput": "1000 req/sec",
    "uptime": "99.9%",
    "database_queries": "< 50 мс",
    "concurrent_users": "100+"
  },
  "network": {
    "sync_speed": "< 5 секунд",
    "data_transfer": "оптимизированный",
    "error_rate": "< 1%",
    "retry_mechanism": "автоматический"
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function OverviewPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
        </div>
      }
    >
      <OverviewContent />
    </Suspense>
  );
}
