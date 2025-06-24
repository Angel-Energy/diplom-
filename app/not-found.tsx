'use client';

import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center p-4'>
      <div className='max-w-md w-full text-center'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-cyan-400 mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-white mb-2'>Страница не найдена</h2>
          <p className='text-slate-400'>
            Запрашиваемая страница не существует или была перемещена.
          </p>
        </div>

        <div className='space-y-4'>
          <Link href='/'>
            <Button className='w-full'>
              <Home className='h-4 w-4 mr-2' />
              На главную
            </Button>
          </Link>

          <Link href='/docs/introduction'>
            <Button variant='outline' className='w-full'>
              <Search className='h-4 w-4 mr-2' />К документации
            </Button>
          </Link>

          <Button
            variant='ghost'
            onClick={handleGoBack}
            className='w-full text-slate-400 hover:text-white'
          >
            <ArrowLeft className='h-4 w-4 mr-2' />
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
}
