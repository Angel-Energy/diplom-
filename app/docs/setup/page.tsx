'use client';

import {
  Download,
  Server,
  Database,
  Smartphone,
  Code,
  CheckCircle,
  AlertTriangle,
  Settings,
} from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function SetupHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
        Руководство по установке
      </h1>
      <p className='text-slate-300 text-lg'>
        Пошаговые инструкции по установке и настройке мобильной игры «Сообщение 404», включая
        Android-приложение, локальный Ktor-сервер и базу данных MySQL.
      </p>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          Android
        </Badge>
        <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
          Ktor
        </Badge>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          MySQL
        </Badge>
        <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
          XAMPP
        </Badge>
      </div>
    </div>
  );
}

function QuickStartSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Download className='h-6 w-6 mr-3 text-green-400' />
          Быстрый старт (5 шагов)
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <p className='mb-4'>Минимальная установка для запуска игры в офлайн-режиме:</p>

          <div className='space-y-4'>
            <div className='flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg'>
              <Badge className='bg-green-500 text-white'>1</Badge>
              <div>
                <h4 className='font-semibold text-white'>Установите APK на Android</h4>
                <p className='text-sm'>
                  Скачайте и установите APK-файл на устройство с Android 5.0+
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg'>
              <Badge className='bg-green-500 text-white'>2</Badge>
              <div>
                <h4 className='font-semibold text-white'>Запустите игру</h4>
                <p className='text-sm'>Откройте приложение и пройдите первоначальную настройку</p>
              </div>
            </div>

            <div className='flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg'>
              <Badge className='bg-green-500 text-white'>3</Badge>
              <div>
                <h4 className='font-semibold text-white'>Начните играть</h4>
                <p className='text-sm'>Игра полностью функциональна в офлайн-режиме</p>
              </div>
            </div>
          </div>

          <div className='mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
            <p className='text-sm text-blue-400'>
              <strong>Примечание:</strong> Для синхронизации прогресса между устройствами
              потребуется дополнительная настройка сервера (шаги 4-5).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AndroidSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Smartphone className='h-6 w-6 mr-3 text-blue-400' />
          Установка Android-приложения
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <h4 className='text-lg font-semibold text-white mb-4'>Системные требования</h4>

          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Минимальные требования</h5>
              <ul className='list-disc pl-5 space-y-1 text-sm'>
                <li>Android 5.0+ (API 21)</li>
                <li>2 ГБ оперативной памяти</li>
                <li>100 МБ свободного места</li>
                <li>Разрешение экрана 720p+</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-blue-400 font-semibold'>Рекомендуемые требования</h5>
              <ul className='list-disc pl-5 space-y-1 text-sm'>
                <li>Android 8.0+ (API 26)</li>
                <li>4 ГБ оперативной памяти</li>
                <li>500 МБ свободного места</li>
                <li>Разрешение экрана 1080p+</li>
              </ul>
            </div>
          </div>

          <h4 className='text-lg font-semibold text-white mb-4'>Пошаговая установка</h4>

          <div className='space-y-4'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 1: Подготовка устройства</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Откройте Настройки → Безопасность</li>
                <li>Включите "Неизвестные источники" или "Установка приложений"</li>
                <li>Убедитесь, что на устройстве достаточно свободного места</li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 2: Скачивание APK</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Скачайте APK-файл с официального сайта проекта</li>
                <li>Проверьте целостность файла (размер должен быть ~45 МБ)</li>
                <li>Убедитесь, что файл не повреждён</li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 3: Установка</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Откройте APK-файл в файловом менеджере</li>
                <li>Следуйте инструкциям установщика</li>
                <li>Предоставьте необходимые разрешения</li>
                <li>Дождитесь завершения установки</li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 4: Первый запуск</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Запустите приложение из меню приложений</li>
                <li>Пройдите первоначальную настройку</li>
                <li>Создайте анонимный профиль игрока</li>
                <li>Начните играть!</li>
              </ol>
            </div>
          </div>

          <div className='mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg'>
            <p className='text-sm text-yellow-400'>
              <strong>Важно:</strong> Если установка не удаётся, проверьте настройки безопасности и
              убедитесь, что APK-файл не повреждён.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function XAMPPSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Database className='h-6 w-6 mr-3 text-indigo-400' />
          Установка XAMPP и MySQL
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <h4 className='text-lg font-semibold text-white mb-4'>Требования к серверу</h4>

          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Системные требования</h5>
              <ul className='list-disc pl-5 space-y-1 text-sm'>
                <li>Windows 10/11, macOS 10.15+, Ubuntu 18.04+</li>
                <li>4 ГБ RAM (рекомендуется 8 ГБ)</li>
                <li>2 ГБ свободного места</li>
                <li>Java 11+ (OpenJDK или Oracle JDK)</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Сетевые требования</h5>
              <ul className='list-disc pl-5 space-y-1 text-sm'>
                <li>Wi-Fi роутер с поддержкой 192.168.137.1</li>
                <li>Порт 8080 свободен</li>
                <li>Порт 3306 для MySQL</li>
                <li>Локальная сеть (192.168.x.x)</li>
              </ul>
            </div>
          </div>

          <h4 className='text-lg font-semibold text-white mb-4'>Установка XAMPP</h4>

          <div className='space-y-4'>
            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 1: Скачивание XAMPP</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Перейдите на официальный сайт Apache Friends</li>
                <li>Скачайте XAMPP 8.2.x для вашей операционной системы</li>
                <li>Проверьте контрольную сумму файла</li>
              </ol>
            </div>

            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 2: Установка</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Запустите установщик от имени администратора</li>
                <li>Выберите компоненты: Apache, MySQL, phpMyAdmin</li>
                <li>Укажите путь установки (рекомендуется C:\xampp)</li>
                <li>Дождитесь завершения установки</li>
              </ol>
            </div>

            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 3: Настройка MySQL</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Запустите XAMPP Control Panel</li>
                <li>Запустите MySQL сервис</li>
                <li>Откройте phpMyAdmin (http://localhost/phpmyadmin)</li>
                <li>Создайте базу данных "game_db"</li>
                <li>Импортируйте SQL-скрипт из проекта</li>
              </ol>
            </div>
          </div>

          <div className='mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50'>
            <h5 className='text-indigo-400 font-semibold mb-3'>
              SQL-скрипт для создания базы данных
            </h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`-- Создание базы данных
CREATE DATABASE IF NOT EXISTS game_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE game_db;

-- Таблица пользователей
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    device_info JSON,
    settings JSON
);

-- Таблица игрового прогресса
CREATE TABLE game_states (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    current_day INT DEFAULT 1,
    scene_id VARCHAR(50),
    trust_flags JSON,
    threat_flags JSON,
    completed_minigames JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Индексы для оптимизации
CREATE INDEX idx_user_id ON game_states(user_id);
CREATE INDEX idx_current_day ON game_states(current_day);
CREATE INDEX idx_updated_at ON game_states(updated_at);`}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function KtorSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Server className='h-6 w-6 mr-3 text-blue-400' />
          Установка Ktor-сервера
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <h4 className='text-lg font-semibold text-white mb-4'>Подготовка окружения</h4>

          <div className='space-y-4'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 1: Установка Kotlin</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Установите Android Studio</li>
                <li>Убедитесь, что Kotlin plugin установлен</li>
                <li>Проверьте версию Kotlin в проекте</li>
                <li>
                  Проверьте установку:
                  <code className='bg-slate-800 px-2 py-1 rounded'>kotlin --version</code>
                </li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 2: Скачивание исходного кода</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Клонируйте репозиторий проекта</li>
                <li>Перейдите в папку server/</li>
                <li>Убедитесь, что Gradle доступен</li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 3: Настройка конфигурации</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Откройте файл application.conf</li>
                <li>Настройте параметры подключения к MySQL</li>
                <li>Укажите JWT-секрет и другие настройки безопасности</li>
                <li>Проверьте настройки портов</li>
              </ol>
            </div>

            <div className='border-l-4 border-blue-500 pl-4'>
              <h5 className='text-blue-400 font-semibold mb-2'>Шаг 4: Запуск сервера</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Убедитесь, что MySQL запущен в XAMPP</li>
                <li>
                  Выполните команду:
                  <code className='bg-slate-800 px-2 py-1 rounded'>./gradlew run</code>
                </li>
                <li>Дождитесь сообщения "Application started"</li>
                <li>Проверьте доступность: http://192.168.137.1:8080/health</li>
              </ol>
            </div>
          </div>

          <div className='mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50'>
            <h5 className='text-blue-400 font-semibold mb-3'>Конфигурация сервера</h5>
            <pre className='text-xs text-slate-300 bg-slate-800/50 p-3 rounded overflow-auto'>
              {`# application.conf
ktor {
    deployment {
        port = 8080
        port = \${?PORT}
    }
    application {
        modules = [ com.message404.ApplicationKt.module ]
    }
}

database {
    driverClassName = "com.mysql.cj.jdbc.Driver"
    jdbcURL = "jdbc:mysql://localhost:3306/game_db"
    username = "root"
    password = ""
    maxPoolSize = 10
}

security {
    jwt {
        secret = "your-secret-key-here"
        issuer = "message404"
        audience = "players"
        expiresIn = 86400000 // 24 hours
    }
}

logging {
    level = INFO
    file = "logs/server.log"
}`}
            </pre>
          </div>

          <div className='mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
            <p className='text-sm text-green-400'>
              <strong>Успешный запуск:</strong> Сервер должен быть доступен по адресу
              http://192.168.137.1:8080 и отвечать на запросы от Android-приложения.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NetworkSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Settings className='h-6 w-6 mr-3 text-indigo-400' />
          Настройка сети и синхронизации
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <h4 className='text-lg font-semibold text-white mb-4'>Настройка Wi-Fi роутера</h4>

          <div className='space-y-4'>
            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 1: Настройка IP-адреса</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Войдите в панель управления роутера</li>
                <li>Найдите настройки DHCP</li>
                <li>Установите статический IP 192.168.137.1 для сервера</li>
                <li>Настройте диапазон IP для клиентов: 192.168.137.2-254</li>
              </ol>
            </div>

            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 2: Настройка портов</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Откройте порт 8080 для HTTP-запросов</li>
                <li>Откройте порт 3306 для MySQL (если нужно)</li>
                <li>Настройте правила firewall</li>
                <li>Проверьте доступность портов</li>
              </ol>
            </div>

            <div className='border-l-4 border-indigo-500 pl-4'>
              <h5 className='text-indigo-400 font-semibold mb-2'>Шаг 3: Подключение устройств</h5>
              <ol className='list-decimal pl-5 space-y-1 text-sm'>
                <li>Подключите сервер к Wi-Fi сети</li>
                <li>Подключите Android-устройство к той же сети</li>
                <li>Проверьте доступность сервера с устройства</li>
                <li>Настройте синхронизацию в приложении</li>
              </ol>
            </div>
          </div>

          <div className='mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50'>
            <h5 className='text-indigo-400 font-semibold mb-3'>Проверка подключения</h5>
            <div className='space-y-2 text-sm'>
              <p>
                <strong>С сервера:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>curl http://localhost:8080/health</pre>

              <p>
                <strong>С Android-устройства:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>
                curl http://192.168.137.1:8080/health
              </pre>

              <p>
                <strong>Проверка MySQL:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>
                mysql -h localhost -u root -p game_db
              </pre>
            </div>
          </div>

          <div className='mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg'>
            <p className='text-sm text-blue-400'>
              <strong>Примечание:</strong> Синхронизация работает только в локальной сети.
              Интернет-соединение не требуется для основной функциональности игры.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ChecklistSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <CheckCircle className='h-6 w-6 mr-3 text-green-400' />
          Проверка установки
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-slate-300'>
          <h4 className='text-lg font-semibold text-white mb-4'>Чек-лист проверки</h4>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h5 className='text-green-400 font-semibold'>Android-приложение</h5>
              <ul className='space-y-2'>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Приложение запускается без ошибок</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Создан анонимный профиль</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Отображается первый диалог</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Прогресс сохраняется</span>
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h5 className='text-green-400 font-semibold'>Сервер и база данных</h5>
              <ul className='space-y-2'>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>XAMPP запущен</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>MySQL работает</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Ktor-сервер запущен</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='h-4 w-4 text-green-400' />
                  <span className='text-sm'>Синхронизация работает</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50'>
            <h5 className='text-green-400 font-semibold mb-3'>Команды для диагностики</h5>
            <div className='space-y-2 text-sm'>
              <p>
                <strong>Проверка Kotlin:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>kotlin --version</pre>

              <p>
                <strong>Проверка MySQL:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>
                mysql -u root -p -e "SHOW DATABASES;"
              </pre>

              <p>
                <strong>Проверка Ktor:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>curl http://localhost:8080/health</pre>

              <p>
                <strong>Проверка портов:</strong>
              </p>
              <pre className='bg-slate-800/50 p-2 rounded'>netstat -an | grep :8080</pre>
            </div>
          </div>

          <div className='mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
            <p className='text-sm text-green-400'>
              <strong>Поздравляем!</strong> Если все пункты чек-листа выполнены, установка прошла
              успешно. Теперь вы можете наслаждаться игрой «Сообщение 404».
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SetupContent() {
  return (
    <div className='w-full max-w-none'>
      <SetupHeader />
      <QuickStartSection />
      <AndroidSection />
      <XAMPPSection />
      <KtorSection />
      <NetworkSection />
      <ChecklistSection />
    </div>
  );
}

export default function SetupPage() {
  return (
    <Suspense
      fallback={
        <div className='space-y-8'>
          <HeaderSkeleton />
        </div>
      }
    >
      <SetupContent />
    </Suspense>
  );
}
