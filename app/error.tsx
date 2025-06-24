'use client';

import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-slate-800 rounded-lg p-6 border border-slate-700'>
        <div className='flex items-center space-x-3 mb-4'>
          <AlertTriangle className='h-6 w-6 text-red-400' />
          <h2 className='text-xl font-semibold text-white'>Ошибка загрузки</h2>
        </div>
        <p className='text-slate-300 mb-4'>
          Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте снова.
        </p>
        {error.message && (
          <details className='mb-4'>
            <summary className='text-sm text-slate-400 cursor-pointer hover:text-slate-300'>
              Подробности ошибки
            </summary>
            <pre className='mt-2 text-xs text-red-400 bg-slate-900 p-2 rounded overflow-auto'>
              {error.message}
            </pre>
          </details>
        )}
        <div className='flex space-x-3'>
          <Button onClick={reset} className='flex-1'>
            <RefreshCw className='h-4 w-4 mr-2' />
            Попробовать снова
          </Button>
          <Link href='/'>
            <Button variant='outline' className='flex-1'>
              <Home className='h-4 w-4 mr-2' />
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
