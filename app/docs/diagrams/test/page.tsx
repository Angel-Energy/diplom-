'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function TestHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
        Диаграммы тестирования
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы стратегий и процессов тестирования системы «Сообщение 404»
      </p>
      <TestBadges />
    </div>
  );
}

function TestBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-yellow-500/10 text-yellow-400 border-yellow-500/20'>
        Unit Tests
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Integration Tests
      </Badge>
      <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
        Security Tests
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Performance Tests
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        UI Tests
      </Badge>
    </div>
  );
}

function TestDiagrams() {
  const diagrams = [
    {
      title: 'Test Strategy',
      description: 'Тестирование ViewModel, Repository, View',
      file: '/diagrams/test/test-strategy.mmd',
      category: 'Тестирование'
    },
    {
      title: 'Unit Test Flow',
      description: 'Тестирование ViewModel и Repository',
      file: '/diagrams/test/unit-test-flow.mmd',
      category: 'Тестирование'
    },
    {
      title: 'Integration Test Flow',
      description: 'Тестирование Room, Ktor, Chaquopy',
      file: '/diagrams/test/integration-test-flow.mmd',
      category: 'Тестирование'
    },
    {
      title: 'Security Test Plan',
      description: 'Тестирование защиты данных в MVVM',
      file: '/diagrams/test/security-test-plan.mmd',
      category: 'Тестирование'
    },
    {
      title: 'Performance Test Flow',
      description: 'Тестирование FPS и памяти',
      file: '/diagrams/test/performance-test-flow.mmd',
      category: 'Тестирование'
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

export default function TestPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <TestHeader />
      </Suspense>
      <TestDiagrams />
    </div>
  );
} 