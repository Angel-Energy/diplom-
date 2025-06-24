'use client';

import { Loader2 } from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function Loading({ size = 'md', text, className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
      {text && <p className='mt-4 text-slate-400 text-sm'>{text}</p>}
    </div>
  );
}

export function PageLoading() {
  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
      <Loading size='lg' text='Загрузка...' />
    </div>
  );
}

export function SectionLoading() {
  return (
    <div className='py-12'>
      <Loading size='md' text='Загрузка раздела...' />
    </div>
  );
}

export function ContentLoading() {
  return (
    <div className='py-8'>
      <Loading size='sm' text='Загрузка контента...' />
    </div>
  );
}

export function DiagramLoading() {
  return (
    <div className='py-6'>
      <Loading size='md' text='Загрузка диаграммы...' />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50'>
      <CardHeader>
        <Skeleton className='h-6 w-3/4 bg-slate-700' />
      </CardHeader>
      <CardContent className='space-y-3'>
        <Skeleton className='h-4 w-full bg-slate-700' />
        <Skeleton className='h-4 w-2/3 bg-slate-700' />
        <Skeleton className='h-4 w-1/2 bg-slate-700' />
      </CardContent>
    </Card>
  );
}

export function DiagramSkeleton() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50'>
      <CardHeader>
        <Skeleton className='h-6 w-2/3 bg-slate-700' />
        <Skeleton className='h-4 w-full bg-slate-700' />
      </CardHeader>
      <CardContent className='space-y-4'>
        <Skeleton className='h-4 w-full bg-slate-700' />
        <Skeleton className='h-4 w-3/4 bg-slate-700' />
        <div className='border border-slate-700 rounded-lg p-4'>
          <Skeleton className='h-32 w-full bg-slate-700' />
        </div>
        <Skeleton className='h-4 w-2/3 bg-slate-700' />
      </CardContent>
    </Card>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function DiagramGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className='space-y-8'>
      {Array.from({ length: count }).map((_, index) => (
        <DiagramSkeleton key={index} />
      ))}
    </div>
  );
}

export function HeaderSkeleton() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-10 w-1/2 bg-slate-700' />
      <Skeleton className='h-6 w-3/4 bg-slate-700' />
      <div className='flex flex-wrap gap-2'>
        <Skeleton className='h-6 w-20 bg-slate-700' />
        <Skeleton className='h-6 w-24 bg-slate-700' />
        <Skeleton className='h-6 w-16 bg-slate-700' />
      </div>
    </div>
  );
}
