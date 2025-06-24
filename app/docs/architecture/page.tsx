'use client';

import { Suspense } from 'react';

import { HeaderSkeleton, DiagramGridSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const architectureDiagrams = [
  {
    title: 'Системный контекст (C4 Level 1)',
    description:
      'Диаграмма показывает взаимодействие между игроком, приложением и сервером. Это верхнеуровневое представление системы.',
    conclusion: 'Показывает границы системы и основные потоки данных.',
    src: '/diagrams/architecture/context.mmd',
  },
  {
    title: 'Контейнерная диаграмма (C4 Level 2)',
    description:
      'Детализирует компоненты системы. Показывает, что Android-приложение использует локальную базу данных и взаимодействует с Ktor-сервером.',
    conclusion: 'Определяет основные технологические блоки и их взаимодействие.',
    src: '/diagrams/architecture/container.mmd',
  },
  {
    title: 'Компонентная диаграмма (C4 Level 3)',
    description: 'Фокусируется на внутреннем устройстве Android-приложения и сервера.',
    conclusion: 'Помогает понять внутреннюю структуру каждого компонента.',
    src: '/diagrams/architecture/component.mmd',
  },
  {
    title: 'Диаграмма слоев',
    description: 'Иллюстрирует слоеную архитектуру (Clean Architecture) приложения.',
    conclusion: 'Разделение на слои обеспечивает гибкость и тестируемость.',
    src: '/diagrams/architecture/layers.mmd',
  },
  {
    title: 'Диаграмма развертывания',
    description:
      'Показывает физическое развертывание компонентов: Android-приложение на устройствах игроков, Ktor-сервер и MySQL на локальном ноутбуке с Wi-Fi точкой доступа. Включает сетевую топологию.',
    conclusion:
      'Диаграмма важна для DevOps и системных администраторов. Локальное развертывание обеспечивает приватность данных, соответствие законодательству и автономность игрового процесса.',
    src: '/diagrams/architecture/deployment.mmd',
  },
];

function ArchitectureHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
        Архитектура и проектирование
      </h1>
      <p className='text-xl text-slate-300'>
        C4-модель, контейнеры, компоненты, слои, зависимости и развертывание
      </p>
      <ArchitectureBadges />
    </div>
  );
}

function ArchitectureBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        C4 Model
      </Badge>
      <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
        MVVM
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Ktor
      </Badge>
      <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
        MySQL
      </Badge>
    </div>
  );
}

function DiagramList({diagrams,}: {
  diagrams: { title: string; description: string; src: string }[];
}) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {diagrams.map(d => (
        <DiagramSection key={d.title} title={d.title} description={d.description} src={d.src} />
      ))}
    </div>
  );
}

function DiagramSection({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className='bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg'>
      <h3 className='text-lg font-semibold text-cyan-400 mb-2'>{title}</h3>
      <p className='text-slate-300 mb-4'>{description}</p>
      <MermaidDiagram title={title} description={description} src={src} category='Архитектура' />
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex-1 h-64 bg-slate-800/50 border border-slate-700/50 rounded-lg animate-pulse' />
            <div className='flex-1 h-64 bg-slate-800/50 border border-slate-700/50 rounded-lg animate-pulse' />
          </div>
          <DiagramGridSkeleton count={5} />
        </div>
      }
    >
      <div className='space-y-8'>
        <ArchitectureHeader />
        <DiagramList diagrams={architectureDiagrams} />
      </div>
    </Suspense>
  );
}
