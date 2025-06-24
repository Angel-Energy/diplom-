'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function InfrastructureHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>
        Инфраструктурные диаграммы
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы инфраструктуры и развертывания системы «Сообщение 404»
      </p>
      <InfrastructureBadges />
    </div>
  );
}

function InfrastructureBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        Ktor Server
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        MySQL
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Docker
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Monitoring
      </Badge>
      <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
        Security
      </Badge>
    </div>
  );
}

function InfrastructureDiagrams() {
  const diagrams = [
    {
      title: 'Deployment Diagram',
      description: 'Развёртывание с MVVM-компонентами',
      file: '/diagrams/infrastructure/deployment.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Network Topology',
      description: 'Сеть для Ktor и Repository',
      file: '/diagrams/infrastructure/network-topology.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Server Setup',
      description: 'Настройка Ktor для MVVM',
      file: '/diagrams/infrastructure/server-setup.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Backup Strategy',
      description: 'Резервное копирование данных Model',
      file: '/diagrams/infrastructure/backup-strategy.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'PWA Deployment',
      description: 'Развёртывание PWA-версии',
      file: '/diagrams/infrastructure/pwa-deployment.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Monitoring System',
      description: 'Система мониторинга и алертов',
      file: '/diagrams/infrastructure/monitoring-system.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Scalability',
      description: 'Стратегия масштабирования системы',
      file: '/diagrams/infrastructure/scalability.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Security Architecture',
      description: 'Архитектура безопасности',
      file: '/diagrams/infrastructure/security-architecture.mmd',
      category: 'Инфраструктура'
    },
    {
      title: 'Security Overview',
      description: 'Обзор системы безопасности',
      file: '/diagrams/infrastructure/security-overview.mmd',
      category: 'Инфраструктура'
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

export default function InfrastructurePage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <InfrastructureHeader />
      </Suspense>
      <InfrastructureDiagrams />
    </div>
  );
} 