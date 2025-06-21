"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MermaidDiagram from "@/components/mermaid-diagram";

export default function UiDiagramsPage() {
  const uiDiagrams = [
    {
      title: "User Flow (Пользовательский путь)",
      description: "Диаграмма показывает полный пользовательский путь: Запуск → Авторизация → Главный экран → Выбор дня → Мессенджер → Диалоги → Выборы → Мини-игры → Прогресс → Концовка. Мессенджер-интерфейс обеспечивает погружение в детектив.",
      conclusion: "Диаграмма помогает UX-дизайнерам оптимизировать пользовательский опыт, а разработчикам — реализовать интуитивную навигацию. QA используют для тестирования всех пользовательских сценариев.",
      mermaid: `graph TD
    A[Запуск приложения] --> B[Авторизация<br/>Анонимная]
    B --> C[Главный экран<br/>Выбор дня 1-10]
    C --> D[Мессенджер-интерфейс<br/>Темная тема]
    D --> E[Диалоги с персонажами<br/>Пузырьки сообщений]
    E --> F{Выбор ответа<br/>Доверие/Подозрение}
    F --> G[Мини-игра<br/>Python/JS задачи]
    G --> H[Сохранение прогресса<br/>Room + DataStore]
    H --> I{Следующая сцена?}
    I -->|Да| E
    I -->|Нет| J[Завершение дня]
    J --> K{Следующий день?}
    K -->|Да| C
    K -->|Нет| L[Концовка<br/>5 вариантов]`,
    },
    {
      title: "Архитектура UI компонентов",
      description: "Показывает иерархию UI компонентов: MainActivity → ChatScreen → MessageBubble, ChoiceButton, MiniGameView, ProgressIndicator. Использует Jetpack Compose с Material Design 3 для мессенджер-интерфейса.",
      conclusion: "Диаграмма помогает разработчикам создавать модульную архитектуру UI, а дизайнерам — планировать дизайн-систему. QA используют для тестирования компонентов и их взаимодействия.",
      mermaid: `graph TD
    A[MainActivity<br/>Jetpack Compose] --> B[ChatScreen<br/>Мессенджер-интерфейс]
    B --> C[MessageBubble<br/>Пузырьки сообщений]
    B --> D[ChoiceButton<br/>Кнопки выбора]
    B --> E[MiniGameView<br/>Интерактивные игры]
    B --> F[ProgressIndicator<br/>Прогресс дня]
    
    C --> G[TextMessage<br/>Текстовые сообщения]
    C --> H[EmojiMessage<br/>Эмодзи и реакции]
    C --> I[FileMessage<br/>Файлы и документы]
    
    D --> J[TrustButton<br/>Доверие]
    D --> K[SuspicionButton<br/>Подозрение]
    D --> L[NeutralButton<br/>Нейтралитет]
    
    E --> M[PythonGame<br/>Код-редактор]
    E --> N[JavaScriptGame<br/>Веб-интерфейс]
    E --> O[LogicGame<br/>Логические задачи]`,
    },
    {
      title: "Состояния UI экранов",
      description: "Показывает состояния UI: Загрузка → Контент → Офлайн → Синхронизация → Ошибка → Пустое состояние. Обеспечивает обратную связь пользователю и обработку всех сценариев работы приложения.",
      conclusion: "Эта диаграмма — ключ к пониманию потока управления состоянием UI. Разработчики используют её для реализации ViewModel и LiveData, а QA — для проверки корректности отображения всех состояний.",
      mermaid: `stateDiagram-v2
    [*] --> Loading: Загрузка данных
    Loading --> Ready: Данные загружены
    Ready --> Input: Пользователь вводит текст
    Input --> Sending: Отправка сообщения
    Sending --> Ready: Сообщение отправлено
    Sending --> Error: Ошибка отправки
    Error --> Ready: Повторная попытка`,
    },
    {
      title: "Адаптивность и ориентация",
      description: "Описывает адаптивность интерфейса: Портретная ориентация (основная), поддержка разных размеров экранов, темная тема, доступность. Мессенджер-интерфейс оптимизирован для вертикального использования.",
      conclusion: "Диаграмма помогает разработчикам создать адаптивный UI для разных устройств, а дизайнерам — планировать макеты. QA тестируют на различных экранах для обеспечения качества.",
      mermaid: `graph TD
    A[Адаптивность UI<br/>Jetpack Compose] --> B[Портретная ориентация<br/>Основная]
    A --> C[Размеры экранов<br/>Поддержка]
    A --> D[Темная тема<br/>Обязательная]
    A --> E[Доступность<br/>Accessibility]
    
    B --> F[Вертикальный чат<br/>Пузырьки сообщений]
    B --> G[Кнопки выбора<br/>Внизу экрана]
    B --> H[Мини-игры<br/>Полноэкранный режим]
    
    C --> I[Телефоны<br/>720p - 4K]
    C --> J[Планшеты<br/>Адаптивные макеты]
    
    D --> K[Темный фон<br/>#121212]
    D --> L[Светлый текст<br/>#FFFFFF]
    D --> M[Акцентные цвета<br/>Cyan/Purple]
    
    E --> N[Поддержка TalkBack<br/>Screen Reader]
    E --> O[Увеличение текста<br/>Accessibility Settings]
    E --> P[Высокий контраст<br/>Color Blind Support]`,
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          UI/UX
        </h1>
        <p className="text-xl text-slate-300">4 диаграммы, описывающие User Flow, навигацию и состояния UI для проекта «Сообщение 404».</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
            User Flow
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
            Навигация
          </Badge>
          <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
            Состояния UI
          </Badge>
        </div>
      </div>

      <div className="space-y-8">
        {uiDiagrams.map((diagram, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">{diagram.title}</CardTitle>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                  UI/UX
                </Badge>
              </div>
              <p className="text-slate-400 text-sm">{diagram.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <MermaidDiagram
                title={diagram.title}
                mermaidCode={diagram.mermaid}
                description=""
                category="UI/UX"
              />
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Вывод:</h4>
                <p className="text-sm text-slate-300">{diagram.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
