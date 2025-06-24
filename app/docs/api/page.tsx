'use client';

import { Suspense } from 'react';
import React from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';

function ApiHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
        API Reference
      </h1>
      <p className='text-xl text-slate-300'>
        Детальное описание API Ktor-сервера с примерами запросов, ответов и интеграции
      </p>
      <ApiBadges />
    </div>
  );
}

function ApiBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Ktor 2.3.x
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Kotlin
      </Badge>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        MySQL
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        JWT
      </Badge>
    </div>
  );
}

function EndpointList({ endpoints }: { endpoints: { title: string; desc: string }[] }) {
  return (
    <div className='space-y-4'>
      {endpoints.map(ep => (
        <div key={ep.title} className='bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold text-cyan-400'>{ep.title}</h3>
          <p className='text-slate-300'>{ep.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ExampleSection({ code, title }: { code: string; title: string }) {
  return (
    <section className='my-6'>
      <h4 className='text-base font-bold text-purple-400 mb-2'>{title}</h4>
      <pre className='bg-slate-900/50 text-slate-200 p-3 rounded overflow-auto text-xs'>
        <code>{code}</code>
      </pre>
    </section>
  );
}

function ApiContent() {
  return (
    <div className='space-y-8'>
      <ApiHeader />
      <EndpointList endpoints={[]} />
      <ExampleSection title='Пример запроса' code={`curl -X GET https://api.example.com/users`} />
    </div>
  );
}

export default function ApiDocs() {
  return (
    <main className="prose mx-auto p-6">
      <h1>API Документация</h1>
      <p>Данный раздел содержит подробную документацию по API проекта "Сообщение 404".</p>

      <h2>Структура API</h2>
      <ul>
        <li>RESTful эндпоинты</li>
        <li>OpenAPI 3.0 спецификация (Swagger)</li>
        <li>JSON-ответы</li>
        <li>Аутентификация через JWT</li>
      </ul>

      <h2>Примеры запросов</h2>
      <pre>
GET /api/v1/messages
Content-Type: application/json
Authorization: Bearer &lt;token&gt;
      </pre>
      <h2>Пример ответа</h2>
      <pre>
{
  "id": 1,
  "text": "Привет, мир!",
  "author": "user1",
  "timestamp": "2024-06-01T12:00:00Z"
}
      </pre>

      <h2>Основные эндпоинты</h2>
      <ul>
        <li><b>GET /api/v1/messages</b> — получить список сообщений</li>
        <li><b>POST /api/v1/messages</b> — создать новое сообщение</li>
        <li><b>GET /api/v1/users</b> — получить список пользователей</li>
        <li><b>POST /api/v1/auth/login</b> — аутентификация пользователя</li>
        <li><b>GET /api/v1/profile</b> — получить профиль текущего пользователя</li>
      </ul>

      <h2>OpenAPI/Swagger</h2>
      <p>Полная спецификация доступна в файле <code>docs/05_API_SPECIFICATION.md</code> и может быть просмотрена через Swagger UI или редактор.</p>
      <a href="/docs/05_API_SPECIFICATION.md" className="text-cyan-600 underline">Открыть спецификацию API</a>

      <h2>Рекомендации для разработчиков</h2>
      <ul>
        <li>Используйте только задокументированные эндпоинты</li>
        <li>Проверяйте коды ошибок и сообщения</li>
        <li>Следуйте рекомендациям по безопасности (JWT, HTTPS)</li>
        <li>Вносите предложения по улучшению API через pull request</li>
      </ul>
    </main>
  );
}
