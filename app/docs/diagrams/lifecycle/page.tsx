'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function LifecycleHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
        Диаграммы жизненного цикла
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы жизненных циклов проекта и игровых сессий «Сообщение 404»
      </p>
      <LifecycleBadges />
    </div>
  );
}

function LifecycleBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
        Project Lifecycle
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Game Session
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Save/Load
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Development
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Deployment
      </Badge>
    </div>
  );
}

function LifecycleDiagrams() {
  const diagrams = [
    {
      title: 'Project Lifecycle',
      description: 'Этапы разработки с фокусом на MVVM',
      file: '/diagrams/lifecycle/project-lifecycle.mmd',
      category: 'Жизненный цикл'
    },
    {
      title: 'Game Day Lifecycle',
      description: 'Цикл дня, управляемый ViewModel',
      file: '/diagrams/lifecycle/game-day-lifecycle.mmd',
      category: 'Жизненный цикл'
    },
    {
      title: 'Session Lifecycle',
      description: 'Сессия: активная → сохранена → завершена',
      file: '/diagrams/lifecycle/session-lifecycle.mmd',
      category: 'Жизненный цикл'
    },
    {
      title: 'Save/Load Flow',
      description: 'Сохранение/загрузка прогресса через ViewModel',
      file: '/diagrams/lifecycle/save-load-flow.mmd',
      category: 'Жизненный цикл'
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

export default function LifecyclePage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <LifecycleHeader />
      </Suspense>
      <LifecycleDiagrams />
    </div>
  );
} 