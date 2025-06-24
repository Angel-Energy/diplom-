'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ApiHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
        API диаграммы
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы API и взаимодействия с сервером в системе «Сообщение 404»
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
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        REST API
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        JSON
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Authentication
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Error Handling
      </Badge>
    </div>
  );
}

function ApiDiagrams() {
  const diagrams = [
    {
      title: 'Endpoints Overview',
      description: 'API-эндпоинты, используемые Repository',
      file: '/diagrams/api/endpoints.mmd',
      category: 'API'
    },
    {
      title: 'Auth Sequence',
      description: 'Анонимная авторизация через ViewModel',
      file: '/diagrams/api/auth-sequence.mmd',
      category: 'API'
    },
    {
      title: 'Error Handling Diagram',
      description: 'Обработка ошибок в API через ViewModel',
      file: '/diagrams/api/error-handling.mmd',
      category: 'API'
    },
    {
      title: 'Sync Conflict Resolution',
      description: 'Разрешение конфликтов синхронизации',
      file: '/diagrams/api/sync-conflict-resolution.mmd',
      category: 'API'
    },
    {
      title: 'API States',
      description: 'Состояния API запросов и обработка',
      file: '/diagrams/api/api-states.mmd',
      category: 'API'
    }
  ];

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {diagrams.map((diagram, index) => (
        <Card key={index} className='bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors'>
          <CardHeader>
            <CardTitle className='text-lg text-slate-200'>{diagram.title}</CardTitle>
            <p className='text-sm text-slate-400'>{diagram.description}</p>
          </CardHeader>
          <CardContent>
            <div className='aspect-video bg-slate-900 rounded-lg overflow-hidden'>
              <MermaidDiagram title={diagram.title} description={diagram.description} src={diagram.file} category={diagram.category} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ApiPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <ApiHeader />
      </Suspense>
      <ApiDiagrams />
    </div>
  );
}
