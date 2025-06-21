import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Smartphone, Server, Database, Wifi, Download } from "lucide-react"

export default function SetupPage() {
  const setupSteps = [
    {
      title: "Android-приложение",
      icon: Smartphone,
      color: "text-cyan-400",
      steps: [
        "Установите Android Studio (последняя версия)",
        "Настройте JDK 17 и Gradle 8.0+",
        "Клонируйте репозиторий проекта",
        "Выполните ./gradlew build для сборки",
        "Подключите устройство или запустите эмулятор",
      ],
    },
    {
      title: "Ktor-сервер",
      icon: Server,
      color: "text-purple-400",
      steps: [
        "Установите XAMPP (Apache, MySQL, PHP)",
        "Настройте Kotlin 1.9+ и Gradle",
        "Создайте базу данных 'game' в MySQL",
        "Импортируйте схему из server/db/schema.sql",
        "Запустите сервер командой ./gradlew run",
      ],
    },
    {
      title: "База данных",
      icon: Database,
      color: "text-cyan-400",
      steps: [
        "Запустите XAMPP Control Panel",
        "Включите Apache и MySQL сервисы",
        "Откройте phpMyAdmin (localhost/phpmyadmin)",
        "Создайте базу данных 'game'",
        "Импортируйте начальные данные",
      ],
    },
    {
      title: "Wi-Fi сеть",
      icon: Wifi,
      color: "text-purple-400",
      steps: [
        "Создайте точку доступа на ноутбуке",
        "Подключите Android-устройства к сети",
        "Проверьте доступ к 192.168.1.100:8080",
        "Настройте IP-адрес в приложении",
        "Протестируйте синхронизацию данных",
      ],
    },
  ]

  const configFiles = [
    {
      title: "application.conf (Ktor)",
      language: "hocon",
      code: `ktor {
    deployment { 
        port = 8080 
        host = "0.0.0.0"
    }
    database {
        url = "jdbc:mysql://localhost/game"
        user = "root"
        password = ""
        driver = "com.mysql.cj.jdbc.Driver"
    }
}`,
    },
    {
      title: "build.gradle.kts (Android)",
      language: "kotlin",
      code: `android {
    compileSdk 34
    defaultConfig {
        applicationId "com.example.message404"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }
}

dependencies {
    implementation("androidx.compose.ui:ui:1.5.0")
    implementation("androidx.room:room-runtime:2.5.0")
    implementation("io.ktor:ktor-client-android:2.3.11")
}`,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Настройка и развертывание
        </h1>
        <p className="text-xl text-slate-300">Пошаговые инструкции по установке и запуску проекта "Сообщение 404"</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Android Studio
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            XAMPP + MySQL
          </Badge>
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Ktor-сервер
          </Badge>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Download className="h-6 w-6 mr-3 text-cyan-400" />
            Системные требования
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Аппаратные требования</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Ноутбук с Wi-Fi адаптером</li>
                <li>• Минимум 4 ГБ RAM</li>
                <li>• 10 ГБ свободного места на диске</li>
                <li>• Android-устройство с API 21+</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Программные требования</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Android Studio (последняя версия)</li>
                <li>• JDK 17</li>
                <li>• XAMPP (Apache, MySQL, PHP)</li>
                <li>• Git для клонирования репозитория</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Пошаговая настройка</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {setupSteps.map((section, index) => {
            const Icon = section.icon
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon className={`h-6 w-6 mr-3 ${section.color}`} />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-slate-300 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Файлы конфигурации</h2>
        <div className="space-y-6">
          {configFiles.map((config, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-cyan-400" />
                  {config.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-slate-300 text-sm">
                    <code>{config.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Команды запуска</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Android-приложение</h4>
              <div className="bg-slate-900 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  # Сборка проекта
                  <br />
                  ./gradlew build
                  <br />
                  <br /># Установка на устройство
                  <br />
                  ./gradlew installDebug
                  <br />
                  <br /># Запуск тестов
                  <br />
                  ./gradlew test
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Ktor-сервер</h4>
              <div className="bg-slate-900 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  # Переход в папку сервера
                  <br />
                  cd server
                  <br />
                  <br /># Запуск сервера
                  <br />
                  ./gradlew run
                  <br />
                  <br /># Сервер будет доступен на http://localhost:8080
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">База данных</h4>
              <div className="bg-slate-900 p-3 rounded-lg">
                <code className="text-slate-300 text-sm">
                  # Запуск XAMPP
                  <br />
                  sudo /opt/lampp/lampp start # Linux
                  <br /># или через XAMPP Control Panel на Windows
                  <br />
                  <br /># Доступ к phpMyAdmin
                  <br /># http://localhost/phpmyadmin
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Проверка установки</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-cyan-400 font-semibold">Чеклист проверки</h4>
            <ul className="space-y-2">
              {[
                "Android Studio успешно собирает проект",
                "XAMPP запущен, MySQL работает",
                "Ktor-сервер отвечает на http://localhost:8080",
                "phpMyAdmin доступен и база 'game' создана",
                "Android-устройство подключено к Wi-Fi сети",
                "Приложение успешно синхронизируется с сервером",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-cyan-400 rounded"></div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Устранение неполадок</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-cyan-400 font-semibold">Частые проблемы</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>
                  • <strong>Ktor не запускается:</strong> Проверьте порт 8080
                </li>
                <li>
                  • <strong>MySQL недоступен:</strong> Перезапустите XAMPP
                </li>
                <li>
                  • <strong>Приложение не собирается:</strong> Очистите кэш Gradle
                </li>
                <li>
                  • <strong>Нет подключения к серверу:</strong> Проверьте Wi-Fi
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-purple-400 font-semibold">Полезные команды</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>
                  • <code>./gradlew clean</code> - очистка проекта
                </li>
                <li>
                  • <code>adb devices</code> - список устройств
                </li>
                <li>
                  • <code>netstat -an | grep 8080</code> - проверка порта
                </li>
                <li>
                  • <code>ipconfig</code> - IP-адрес компьютера
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
