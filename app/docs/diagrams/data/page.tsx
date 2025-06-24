'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function DataHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>
        Диаграммы данных
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы структуры данных и потоков в системе «Сообщение 404»
      </p>
      <DataBadges />
    </div>
  );
}

function DataBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Room Database
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        MySQL
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        JSON
      </Badge>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Data Sync
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Encryption
      </Badge>
    </div>
  );
}

function DataDiagrams() {
  const diagrams = [
    {
      title: 'ER Diagram',
      description: 'БД: users (ANON_<UUID>), game_states (flags)',
      file: '/diagrams/data/er-diagram.mmd',
      category: 'Данные'
    },
    {
      title: 'Repository Data Flow',
      description: 'Взаимодействие Repository с Room и Ktor',
      file: '/diagrams/data/repository-data-flow.mmd',
      category: 'Данные'
    },
    {
      title: 'JSON Scene Structure',
      description: 'Формат сцены: sceneId, text, choices',
      file: '/diagrams/data/json-scene-structure.mmd',
      category: 'Данные'
    },
    {
      title: 'Flag Conditions Logic',
      description: 'Логика флагов (trust, threat, suspicion)',
      file: '/diagrams/data/flag-conditions-logic.mmd',
      category: 'Данные'
    },
    {
      title: 'DataSync Flow',
      description: 'Процесс синхронизации с Ktor',
      file: '/diagrams/data/data-sync-flow.mmd',
      category: 'Данные'
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

export default function DataPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <DataHeader />
      </Suspense>
      <DataDiagrams />
    </div>
  );
}
