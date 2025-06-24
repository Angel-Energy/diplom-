'use client';

import { ChevronDown, ChevronLeft, ChevronRight, FileText, Home, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback, memo } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Типы для навигации
interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationChild[];
}

interface NavigationChild {
  title: string;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  toggle?: () => void;
}

// Данные навигации
const navigation: NavigationItem[] = [
  {
    title: 'Введение',
    href: '/docs/introduction',
  },
  {
    title: 'Требования',
    href: '/docs/requirements',
  },
  {
    title: 'Архитектура',
    href: '/docs/architecture',
  },
  {
    title: 'Модель данных',
    href: '/docs/data-model',
  },
  {
    title: 'API',
    href: '/docs/api-specification',
  },
  {
    title: 'Модели поведения',
    href: '/docs/behavior-model',
  },
  {
    title: 'Дизайн игры',
    href: '/docs/game-design',
  },
  {
    title: 'UI/UX-дизайн',
    href: '/docs/ui-ux-design',
  },
  {
    title: 'Инфраструктура',
    href: '/docs/infrastructure',
  },
  {
    title: 'Руководство по развертыванию',
    href: '/docs/deployment-guide',
  },
  {
    title: 'Руководство разработчика',
    href: '/docs/development-guide',
  },
  {
    title: 'Юридические документы',
    href: '/docs/legal',
  },
  {
    title: 'Диаграммы',
    href: '/docs/diagrams',
    children: [
      { title: 'Архитектура', href: '/docs/diagrams/architecture' },
      { title: 'Данные', href: '/docs/diagrams/data' },
      { title: 'Игра', href: '/docs/diagrams/game' },
      { title: 'Поведение', href: '/docs/diagrams/behavior' },
      { title: 'Безопасность', href: '/docs/diagrams/security' },
      { title: 'API', href: '/docs/diagrams/api' },
      { title: 'UI/UX', href: '/docs/diagrams/ui' },
      { title: 'Инфраструктура', href: '/docs/diagrams/infrastructure' },
      { title: 'Тестирование', href: '/docs/diagrams/test' },
      { title: 'Жизненный цикл', href: '/docs/diagrams/lifecycle' },
      { title: 'Управление', href: '/docs/diagrams/management' },
    ],
  },
  {
    title: 'Ресурсы',
    href: '/docs/assets',
  },
  {
    title: 'История изменений',
    href: '/docs/changelog',
  },
];

// Компонент навигационного элемента
const NavigationItem = memo(
  ({
    item,
    pathname,
    expandedItems,
    onToggleExpanded,
  }: {
    item: NavigationItem;
    pathname: string;
    expandedItems: string[];
    onToggleExpanded: (title: string) => void;
  }) => {
    const isActive = pathname === item.href;
    const isExpanded = expandedItems.includes(item.title);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div>
        <div className='flex items-center'>
          <Link
            href={item.href}
            className={cn(
              'flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50',
              isActive
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
            )}
            aria-current={isActive ? 'page' : undefined}
            aria-expanded={hasChildren ? isExpanded : undefined}
          >
            {item.title}
          </Link>
          {hasChildren && (
            <Button
              variant='ghost'
              size='sm'
              onClick={() => onToggleExpanded(item.title)}
              className='p-1 h-6 w-6 sm:h-8 sm:w-8 text-slate-400 hover:text-slate-200 transition-colors duration-200'
              aria-label={`${isExpanded ? 'Свернуть' : 'Развернуть'} ${item.title}`}
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <ChevronDown className='h-3 w-3 sm:h-4 sm:w-4' />
              ) : (
                <ChevronRight className='h-3 w-3 sm:h-4 sm:w-4' />
              )}
            </Button>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div
            className='ml-2 sm:ml-4 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1'
            role='group'
            aria-label={`Подразделы ${item.title}`}
          >
            {item.children!.map(child => {
              const isChildActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50',
                    isChildActive
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  )}
                  aria-current={isChildActive ? 'page' : undefined}
                >
                  {child.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

// Основной компонент Sidebar
export const DocsSidebar = memo(({ isOpen, toggle }: SidebarProps) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = useCallback((title: string) => {
    setExpandedItems(prev =>
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  }, []);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-slate-900/95 border-r border-slate-700/50 overflow-y-auto backdrop-blur-sm transition-all duration-300 z-40',
        isOpen ? 'w-64' : 'w-16'
      )}
      data-sidebar
      role='complementary'
      aria-label='Навигация по документации'
    >
      {/* Header */}
      <div className='flex items-center w-full p-2 border-b border-slate-700/50 space-x-2'>
        <button
          onClick={toggle}
          className='flex-shrink-0 p-1 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
          aria-label='Переключить боковую панель'
          aria-expanded={isOpen}
          data-sidebar-toggle
        >
          <Image
            src='/images/icon.png'
            alt='Логотип Сообщение 404'
            width={24}
            height={24}
            className='rounded-lg'
          />
        </button>
        <div className={cn('transition-opacity duration-200', !isOpen && 'opacity-0 hidden')}>
          <Link
            href='/'
            className='group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded'
            aria-label='Перейти на главную страницу'
          >
            <h2 className='text-base font-bold text-slate-200 text-left group-hover:text-cyan-400 transition-colors duration-200'>
              Сообщение 404
            </h2>
            <p className='text-xs text-slate-400 text-left group-hover:text-slate-200 transition-colors duration-200'>
              Документация
            </p>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          'p-2 space-y-1 transition-opacity duration-200',
          !isOpen && 'opacity-0 hidden'
        )}
        role='navigation'
        aria-label='Основная навигация'
      >
        {navigation.map(item => (
          <NavigationItem
            key={item.title}
            item={item}
            pathname={pathname}
            expandedItems={expandedItems}
            onToggleExpanded={toggleExpanded}
          />
        ))}
      </nav>
    </aside>
  );
});

DocsSidebar.displayName = 'DocsSidebar';
