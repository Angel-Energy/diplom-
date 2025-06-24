'use client';

import { Github, Download, Zap, Shield, Database, Terminal, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback, memo } from 'react';

import Button from '@/components/ui/button';

// Типы для компонента
interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface StatCard {
  number: string;
  label: string;
  color: string;
}

interface HomePageClientProps {
  diagramsCount: number;
}

// Кастомная иконка контроллера с улучшенной типизацией
const GameController = memo(({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 100 100'
    fill='currentColor'
    className={className}
    aria-hidden='true'
    role='img'
  >
    <path d='M92.654 59.701c.527-1.662.816-3.43.816-5.264 0-9.621-7.827-17.448-17.448-17.448-3.225 0-6.239.895-8.833 2.427H51.488v-13.89a4.637 4.637 0 0 1 4.632-4.632h.738a4.637 4.637 0 0 1 4.632 4.632c0 4.208 3.424 7.632 7.632 7.632h.909c4.208 0 7.632-3.424 7.632-7.632V6.439a1.5 1.5 0 1 0-3 0v19.087a4.637 4.637 0 0 1-4.632 4.632h-.909a4.637 4.637 0 0 1-4.632-4.632c0-4.208-3.424-7.632-7.632-7.632h-.738c-4.208 0-7.632 3.424-7.632 7.632v13.89H32.899a17.316 17.316 0 0 0-8.92-2.48c-9.621 0-17.448 7.827-17.448 17.448 0 1.834.288 3.602.816 5.264L3.593 85.663c-.659 4.572 2.211 7.741 5.348 8.854.88.312 1.846.485 2.833.485 2.529 0 5.195-1.139 6.898-3.992l12.293-20.587c1.398 2.269 3.899 3.79 6.754 3.79 3.286 0 6.111-2.007 7.315-4.86h9.913c1.192 2.88 4.029 4.913 7.334 4.913 2.855 0 5.355-1.521 6.754-3.79l12.293 20.587c1.704 2.853 4.369 3.992 6.898 3.992.986 0 1.952-.173 2.833-.485 3.137-1.113 6.007-4.282 5.348-8.854l-3.753-26.015z' />
  </svg>
));

GameController.displayName = 'GameController';

// Компонент карточки функции
const FeatureCard = memo(({ feature, index }: { feature: FeatureCard; index: number }) => {
  const Icon = feature.icon;
  return (
    <article
      className='bg-slate-800/50 border border-slate-700/50 p-4 sm:p-6 rounded-lg hover:border-cyan-500/30 transition-all duration-300 group'
      aria-labelledby={`feature-title-${index}`}
    >
      <Icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4 ${feature.color}`} />
      <h3
        id={`feature-title-${index}`}
        className='text-base sm:text-lg font-semibold text-slate-200 mb-2'
      >
        {feature.title}
      </h3>
      <p className='text-slate-400 text-xs sm:text-sm leading-relaxed'>{feature.desc}</p>
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';

// Компонент карточки статистики
const StatCard = memo(({ stat, index }: { stat: StatCard; index: number }) => (
  <div
    className='bg-slate-800/50 border border-slate-700/50 p-4 sm:p-6 rounded-lg hover:border-cyan-500/30 transition-all duration-300'
    aria-labelledby={`stat-label-${index}`}
  >
    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
      {stat.number}
    </div>
    <div
      id={`stat-label-${index}`}
      className='text-slate-400 uppercase tracking-wider text-xs sm:text-sm'
    >
      {stat.label}
    </div>
  </div>
));

StatCard.displayName = 'StatCard';

// Header
function HomePageHeader({
  onDownload,
  onGitHub,
}: {
  onDownload: () => void;
  onGitHub: () => void;
}) {
  return (
    <header className='border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='/images/icon.png'
            alt='Сообщение 404'
            width={40}
            height={40}
            className='rounded-lg'
          />
          <div className='flex flex-col leading-tight'>
            <span className='text-lg font-bold text-cyan-400'>Сообщение 404</span>
            <span className='text-xs text-slate-400'>Документация проекта</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            className='bg-cyan-500/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/30'
            onClick={onDownload}
          >
            <Download className='h-4 w-4 mr-2' />
            Скачать APK
          </Button>
          <Button
            className='bg-purple-500/20 border border-purple-500 text-purple-400 hover:bg-purple-500/30'
            onClick={onGitHub}
          >
            <Github className='h-4 w-4 mr-2' />
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className='relative w-full mt-16'>
      <div className='flex flex-col items-center text-center w-full'>
        <div
          className='mb-8 relative flex justify-center items-center w-full'
          style={{
            paddingLeft: 0,
            marginLeft: 0,
            maxWidth: '100%',
          }}
        >
          <Image
            src='/images/logo.png'
            alt='MESSAGE 404 - Interactive Detective Game'
            width={900}
            height={900}
            className='mx-auto mb-6 rounded-full'
            priority
          />
        </div>
        <h1 className='text-7xl md:text-8xl font-extrabold uppercase mb-6'>
          <span className='text-cyan-400'>СООБЩЕНИЕ</span>{' '}
          <span className='text-purple-400'>404</span>
        </h1>
        <div className='text-2xl md:text-3xl font-semibold mb-2'>
          <span className='text-cyan-400'>Текстовый квест</span> в жанре{' '}
          <span className='text-purple-400'>психологического детектива</span>{' '}
          <span className='text-slate-100'>для</span>
        </div>
        <div className='text-2xl md:text-3xl font-semibold mb-6 text-slate-100'>Android</div>
        <div className='text-lg md:text-xl text-slate-400 mb-10 max-w-4xl mx-auto leading-relaxed'>
          <div>
            Расследуйте корпоративный заговор через интерфейс мессенджера с ветвящимися диалогами и
            мини-играми на <span className='text-cyan-400 font-semibold'>Python/JS</span>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-6 mb-10'>
          <div className='bg-slate-800/40 border border-slate-700/50 px-8 py-6 rounded-lg flex items-center gap-3 min-w-[220px] justify-center'>
            <Zap className='h-7 w-7 text-cyan-400' />
            <span className='text-slate-100 font-semibold text-lg'>60 мини-игр</span>
          </div>
          <div className='bg-slate-800/40 border border-slate-700/50 px-8 py-6 rounded-lg flex items-center gap-3 min-w-[220px] justify-center'>
            <Code className='h-7 w-7 text-purple-400' />
            <span className='text-slate-100 font-semibold text-lg'>Kotlin + Compose</span>
          </div>
          <div className='bg-slate-800/40 border border-slate-700/50 px-8 py-6 rounded-lg flex items-center gap-3 min-w-[220px] justify-center'>
            <Shield className='h-7 w-7 text-cyan-400' />
            <span className='text-slate-100 font-semibold text-lg'>Офлайн-режим</span>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <Link href='/docs/introduction'>
            <Button className='border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-500/10 text-lg px-12 py-4 font-bold uppercase tracking-wider transition-all'>
              <Terminal className='h-5 w-5 mr-3' />
              ОТКРЫТЬ ДОКУМЕНТАЦИЮ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Features Grid
function FeaturesGrid() {
  const features = [
    {
      title: 'Архитектура системы',
      desc: 'MVVM + Clean Architecture, Ktor-сервер',
      icon: Code,
      color: 'text-cyan-400',
    },
    {
      title: 'Игровые механики',
      desc: 'Чат-интерфейс, выборы, 60 мини-игр',
      icon: Zap,
      color: 'text-purple-400',
    },
    {
      title: 'Мини-игры Python/JS',
      desc: 'Поиск ошибок в коде, расшифровка',
      icon: Code,
      color: 'text-cyan-400',
    },
    {
      title: 'Офлайн-режим',
      desc: 'Room + DataStore, синхронизация MySQL',
      icon: Database,
      color: 'text-purple-400',
    },
    {
      title: 'Безопасность',
      desc: 'AES-256, TLS 1.2+, соответствие 152-ФЗ',
      icon: Shield,
      color: 'text-cyan-400',
    },
    {
      title: '10 игровых дней',
      desc: 'Ветвящийся сюжет, 5 концовок',
      icon: Terminal,
      color: 'text-purple-400',
    },
  ];
  return (
    <section className='py-20 px-4 relative'>
      <h2 className='text-5xl font-extrabold text-cyan-400 text-center mb-12 uppercase tracking-wide mt-24'>
        СОДЕРЖАНИЕ ДОКУМЕНТАЦИИ
      </h2>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className='bg-slate-800/40 border border-slate-700/50 p-8 rounded-xl hover:border-cyan-400/40 hover:shadow-cyan-400/10 transition-all'
              >
                <div className='flex items-center space-x-4 mb-4'>
                  <Icon className={`h-8 w-8 ${item.color}`} />
                  <span className='text-slate-100 font-bold text-xl'>{item.title}</span>
                </div>
                <div className='text-slate-400 text-base'>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection({ diagramsCount }: { diagramsCount: number }) {
  const stats = [
    {
      number: diagramsCount.toString(),
      label: 'ДИАГРАММЫ',
      color: 'text-cyan-400',
    },
    {
      number: '60',
      label: 'МИНИ-ИГРЫ',
      color: 'text-purple-400',
    },
    {
      number: '10',
      label: 'ИГРОВЫХ ДНЕЙ',
      color: 'text-cyan-400',
    },
    {
      number: '5',
      label: 'КОНЦОВОК',
      color: 'text-purple-400',
    },
  ];
  return (
    <section className='py-16 px-4 relative'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 text-center'>
          {stats.map(stat => (
            <div
              key={stat.label}
              className='bg-slate-800/40 border border-slate-700/50 p-8 rounded-xl hover:border-cyan-400/40 hover:shadow-cyan-400/10 transition-all'
            >
              <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>{stat.number}</div>
              <div className='text-slate-400 uppercase tracking-wider text-base'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Feedback Form
function FeedbackForm() {
  return (
    <section
      className='py-12 sm:py-16 px-4 bg-slate-900/30 relative'
      aria-labelledby='feedback-title'
    >
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-8 sm:mb-12 px-4'>
          <h2
            id='feedback-title'
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-3 sm:mb-4'
          >
            ОБРАТНАЯ СВЯЗЬ
          </h2>
          <p className='text-slate-400 text-base sm:text-lg'>
            Есть вопросы или предложения? Напишите нам!
          </p>
        </div>
        <div className='bg-slate-800/50 border border-slate-700/50 p-4 sm:p-6 md:p-8 rounded-lg mx-4'>
          <form className='space-y-4 sm:space-y-6' aria-label='Форма обратной связи'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-slate-300 mb-2'>
                  Имя{' '}
                  <span className='text-red-400' aria-label='обязательное поле'>
                    *
                  </span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm sm:text-base'
                  placeholder='Ваше имя'
                  required
                  aria-required='true'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-slate-300 mb-2'>
                  Email{' '}
                  <span className='text-red-400' aria-label='обязательное поле'>
                    *
                  </span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm sm:text-base'
                  placeholder='your@email.com'
                  required
                  aria-required='true'
                />
              </div>
            </div>
            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-slate-300 mb-2'>
                Тема{' '}
                <span className='text-red-400' aria-label='обязательное поле'>
                  *
                </span>
              </label>
              <select
                id='subject'
                name='subject'
                className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm sm:text-base'
                required
                aria-required='true'
              >
                <option value='' className='bg-slate-900 text-slate-200'>
                  Выберите тему
                </option>
                <option value='bug' className='bg-slate-900 text-slate-200'>
                  Сообщить об ошибке
                </option>
                <option value='feature' className='bg-slate-900 text-slate-200'>
                  Предложение функции
                </option>
                <option value='question' className='bg-slate-900 text-slate-200'>
                  Вопрос по документации
                </option>
                <option value='feedback' className='bg-slate-900 text-slate-200'>
                  Общий отзыв
                </option>
                <option value='other' className='bg-slate-900 text-slate-200'>
                  Другое
                </option>
              </select>
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-slate-300 mb-2'>
                Сообщение{' '}
                <span className='text-red-400' aria-label='обязательное поле'>
                  *
                </span>
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm sm:text-base resize-vertical'
                placeholder='Опишите ваше сообщение...'
                required
                aria-required='true'
              />
            </div>
            <div className='flex justify-center'>
              <Button
                type='submit'
                className='bg-cyan-500/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/30 px-8 py-3 font-semibold transition-all'
              >
                Отправить сообщение
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function HomePageFooter() {
  return (
    <footer className='border-t border-slate-700/50 bg-slate-900/90 py-8'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-slate-400 text-sm'>
          © 2024 Сообщение 404. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

// Main Component
const HomePageClient = ({ diagramsCount }: HomePageClientProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = useCallback(() => {
    window.open('/docs/download', '_blank');
  }, []);

  const handleGitHub = useCallback(() => {
    window.open('https://github.com/your-repo', '_blank');
  }, []);

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <HomePageHeader onDownload={handleDownload} onGitHub={handleGitHub} />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <StatsSection diagramsCount={diagramsCount} />
        <FeedbackForm />
      </main>
      <HomePageFooter />
    </div>
  );
};

export default HomePageClient;
