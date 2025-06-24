'use client';

import {
  CheckCircle,
  AlertCircle,
  Shield,
  Zap,
  Database,
  Smartphone,
  Users,
  FileText,
} from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function RequirementsHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
        Требования к проекту
      </h1>
      <p className='text-slate-300 text-lg'>
        Детальное описание функциональных и нефункциональных требований для мобильной игры
        «Сообщение 404».
      </p>
      <RequirementsBadges />
    </div>
  );
}

function RequirementsBadges() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
        MUST
      </Badge>
      <Badge variant='outline' className='bg-yellow-500/10 text-yellow-400 border-yellow-400/20'>
        SHOULD
      </Badge>
      <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
        COULD
      </Badge>
      <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
        152-ФЗ
      </Badge>
    </div>
  );
}

function RequirementList({requirements,}: {
  requirements: { title: string; description: string }[];
}) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {requirements.map(r => (
        <RequirementCard key={r.title} title={r.title} description={r.description} />
      ))}
    </div>
  );
}

function RequirementCard({ title, description }: { title: string; description: string }) {
  return (
    <div className='bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg'>
      <h3 className='text-lg font-semibold text-cyan-400 mb-2'>{title}</h3>
      <p className='text-slate-300'>{description}</p>
    </div>
  );
}

function RequirementsContent() {
  return (
    <div className='w-full max-w-none'>
      <div className='space-y-8'>
        <RequirementsHeader />
        <RequirementList requirements={[]} />

        {/* Функциональные требования */}
        <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
          <CardHeader>
            <CardTitle className='text-white flex items-center'>
              <CheckCircle className='h-6 w-6 mr-3 text-green-400' />
              Функциональные требования
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='text-slate-300'>
              <h4 className='text-lg font-semibold text-white mb-4'>Основные функции приложения</h4>

              <div className='space-y-4'>
                <div className='border-l-4 border-green-500 pl-4'>
                  <h5 className='text-green-400 font-semibold mb-2'>
                    FR-001: Система авторизации (MUST)
                  </h5>
                  <p className='text-sm'>
                    Анонимная авторизация пользователей с генерацией уникального userId без сбора
                    персональных данных
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20 text-xs'
                    >
                      152-ФЗ
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs'
                    >
                      Безопасность
                    </Badge>
                  </div>
                </div>

                <div className='border-l-4 border-green-500 pl-4'>
                  <h5 className='text-green-400 font-semibold mb-2'>FR-002: Чат-система (MUST)</h5>
                  <p className='text-sm'>
                    Имитация мессенджера с поддержкой текстовых сообщений, эмодзи, файлов и
                    зашифрованных сообщений
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs'
                    >
                      UI/UX
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20 text-xs'
                    >
                      Интерактивность
                    </Badge>
                  </div>
                </div>

                <div className='border-l-4 border-green-500 pl-4'>
                  <h5 className='text-green-400 font-semibold mb-2'>
                    FR-003: Ветвящиеся диалоги (MUST)
                  </h5>
                  <p className='text-sm'>
                    Система выборов с 2-4 вариантами ответа, влияющими на развитие сюжета и
                    отношения с персонажами
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs'
                    >
                      Геймдизайн
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20 text-xs'
                    >
                      Сюжет
                    </Badge>
                  </div>
                </div>

                <div className='border-l-4 border-green-500 pl-4'>
                  <h5 className='text-green-400 font-semibold mb-2'>FR-004: Мини-игры (MUST)</h5>
                  <p className='text-sm'>
                    60 задач по программированию (Python/JavaScript), расшифровке сообщений и
                    логическим головоломкам
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs'
                    >
                      Образование
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs'
                    >
                      Геймплей
                    </Badge>
                  </div>
                </div>

                <div className='border-l-4 border-yellow-500 pl-4'>
                  <h5 className='text-yellow-400 font-semibold mb-2'>
                    FR-005: Система прогресса (SHOULD)
                  </h5>
                  <p className='text-sm'>
                    Отслеживание прохождения дней (1-10), сюжетных флагов и статистики игрока
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs'
                    >
                      Аналитика
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20 text-xs'
                    >
                      UX
                    </Badge>
                  </div>
                </div>

                <div className='border-l-4 border-yellow-500 pl-4'>
                  <h5 className='text-yellow-400 font-semibold mb-2'>
                    FR-006: Синхронизация (SHOULD)
                  </h5>
                  <p className='text-sm'>
                    Автоматическая синхронизация прогресса с локальным Ktor-сервером при наличии
                    Wi-Fi
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20 text-xs'
                    >
                      Офлайн-режим
                    </Badge>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs'
                    >
                      Сеть
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Нефункциональные требования */}
        <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
          <CardHeader>
            <CardTitle className='text-white flex items-center'>
              <Shield className='h-6 w-6 mr-3 text-indigo-400' />
              Нефункциональные требования
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='text-slate-300'>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Технические и правовые требования
              </h4>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <h5 className='text-indigo-400 font-semibold'>Безопасность и соответствие</h5>

                  <div className='border-l-4 border-green-500 pl-4'>
                    <h6 className='text-green-400 font-semibold mb-1'>
                      NFR-001: Шифрование данных (MUST)
                    </h6>
                    <p className='text-sm'>
                      AES-256 для локального хранения, TLS 1.2+ для передачи данных
                    </p>
                  </div>

                  <div className='border-l-4 border-green-500 pl-4'>
                    <h6 className='text-green-400 font-semibold mb-1'>
                      NFR-002: Анонимность (MUST)
                    </h6>
                    <p className='text-sm'>
                      Отсутствие сбора персональных данных, анонимные идентификаторы (152-ФЗ)
                    </p>
                  </div>

                  <div className='border-l-4 border-green-500 pl-4'>
                    <h6 className='text-green-400 font-semibold mb-1'>
                      NFR-003: Офлайн-режим (MUST)
                    </h6>
                    <p className='text-sm'>Полная функциональность без интернет-соединения</p>
                  </div>

                  <div className='border-l-4 border-yellow-500 pl-4'>
                    <h6 className='text-yellow-400 font-semibold mb-1'>
                      NFR-004: Производительность (SHOULD)
                    </h6>
                    <p className='text-sm'>
                      Время загрузки экранов &lt; 2 секунд, плавная анимация 60 FPS
                    </p>
                  </div>
                </div>

                <div className='space-y-4'>
                  <h5 className='text-indigo-400 font-semibold'>Платформа и совместимость</h5>

                  <div className='border-l-4 border-green-500 pl-4'>
                    <h6 className='text-green-400 font-semibold mb-1'>
                      NFR-005: Android совместимость (MUST)
                    </h6>
                    <p className='text-sm'>Поддержка Android API 21+ (Android 5.0 Lollipop)</p>
                  </div>

                  <div className='border-l-4 border-green-500 pl-4'>
                    <h6 className='text-green-400 font-semibold mb-1'>
                      NFR-006: Адаптивность (MUST)
                    </h6>
                    <p className='text-sm'>
                      Поддержка экранов 4.7-6.7 дюймов, портретная ориентация
                    </p>
                  </div>

                  <div className='border-l-4 border-yellow-500 pl-4'>
                    <h6 className='text-yellow-400 font-semibold mb-1'>
                      NFR-007: Доступность (SHOULD)
                    </h6>
                    <p className='text-sm'>Поддержка TalkBack, высокая контрастность (WCAG 2.1)</p>
                  </div>

                  <div className='border-l-4 border-blue-500 pl-4'>
                    <h6 className='text-blue-400 font-semibold mb-1'>
                      NFR-008: Тёмная тема (COULD)
                    </h6>
                    <p className='text-sm'>
                      Поддержка Material 3 Design с тёмной темой по умолчанию
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Системные требования */}
        <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
          <CardHeader>
            <CardTitle className='text-white flex items-center'>
              <Smartphone className='h-6 w-6 mr-3 text-blue-400' />
              Системные требования
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-white'>Минимальные требования</h4>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Операционная система</span>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20'
                    >
                      Android 5.0+
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>API Level</span>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20'
                    >
                      API 21+
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>RAM</span>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20'
                    >
                      2 ГБ
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Хранилище</span>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20'
                    >
                      100 МБ
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Разрешение экрана</span>
                    <Badge
                      variant='outline'
                      className='bg-green-500/10 text-green-400 border-green-500/20'
                    >
                      720p+
                    </Badge>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-white'>Рекомендуемые требования</h4>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Операционная система</span>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20'
                    >
                      Android 8.0+
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>API Level</span>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20'
                    >
                      API 26+
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>RAM</span>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20'
                    >
                      4 ГБ
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Хранилище</span>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20'
                    >
                      500 МБ
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
                    <span className='text-slate-300'>Разрешение экрана</span>
                    <Badge
                      variant='outline'
                      className='bg-blue-500/10 text-blue-400 border-blue-500/20'
                    >
                      1080p+
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Серверные требования */}
        <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
          <CardHeader>
            <CardTitle className='text-white flex items-center'>
              <Database className='h-6 w-6 mr-3 text-indigo-400' />
              Серверные требования
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='text-slate-300'>
              <h4 className='text-lg font-semibold text-white mb-4'>Локальный Ktor-сервер</h4>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <h5 className='text-indigo-400 font-semibold'>Системные требования сервера</h5>
                  <ul className='space-y-2 list-disc pl-5'>
                    <li>
                      <strong>ОС:</strong> Windows 10/11, macOS 10.15+, Ubuntu 18.04+
                    </li>
                    <li>
                      <strong>RAM:</strong> 4 ГБ (рекомендуется 8 ГБ)
                    </li>
                    <li>
                      <strong>CPU:</strong> 2 ядра (рекомендуется 4 ядра)
                    </li>
                    <li>
                      <strong>Хранилище:</strong> 1 ГБ свободного места
                    </li>
                    <li>
                      <strong>Сеть:</strong> Wi-Fi роутер с поддержкой 192.168.137.1
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <h5 className='text-indigo-400 font-semibold'>Программное обеспечение</h5>
                  <ul className='space-y-2 list-disc pl-5'>
                    <li>
                      <strong>Java:</strong> JDK 11+
                    </li>
                    <li>
                      <strong>Ktor:</strong> 2.3.0+
                    </li>
                    <li>
                      <strong>MySQL:</strong> 8.0+
                    </li>
                    <li>
                      <strong>XAMPP:</strong> Рекомендуется для простоты установки
                    </li>
                    <li>
                      <strong>Git:</strong> Для контроля версий
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Документация и тестирование */}
        <Card className='bg-slate-800/50 border-slate-700/50'>
          <CardHeader>
            <CardTitle className='text-white flex items-center'>
              <FileText className='h-6 w-6 mr-3 text-cyan-400' />
              Документация и тестирование
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-white'>Документация</h4>
                <ul className='space-y-2 list-disc pl-5 text-slate-300'>
                  <li>
                    <strong>DR-001:</strong> Архитектурная документация (MUST)
                  </li>
                  <li>
                    <strong>DR-002:</strong> API документация (Swagger/OpenAPI) (SHOULD)
                  </li>
                  <li>
                    <strong>DR-003:</strong> Пользовательская документация (COULD)
                  </li>
                  <li>
                    <strong>DR-004:</strong> Код комментирован (JSDoc/KDoc) (MUST)
                  </li>
                </ul>
              </div>

              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-white'>Тестирование</h4>
                <ul className='space-y-2 list-disc pl-5 text-slate-300'>
                  <li>
                    <strong>TR-001:</strong> Юнит-тесты &gt;80% покрытия (SHOULD)
                  </li>
                  <li>
                    <strong>TR-002:</strong> Интеграционные тесты для API (MUST)
                  </li>
                  <li>
                    <strong>TR-003:</strong> UI-тесты (Espresso/Compose) (SHOULD)
                  </li>
                  <li>
                    <strong>TR-004:</strong> Нагрузочное тестирование сервера (COULD)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function RequirementsPage() {
  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <RequirementsContent />
    </Suspense>
  );
}
