'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MermaidDiagram from '@/components/mermaid-diagram';

function SecurityHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
        Диаграммы безопасности
      </h1>
      <p className='text-xl text-slate-300'>
        Диаграммы безопасности и защиты данных в системе «Сообщение 404»
      </p>
      <SecurityBadges />
    </div>
  );
}

function SecurityBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
        AES-256
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        TLS 1.2+
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        ФЗ-152
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Certificate Pinning
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        OWASP
      </Badge>
    </div>
  );
}

function SecurityDiagrams() {
  const diagrams = [
    {
      title: 'Encryption Flow',
      description: 'Шифрование данных в Model (Room, Ktor)',
      file: '/diagrams/infrastructure/encryption-flow.mmd',
      category: 'Безопасность'
    },
    {
      title: 'TLS Sequence',
      description: 'Защищённый запрос от ViewModel к Ktor',
      file: '/diagrams/infrastructure/tls-sequence.mmd',
      category: 'Безопасность'
    },
    {
      title: 'APK Protection Flow',
      description: 'Защита APK с использованием DexGuard',
      file: '/diagrams/infrastructure/apk-protection-flow.mmd',
      category: 'Безопасность'
    },
    {
      title: 'Privacy Diagram',
      description: 'Отсутствие PII, ANON_<UUID> в Model',
      file: '/diagrams/infrastructure/privacy-diagram.mmd',
      category: 'Безопасность'
    },
    {
      title: 'Security Data Flow',
      description: 'Поток защищённых данных в MVVM',
      file: '/diagrams/infrastructure/security-data-flow.mmd',
      category: 'Безопасность'
    },
    {
      title: 'Certificate Pinning Flow',
      description: 'Настройка Certificate Pinning для Ktor',
      file: '/diagrams/infrastructure/certificate-pinning.mmd',
      category: 'Безопасность'
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

export default function SecurityPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <SecurityHeader />
      </Suspense>
      <SecurityDiagrams />
    </div>
  );
} 