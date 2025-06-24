'use client';


import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ArchitectureHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
        Архитектурные диаграммы
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы архитектуры MVVM системы «Сообщение 404»
      </p>
      <ArchitectureBadges />
    </div>
  );
}

function ArchitectureBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        MVVM Pattern
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Jetpack Compose
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Kotlin
      </Badge>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        Room Database
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Ktor Server
      </Badge>
    </div>
  );
}

function ArchitectureDiagrams() {
  const diagrams = [
    {
      title: 'MVVM Component Diagram',
      description: 'Слои MVVM: View (Compose) → ViewModel → Model (Repository, Room, Ktor)',
      file: '/diagrams/architecture/mvvm-component.mmd',
      category: 'Архитектура'
    },
    {
      title: 'MVVM Data Flow',
      description: 'Поток данных между View, ViewModel и Model',
      file: '/diagrams/architecture/mvvm-data-flow.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Class Diagram',
      description: 'Классы: ChatViewModel, DialogRepository, Message',
      file: '/diagrams/architecture/class-diagram.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Package Diagram',
      description: 'Структура пакетов: presentation, domain, data',
      file: '/diagrams/architecture/package-diagram.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Dependency Diagram',
      description: 'Зависимости между слоями MVVM',
      file: '/diagrams/architecture/dependency-diagram.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Module Interaction',
      description: 'Взаимодействие модулей (core, data, domain)',
      file: '/diagrams/architecture/module-interaction.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Layers',
      description: 'Слои архитектуры: Presentation, Domain, Data, Infrastructure',
      file: '/diagrams/architecture/layers.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Container',
      description: 'Контейнеры компонентов системы',
      file: '/diagrams/architecture/container.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Context',
      description: 'Контекст системы и внешние зависимости',
      file: '/diagrams/architecture/context.mmd',
      category: 'Архитектура'
    },
    {
      title: 'Component',
      description: 'Компоненты системы и их взаимодействие',
      file: '/diagrams/architecture/component.mmd',
      category: 'Архитектура'
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
              <MermaidDiagram 
                title={diagram.title}
                description={diagram.description}
                src={diagram.file}
                category={diagram.category}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <ArchitectureHeader />
      </Suspense>
      <ArchitectureDiagrams />
    </div>
  );
}
