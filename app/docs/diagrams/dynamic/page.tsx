'use client';

import { Activity, Clock } from 'lucide-react';
import React, { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import MermaidDiagram from '@/components/mermaid-diagram';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function DynamicDiagramsContent() {
  return (
    <div className='w-full max-w-none'>
      <div className='space-y-4 mb-12'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>
          Динамические диаграммы
        </h1>
        <p className='text-slate-300 text-lg'>
          Диаграммы поведения системы во времени: взаимодействие компонентов, процессы и изменения
          состояний для чатов, ветвящихся выборов, мини-игр и синхронизации данных.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='outline'
            className='bg-orange-500/10 text-orange-400 border-orange-500/20'
          >
            Sequence Diagrams
          </Badge>
          <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
            Activity Diagrams
          </Badge>
          <Badge
            variant='outline'
            className='bg-orange-500/10 text-orange-400 border-orange-500/20'
          >
            State Diagrams
          </Badge>
          <Badge variant='outline' className='bg-red-500/10 text-red-400 border-red-500/20'>
            Offline Mode
          </Badge>
        </div>
      </div>

      {/* 1. Диаграмма последовательности: Синхронизация прогресса */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Clock className='h-6 w-6 mr-3 text-orange-400' />
            Диаграмма последовательности: Синхронизация прогресса
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='text-slate-300'>
            Диаграмма последовательности описывает процесс синхронизации игрового прогресса (текущий
            день, сцена, флаги) между Android-приложением, локальным Ktor-сервером и MySQL. Процесс
            включает проверку Wi-Fi, сохранение в Room (офлайн-режим) и синхронизацию через HTTPS с
            TLS 1.2+.
          </div>
          <MermaidDiagram
            title='Диаграмма последовательности: Синхронизация прогресса'
            src='/diagrams/behavior/sequence-diagram.mmd'
            description='Последовательность: игрок → UI → ViewModel → Repository → Room/Ktor → MySQL.'
            category='Динамика'
          />
          <div>
            <h5 className='text-orange-400 font-semibold mb-2'>
              Пример кода (Kotlin, ViewModel и Ktor)
            </h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>{`// ViewModel
class MainViewModel @Inject constructor(
    private val repository: GameRepository
) : ViewModel() {
    private val _state = MutableStateFlow<GameState?>(null)
    val state: StateFlow<GameState?> = _state.asStateFlow()

    fun syncProgress(context: Context) {
        viewModelScope.launch {
            repository.saveProgress(_state.value ?: return@launch) // Room
            if (isNetworkAvailable(context)) {
                try {
                    repository.syncProgress(_state.value ?: return@launch) // Ktor
                    Toast.makeText(context, "Синхронизация завершена", Toast.LENGTH_SHORT).show()
                } catch (e: IOException) {
                    Toast.makeText(context, "Ошибка сети", Toast.LENGTH_SHORT).show()
                }
            } else {
                Toast.makeText(context, "Оффлайн-режим", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun isNetworkAvailable(context: Context): Boolean {
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        return connectivityManager.getNetworkCapabilities(network)
            ?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true
    }
}

// Ktor: Эндпоинт
fun Application.progressModule() {
    install(ContentNegotiation) { json() }
    routing {
        authenticate("auth-jwt") {
            post("/save-progress") {
                val state = call.receive<GameState>()
                transaction {
                    GameStates.insertOrUpdate {
                        it[userId] = state.userId
                        it[currentDay] = state.currentDay
                        it[sceneId] = state.sceneId
                        it[trustFlags] = state.trustFlags.toJson()
                    }
                }
                call.respond(HttpStatusCode.OK)
            }
        }
    }
}
`}</pre>
          </div>
          <div>
            <h5 className='text-orange-400 font-semibold mb-2'>Рекомендации по реализации</h5>
            <ul className='text-slate-300 text-sm space-y-1 list-disc pl-5'>
              <li>
                UI: Реализуйте кнопку «Синхронизировать» в ChatScreen с анимацией загрузки
                (CircularProgressIndicator)
              </li>
              <li>
                ViewModel: Используйте Coroutines (viewModelScope) для асинхронных операций,
                StateFlow для состояния
              </li>
              <li>
                Repository: Офлайн-первый подход (сначала Room, затем Ktor), дельта-обновления
              </li>
              <li>Room: SQLCipher (AES-256), индексы (INDEX ON game_states(userId))</li>
              <li>
                Retrofit: TLS 1.2+, ретраи (3 попытки, задержка 1 сек), OkHttpClient с таймаутами
                (10 сек)
              </li>
              <li>Ktor: Exposed ORM для транзакций, RateLimiting (10 подключений)</li>
              <li>Безопасность: Анонимный userId (ANON_123456, 152-ФЗ), TLS, ГОСТ Р 34.12-2015</li>
              <li>
                Тестирование: Эмуляция сбоев сети, проверка HTTP-кодов (200, 503, 429) в Postman
              </li>
            </ul>
          </div>
          <div className='text-slate-400 text-xs mt-2'>
            <strong>Вывод:</strong> Диаграмма помогает разработчикам реализовать синхронизацию, а QA
            тестировать офлайн-режим и сбои сети. Геймдизайнеры используют её для проверки
            сохранения прогресса, менеджеры демонстрируют автономность и безопасность.
          </div>
        </CardContent>
      </Card>

      {/* 2. Диаграмма активности: Прохождение мини-игры */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Activity className='h-6 w-6 mr-3 text-red-400' />
            Диаграмма активности: Прохождение мини-игры
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='text-slate-300'>
            Диаграмма активности описывает процесс прохождения мини-игры (например, поиск ошибки в
            Python-коде). Процесс включает загрузку задачи из Room или Ktor, отображение в WebView
            (JS) или JNI (Python), проверку решения и сохранение результата с поддержкой
            офлайн-режима.
          </div>
          <MermaidDiagram
            title='Диаграмма активности: Прохождение мини-игры'
            src='/diagrams/behavior/activity-diagram.mmd'
            description='Активность: выбор игры → загрузка → решение → проверка → сохранение.'
            category='Динамика'
          />
          <div>
            <h5 className='text-red-400 font-semibold mb-2'>
              Пример кода (Kotlin, Compose и WebView)
            </h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>{`// Compose: MiniGameScreen
@Composable
fun MiniGameScreen(viewModel: MiniGameViewModel = viewModel()) {
    val task by viewModel.task.collectAsState()
    val context = LocalContext.current
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .padding(16.dp)
    ) {
        WebView(
            modifier = Modifier.weight(1f),
            url = "file:///android_asset/minigame.html",
            jsInterface = MiniGameJsInterface(viewModel),
            content = task?.code ?: ""
        )
        Button(onClick: { viewModel.submitSolution(context, task?.solution ?: "") }) {
            Text("Проверить")
        }
    }
}

// ViewModel
class MiniGameViewModel @Inject constructor(
    private val repository: GameRepository
) : ViewModel() {
    private val _task = MutableStateFlow<MiniGame?>(null)
    val task: StateFlow<MiniGame?> = _task.asStateFlow()

    fun loadTask(gameId: String) {
        viewModelScope.launch {
            _task.value = repository.getMiniGame(gameId)
        }
    }

    fun submitSolution(context: Context, solution: String) {
        viewModelScope.launch {
            val result = repository.checkSolution(_task.value?.id ?: return@launch, solution)
            repository.saveResult(_task.value?.id ?: return@launch, result)
            Toast.makeText(context, if (result) "Успех!" else "Ошибка", Toast.LENGTH_SHORT).show()
        }
    }
}

// WebView JS Interface
class MiniGameJsInterface(private val viewModel: MiniGameViewModel) {
    @JavascriptInterface
    fun onSolutionSubmitted(solution: String) {
        viewModel.submitSolution(solution)
    }
}
`}</pre>
          </div>
          <div className='text-slate-400 text-xs mt-2'>
            <strong>Вывод:</strong> Диаграмма помогает разработчикам реализовать синхронизацию, а QA
            тестировать офлайн-режим и сбои сети. Геймдизайнеры используют её для проверки
            сохранения прогресса, менеджеры демонстрируют автономность и безопасность.
          </div>
        </CardContent>
      </Card>

      {/* 3. Диаграмма состояний: ViewModel */}
      <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Activity className='h-6 w-6 mr-3 text-orange-400' />
            Диаграмма состояний: ViewModel
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='text-slate-300'>
            Диаграмма состояний описывает состояния ViewModel, включая загрузку, активность и
            завершение.
          </div>
          <MermaidDiagram
            title='Диаграмма состояний: ViewModel'
            src='/diagrams/behavior/state-machine.mmd'
            description='Состояния ViewModel: загрузка, активен, завершение.'
            category='Динамика'
          />
          <div>
            <h5 className='text-orange-400 font-semibold mb-2'>Пример кода (Kotlin, ViewModel)</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>{`// ViewModel
class MainViewModel @Inject constructor(
    private val repository: GameRepository
) : ViewModel() {
    private val _state = MutableStateFlow<GameState?>(null)
    val state: StateFlow<GameState?> = _state.asStateFlow()

    fun syncProgress(context: Context) {
        viewModelScope.launch {
            repository.saveProgress(_state.value ?: return@launch) // Room
            if (isNetworkAvailable(context)) {
                try {
                    repository.syncProgress(_state.value ?: return@launch) // Ktor
                    Toast.makeText(context, "Синхронизация завершена", Toast.LENGTH_SHORT).show()
                } catch (e: IOException) {
                    Toast.makeText(context, "Ошибка сети", Toast.LENGTH_SHORT).show()
                }
            } else {
                Toast.makeText(context, "Оффлайн-режим", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun isNetworkAvailable(context: Context): Boolean {
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        return connectivityManager.getNetworkCapabilities(network)
            ?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true
    }
}
`}</pre>
          </div>
          <div className='text-slate-400 text-xs mt-2'>
            <strong>Вывод:</strong> Диаграмма помогает разработчикам реализовать синхронизацию, а QA
            тестировать офлайн-режим и сбои сети. Геймдизайнеры используют её для проверки
            сохранения прогресса, менеджеры демонстрируют автономность и безопасность.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function DynamicDiagramsPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
        </div>
      }
    >
      <DynamicDiagramsContent />
    </Suspense>
  );
}
