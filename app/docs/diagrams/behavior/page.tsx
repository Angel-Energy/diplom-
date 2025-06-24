'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function BehaviorHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent'>
        Диаграммы поведения
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы поведения и взаимодействия в системе «Сообщение 404»
      </p>
      <BehaviorBadges />
    </div>
  );
}

function BehaviorBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Sequence
      </Badge>
      <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
        Activity
      </Badge>
      <Badge variant='outline' className='bg-yellow-500/10 text-yellow-400 border-yellow-500/20'>
        State Machine
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Interaction
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Event Handling
      </Badge>
    </div>
  );
}

function BehaviorDiagrams() {
  const diagrams = [
    {
      title: 'Sequence Diagram',
      description: 'Последовательность: View → ViewModel → Repository',
      file: '/diagrams/behavior/sequence-diagram.mmd',
      category: 'Поведение'
    },
    {
      title: 'Activity Diagram',
      description: 'Поток выбора и мини-игры через ViewModel',
      file: '/diagrams/behavior/activity-diagram.mmd',
      category: 'Поведение'
    },
    {
      title: 'State Machine',
      description: 'Состояния ViewModel: загрузка, активен, завершение',
      file: '/diagrams/behavior/state-machine.mmd',
      category: 'Поведение'
    },
    {
      title: 'Interaction Diagram',
      description: 'Взаимодействие игрока с NPC через ViewModel',
      file: '/diagrams/behavior/interaction-diagram.mmd',
      category: 'Поведение'
    },
    {
      title: 'Event Handling Flow',
      description: 'Обработка событий в ViewModel',
      file: '/diagrams/behavior/event-handling-flow.mmd',
      category: 'Поведение'
    },
    {
      title: 'Choice Processing Flow',
      description: 'Обработка выбора с обновлением флагов',
      file: '/diagrams/behavior/choice-processing-flow.mmd',
      category: 'Поведение'
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

export default function BehaviorPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <BehaviorHeader />
      </Suspense>
      <BehaviorDiagrams />
    </div>
  );
} 
