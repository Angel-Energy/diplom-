'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function ManagementHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent'>
        Диаграммы управления
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы управления проектом и процессами разработки «Сообщение 404»
      </p>
      <ManagementBadges />
    </div>
  );
}

function ManagementBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-teal-500/10 text-teal-400 border-teal-500/20'>
        Project Management
      </Badge>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Git Workflow
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Team Roles
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Code Review
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Roadmap
      </Badge>
    </div>
  );
}

function ManagementDiagrams() {
  const diagrams = [
    {
      title: 'Roadmap Timeline',
      description: 'План разработки с акцентом на MVVM',
      file: '/diagrams/management/roadmap-timeline.mmd',
      category: 'Управление'
    },
    {
      title: 'Team Roles',
      description: 'Роли команды: разработка, дизайн, тестирование',
      file: '/diagrams/management/team-roles.mmd',
      category: 'Управление'
    },
    {
      title: 'Code Review Flow',
      description: 'Процесс код-ревью для MVVM',
      file: '/diagrams/management/code-review-flow.mmd',
      category: 'Управление'
    },
    {
      title: 'Git Workflow',
      description: 'Ветвление: feature → dev → main',
      file: '/diagrams/management/git-workflow.mmd',
      category: 'Управление'
    },
    {
      title: 'Legal Compliance',
      description: 'Соответствие ФЗ-152, ГОСТ Р 34.12-2015',
      file: '/diagrams/management/legal-compliance.mmd',
      category: 'Управление'
    },
    {
      title: 'SDK Architecture',
      description: 'Структура Kotlin/Python SDK для разработчиков',
      file: '/diagrams/management/sdk-architecture.mmd',
      category: 'Управление'
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

export default function ManagementPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <ManagementHeader />
      </Suspense>
      <ManagementDiagrams />
    </div>
  );
} 
