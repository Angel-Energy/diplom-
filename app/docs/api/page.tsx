"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Download } from "lucide-react"

export default function APIPage() {
  const handleDownloadOpenAPI = () => {
    // Расширенная OpenAPI спецификация
    const openApiSpec = {
      openapi: "3.0.0",
      info: {
        title: "Сообщение 404 API",
        version: "1.0.0",
        description: "REST API для мобильной игры Сообщение 404 - текстового квеста в жанре психологического детектива",
        contact: {
          name: "API Support",
          email: "api@message404.game",
        },
        license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT",
        },
      },
      servers: [
        {
          url: "http://192.168.1.100:8080/api/v1",
          description: "Local development server",
        },
        {
          url: "https://api.message404.game/v1",
          description: "Production server",
        },
      ],
      paths: {
        "/auth": {
          post: {
            summary: "Авторизация пользователя",
            description: "Создание анонимной сессии для игрока",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      deviceId: {
                        type: "string",
                        description: "Уникальный идентификатор устройства",
                      },
                    },
                    required: ["deviceId"],
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "Успешная авторизация",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        userId: { type: "string" },
                        sessionToken: { type: "string" },
                        expiresAt: { type: "string", format: "date-time" },
                      },
                    },
                  },
                },
              },
              "400": {
                description: "Неверные данные запроса",
              },
            },
          },
        },
        "/game/state": {
          get: {
            summary: "Получить текущее состояние игры",
            description: "Возвращает прогресс игрока, флаги и текущую сцену",
            security: [{ bearerAuth: [] }],
            responses: {
              "200": {
                description: "Текущее состояние игры",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        userId: { type: "string" },
                        currentDay: { type: "integer", minimum: 1, maximum: 10 },
                        currentScene: { type: "string" },
                        flags: {
                          type: "object",
                          properties: {
                            trust: { type: "integer", minimum: 0, maximum: 100 },
                            threat: { type: "integer", minimum: 0, maximum: 100 },
                            access: { type: "boolean" },
                          },
                        },
                        completedMinigames: {
                          type: "array",
                          items: { type: "string" },
                        },
                        choices: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              sceneId: { type: "string" },
                              choiceId: { type: "string" },
                              timestamp: { type: "string", format: "date-time" },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              "401": {
                description: "Неавторизованный доступ",
              },
            },
          },
        },
        "/game/action": {
          post: {
            summary: "Выполнить игровое действие",
            description: "Сохранение выбора игрока в диалоге",
            security: [{ bearerAuth: [] }],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      sceneId: { type: "string" },
                      choiceId: { type: "string" },
                      actionType: {
                        type: "string",
                        enum: ["dialogue_choice", "minigame_result", "scene_transition"],
                      },
                    },
                    required: ["sceneId", "choiceId", "actionType"],
                  },
                },
              },
            },
            responses: {
              "201": {
                description: "Действие выполнено успешно",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        success: { type: "boolean" },
                        nextScene: { type: "string" },
                        flagChanges: {
                          type: "object",
                          properties: {
                            trust: { type: "integer" },
                            threat: { type: "integer" },
                            access: { type: "boolean" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/scenes/{sceneId}": {
          get: {
            summary: "Получить данные сцены",
            description: "Возвращает диалоги, варианты ответов и мини-игры для сцены",
            security: [{ bearerAuth: [] }],
            parameters: [
              {
                name: "sceneId",
                in: "path",
                required: true,
                schema: { type: "string" },
                description: "Идентификатор сцены",
              },
            ],
            responses: {
              "200": {
                description: "Данные сцены",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        sceneId: { type: "string" },
                        title: { type: "string" },
                        messages: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              sender: { type: "string" },
                              content: { type: "string" },
                              timestamp: { type: "string" },
                              encrypted: { type: "boolean" },
                            },
                          },
                        },
                        choices: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              choiceId: { type: "string" },
                              text: { type: "string" },
                              flagRequirements: { type: "object" },
                            },
                          },
                        },
                        minigame: {
                          type: "object",
                          properties: {
                            type: { type: "string" },
                            code: { type: "string" },
                            description: { type: "string" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/minigames/submit": {
          post: {
            summary: "Отправить результат мини-игры",
            description: "Проверка правильности решения мини-игры",
            security: [{ bearerAuth: [] }],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      minigameId: { type: "string" },
                      solution: { type: "string" },
                      timeSpent: { type: "integer", description: "Время в секундах" },
                    },
                    required: ["minigameId", "solution"],
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "Результат проверки",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        correct: { type: "boolean" },
                        score: { type: "integer", minimum: 0, maximum: 100 },
                        explanation: { type: "string" },
                        hint: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/progress/sync": {
          post: {
            summary: "Синхронизация прогресса",
            description: "Синхронизация локального прогресса с сервером",
            security: [{ bearerAuth: [] }],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      localProgress: {
                        type: "object",
                        description: "Локальные данные из Room",
                      },
                      lastSyncTimestamp: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "Прогресс синхронизирован",
              },
            },
          },
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
        schemas: {
          Error: {
            type: "object",
            properties: {
              error: { type: "string" },
              message: { type: "string" },
              code: { type: "integer" },
            },
          },
        },
      },
    }

    const blob = new Blob([JSON.stringify(openApiSpec, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "message404-openapi-full.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/auth",
      description: "Авторизация пользователя (анонимная сессия)",
      status: "200 OK",
    },
    {
      method: "GET",
      path: "/api/v1/game/state",
      description: "Получить текущее состояние игры",
      status: "200 OK",
    },
    {
      method: "POST",
      path: "/api/v1/game/action",
      description: "Выполнить игровое действие",
      status: "201 Created",
    },
    {
      method: "GET",
      path: "/api/v1/scenes/{id}",
      description: "Получить данные сцены",
      status: "200 OK",
    },
    {
      method: "POST",
      path: "/api/v1/minigames/submit",
      description: "Отправить результат мини-игры",
      status: "200 OK",
    },
    {
      method: "POST",
      path: "/api/v1/progress/sync",
      description: "Синхронизация прогресса",
      status: "200 OK",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          API Reference
        </h1>
        <p className="text-xl text-slate-300">OpenAPI 3.0 спецификация для мобильной игры "Сообщение 404"</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            OpenAPI 3.0
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            REST API
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            JSON Schema
          </Badge>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="bg-cyan-500 hover:bg-cyan-600" onClick={handleDownloadOpenAPI}>
          <Download className="h-4 w-4 mr-2" />
          Скачать OpenAPI
        </Button>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="h-5 w-5 mr-2 text-cyan-400" />
            Базовая информация
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Base URL (Local)</h4>
              <code className="bg-slate-900 px-3 py-1 rounded text-sm text-slate-300">
                http://192.168.1.100:8080/api/v1
              </code>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Версия API</h4>
              <code className="bg-slate-900 px-3 py-1 rounded text-sm text-slate-300">v1.0.0</code>
            </div>
          </div>

          <div>
            <h4 className="text-cyan-400 font-semibold mb-2">Аутентификация</h4>
            <p className="text-slate-300 text-sm">Bearer Token в заголовке Authorization (анонимная сессия)</p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Endpoints</h2>
        <div className="space-y-4">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant="outline"
                      className={
                        endpoint.method === "GET"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : endpoint.method === "POST"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                      }
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-white font-mono">{endpoint.path}</code>
                  </div>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                    {endpoint.status}
                  </Badge>
                </div>
                <CardDescription className="text-slate-400">{endpoint.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Пример запроса</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
            <code className="text-slate-300">
              {`curl -X GET "http://192.168.1.100:8080/api/v1/game/state" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json"`}
            </code>
          </pre>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Пример ответа</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
            <code className="text-slate-300">
              {`{
  "userId": "user_12345",
  "currentDay": 3,
  "currentScene": "scene_day3_morning",
  "flags": {
    "trust": 65,
    "threat": 30,
    "access": true
  },
  "completedMinigames": [
    "python_debug_001",
    "crypto_decode_002",
    "log_analysis_003"
  ],
  "choices": [
    {
      "sceneId": "scene_day1_intro",
      "choiceId": "trust_elena",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ]
}`}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
