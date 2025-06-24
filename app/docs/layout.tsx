'use client';

import { Menu, PanelLeftClose } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

import { MobileNav } from '@/components/mobile-nav';
import { DocsSidebar } from '@/components/sidebar';
import Button from '@/components/ui/button';

interface DocsLayoutProps {
  children: React.ReactNode;
}

// Компонент кнопки переключения sidebar
const SidebarToggle = memo(({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={onToggle}
    className="fixed top-4 left-4 z-50 lg:hidden bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/80 transition-all duration-200"
    aria-label={isOpen ? 'Закрыть боковую панель' : 'Открыть боковую панель'}
    aria-expanded={isOpen}
  >
    {isOpen ? <PanelLeftClose className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
  </Button>
));

SidebarToggle.displayName = 'SidebarToggle';

// Основной компонент layout
const DocsLayout = memo(({ children }: DocsLayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Устанавливаем флаг клиента после монтирования
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  // Обработчик клика вне sidebar
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      // Проверяем, что клик был не в sidebar и не в кнопке toggle
      const target = event.target as HTMLElement;
      if (!target.closest('[data-sidebar-toggle]') && !target.closest('[data-sidebar]')) {
        setSidebarOpen(false);
      }
    }
  }, []);

  // Обработчик изменения размера окна
  const handleResize = useCallback(() => {
    // На мобильных устройствах закрываем sidebar
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, []);

  // Закрытие sidebar по клику вне его области
  useEffect(() => {
    if (!isClient) return;

    // Добавляем обработчик только на больших экранах
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isClient]);

  // Обработчик изменения размера окна
  useEffect(() => {
    if (!isClient) return;

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, isClient]);

  // Инициализация состояния sidebar на основе размера экрана
  useEffect(() => {
    if (!isClient) return;

    // На мобильных устройствах закрываем sidebar
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [isClient]);

  return (
    <div className='flex min-h-screen bg-slate-900 text-slate-100'>
      {/* Desktop Sidebar (collapsible) */}
      <div className='hidden lg:block' ref={sidebarRef} data-sidebar>
        <DocsSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      </div>

      {/* Mobile Sidebar (drawer) */}
      <MobileNav />

      {/* Mobile Toggle Button */}
      <SidebarToggle isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-72 xl:ml-80' : 'lg:ml-16 xl:ml-20'}`}
        role='main'
        aria-label='Основной контент документации'
      >
        <div className='container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 w-full max-w-none'>
          {children}
        </div>
      </main>
    </div>
  );
});

DocsLayout.displayName = 'DocsLayout';

export default DocsLayout;
