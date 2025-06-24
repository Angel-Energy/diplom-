'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function GameHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
        Игровые диаграммы
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы игровых механик и сюжета «Сообщение 404»
      </p>
      <GameBadges />
    </div>
  );
}

function GameBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Ветвление сюжета
      </Badge>
      <Badge variant='outline' className='bg-pink-500/10 text-pink-400 border-pink-500/20'>
        Мини-игры
      </Badge>
      <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
        Концовки
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Прогресс
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Романтика
      </Badge>
    </div>
  );
}

function GameDiagrams() {
  const diagrams = [
    {
      title: 'Branching Story',
      description: 'Ветвление сюжета, управляемое ViewModel',
      file: '/diagrams/game/branching-story.mmd',
      category: 'Игра'
    },
    {
      title: 'MiniGame Flow',
      description: 'Процесс мини-игры через ViewModel',
      file: '/diagrams/game/minigame-flow.mmd',
      category: 'Игра'
    },
    {
      title: 'Ending Conditions',
      description: 'Условия 6 концовок на основе флагов',
      file: '/diagrams/game/ending-conditions.mmd',
      category: 'Игра'
    },
    {
      title: 'Player Progress Flow',
      description: 'Отслеживание прогресса через ViewModel',
      file: '/diagrams/game/player-progress-flow.mmd',
      category: 'Игра'
    },
    {
      title: 'Romance Branching',
      description: 'Ветви романтических линий (Елена, Максим)',
      file: '/diagrams/game/romance-branching.mmd',
      category: 'Игра'
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

export default function GamePage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <GameHeader />
      </Suspense>
      <GameDiagrams />
    </div>
  );
} 