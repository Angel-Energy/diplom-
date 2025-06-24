'use client';

import { BookOpen, Users, Target, Gamepad2, Shield, Zap } from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function IntroductionContent() {
  return (
    <div className='w-full max-w-none'>
      <div className='space-y-4 mb-12'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
          Введение в проект
        </h1>
        <p className='text-slate-300 text-lg'>
          Психологический детектив «Сообщение 404» — инновационная игра для Android с ветвящимся
          сюжетом, мини-играми и глубокой проработкой персонажей.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
            Детектив
          </Badge>
          <Badge
            variant='outline'
            className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
          >
            Android
          </Badge>
          <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
            Kotlin
          </Badge>
          <Badge
            variant='outline'
            className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
          >
            Jetpack Compose
          </Badge>
        </div>
      </div>

      {/* Жанр и концепция */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Gamepad2 className='h-6 w-6 mr-3 text-blue-400' />
            Жанр и концепция
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-slate-300'>
            <p className='mb-4'>
              <strong>«Сообщение 404»</strong> — это психологический детектив, который сочетает в
              себе элементы визуальной новеллы, интерактивного повествования и головоломок. Игра
              построена на принципах ветвящегося сюжета, где каждый выбор игрока влияет на развитие
              событий и приводит к различным концовкам.
            </p>
            <p>
              Основная концепция игры — исследование человеческой природы через призму детективного
              сюжета, где игрок должен не только решать загадки, но и принимать моральные решения,
              влияющие на судьбы персонажей.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Целевая аудитория */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Users className='h-6 w-6 mr-3 text-indigo-400' />
            Целевая аудитория
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-slate-300'>
            <h4 className='text-lg font-semibold text-white mb-3'>Основная аудитория (16+)</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Любители детективов</strong> — поклонники жанра, ценящие логические загадки
                и интригующие сюжеты
              </li>
              <li>
                <strong>Геймеры-нарративисты</strong> — игроки, для которых важна история и развитие
                персонажей
              </li>
              <li>
                <strong>Поклонники визуальных новелл</strong> — аудитория, привыкшая к текстовым
                играм с выбором
              </li>
              <li>
                <strong>Мобильные геймеры</strong> — пользователи, предпочитающие игры на смартфонах
              </li>
            </ul>

            <h4 className='text-lg font-semibold text-white mb-3 mt-6'>Вторичная аудитория</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Разработчики</strong> — для изучения современных подходов к мобильной
                разработке
              </li>
              <li>
                <strong>Геймдизайнеры</strong> — для анализа ветвящихся сюжетов и игровых механик
              </li>
              <li>
                <strong>Студенты</strong> — для изучения Kotlin, Jetpack Compose и архитектуры
                приложений
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Сюжет */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <BookOpen className='h-6 w-6 mr-3 text-blue-400' />
            Сюжет и повествование
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-slate-300'>
            <h4 className='text-lg font-semibold text-white mb-3'>Основная история</h4>
            <p className='mb-4'>
              Действие игры происходит в течение 10 дней, в течение которых игрок исследует
              загадочные события, связанные с исчезновением людей и странными сообщениями. Главный
              герой получает анонимные сообщения, которые приводят его к раскрытию сложной сети
              интриг и преступлений.
            </p>

            <h4 className='text-lg font-semibold text-white mb-3'>Структура повествования</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>10 игровых дней</strong> — каждый день представляет отдельную главу с
                уникальными событиями
              </li>
              <li>
                <strong>60+ сюжетных путей</strong> — множество вариантов развития событий в
                зависимости от выборов игрока
              </li>
              <li>
                <strong>6 различных концовок</strong> — от счастливого финала до трагических
                развязок
              </li>
              <li>
                <strong>Динамические диалоги</strong> — система доверия/подозрения влияет на
                доступные варианты ответов
              </li>
            </ul>

            <h4 className='text-lg font-semibold text-white mb-3 mt-6'>Ключевые темы</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Моральные дилеммы</strong> — выбор между правдой и ложью, доверием и
                подозрением
              </li>
              <li>
                <strong>Человеческая природа</strong> — исследование мотивов и поступков персонажей
              </li>
              <li>
                <strong>Технологии и общество</strong> — роль современных технологий в преступлениях
              </li>
              <li>
                <strong>Правда и справедливость</strong> — поиск истины в мире, где не всё так, как
                кажется
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Персонажи */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Users className='h-6 w-6 mr-3 text-indigo-400' />
            Ключевые персонажи
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Алексей (Главный герой)</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Роль:</strong> Протагонист, программист-детектив
                </p>
                <p>
                  <strong>Характер:</strong> Любознательный, аналитический склад ума, склонен к
                  сомнениям
                </p>
                <p>
                  <strong>Мотивация:</strong> Поиск правды и справедливости
                </p>
                <p>
                  <strong>Развитие:</strong> От наивного наблюдателя до опытного детектива
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Елена (Загадочная незнакомка)</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Роль:</strong> Ключевой персонаж, источник информации
                </p>
                <p>
                  <strong>Характер:</strong> Загадочная, умная, манипулятивная
                </p>
                <p>
                  <strong>Мотивация:</strong> Скрыта, раскрывается по мере развития сюжета
                </p>
                <p>
                  <strong>Развитие:</strong> От подозрительной незнакомки до важного союзника или
                  противника
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Максим (Коллега-программист)</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Роль:</strong> Коллега Алексея, потенциальный союзник
                </p>
                <p>
                  <strong>Характер:</strong> Дружелюбный, технически подкованный, но может скрывать
                  секреты
                </p>
                <p>
                  <strong>Мотивация:</strong> Помощь другу или собственные интересы
                </p>
                <p>
                  <strong>Развитие:</strong> От доверенного коллеги до подозрительного персонажа
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Павел (Технический директор)</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Роль:</strong> Руководитель проекта, источник корпоративной информации
                </p>
                <p>
                  <strong>Характер:</strong> Профессиональный, требовательный, может быть вовлечен в
                  заговор
                </p>
                <p>
                  <strong>Мотивация:</strong> Защита компании или участие в преступлении
                </p>
                <p>
                  <strong>Развитие:</strong> От начальника до подозреваемого или союзника
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Анонимный источник</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Роль:</strong> Таинственный информатор
                </p>
                <p>
                  <strong>Характер:</strong> Неизвестен, возможно опасен
                </p>
                <p>
                  <strong>Мотивация:</strong> Неясна, может быть как доброй, так и злой
                </p>
                <p>
                  <strong>Развитие:</strong> Истинная личность раскрывается в финале
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-white'>Другие NPC</h4>
              <div className='text-slate-300 space-y-2'>
                <p>
                  <strong>Коллеги по работе:</strong> Различные программисты и сотрудники компании
                </p>
                <p>
                  <strong>Случайные знакомые:</strong> Люди, встречающиеся в ходе расследования
                </p>
                <p>
                  <strong>Техническая поддержка:</strong> Службы, которые могут помочь или помешать
                </p>
                <p>
                  <strong>Система доверия:</strong> Каждый NPC имеет свой уровень доверия/угрозы
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Технические особенности */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Zap className='h-6 w-6 mr-3 text-blue-400' />
            Технические особенности
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-slate-300'>
            <h4 className='text-lg font-semibold text-white mb-3'>Платформа и технологии</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Платформа:</strong> Android (API 21+)
              </li>
              <li>
                <strong>Язык программирования:</strong> Kotlin
              </li>
              <li>
                <strong>UI Framework:</strong> Jetpack Compose
              </li>
              <li>
                <strong>Архитектура:</strong> MVVM (Model-View-ViewModel)
              </li>
              <li>
                <strong>База данных:</strong> Room (SQLite) + MySQL через XAMPP
              </li>
              <li>
                <strong>Сервер:</strong> Ktor (локальный, IP: 192.168.137.1:8080)
              </li>
            </ul>

            <h4 className='text-lg font-semibold text-white mb-3 mt-6'>
              Безопасность и соответствие
            </h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Шифрование:</strong> AES-256, TLS 1.2+ (ГОСТ Р 34.12-2015)
              </li>
              <li>
                <strong>Персональные данные:</strong> Анонимные идентификаторы (152-ФЗ)
              </li>
              <li>
                <strong>Офлайн-режим:</strong> Полная функциональность без интернета
              </li>
              <li>
                <strong>Тёмная тема:</strong> Поддержка Material 3 Design
              </li>
            </ul>

            <h4 className='text-lg font-semibold text-white mb-3 mt-6'>Игровые механики</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li>
                <strong>Диалоговая система:</strong> Выборы влияют на развитие сюжета
              </li>
              <li>
                <strong>Мини-игры:</strong> Python/JavaScript головоломки
              </li>
              <li>
                <strong>Система доверия:</strong> Отслеживание отношений с персонажами
              </li>
              <li>
                <strong>Сохранение прогресса:</strong> Автоматическая синхронизация
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Цели проекта */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Target className='h-6 w-6 mr-3 text-indigo-400' />
            Цели проекта
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-slate-300'>
            <h4 className='text-lg font-semibold text-white mb-3'>Основные цели</h4>
            <ul className='space-y-3 list-disc pl-5'>
              <li>
                <strong>Создание качественного мобильного детектива</strong> — игра, которая сможет
                конкурировать с лучшими представителями жанра на мобильных платформах
              </li>
              <li>
                <strong>Демонстрация возможностей современных технологий</strong> — использование
                Kotlin, Jetpack Compose и современных архитектурных паттернов
              </li>
              <li>
                <strong>Исследование интерактивного повествования</strong> — создание системы
                ветвящихся сюжетов, где каждый выбор имеет значение
              </li>
              <li>
                <strong>Соответствие российским стандартам</strong> — соблюдение требований 152-ФЗ и
                ГОСТ Р 34.12-2015
              </li>
            </ul>

            <h4 className='text-lg font-semibold text-white mb-3 mt-6'>Образовательные цели</h4>
            <ul className='space-y-3 list-disc pl-5'>
              <li>
                <strong>Обучение мобильной разработке</strong> — проект служит примером современной
                разработки на Android
              </li>
              <li>
                <strong>Изучение архитектурных паттернов</strong> — демонстрация MVVM, Repository
                Pattern, Dependency Injection
              </li>
              <li>
                <strong>Практика работы с базами данных</strong> — интеграция Room и MySQL, работа с
                шифрованием
              </li>
              <li>
                <strong>Понимание игрового дизайна</strong> — создание увлекательного
                пользовательского опыта
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function IntroductionPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
        </div>
      }
    >
      <IntroductionContent />
    </Suspense>
  );
}
