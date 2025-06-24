'use client';

import {
  Bug,
  Database,
  HelpCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  TestTube,
  Code,
  Smartphone,
  Shield,
  Users,
} from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function QaHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
        QA Testing и обеспечение качества
      </h1>
      <p className='text-xl text-slate-300'>
        Комплексная стратегия тестирования мобильной игры-детектива с акцентом на автоматизацию и
        покрытие
      </p>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
          JUnit + Mockito
        </Badge>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          Espresso
        </Badge>
        <Badge variant='outline' className='bg-green-500/10 text-green-400 border-green-500/20'>
          Postman
        </Badge>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          CI/CD
        </Badge>
      </div>
    </div>
  );
}

function TestStrategySection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <TestTube className='h-6 w-6 mr-3 text-green-400' />
          Стратегия тестирования
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Пирамида тестирования</h4>
          <p className='text-slate-300 leading-relaxed'>
            Проект использует классическую пирамиду тестирования с акцентом на автоматизацию и
            покрытие критически важных компонентов. Цель — достичь 80% покрытия кода юнит-тестами и
            100% покрытия критических пользовательских сценариев.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='space-y-3'>
            <h5 className='text-blue-400 font-semibold'>Юнит-тесты (70%)</h5>
            <ul className='text-slate-300 text-sm space-y-2'>
              <li>• Use Cases и бизнес-логика</li>
              <li>• Repository методы</li>
              <li>• Утилиты и хелперы</li>
              <li>• Валидация данных</li>
              <li>• Криптографические функции</li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h5 className='text-blue-400 font-semibold'>Интеграционные тесты (20%)</h5>
            <ul className='text-slate-300 text-sm space-y-2'>
              <li>• Room Database операции</li>
              <li>• Retrofit API клиент</li>
              <li>• Синхронизация данных</li>
              <li>• JWT аутентификация</li>
              <li>• Обработка ошибок</li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h5 className='text-blue-400 font-semibold'>UI тесты (10%)</h5>
            <ul className='text-slate-300 text-sm space-y-2'>
              <li>• Критические пользовательские сценарии</li>
              <li>• Навигация между экранами</li>
              <li>• Интерактивные элементы</li>
              <li>• Accessibility тесты</li>
              <li>• Адаптивность UI</li>
            </ul>
          </div>
        </div>

        <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
          <h5 className='text-green-400 font-semibold mb-3'>Метрики покрытия</h5>
          <div className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded'>
            <div>Целевые метрики покрытия:</div>
            <div>• Юнит-тесты: 80% (текущее: 75%)</div>
            <div>• Интеграционные тесты: 95%</div>
            <div>• UI тесты: 100% критических сценариев</div>
            <div>• Производительность: время запуска &lt; 3с</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function UnitTestSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Code className='h-6 w-6 mr-3 text-blue-400' />
          Юнит-тестирование
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Инструменты и фреймворки</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Основные инструменты</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>JUnit 5:</strong> Основной фреймворк тестирования
                </li>
                <li>
                  • <strong>Mockito:</strong> Мокирование зависимостей
                </li>
                <li>
                  • <strong>Kotlin Test:</strong> Дополнительные утилиты
                </li>
                <li>
                  • <strong>Coroutines Test:</strong> Тестирование асинхронного кода
                </li>
                <li>
                  • <strong>Robolectric:</strong> Тестирование Android компонентов
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Специализированные тесты</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Room Testing:</strong> Тестирование базы данных
                </li>
                <li>
                  • <strong>Retrofit Testing:</strong> Тестирование API
                </li>
                <li>
                  • <strong>Security Testing:</strong> Тестирование шифрования
                </li>
                <li>
                  • <strong>DataStore Testing:</strong> Тестирование настроек
                </li>
                <li>
                  • <strong>JSON Testing:</strong> Тестирование парсинга
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
          <h5 className='text-green-400 font-semibold mb-3'>Пример теста Use Case</h5>
          <div className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded'>
            <div>Тестирование GetSceneUseCase:</div>
            <div>• Проверка успешного получения сцены</div>
            <div>• Валидация входных параметров</div>
            <div>• Обработка ошибок репозитория</div>
            <div>• Проверка возвращаемых данных</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function UiTestSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Smartphone className='h-6 w-6 mr-3 text-green-400' />
          UI тестирование
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Espresso тесты</h4>
          <p className='text-slate-300 leading-relaxed'>
            UI тесты покрывают критически важные пользовательские сценарии, включая навигацию,
            интерактивные элементы и accessibility. Используется Espresso для Android и
            специализированные тесты для Jetpack Compose.
          </p>
        </div>

        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Критические сценарии</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Чат-интерфейс</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Отображение сообщений</li>
                <li>• Выбор вариантов ответа</li>
                <li>• Прокрутка истории чата</li>
                <li>• Анимации появления</li>
                <li>• Accessibility (TalkBack)</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Мини-игры</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Отображение кода</li>
                <li>• Ввод ответов</li>
                <li>• Валидация решений</li>
                <li>• Подсветка синтаксиса</li>
                <li>• Обработка ошибок</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
          <h5 className='text-green-400 font-semibold mb-3'>Пример UI теста</h5>
          <div className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded'>
            <div>Тестирование чат-интерфейса:</div>
            <div>• Загрузка тестовой сцены</div>
            <div>• Проверка отображения сообщений</div>
            <div>• Тестирование выбора ответов</div>
            <div>• Валидация навигации</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IntegrationTestSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Database className='h-6 w-6 mr-3 text-blue-400' />
          Интеграционное тестирование
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Тестирование базы данных</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Room Database тесты</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• CRUD операции</li>
                <li>• Миграции схемы</li>
                <li>• Шифрование данных</li>
                <li>• Производительность запросов</li>
                <li>• Целостность данных</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>API тестирование</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• HTTP запросы и ответы</li>
                <li>• Обработка ошибок сети</li>
                <li>• JWT аутентификация</li>
                <li>• Certificate pinning</li>
                <li>• Синхронизация данных</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
          <h5 className='text-green-400 font-semibold mb-3'>Пример интеграционного теста</h5>
          <div className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded'>
            <div>Тестирование синхронизации данных:</div>
            <div>• Создание in-memory базы данных</div>
            <div>• Мокирование API сервиса</div>
            <div>• Тестирование отправки данных</div>
            <div>• Валидация сохранения результатов</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PerformanceTestSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Bug className='h-6 w-6 mr-3 text-red-400' />
          Тестирование производительности
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Метрики производительности</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Клиентские метрики</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Время запуска:</strong> &lt; 3 секунд
                </li>
                <li>
                  • <strong>Частота кадров:</strong> 60 FPS
                </li>
                <li>
                  • <strong>Использование памяти:</strong> &lt; 200 МБ
                </li>
                <li>
                  • <strong>Влияние на батарею:</strong> минимальное
                </li>
                <li>
                  • <strong>Размер APK:</strong> &lt; 50 МБ
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Серверные метрики</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Время ответа API:</strong> &lt; 100 мс
                </li>
                <li>
                  • <strong>Пропускная способность:</strong> 1000 req/sec
                </li>
                <li>
                  • <strong>Время запроса БД:</strong> &lt; 50 мс
                </li>
                <li>
                  • <strong>Время безотказной работы:</strong> 99.9%
                </li>
                <li>
                  • <strong>Одновременные пользователи:</strong> 100+
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Инструменты профилирования</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Android Studio</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• CPU Profiler</li>
                <li>• Memory Profiler</li>
                <li>• Network Profiler</li>
                <li>• Energy Profiler</li>
                <li>• Layout Inspector</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Специализированные инструменты</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Firebase Performance</li>
                <li>• LeakCanary</li>
                <li>• Stetho</li>
                <li>• Postman (API тестирование)</li>
                <li>• JMeter (нагрузочное тестирование)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SecurityTestSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Shield className='h-6 w-6 mr-3 text-green-400' />
          Безопасность и нагрузочное тестирование
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Тестирование безопасности</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Криптографические тесты</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Валидация AES-256 шифрования</li>
                <li>• Тестирование JWT токенов</li>
                <li>• Проверка Certificate Pinning</li>
                <li>• Тестирование TLS соединений</li>
                <li>• Проверка хеширования паролей</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Тестирование уязвимостей</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• SQL-инъекции</li>
                <li>• XSS атаки</li>
                <li>• CSRF атаки</li>
                <li>• Rate limiting</li>
                <li>• Input validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Нагрузочное тестирование</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Серверные нагрузки</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• 100+ одновременных пользователей</li>
                <li>• 1000+ запросов в секунду</li>
                <li>• Тестирование базы данных</li>
                <li>• Проверка памяти сервера</li>
                <li>• Тестирование сети</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Клиентские нагрузки</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Длительная игра (10+ часов)</li>
                <li>• Быстрые действия пользователя</li>
                <li>• Тестирование памяти устройства</li>
                <li>• Проверка батареи</li>
                <li>• Тестирование сети</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RecommendationsSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Users className='h-6 w-6 mr-3 text-purple-400' />
          Рекомендации по тестированию
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Лучшие практики</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Организация тестов</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Используйте описательные имена тестов</li>
                <li>• Группируйте тесты по функциональности</li>
                <li>• Используйте @Tag для категоризации</li>
                <li>• Поддерживайте тесты в актуальном состоянии</li>
                <li>• Документируйте сложные тестовые сценарии</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Автоматизация</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Интегрируйте тесты в CI/CD pipeline</li>
                <li>• Используйте параллельное выполнение</li>
                <li>• Настройте автоматические отчеты</li>
                <li>• Мониторьте покрытие кода</li>
                <li>• Настройте уведомления о падении тестов</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Специфичные для проекта</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Офлайн-режим</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Тестируйте все функции без сети</li>
                <li>• Проверяйте синхронизацию при восстановлении</li>
                <li>• Тестируйте разрешение конфликтов</li>
                <li>• Проверяйте целостность данных</li>
                <li>• Тестируйте производительность офлайн</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Игровые механики</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Тестируйте все ветки диалогов</li>
                <li>• Проверяйте корректность флагов</li>
                <li>• Тестируйте мини-игры</li>
                <li>• Проверяйте концовки</li>
                <li>• Тестируйте сохранение прогресса</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReportsSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <CheckCircle className='h-6 w-6 mr-3 text-green-400' />
          Отчеты по тестированию
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Текущие результаты тестирования</h4>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
              <h5 className='text-blue-400 font-semibold mb-3'>Юнит-тесты</h5>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Покрытие кода:</span>
                  <span className='text-green-400 font-medium'>75%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Всего тестов:</span>
                  <span className='text-slate-200'>1,247</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Успешных:</span>
                  <span className='text-green-400'>1,241</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Проваленных:</span>
                  <span className='text-red-400'>6</span>
                </div>
                <div className='w-full bg-slate-700 rounded-full h-2 mt-2'>
                  <div className='bg-green-500 h-2 rounded-full' style={{ width: '99.5%' }} />
                </div>
              </div>
            </div>

            <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
              <h5 className='text-blue-400 font-semibold mb-3'>Интеграционные тесты</h5>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Покрытие API:</span>
                  <span className='text-green-400 font-medium'>95%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Всего тестов:</span>
                  <span className='text-slate-200'>89</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Успешных:</span>
                  <span className='text-green-400'>87</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Проваленных:</span>
                  <span className='text-red-400'>2</span>
                </div>
                <div className='w-full bg-slate-700 rounded-full h-2 mt-2'>
                  <div className='bg-green-500 h-2 rounded-full' style={{ width: '97.8%' }} />
                </div>
              </div>
            </div>

            <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
              <h5 className='text-blue-400 font-semibold mb-3'>UI тесты</h5>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Покрытие сценариев:</span>
                  <span className='text-green-400 font-medium'>100%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Всего тестов:</span>
                  <span className='text-slate-200'>156</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Успешных:</span>
                  <span className='text-green-400'>154</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-slate-300'>Проваленных:</span>
                  <span className='text-red-400'>2</span>
                </div>
                <div className='w-full bg-slate-700 rounded-full h-2 mt-2'>
                  <div className='bg-green-500 h-2 rounded-full' style={{ width: '98.7%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h4 className='text-green-400 font-semibold text-lg'>Детальные отчеты</h4>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='performance-report' className='border-slate-700/50'>
              <AccordionTrigger className='text-slate-200 hover:text-cyan-400'>
                Отчет по производительности
              </AccordionTrigger>
              <AccordionContent className='text-slate-300'>
                <div className='space-y-3 text-sm'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Время запуска</h6>
                      <ul className='space-y-1'>
                        <li>• Холодный старт: 2.8 сек (цель: &lt; 3 сек) ✅</li>
                        <li>• Теплый старт: 1.2 сек (цель: &lt; 2 сек) ✅</li>
                        <li>• Горячий старт: 0.4 сек (цель: &lt; 1 сек) ✅</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Использование памяти</h6>
                      <ul className='space-y-1'>
                        <li>• Среднее: 145 МБ (цель: &lt; 200 МБ) ✅</li>
                        <li>• Пиковое: 180 МБ (цель: &lt; 250 МБ) ✅</li>
                        <li>• Утечки: не обнаружены ✅</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='security-report' className='border-slate-700/50'>
              <AccordionTrigger className='text-slate-200 hover:text-cyan-400'>
                Отчет по безопасности
              </AccordionTrigger>
              <AccordionContent className='text-slate-300'>
                <div className='space-y-3 text-sm'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Криптография</h6>
                      <ul className='space-y-1'>
                        <li>• AES-256 шифрование: ✅</li>
                        <li>• JWT токены: ✅</li>
                        <li>• Certificate Pinning: ✅</li>
                        <li>• TLS 1.2+: ✅</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Уязвимости</h6>
                      <ul className='space-y-1'>
                        <li>• SQL-инъекции: не обнаружены ✅</li>
                        <li>• XSS атаки: защищено ✅</li>
                        <li>• CSRF атаки: защищено ✅</li>
                        <li>• Rate limiting: настроен ✅</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='accessibility-report' className='border-slate-700/50'>
              <AccordionTrigger className='text-slate-200 hover:text-cyan-400'>
                Отчет по доступности
              </AccordionTrigger>
              <AccordionContent className='text-slate-300'>
                <div className='space-y-3 text-sm'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Screen Reader</h6>
                      <ul className='space-y-1'>
                        <li>• TalkBack поддержка: ✅</li>
                        <li>• VoiceOver поддержка: ✅</li>
                        <li>• ARIA labels: настроены ✅</li>
                        <li>• Навигация: доступна ✅</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Визуальная доступность</h6>
                      <ul className='space-y-1'>
                        <li>• Высокий контраст: ✅</li>
                        <li>• Увеличение текста: ✅</li>
                        <li>• Цветовая слепота: учтено ✅</li>
                        <li>• Анимации: контролируемые ✅</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='gameplay-report' className='border-slate-700/50'>
              <AccordionTrigger className='text-slate-200 hover:text-cyan-400'>
                Отчет по игровым механикам
              </AccordionTrigger>
              <AccordionContent className='text-slate-300'>
                <div className='space-y-3 text-sm'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Сюжетная линия</h6>
                      <ul className='space-y-1'>
                        <li>• Все диалоги: протестированы ✅</li>
                        <li>• Ветвления: корректны ✅</li>
                        <li>• Флаги состояния: работают ✅</li>
                        <li>• Концовки: доступны ✅</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className='text-blue-400 font-semibold mb-2'>Мини-игры</h6>
                      <ul className='space-y-1'>
                        <li>• Python игры: 30/30 ✅</li>
                        <li>• JavaScript игры: 30/30 ✅</li>
                        <li>• Валидация: корректна ✅</li>
                        <li>• Подсказки: работают ✅</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className='bg-slate-900/50 p-4 rounded-lg border border-slate-700/50'>
          <h5 className='text-green-400 font-semibold mb-3'>Общие выводы</h5>
          <div className='text-sm text-slate-300 space-y-2'>
            <div>
              • Общее покрытие тестами: <span className='text-green-400 font-medium'>82%</span>
            </div>
            <div>
              • Критические баги: <span className='text-green-400 font-medium'>0</span>
            </div>
            <div>
              • Критические сценарии:{' '}
              <span className='text-green-400 font-medium'>100% покрыты</span>
            </div>
            <div>
              • Готовность к релизу: <span className='text-green-400 font-medium'>95%</span>
            </div>
            <div>
              • Соответствие стандартам:{' '}
              <span className='text-green-400 font-medium'>ГОСТ Р 52872-2019 ✅</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function QaContent() {
  return (
    <div className='w-full max-w-none'>
      <QaHeader />
      <TestStrategySection />
      <UnitTestSection />
      <UiTestSection />
      <IntegrationTestSection />
      <PerformanceTestSection />
      <SecurityTestSection />
      <RecommendationsSection />
      <ReportsSection />
    </div>
  );
}

export default function QaPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
        </div>
      }
    >
      <QaContent />
    </Suspense>
  );
}
