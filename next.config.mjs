/** @type {import('next').NextConfig} */
const nextConfig = {
  // ГОСТ Р 52872-2019 - Стандарт на доступность веб-контента
  // Конфигурация для соответствия международным стандартам
  
  // Настройки экспериментальных функций
  experimental: {
    // Улучшенная производительность
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
    // Улучшенная типизация
    typedRoutes: true,
    // Улучшенная обработка ошибок
    serverComponentsExternalPackages: ['mermaid'],
    // Настройки для мониторинга производительности
    instrumentationHook: true,
  },

  // Настройки изображений
  images: {
    // Разрешенные домены для изображений
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Форматы изображений
    formats: ['image/webp', 'image/avif'],
    // Размеры изображений
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Минимальный размер для оптимизации
    minimumCacheTTL: 60,
    // Отключение небезопасных доменов
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Отключение оптимизации для локальных изображений
    unoptimized: true,
  },

  // Настройки заголовков безопасности
  async headers() {
    return [
      {
        // Применение ко всем маршрутам
        source: '/(.*)',
        headers: [
          // ГОСТ Р 52872-2019 - Заголовки безопасности
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Заголовки для производительности
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Заголовки для доступности
          {
            key: 'X-Accessibility',
            value: 'WCAG 2.1 AA compliant',
          },
          {
            key: 'X-Standards',
            value: 'GOST-R-52872-2019',
          },
        ],
      },
      {
        // Специальные заголовки для API
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        // Специальные заголовки для статических файлов Next.js
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
      {
        // Заголовки для CSS файлов
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
    ]
  },

  // Настройки перенаправлений
  async redirects() {
    return [
      // Перенаправление с www на основной домен
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.message404-docs.vercel.app',
          },
        ],
        destination: 'https://message404-docs.vercel.app/:path*',
        permanent: true,
      },
      // Перенаправление с HTTP на HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://message404-docs.vercel.app/:path*',
        permanent: true,
      },
    ]
  },

  // Настройки перезаписи
  async rewrites() {
    return [
      // Перезапись для API
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      // Перезапись для статических файлов
      {
        source: '/static/:path*',
        destination: '/_next/static/:path*',
      },
    ]
  },

  // Настройки webpack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Оптимизация для производительности
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    }

    return config
  },

  // Настройки TypeScript
  typescript: {
    // Игнорировать ошибки TypeScript в production
    ignoreBuildErrors: false,
  },

  // Настройки ESLint
  eslint: {
    // Игнорировать ошибки ESLint в production
    ignoreDuringBuilds: false,
  },

  // Настройки для компрессии
  compress: true,

  // Настройки для минификации
  swcMinify: true,

  // Настройки для оптимизации
  poweredByHeader: false,
  generateEtags: true,

  // Настройки для мониторинга
  onDemandEntries: {
    // Период (в мс), в течение которого сервер будет хранить страницы в буфере
    maxInactiveAge: 25 * 1000,
    // Количество страниц, которые должны храниться одновременно
    pagesBufferLength: 2,
  },

  // Настройки для разработки
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Настройки для сборки
  distDir: '.next',
  assetPrefix: '',

  // Настройки для сервера
  serverRuntimeConfig: {
    // Конфигурация только для сервера
    mySecret: process.env.MY_SECRET,
  },

  // Настройки для клиента
  publicRuntimeConfig: {
    // Конфигурация, доступная как серверу, так и клиенту
    staticFolder: '/static',
  },

  // Настройки для экспорта
  trailingSlash: false,
}

export default nextConfig
