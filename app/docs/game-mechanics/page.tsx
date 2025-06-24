'use client';

import { Suspense } from 'react';

import { HeaderSkeleton, DiagramGridSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function GameMechanicsHeader() {
  return (
    <div className='space-y-4 mb-8 sm:mb-12'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
        Ключевые игровые механики
      </h1>
      <p className='text-base sm:text-lg lg:text-xl text-slate-300'>
        Глубокое погружение в основные механики, формирующие геймплей «Сообщение 404»: от цикла игры
        до системы персонажей и концовок.
      </p>
    </div>
  );
}

function GameLoopSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <Card className='bg-slate-800/50 border-slate-700/50'>
        <CardHeader>
          <CardTitle className='text-white text-lg sm:text-xl'>Game Loop</CardTitle>
        </CardHeader>
        <CardContent className='text-slate-300 space-y-4'>
          <p className='text-sm sm:text-base'>
            Основа игры — это её цикл (Game Loop), который определяет последовательность действий
            игрока. В «Сообщении 404» он построен вокруг мессенджера, что создаёт эффект полного
            погружения. Игрок получает сообщения, анализирует их, делает выборы и решает мини-игры,
            связанные с программированием.
          </p>
          <p className='text-sm sm:text-base'>
            Каждый шаг в цикле сохраняется, влияя на развитие сюжета и отношения с персонажами. Этот
            непрерывный процесс создаёт напряжение и поддерживает интерес на протяжении всех 10
            игровых дней.
          </p>
        </CardContent>
      </Card>
      <MermaidDiagram
        title='Game Loop (Основной цикл игры)'
        mermaidCode={`graph TD\n    A[Запуск игры] --> B["Получение сообщений\\nМессенджер-интерфейс"]\n    B --> C["Чтение чатов\\nДиалоги с персонажами"]\n    C --> D{"Выбор ответа\\nДоверие/Подозрение"}\n    D --> E["Решение мини-игры\\nPython/JS задачи"]\n    E --> F["Сохранение прогресса\\nRoom + DataStore"]\n    F --> G{Проверка флагов}\n    G -->|Да| H["Переход к следующему дню\\nНовые сцены"]\n    G -->|Нет| I["Повторение дня\\nДополнительные выборы"]\n    H --> J["Финальная сцена\\nДень 10"]\n    I -->|Нет| J["Концовка\\n6 вариантов"]`}
        description='Основной цикл игры: от получения сообщения до перехода к следующей сцене.'
        category='Игровые механики'
      />
    </div>
  );
}

function DialogsSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
        <Card className='bg-slate-800/50 border-slate-700/50'>
          <CardHeader>
            <CardTitle className='text-white text-lg sm:text-xl'>Чат-система и выборы</CardTitle>
          </CardHeader>
          <CardContent className='text-slate-300 space-y-4'>
            <p className='text-sm sm:text-base'>
              Центральным элементом игры является чат-система. Диалоги построены так, чтобы игрок
              чувствовал себя настоящим участником событий. Каждый выбор (доверие, подозрение или
              нейтралитет) имеет вес и изменяет отношение персонажей к главному герою.
            </p>
            <p className='text-sm sm:text-base'>
              Ветвление диалогов создаёт более 60 уникальных сюжетных путей. От ваших решений
              зависит, какую информацию вы получите и как будут развиваться события.
            </p>
          </CardContent>
        </Card>
        <Card className='bg-slate-800/50 border-slate-700/50'>
          <CardHeader>
            <CardTitle className='text-white text-lg sm:text-xl'>Система персонажей</CardTitle>
          </CardHeader>
          <CardContent className='text-slate-300 space-y-4'>
            <p className='text-sm sm:text-base'>
              В игре 6 ключевых персонажей, каждый со своей ролью и мотивацией. Алексей, главный
              герой, оказывается в центре интриг. Елена может стать союзником, а Максим —
              антагонистом. Ваши взаимодействия с ними, выраженные через выборы в чате, напрямую
              влияют на развитие сюжета и концовку.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8'>
        <MermaidDiagram
          title='Диаграмма ветвления диалогов'
          mermaidCode={`graph TD\n    A["Сообщение от Елены\\\"Алексей, у нас проблема...\\\""] --> B{Выбор игрока}\n    B -->|"Доверяю"| C["Ответ Елены\\\"Спасибо за доверие\\\""]\n    B -->|"Подозреваю"| D["Ответ Елены\\\"Понимаю твои сомнения\\\""]\n    B -->|"Нейтрально"| E["Ответ Елены\\\"Хорошо, как скажешь\\\""]\n    C --> F["Новый выбор\\\"Помочь с проблемой?\\\""]\n    D --> G["Новый выбор\\\"Потребовать объяснений?\\\""]\n    E --> H["Новый выбор\\\"Отложить решение?\\\""]\n    F --> I[Флаг: доверие +10]\n    G --> J[Флаг: подозрение +15]\n    H --> K[Флаг: нейтралитет +5]`}
          description='Ветвление диалогов в зависимости от выбора игрока.'
          category='Игровые механики'
        />
        <MermaidDiagram
          title='Система персонажей'
          mermaidCode={`graph TD\n    A["Алексей Соколов\\nГлавный герой\\nПрограммист"] --> B["Елена Васильева\\nКоллега\\nВозможный союзник"]\n    A --> C["Максим Журавлёв\\nНачальник\\nСкрывает правду"]\n    A --> D["Павел Семёнов\\nИнформатор\\nЗагадочный источник"]\n    A --> E["Ольга Серебрякова\\nHR-менеджер\\nСледит за сотрудниками"]\n    A --> F["Неизвестный\\nАнонимный отправитель\\nНеясные намерения"]`}
          description='Ключевые персонажи и их роль в сюжете.'
          category='Игровые механики'
        />
      </div>
    </div>
  );
}

function MinigamesSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <Card className='bg-slate-800/50 border-slate-700/50'>
        <CardHeader>
          <CardTitle className='text-white text-lg sm:text-xl'>Мини-игры</CardTitle>
        </CardHeader>
        <CardContent className='text-slate-300 space-y-4'>
          <p className='text-sm sm:text-base'>
            Важной частью геймплея являются мини-игры, имитирующие задачи программиста. Всего в игре
            60 уникальных заданий, разделенных на несколько категорий: задачи на Python, JavaScript,
            логические головоломки и образовательные квизы.
          </p>
          <p className='text-sm sm:text-base'>
            Каждый день игроку предстоит решить 6 таких задач. Их сложность нарастает по мере
            продвижения по сюжету, что требует от игрока не только логики, но и реальных знаний в
            области программирования.
          </p>
        </CardContent>
      </Card>
      <MermaidDiagram
        title='Классификация мини-игр'
        mermaidCode={`graph TD\n    A["60 мини-игр\\n6 на день"] --> B["Python задачи\\n20 игр"]\n    A --> C["JavaScript задачи\\n20 игр"]\n    A --> D["Логические головоломки\\n15 игр"]\n    A --> E["Образовательные\\n5 игр"]\n    B --> F["Алгоритмы"]\n    B --> G["Отладка кода"]\n    C --> I["Веб-разработка"]\n    C --> J["DOM манипуляции"]\n    D --> L["Криптография"]\n    D --> M["Анализ логов"]`}
        description='Классификация 60 мини-игр по типам и технологиям.'
        category='Игровые механики'
      />
    </div>
  );
}

function ProgressEndingsSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <Card className='bg-slate-800/50 border-slate-700/50'>
        <CardHeader>
          <CardTitle className='text-white text-lg sm:text-xl'>Прогресс и концовки</CardTitle>
        </CardHeader>
        <CardContent className='text-slate-300 space-y-4'>
          <p className='text-sm sm:text-base'>
            Сюжет игры охватывает 10 дней, каждый из которых разделён на сцены с ключевыми
            событиями, диалогами и мини-играми. Прогресс игрока отслеживается с помощью системы
            флагов (доверие, подозрение, доступ к информации).
          </p>
          <p className='text-sm sm:text-base'>
            Накопленные флаги определяют одну из шести возможных концовок: от "хорошей", где правда
            раскрыта, до "плохой", где паранойя приводит к провалу. Существует также скрытая
            концовка для самых внимательных игроков. Такая система обеспечивает высокую
            реиграбельность.
          </p>
        </CardContent>
      </Card>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8'>
        <MermaidDiagram
          title='Структура игровых дней'
          mermaidCode={`graph LR\n    subgraph "День 1: Знакомство"\n        A1["Сцена 1: Утро"]\n        A2["Сцена 2: День"]\n        A3["Сцена 3: Вечер"]\n    end\n    subgraph "День 5: Конфликт"\n        B1["Сцена 1: Утро"]\n        B2["Сцена 2: День"]\n        B3["Сцена 3: Вечер"]\n    end\n    subgraph "День 10: Финал"\n        C1["Сцена 1: Утро"]\n        C2["Сцена 2: День"]\n        C3["Сцена 3: Вечер"]\n    end\n    A3 --> B1\n    B3 --> C1`}
          description='Структура 10 игровых дней с тремя сценами в каждом.'
          category='Игровые механики'
        />
        <MermaidDiagram
          title='Система концовок'
          mermaidCode={`graph TD\n    A["Финальная сцена\\nДень 10"] --> B{Анализ флагов}\n    B -->|"Доверие > 80"| C["Концовка 1:\\nПравда раскрыта"]\n    B -->|"Подозрение > 80"| D["Концовка 2:\\nПаранойя"]\n    B -->|"Нейтралитет"| E["Концовка 3:\\nКомпромисс"]\n    B -->|"Все флаги = 0"| F["Концовка 4:\\nНеопределённость"]\n    B -->|"Особые условия"| G["Скрытая концовка:\\nПолное разоблачение"]`}
          description='Шесть возможных концовок в зависимости от накопленных флагов.'
          category='Игровые механики'
        />
      </div>
    </div>
  );
}

function FlagsSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <Card className='bg-slate-800/50 border-slate-700/50'>
        <CardHeader>
          <CardTitle className='text-white text-lg sm:text-xl'>
            Система флагов и состояний
          </CardTitle>
        </CardHeader>
        <CardContent className='text-slate-300 space-y-4'>
          <p className='text-sm sm:text-base'>
            Игра использует сложную систему флагов для отслеживания прогресса и влияния выборов
            игрока на сюжет. Каждый выбор изменяет значения флагов, которые в свою очередь влияют на
            доступность контента и реакцию персонажей.
          </p>
          <p className='text-sm sm:text-base'>
            Флаги сохраняются локально в Room Database и синхронизируются с Ktor-сервером при
            наличии подключения. Это обеспечивает непрерывность игрового опыта независимо от
            сетевого соединения.
          </p>
        </CardContent>
      </Card>
      <MermaidDiagram
        title='Система флагов'
        mermaidCode={`graph TD\n    A["Выбор игрока"] --> B["Расчёт влияния\\nна флаги"]\n    B --> C["Обновление\\nлокальной БД"]\n    C --> D["Синхронизация\\nс сервером"]\n    D --> E["Проверка\\nдоступности контента"]\n    E --> F["Изменение\\nреакции NPC"]\n    F --> G["Влияние на\\nконцовку"]`}
        description='Система флагов и их влияние на игровой процесс.'
        category='Игровые механики'
      />
    </div>
  );
}

function OfflineSyncSection() {
  return (
    <div className='space-y-6 sm:space-y-8 mb-8 sm:mb-12'>
      <Card className='bg-slate-800/50 border-slate-700/50'>
        <CardHeader>
          <CardTitle className='text-white text-lg sm:text-xl'>
            Офлайн-режим и синхронизация
          </CardTitle>
        </CardHeader>
        <CardContent className='text-slate-300 space-y-4'>
          <p className='text-sm sm:text-base'>
            Игра полностью функциональна без интернет-соединения. Все данные сохраняются локально в
            Room Database с шифрованием AES-256. При подключении к локальной сети происходит
            автоматическая синхронизация с Ktor-сервером.
          </p>
          <p className='text-sm sm:text-base'>
            Система разрешения конфликтов использует принцип "последний выигрывает" по временной
            метке. Это обеспечивает целостность данных при игре на нескольких устройствах.
          </p>
        </CardContent>
      </Card>
      <MermaidDiagram
        title='Офлайн-режим и синхронизация'
        mermaidCode={`graph TD\n    A["Игровой процесс"] --> B["Сохранение в Room\\nAES-256 шифрование"]\n    B --> C{Проверка сети}\n    C -->|Нет| D["Продолжение игры\\nв офлайн-режиме"]\n    C -->|Да| E["Подключение к\\nKtor-серверу"]\n    E --> F["Отправка данных\\nна сервер"]\n    F --> G["Получение обновлений\\nс сервера"]\n    G --> H["Разрешение конфликтов\\nпо timestamp"]\n    H --> I["Обновление локальной БД"]\n    I --> J["Продолжение игры\\nс актуальными данными"]\n    D --> K["Автосохранение\\nкаждого выбора"]`}
        description='Схема работы офлайн-режима и синхронизации данных.'
        category='Игровые механики'
      />
    </div>
  );
}

function GameMechanicsContent() {
  return (
    <div className='w-full max-w-none px-4 sm:px-6 lg:px-8'>
      <GameMechanicsHeader />
      <GameLoopSection />
      <DialogsSection />
      <MinigamesSection />
      <ProgressEndingsSection />
      <FlagsSection />
      <OfflineSyncSection />
    </div>
  );
}

export default function GameMechanicsPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
          <DiagramGridSkeleton count={6} />
        </div>
      }
    >
      <GameMechanicsContent />
    </Suspense>
  );
}
