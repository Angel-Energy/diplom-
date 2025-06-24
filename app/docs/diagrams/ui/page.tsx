'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function UiHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
        UI/UX диаграммы
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы пользовательского интерфейса и опыта в системе «Сообщение 404»
      </p>
      <UiBadges />
    </div>
  );
}

function UiBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-pink-500/10 text-pink-400 border-pink-500/20'>
        Jetpack Compose
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Material Design
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Accessibility
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Responsive
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Animations
      </Badge>
    </div>
  );
}

function UiDiagrams() {
  const diagrams = [
    {
      title: 'User Flow',
      description: 'Навигация через View (Compose)',
      file: '/diagrams/ui/user-flow.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Chat Screen',
      description: 'UI-компоненты, управляемые ViewModel',
      file: '/diagrams/ui/chat-screen.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Navigation Flow',
      description: 'Переходы между экранами, управляемые View',
      file: '/diagrams/ui/navigation-flow.mmd',
      category: 'UI/UX'
    },
    {
      title: 'TalkBack Support Diagram',
      description: 'Поддержка скринридеров в View',
      file: '/diagrams/ui/talkback-support.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Adaptive UI',
      description: 'Адаптивность UI под разные экраны',
      file: '/diagrams/ui/adaptive-ui.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Animation Flow',
      description: 'Эффект печатающего текста и 3D-карточек',
      file: '/diagrams/ui/animation-flow.mmd',
      category: 'UI/UX'
    },
    {
      title: 'UI Architecture',
      description: 'Архитектура пользовательского интерфейса',
      file: '/diagrams/ui/architecture.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Component Hierarchy',
      description: 'Иерархия UI компонентов',
      file: '/diagrams/ui/component-hierarchy.mmd',
      category: 'UI/UX'
    },
    {
      title: 'Theme Structure',
      description: 'Структура тем и стилей',
      file: '/diagrams/ui/theme-structure.mmd',
      category: 'UI/UX'
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

export default function UiPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <UiHeader />
      </Suspense>
      <UiDiagrams />
    </div>
  );
}
