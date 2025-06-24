'use client';

import { Smartphone, Palette, Navigation, Eye, Zap } from 'lucide-react';
import { Suspense, useState } from 'react';

import { HeaderSkeleton, DiagramGridSkeleton, GridSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function UiUxHeader() {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
        UI/UX дизайн
      </h1>
      <p className='text-xl text-slate-300'>
        Пользовательский интерфейс и опыт взаимодействия с игрой "Сообщение 404"
      </p>
      <div className='flex flex-wrap gap-2'>
        <Badge className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>Тёмная тема</Badge>
        <Badge className='bg-purple-500/10 text-purple-400 border-purple-500/20'>
          Портретный режим
        </Badge>
        <Badge className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>Jetpack Compose</Badge>
      </div>
    </div>
  );
}

function DesignPrinciplesSection({designPrinciples,}: {
  designPrinciples: { title: string; icon: any; color: string; description: string }[];
}) {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Palette className='h-6 w-6 mr-3 text-cyan-400' />
          Принципы дизайна
        </CardTitle>
        <CardDescription className='text-slate-400'>
          Основные принципы, которыми руководствуется дизайн интерфейса
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          {designPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className='flex items-start space-x-3'>
                <Icon className={`h-6 w-6 mt-1 ${principle.color}`} />
                <div>
                  <h4 className={`font-semibold ${principle.color}`}>{principle.title}</h4>
                  <p className='text-slate-300 text-sm'>{principle.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function MockupsSection({ mockups }: { mockups: { title: string; svg: React.ReactNode }[] }) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {mockups.map((mockup, index) => (
        <Card key={index} className='bg-slate-800/50 border-slate-700/50'>
          <CardHeader>
            <CardTitle className='text-white'>{mockup.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='max-w-xs mx-auto'>{mockup.svg}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function DiagramsSection({
  diagrams,
  onExpand,
}: {
  diagrams: {
    title: string;
    description: string;
    src?: string;
    mermaidCode?: string;
    category?: string;
  }[];
  onExpand: (diagram: any) => void;
}) {
  return (
    <div className='space-y-8'>
      {diagrams.map((diagram, index) => (
        <MermaidDiagram
          key={index}
          src={diagram.src ?? ''}
          mermaidCode={diagram.mermaidCode ?? ''}
          title={diagram.title}
          description={diagram.description}
          category={diagram.category || 'Игровые механики'}
        />
      ))}
    </div>
  );
}

function UiUxContent() {
  const [expandedDiagram, setExpandedDiagram] = useState<{
    mermaidCode: string;
    title: string;
  } | null>(null);

  const diagrams = [
    {
      title: 'Навигационный граф',
      description:
        "Эта диаграмма — дорожная карта для пользователя 'Сообщение 404'. Она показывает все экраны и переходы между ними: от главного меню до экрана чата и настроек. Для UI/UX дизайнеров это основной инструмент для проектирования интуитивно понятной и логичной навигации в приложении.",
      mermaidCode: `graph TD
    A[Главный экран] --> B[Экран чата]
    A --> C[Настройки]
    B --> A
    C --> A`,
      category: 'UI/UX',
    },
    {
      title: 'Компонентная иерархия',
      description:
        "Для frontend-разработчиков 'Сообщение 404' эта диаграмма — ключ к пониманию структуры UI. Она показывает, как экраны строятся из переиспользуемых компонентов Jetpack Compose: от Scaffold до кастомных Button и MessageBubble. Это ускоряет разработку и обеспечивает консистентность интерфейса.",
      mermaidCode: `graph TD
    A[Screen] --> B(Scaffold)
    B --> C(TopAppBar)
    B --> D(MessageList)
    D --> E(MessageBubble)
    B --> F(InputBar)`,
      category: 'UI/UX',
    },
    {
      title: 'Диаграмма состояний UI',
      description:
        "Эта диаграмма важна для обеспечения качественного UX в 'Сообщение 404'. Она показывает все состояния экрана чата: загрузка, отображение сообщений, ввод текста, отправка, ошибка. Правильная реализация этих состояний (например, показ скелетонов при загрузке) делает интерфейс отзывчивым и понятным.",
      mermaidCode: `stateDiagram-v2
    [*] --> Loading
    Loading --> Idle : Сообщения загружены
    Idle --> Typing : Пользователь печатает
    Typing --> Idle : Сообщение отправлено
    Idle --> Error : Ошибка отправки
    Error --> Idle : Повторная попытка`,
      category: 'UI/UX',
    },
    {
      title: 'Адаптивность и ориентация',
      description:
        'Описывает адаптивность интерфейса: Портретная ориентация (основная), поддержка разных размеров экранов, темная тема, доступность. Мессенджер-интерфейс оптимизирован для вертикального использования.',
      mermaidCode: `graph TD
    A["Адаптивность UI\\nJetpack Compose"] --> B["Портретная ориентация\\nОсновная"]
    A --> C["Размеры экранов\\nПоддержка"]
    A --> D["Темная тема\\nОбязательная"]
    A --> E["Доступность\\nAccessibility"]
    
    B --> F["Вертикальный чат\\nПузырьки сообщений"]
    B --> G["Кнопки выбора\\nВнизу экрана"]
    B --> H["Мини-игры\\nПолноэкранный режим"]
    
    C --> I["Телефоны\\n720p - 4K"]
    C --> J["Планшеты\\nАдаптивные макеты"]
    
    D --> K["Темный фон\\n#121212"]
    D --> L["Светлый текст\\n#FFFFFF"]
    D --> M["Акцентные цвета\\nCyan/Purple"]
    
    E --> N["Поддержка TalkBack\\nScreen Reader"]
    E --> O["Увеличение текста\\nAccessibility Settings"]
    E --> P["Высокий контраст\\nColor Blind Support"]`,
      category: 'UI/UX',
    },
  ];

  const designPrinciples = [
    {
      title: 'Тёмная тема',
      icon: Eye,
      color: 'text-cyan-400',
      description: 'Основной фон #121212, акценты #BB86FC для комфорта глаз',
    },
    {
      title: 'Портретный режим',
      icon: Smartphone,
      color: 'text-purple-400',
      description: 'Оптимизация под экраны 720p+ в вертикальной ориентации',
    },
    {
      title: 'Плавные анимации',
      icon: Zap,
      color: 'text-cyan-400',
      description: '60 FPS анимации появления сообщений и переходов',
    },
    {
      title: 'Интуитивная навигация',
      icon: Navigation,
      color: 'text-purple-400',
      description: 'Jetpack Navigation с минимальной кривой обучения',
    },
  ];

  // Макеты приложения с простыми SVG
  const mockups = [
    {
      title: 'Экран чата - Светлая тема',
      svg: (
        <svg viewBox='0 0 320 568' className='w-full h-auto rounded-lg border bg-white'>
          <rect width='320' height='568' fill='#FFFFFF' />
          <rect x='10' y='10' width='300' height='40' fill='#F0F0F0' />
          <text x='160' y='35' textAnchor='middle' fill='#000000' fontSize='16'>
            Елена
          </text>
          <rect x='10' y='60' width='220' height='40' rx='10' fill='#E0E0E0' />
          <text x='20' y='85' fill='#000000' fontSize='14'>
            Привет! Как дела?
          </text>
          <rect x='90' y='110' width='220' height='40' rx='10' fill='#007AFF' />
          <text x='100' y='135' fill='#FFFFFF' fontSize='14'>
            Привет, все хорошо!
          </text>
          <rect x='10' y='518' width='300' height='40' fill='#F0F0F0' />
          <text x='20' y='543' fill='#8E8E93' fontSize='14'>
            Написать сообщение...
          </text>
        </svg>
      ),
    },
    {
      title: 'Экран чата - Темная тема',
      svg: (
        <svg
          viewBox='0 0 320 568'
          className='w-full h-auto rounded-lg border border-slate-700 bg-slate-900'
        >
          <rect width='320' height='568' fill='#1C1C1E' />
          <rect x='10' y='10' width='300' height='40' fill='#2C2C2E' />
          <text x='160' y='35' textAnchor='middle' fill='#FFFFFF' fontSize='16'>
            Елена
          </text>
          <rect x='10' y='60' width='220' height='40' rx='10' fill='#3A3A3C' />
          <text x='20' y='85' fill='#FFFFFF' fontSize='14'>
            Привет! Как дела?
          </text>
          <rect x='90' y='110' width='220' height='40' rx='10' fill='#0A84FF' />
          <text x='100' y='135' fill='#FFFFFF' fontSize='14'>
            Привет, все хорошо!
          </text>
          <rect x='10' y='518' width='300' height='40' fill='#2C2C2E' />
          <text x='20' y='543' fill='#8E8E93' fontSize='14'>
            Написать сообщение...
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className='space-y-8'>
      <UiUxHeader />
      <DesignPrinciplesSection designPrinciples={designPrinciples} />
      <MockupsSection mockups={mockups} />
      <DiagramsSection diagrams={diagrams} onExpand={setExpandedDiagram} />
      <Dialog open={!!expandedDiagram} onOpenChange={() => setExpandedDiagram(null)}>
        <DialogContent className='max-w-4xl max-h-[80vh] overflow-auto'>
          <DialogHeader>
            <DialogTitle>{expandedDiagram?.title}</DialogTitle>
          </DialogHeader>
          {expandedDiagram && (
            <div className='mt-4'>
              <MermaidDiagram
                title={expandedDiagram.title}
                description=''
                mermaidCode={expandedDiagram.mermaidCode}
                category='UI/UX'
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function UiUxPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
          <div className='h-48 bg-slate-800/50 border border-slate-700/50 rounded-lg animate-pulse' />
          <GridSkeleton count={2} />
          <DiagramGridSkeleton count={4} />
        </div>
      }
    >
      <UiUxContent />
    </Suspense>
  );
}
