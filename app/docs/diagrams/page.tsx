'use client';

import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

function DiagramsHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
        Диаграммы системы
      </h1>
      <p className='text-xl text-slate-300'>
        Полный набор диаграмм (58 штук) для проекта «Сообщение 404» — текстового квеста для Android
      </p>
      <DiagramsBadges />
    </div>
  );
}

function DiagramsBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
        58 диаграмм
      </Badge>
      <Badge variant='outline' className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
        Mermaid.js
      </Badge>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        MVVM
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        Kotlin
      </Badge>
      <Badge variant='outline' className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
        Android
      </Badge>
    </div>
  );
}

function DiagramsCategories() {
  const categories = [
    {
      title: 'Архитектурные диаграммы',
      description: 'MVVM компоненты, слои, зависимости и модули',
      href: '/docs/diagrams/architecture',
      count: 10,
      color: 'from-blue-400 to-purple-400',
      icon: '🏗️'
    },
    {
      title: 'Диаграммы данных',
      description: 'ER диаграммы, потоки данных, JSON структуры',
      href: '/docs/diagrams/data',
      count: 5,
      color: 'from-green-400 to-blue-400',
      icon: '📊'
    },
    {
      title: 'Игровые диаграммы',
      description: 'Ветвление сюжета, мини-игры, концовки',
      href: '/docs/diagrams/game',
      count: 5,
      color: 'from-purple-400 to-pink-400',
      icon: '🎮'
    },
    {
      title: 'Диаграммы поведения',
      description: 'Sequence, Activity, State Machine диаграммы',
      href: '/docs/diagrams/behavior',
      count: 6,
      color: 'from-orange-400 to-red-400',
      icon: '🔄'
    },
    {
      title: 'Диаграммы безопасности',
      description: 'Шифрование, TLS, защита данных',
      href: '/docs/diagrams/security',
      count: 6,
      color: 'from-red-400 to-orange-400',
      icon: '🔒'
    },
    {
      title: 'API диаграммы',
      description: 'Эндпоинты, авторизация, обработка ошибок',
      href: '/docs/diagrams/api',
      count: 5,
      color: 'from-cyan-400 to-blue-400',
      icon: '🔌'
    },
    {
      title: 'UI/UX диаграммы',
      description: 'Пользовательские потоки, компоненты, анимации',
      href: '/docs/diagrams/ui',
      count: 9,
      color: 'from-pink-400 to-purple-400',
      icon: '🎨'
    },
    {
      title: 'Инфраструктурные диаграммы',
      description: 'Развертывание, сеть, мониторинг, безопасность',
      href: '/docs/diagrams/infrastructure',
      count: 9,
      color: 'from-green-400 to-blue-400',
      icon: '🏢'
    },
    {
      title: 'Диаграммы тестирования',
      description: 'Unit, Integration, Security, Performance тесты',
      href: '/docs/diagrams/test',
      count: 5,
      color: 'from-yellow-400 to-orange-400',
      icon: '🧪'
    },
    {
      title: 'Диаграммы жизненного цикла',
      description: 'Проект, игровые сессии, сохранение/загрузка',
      href: '/docs/diagrams/lifecycle',
      count: 4,
      color: 'from-indigo-400 to-purple-400',
      icon: '⏳'
    },
    {
      title: 'Диаграммы управления',
      description: 'Roadmap, команда, Git workflow, соответствие стандартам',
      href: '/docs/diagrams/management',
      count: 6,
      color: 'from-teal-400 to-cyan-400',
      icon: '📋'
    }
  ];

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <Card className='bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <span className='text-2xl'>{category.icon}</span>
                <Badge variant='outline' className='bg-slate-700/50 text-slate-300 border-slate-600'>
                  {category.count}
                </Badge>
              </div>
              <CardTitle className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300'>
                {category.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

function DiagramsOverview() {
  return (
    <div className='bg-slate-800/30 rounded-lg p-6 border border-slate-700/50'>
      <h2 className='text-2xl font-bold text-slate-200 mb-4'>Обзор диаграмм</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='text-center'>
          <div className='text-3xl font-bold text-cyan-400'>58</div>
          <div className='text-sm text-slate-400'>Всего диаграмм</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-purple-400'>11</div>
          <div className='text-sm text-slate-400'>Категорий</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-green-400'>MVVM</div>
          <div className='text-sm text-slate-400'>Архитектура</div>
        </div>
        <div className='text-center'>
          <div className='text-3xl font-bold text-orange-400'>Mermaid</div>
          <div className='text-sm text-slate-400'>Формат</div>
        </div>
      </div>
    </div>
  );
}

export default function DiagramsPage() {
  return (
    <div className='space-y-8'>
      <Suspense fallback={<HeaderSkeleton />}>
        <DiagramsHeader />
      </Suspense>
      <DiagramsOverview />
      <DiagramsCategories />
    </div>
  );
}
