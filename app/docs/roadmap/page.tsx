'use client';

import {
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Target,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const roadmapData = {
  currentVersion: '1.0.0',
  nextVersion: '1.1.0',
  releaseDate: 'Q3 2025',
  progress: 85,
  phases: [
    {
      title: 'Этап 1: MVP (Q1-Q2 2025)',
      status: 'completed',
      description: 'Основной функционал игры',
      tasks: [
        { task: 'Архитектура приложения', completed: true },
        { task: 'База данных', completed: true },
        { task: 'UI Framework', completed: true },
        { task: 'Сюжетная линия', completed: true },
        { task: 'Мини-игры', completed: true },
        { task: 'Офлайн-режим', completed: true },
        { task: 'Шифрование данных', completed: true },
        { task: 'Тестирование', completed: false },
      ],
    },
    {
      title: 'Этап 2: Версия 1.1.0 (Q3 2025)',
      status: 'in-progress',
      description: 'Улучшения и оптимизация',
      tasks: [
        { task: 'UI/UX улучшения', completed: false },
        { task: 'Оптимизация производительности', completed: false },
        { task: 'Дополнительные мини-игры', completed: false },
        { task: 'Облачное сохранение', completed: false },
        { task: 'Аналитика', completed: false },
        { task: 'Локализация', completed: false },
      ],
    },
    {
      title: 'Этап 3: Версия 1.2.0 (Q4 2025)',
      status: 'planned',
      description: 'Расширенный контент и монетизация',
      tasks: [
        { task: 'DLC-истории', completed: false },
        { task: 'Система монетизации', completed: false },
        { task: 'Социальные функции', completed: false },
        { task: 'Премиум-версия', completed: false },
        { task: 'Косметические дополнения', completed: false },
        { task: 'Подготовка к iOS', completed: false },
      ],
    },
    {
      title: 'Этап 4: Версия 2.0.0 (2026)',
      status: 'planned',
      description: 'iOS версия и франшиза',
      tasks: [
        { task: 'iOS приложение', completed: false },
        { task: 'App Store публикация', completed: false },
        { task: 'Кроссплатформенность', completed: false },
        { task: 'Вторая игра', completed: false },
        { task: 'Медиа контент', completed: false },
        { task: 'Международная экспансия', completed: false },
      ],
    },
  ],
  metrics: {
    technical: [
      {
        label: 'Время загрузки',
        value: '< 3 сек',
        target: '< 2 сек',
      },
      {
        label: 'FPS',
        value: '60',
        target: '60',
      },
      {
        label: 'Размер APK',
        value: '95 MB',
        target: '< 100 MB',
      },
      {
        label: 'Покрытие тестами',
        value: '75%',
        target: '> 80%',
      },
    ],
    user: [
      {
        label: 'Установки',
        value: '8,500',
        target: '10,000+',
      },
      {
        label: 'Удержание (7 дней)',
        value: '28%',
        target: '30%',
      },
      {
        label: 'Завершение',
        value: '12%',
        target: '15%',
      },
      {
        label: 'Рейтинг',
        value: '4.3',
        target: '4.5+',
      },
    ],
    business: [
      {
        label: 'Монетизация',
        value: '3%',
        target: '5%',
      },
      {
        label: 'ARPU',
        value: '$1.80',
        target: '$2.50',
      },
      {
        label: 'LTV',
        value: '$12.00',
        target: '$15.00',
      },
      {
        label: 'ROI',
        value: '250%',
        target: '300%',
      },
    ],
  },
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className='h-5 w-5 text-green-500' />;
    case 'in-progress':
      return <Clock className='h-5 w-5 text-blue-500' />;
    case 'planned':
      return <Target className='h-5 w-5 text-gray-500' />;
    default:
      return <AlertCircle className='h-5 w-5 text-red-500' />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'in-progress':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'planned':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    default:
      return 'bg-red-500/20 text-red-400 border-red-500/30';
  }
};

// Header секция
function RoadmapHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
        Дорожная карта проекта
      </h1>
      <p className='text-slate-300 text-lg'>
        Основные этапы и контрольные точки разработки мобильной игры «Сообщение 404».
      </p>
    </div>
  );
}

// Элемент дорожной карты
function RoadmapItem({
  stage,
  date,
  description,
}: {
  stage: string;
  date: string;
  description: string;
}) {
  return (
    <div className='flex flex-col md:flex-row md:items-center gap-4 mb-8'>
      <div className='md:w-1/4 text-cyan-400 font-semibold'>{date}</div>
      <div className='md:w-3/4'>
        <div className='text-lg font-bold text-white'>{stage}</div>
        <div className='text-slate-300'>{description}</div>
      </div>
    </div>
  );
}

// Таймлайн дорожной карты
function RoadmapTimeline({items,}: {
  items: { stage: string; date: string; description: string }[];
}) {
  return (
    <div className='border-l-2 border-cyan-500 pl-6'>
      {items.map((item, idx) => (
        <RoadmapItem key={item.stage + item.date} {...item} />
      ))}
    </div>
  );
}

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  // Пример данных (замените на реальные этапы)
  const roadmap = [
    {
      stage: 'Анализ требований',
      date: 'Январь 2024',
      description: 'Сбор и формализация требований, согласование с заказчиком.',
    },
    {
      stage: 'Проектирование архитектуры',
      date: 'Февраль 2024',
      description: 'Разработка архитектурных схем, выбор технологий.',
    },
    {
      stage: 'Разработка MVP',
      date: 'Март-Апрель 2024',
      description: 'Создание минимально жизнеспособного продукта, базовый игровой процесс.',
    },
    {
      stage: 'Тестирование и доработка',
      date: 'Май 2024',
      description: 'Проведение тестирования, исправление ошибок, оптимизация.',
    },
    {
      stage: 'Релиз и поддержка',
      date: 'Июнь 2024',
      description: 'Публикация в сторах, поддержка пользователей, выпуск обновлений.',
    },
  ];

  return (
    <div className='space-y-8'>
      <RoadmapHeader />
      <RoadmapTimeline items={roadmap} />
      {/* Добавьте другие секции или детали по необходимости */}
    </div>
  );
}
