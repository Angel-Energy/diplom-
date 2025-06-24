'use client';

import { Wifi, Smartphone, Copy, CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);

  // Настройки Wi-Fi сети
  const wifiConfig = {
    ssid: 'Message404-Dev',
    password: 'Message404',
    security: 'WPA2',
    hidden: false,
  };

  // QR код для Wi-Fi
  const wifiQRCode =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBmMTcyYSIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwNmI2ZDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldpLUZpIFFSPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iODAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM4YjVjZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lc3NhZ2U0MDQtRGV2PC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiM2NDc0OGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBhc3M6IE1lc3NhZ2U0MDQ8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iNTYiIHk9IjQwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iNzIiIHk9IjQwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iNDAiIHk9IjU2IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iNzIiIHk9IjU2IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iMTM2IiB5PSI0MCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iIzA2YjZkNCIvPgogIDxyZWN0IHg9IjE1MiIgeT0iNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KPC9zdmc+Cg==';

  // QR код для скачивания APK
  const apkQRCode =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBmMTcyYSIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwNmI2ZDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFQSyBRUjwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjgwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOGI1Y2Y2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7QodC60LDRh9Cw0YLRjCBBUEs8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+0KHQvtC+0LHRidC10L3QuNC1IDQwNDwvdGV4dD4KICA8cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KICA8cmVjdCB4PSI1NiIgeT0iNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KICA8cmVjdCB4PSI3MiIgeT0iNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KICA8cmVjdCB4PSI0MCIgeT0iNTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KICA8cmVjdCB4PSI3MiIgeT0iNTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwNmI2ZDQiLz4KICA8cmVjdCB4PSIxMzYiIHk9IjQwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0Ii8+CiAgPHJlY3QgeD0iMTUyIiB5PSI0MCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iIzA2YjZkNCIvPgo8L3N2Zz4K';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setupSteps = [
    {
      step: 1,
      title: 'Подключение к Wi-Fi',
      description: 'Отсканируйте QR код Wi-Fi или подключитесь вручную к сети Message404-Dev',
      icon: '📶',
    },
    {
      step: 2,
      title: 'Ввод пароля',
      description: 'Введите пароль Message404 при подключении к сети',
      icon: '🔐',
    },
    {
      step: 3,
      title: 'Скачивание APK',
      description: 'Отсканируйте QR код APK для скачивания приложения',
      icon: '📱',
    },
    {
      step: 4,
      title: 'Установка',
      description: 'Установите APK файл и запустите игру Сообщение 404',
      icon: '🎮',
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
          Скачать APK + Wi-Fi подключение
        </h1>
        <p className='text-base text-slate-300'>
          QR коды для быстрого подключения к локальной сети разработки и скачивания мобильной игры &quot;Сообщение 404&quot;
        </p>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant='outline'
            className='bg-purple-500/10 text-purple-400 border-purple-500/20'
          >
            WPA2 защищенная сеть
          </Badge>
          <Badge variant='outline' className='bg-cyan-500/10 text-cyan-400 border-cyan-500/20'>
            APK v1.0.0
          </Badge>
          <Badge
            variant='outline'
            className='bg-purple-500/10 text-purple-400 border-purple-500/20'
          >
            Android 5.0+
          </Badge>
        </div>
      </div>

      {/* Главная секция с QR кодами */}
      <Card className='bg-slate-800/50 border-slate-700/50 p-2'>
        <CardHeader>
          <CardTitle className='text-white text-center text-2xl'>
            QR коды для быстрой настройки
          </CardTitle>
          <p className='text-slate-400 text-sm text-center'>
            Отсканируйте коды в указанном порядке для подключения и установки игры
          </p>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Wi-Fi QR код */}
            <div className='text-center space-y-4'>
              <div className='flex items-center justify-center space-x-2 mb-4'>
                <span className='flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-semibold'>
                  1
                </span>
                <h3 className='text-xl font-semibold text-purple-400 flex items-center'>
                  <Wifi className='h-5 w-5 mr-2' />
                  Wi-Fi подключение
                </h3>
              </div>
              <div className='bg-white p-2 rounded-lg inline-block'>
                <img
                  src={wifiQRCode || '/placeholder.svg'}
                  alt='Wi-Fi QR Code'
                  className='w-32 h-32'
                />
              </div>
              <div className='space-y-2'>
                <p className='text-cyan-400 font-semibold'>Сеть: Message404-Dev</p>
                <p className='text-slate-300 text-sm'>WPA2 защищенная сеть</p>
                <p className='text-purple-400 text-sm font-mono'>Пароль: Message404</p>
              </div>
            </div>

            {/* APK QR код */}
            <div className='text-center space-y-4'>
              <div className='flex items-center justify-center space-x-2 mb-4'>
                <span className='flex-shrink-0 w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-sm font-semibold'>
                  2
                </span>
                <h3 className='text-xl font-semibold text-cyan-400 flex items-center'>
                  <Download className='h-5 w-5 mr-2' />
                  Скачать APK
                </h3>
              </div>
              <div className='bg-white p-2 rounded-lg inline-block'>
                <img
                  src={apkQRCode || '/placeholder.svg'}
                  alt='APK QR Code'
                  className='w-32 h-32'
                />
              </div>
              <div className='space-y-2'>
                <p className='text-cyan-400 font-semibold'>Сообщение 404 v1.0.0</p>
                <p className='text-slate-300 text-sm'>Android APK файл</p>
                <p className='text-purple-400 text-sm'>Размер: ~50 МБ</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Пошаговые инструкции */}
      <Card className='bg-slate-800/50 border-slate-700/50 p-2'>
        <CardHeader>
          <CardTitle className='text-white'>Пошаговые инструкции</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {setupSteps.map((step, index) => (
              <div
                key={index}
                className='flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg'
              >
                <div className='text-2xl'>{step.icon}</div>
                <div className='flex-1'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <span className='flex-shrink-0 w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-semibold'>
                      {step.step}
                    </span>
                    <h4 className='text-cyan-400 font-semibold'>{step.title}</h4>
                  </div>
                  <p className='text-slate-300 text-sm'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Настройки сети */}
      <Card className='bg-slate-800/50 border-slate-700/50 p-2'>
        <CardHeader>
          <CardTitle className='text-white flex items-center'>
            <Smartphone className='h-6 w-6 mr-3 text-purple-400' />
            Настройки сети (ручное подключение)
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-3'>
            <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
              <span className='text-slate-300'>SSID</span>
              <div className='flex items-center space-x-2'>
                <code className='text-cyan-400 font-mono'>{wifiConfig.ssid}</code>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => copyToClipboard(wifiConfig.ssid)}
                  className='h-6 w-6 p-0'
                >
                  {copied ? (
                    <CheckCircle className='h-4 w-4 text-green-400' />
                  ) : (
                    <Copy className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </div>

            <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
              <span className='text-slate-300'>Пароль</span>
              <div className='flex items-center space-x-2'>
                <code className='text-purple-400 font-mono'>{wifiConfig.password}</code>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => copyToClipboard(wifiConfig.password)}
                  className='h-6 w-6 p-0'
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>

            <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
              <span className='text-slate-300'>Безопасность</span>
              <Badge
                variant='outline'
                className='bg-purple-500/10 text-purple-400 border-purple-500/20'
              >
                {wifiConfig.security}
              </Badge>
            </div>

            <div className='flex justify-between items-center p-3 bg-slate-900/50 rounded-lg'>
              <span className='text-slate-300'>IP сервера</span>
              <div className='flex items-center space-x-2'>
                <code className='text-cyan-400 font-mono'>192.168.1.100:8080</code>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => copyToClipboard('192.168.1.100:8080')}
                  className='h-6 w-6 p-0'
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Системные требования */}
      <Card className='bg-slate-800/50 border-slate-700/50 p-2'>
        <CardHeader>
          <CardTitle className='text-white'>Системные требования</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h4 className='text-cyan-400 font-semibold'>Минимальные требования</h4>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Android 5.0+ (API 21)</li>
                <li>• 2 ГБ RAM</li>
                <li>• 500 МБ свободного места</li>
                <li>• Разрешение экрана 720p+</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='text-purple-400 font-semibold'>Рекомендуемые требования</h4>
              <ul className='text-slate-300 text-sm space-y-2'>
                <li>• Android 8.0+ (API 26)</li>
                <li>• 4 ГБ RAM</li>
                <li>• 1 ГБ свободного места</li>
                <li>• Разрешение экрана 1080p+</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Устранение неполадок */}
      <Card className='bg-slate-800/50 border-slate-700/50 p-2'>
        <CardHeader>
          <CardTitle className='text-white'>Устранение неполадок</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <h4 className='text-cyan-400 font-semibold'>Проблемы с Wi-Fi</h4>
              <ul className='text-slate-300 text-sm space-y-1'>
                <li>• Убедитесь что точка доступа запущена на ноутбуке</li>
                <li>• Проверьте что Wi-Fi адаптер включен</li>
                <li>• Перезапустите точку доступа</li>
                <li>• Обновите список сетей на устройстве</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='text-purple-400 font-semibold'>Проблемы с APK</h4>
              <ul className='text-slate-300 text-sm space-y-1'>
                <li>• Разрешите установку из неизвестных источников</li>
                <li>• Проверьте свободное место на устройстве</li>
                <li>• Перезагрузите устройство после установки</li>
                <li>• Убедитесь что версия Android поддерживается</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
