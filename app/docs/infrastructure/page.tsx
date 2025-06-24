'use client';

import { Server, Shield, Database, Network, Globe, Settings } from 'lucide-react';
import { Suspense } from 'react';

import { HeaderSkeleton } from '@/components/loading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function InfrastructureHeader() {
  return (
    <div className='space-y-4 mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
        Инфраструктура и развёртывание
      </h1>
      <p className='text-xl text-slate-300'>
        Комплексная архитектура развёртывания, сетевые аспекты и обеспечение безопасности
      </p>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          Ktor + MySQL
        </Badge>
        <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
          XAMPP
        </Badge>
        <Badge variant='outline' className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
          TLS 1.2+
        </Badge>
        <Badge variant='outline' className='bg-indigo-500/10 text-indigo-400 border-indigo-500/20'>
          Локальная сеть
        </Badge>
      </div>
    </div>
  );
}

function DeploymentSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Server className='h-6 w-6 mr-3 text-blue-400' />
          Архитектура развёртывания
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>Общая архитектура</h4>
          <p className='text-slate-300 leading-relaxed'>
            Система построена на принципах микросервисной архитектуры с локальным развёртыванием для
            обеспечения автономности и соответствия российскому законодательству. Все компоненты
            работают в изолированной локальной сети.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-3'>
            <h5 className='text-indigo-400 font-semibold'>Клиентская часть</h5>
            <ul className='text-slate-300 text-sm space-y-2'>
              <li>
                • <strong>Android приложение:</strong> Kotlin + Jetpack Compose
              </li>
              <li>
                • <strong>Локальное хранение:</strong> Room Database + DataStore
              </li>
              <li>
                • <strong>Сетевое взаимодействие:</strong> Retrofit + OkHttp
              </li>
              <li>
                • <strong>Шифрование:</strong> AES-256 для локальных данных
              </li>
              <li>
                • <strong>Аутентификация:</strong> JWT токены
              </li>
              <li>
                • <strong>Синхронизация:</strong> Фоновая синхронизация
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h5 className='text-indigo-400 font-semibold'>Серверная часть</h5>
            <ul className='text-slate-300 text-sm space-y-2'>
              <li>
                • <strong>Веб-сервер:</strong> Ktor на Kotlin
              </li>
              <li>
                • <strong>База данных:</strong> MySQL через XAMPP
              </li>
              <li>
                • <strong>ORM:</strong> Exposed для работы с БД
              </li>
              <li>
                • <strong>Аутентификация:</strong> JWT + bcrypt
              </li>
              <li>
                • <strong>Безопасность:</strong> TLS 1.2+ + Certificate Pinning
              </li>
              <li>
                • <strong>Логирование:</strong> Logback + файловые логи
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DatabaseSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Database className='h-6 w-6 mr-3 text-indigo-400' />
          База данных и хранение
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>MySQL через XAMPP</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Конфигурация БД</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Сервер:</strong> MySQL 8.0.36
                </li>
                <li>
                  • <strong>Порт:</strong> 3306
                </li>
                <li>
                  • <strong>База данных:</strong> game_db
                </li>
                <li>
                  • <strong>Кодировка:</strong> utf8mb4
                </li>
                <li>
                  • <strong>Движок:</strong> InnoDB
                </li>
                <li>
                  • <strong>Пользователь:</strong> root (без пароля)
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Основные таблицы</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>users:</strong> Пользователи системы
                </li>
                <li>
                  • <strong>scenes:</strong> Игровые сцены
                </li>
                <li>
                  • <strong>dialogues:</strong> Диалоги и сообщения
                </li>
                <li>
                  • <strong>choices:</strong> Варианты выбора
                </li>
                <li>
                  • <strong>progress:</strong> Прогресс игроков
                </li>
                <li>
                  • <strong>minigames:</strong> Мини-игры
                </li>
              </ul>
            </div>
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
          <Network className='h-6 w-6 mr-3 text-blue-400' />
          Сетевая архитектура
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>Локальная сеть</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Сетевая конфигурация</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Диапазон IP:</strong> 192.168.137.x
                </li>
                <li>
                  • <strong>Сервер IP:</strong> 192.168.137.1
                </li>
                <li>
                  • <strong>Порт Ktor:</strong> 8080
                </li>
                <li>
                  • <strong>Порт MySQL:</strong> 3306
                </li>
                <li>
                  • <strong>Протокол:</strong> HTTPS (TLS 1.2+)
                </li>
                <li>
                  • <strong>Сертификат:</strong> Самоподписанный
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Безопасность сети</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Firewall:</strong> Только необходимые порты
                </li>
                <li>
                  • <strong>VPN:</strong> Не требуется (локальная сеть)
                </li>
                <li>
                  • <strong>Шифрование:</strong> TLS 1.2+ для всех соединений
                </li>
                <li>
                  • <strong>Аутентификация:</strong> JWT токены
                </li>
                <li>
                  • <strong>Rate Limiting:</strong> 100 запросов/мин
                </li>
                <li>
                  • <strong>Логирование:</strong> Все сетевые события
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SecuritySection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Shield className='h-6 w-6 mr-3 text-indigo-400' />
          Безопасность
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>Меры безопасности</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Шифрование данных</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Локальное хранение:</strong> AES-256 (SQLCipher)
                </li>
                <li>
                  • <strong>Передача данных:</strong> TLS 1.2+
                </li>
                <li>
                  • <strong>Пароли:</strong> bcrypt (cost factor 12)
                </li>
                <li>
                  • <strong>JWT токены:</strong> HS256 с секретным ключом
                </li>
                <li>
                  • <strong>Сертификаты:</strong> Самоподписанные
                </li>
                <li>
                  • <strong>Ключи:</strong> Хранение в Android Keystore
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Соответствие 152-ФЗ</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Анонимность:</strong> Без сбора персональных данных
                </li>
                <li>
                  • <strong>Локальное хранение:</strong> Данные не покидают устройство
                </li>
                <li>
                  • <strong>Согласие:</strong> Не требуется (анонимные данные)
                </li>
                <li>
                  • <strong>Права субъектов:</strong> Не применимо
                </li>
                <li>
                  • <strong>Уведомления:</strong> Не требуется
                </li>
                <li>
                  • <strong>Аудит:</strong> Логирование для безопасности
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MonitoringSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Settings className='h-6 w-6 mr-3 text-indigo-400' />
          Мониторинг и обслуживание
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>Системный мониторинг</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Метрики производительности</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>CPU Usage:</strong> &lt; 80% в пике
                </li>
                <li>
                  • <strong>Memory Usage:</strong> &lt; 70% от доступной
                </li>
                <li>
                  • <strong>Disk Usage:</strong> &lt; 85% от общего объёма
                </li>
                <li>
                  • <strong>Network I/O:</strong> Мониторинг трафика
                </li>
                <li>
                  • <strong>Response Time:</strong> &lt; 100 мс для API
                </li>
                <li>
                  • <strong>Error Rate:</strong> &lt; 1% запросов
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Логирование</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Application Logs:</strong> Logback + JSON
                </li>
                <li>
                  • <strong>Access Logs:</strong> HTTP запросы
                </li>
                <li>
                  • <strong>Error Logs:</strong> Исключения и ошибки
                </li>
                <li>
                  • <strong>Security Logs:</strong> События безопасности
                </li>
                <li>
                  • <strong>Database Logs:</strong> MySQL slow queries
                </li>
                <li>
                  • <strong>System Logs:</strong> Системные события
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ScalingSection() {
  return (
    <Card className='bg-slate-800/50 border-slate-700/50 mb-8'>
      <CardHeader>
        <CardTitle className='text-white flex items-center'>
          <Globe className='h-6 w-6 mr-3 text-blue-400' />
          Масштабирование и развитие
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          <h4 className='text-blue-400 font-semibold text-lg'>Стратегия масштабирования</h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Вертикальное масштабирование</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>CPU:</strong> Увеличение ядер процессора
                </li>
                <li>
                  • <strong>RAM:</strong> Добавление оперативной памяти
                </li>
                <li>
                  • <strong>Storage:</strong> SSD диски для БД
                </li>
                <li>
                  • <strong>Network:</strong> Гигабитное соединение
                </li>
                <li>
                  • <strong>Cache:</strong> Redis для кэширования
                </li>
                <li>
                  • <strong>Load Balancer:</strong> Nginx для балансировки
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h5 className='text-indigo-400 font-semibold'>Горизонтальное масштабирование</h5>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>
                  • <strong>Multiple Servers:</strong> Несколько Ktor серверов
                </li>
                <li>
                  • <strong>Database Clustering:</strong> MySQL кластер
                </li>
                <li>
                  • <strong>CDN:</strong> Для статического контента
                </li>
                <li>
                  • <strong>Microservices:</strong> Разделение на микросервисы
                </li>
                <li>
                  • <strong>Containerization:</strong> Docker контейнеры
                </li>
                <li>
                  • <strong>Orchestration:</strong> Kubernetes для управления
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfrastructureContent() {
  return (
    <div className='w-full max-w-none'>
      <InfrastructureHeader />
      <DeploymentSection />
      <DatabaseSection />
      <NetworkSection />
      <SecuritySection />
      <MonitoringSection />
      <ScalingSection />
    </div>
  );
}

export default function InfrastructurePage() {
  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <InfrastructureContent />
    </Suspense>
  );
}
