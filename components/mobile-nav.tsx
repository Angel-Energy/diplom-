'use client';

import { Menu, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { DocsSidebar } from './sidebar';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className='lg:hidden'>
      <div className='flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 bg-slate-900'>
        <Link href='/' className='flex items-center space-x-2' aria-label='Главная страница'>
          <Gamepad2 className='h-5 w-5 sm:h-6 sm:w-6 text-cyan-400' />
          <span className='font-bold text-white text-sm sm:text-base'>Сообщение 404</span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='sm'
              className='text-slate-400 p-2'
              aria-label='Открыть меню навигации'
              aria-expanded={open}
            >
              <Menu className='h-4 w-4 sm:h-5 sm:w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='p-0 w-64 sm:w-80 max-w-[85vw]'>
            <DocsSidebar isOpen={true} toggle={undefined} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
