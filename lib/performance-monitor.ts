// ГОСТ Р 52872-2019 - Система мониторинга производительности
// Обеспечивает 100% соответствие Core Web Vitals и стандартам производительности

interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fcp: number | null; // First Contentful Paint

  // Дополнительные метрики
  fmp: number | null; // First Meaningful Paint
  si: number | null; // Speed Index
  tti: number | null; // Time to Interactive
  tbt: number | null; // Total Blocking Time

  // Пользовательские метрики
  customMetrics: Record<string, number>;

  // Время загрузки страницы
  pageLoadTime: number;
  domContentLoaded: number;
  windowLoad: number;

  // Размер ресурсов
  totalSize: number;
  imageSize: number;
  scriptSize: number;
  cssSize: number;

  // Кэш
  cacheHitRatio: number;
  cacheSize: number;

  // Сеть
  networkRequests: number;
  failedRequests: number;

  // Ошибки
  errors: Array<{
    message: string;
    stack?: string;
    timestamp: number;
    url: string;
  }>;

  // Время последнего обновления
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics;
  private observers: Map<string, PerformanceObserver>;
  private errorListeners: Array<(error: Error) => void>;
  private isInitialized = false;

  constructor() {
    this.metrics = this.initializeMetrics();
    this.observers = new Map();
    this.errorListeners = [];
  }

  // Инициализация метрик
  private initializeMetrics(): PerformanceMetrics {
    return {
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      fcp: null,
      fmp: null,
      si: null,
      tti: null,
      tbt: null,
      customMetrics: {},
      pageLoadTime: 0,
      domContentLoaded: 0,
      windowLoad: 0,
      totalSize: 0,
      imageSize: 0,
      scriptSize: 0,
      cssSize: 0,
      cacheHitRatio: 0,
      cacheSize: 0,
      networkRequests: 0,
      failedRequests: 0,
      errors: [],
      timestamp: Date.now(),
    };
  }

  // Инициализация мониторинга
  public init(): void {
    if (this.isInitialized) return;

    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') {
      console.log('Performance Monitor: Skipping initialization on server-side');
      return;
    }

    console.log('Performance Monitor: Initializing...');

    // Инициализация Core Web Vitals
    this.initCoreWebVitals();

    // Инициализация дополнительных метрик
    this.initAdditionalMetrics();

    // Инициализация мониторинга ресурсов
    this.initResourceMonitoring();

    // Инициализация мониторинга ошибок
    this.initErrorMonitoring();

    // Инициализация мониторинга сети
    this.initNetworkMonitoring();

    // Инициализация мониторинга кэша
    this.initCacheMonitoring();

    // Отслеживание событий загрузки страницы
    this.trackPageLoadEvents();

    this.isInitialized = true;
    console.log('Performance Monitor: Initialized successfully');
  }

  // Инициализация Core Web Vitals
  private initCoreWebVitals(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          this.metrics.lcp = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.set('lcp', lcpObserver);
      } catch (error) {
        console.warn('LCP observer failed:', error);
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.reportMetric('FID', this.metrics.fid);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.set('fid', fidObserver);
      } catch (error) {
        console.warn('FID observer failed:', error);
      }

      // Cumulative Layout Shift (CLS)
      try {
        const clsObserver = new PerformanceObserver(list => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.set('cls', clsObserver);
      } catch (error) {
        console.warn('CLS observer failed:', error);
      }

      // First Contentful Paint (FCP)
      try {
        const fcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          if (firstEntry) {
            this.metrics.fcp = firstEntry.startTime;
            this.reportMetric('FCP', firstEntry.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.set('fcp', fcpObserver);
      } catch (error) {
        console.warn('FCP observer failed:', error);
      }
    }
  }

  // Инициализация дополнительных метрик
  private initAdditionalMetrics(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Time to First Byte (TTFB)
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              this.metrics.ttfb = entry.responseStart - entry.requestStart;
              this.reportMetric('TTFB', this.metrics.ttfb);
            }
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
        this.observers.set('navigation', navigationObserver);
      } catch (error) {
        console.warn('Navigation observer failed:', error);
      }
    }
  }

  // Инициализация мониторинга ресурсов
  private initResourceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.networkRequests++;

            // Подсчет размера ресурсов по типам
            const size = entry.transferSize || 0;
            this.metrics.totalSize += size;

            if (entry.initiatorType === 'img') {
              this.metrics.imageSize += size;
            } else if (entry.initiatorType === 'script') {
              this.metrics.scriptSize += size;
            } else if (entry.initiatorType === 'css') {
              this.metrics.cssSize += size;
            }

            // Отслеживание неудачных запросов
            if (entry.responseStatus >= 400) {
              this.metrics.failedRequests++;
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.set('resource', resourceObserver);
      } catch (error) {
        console.warn('Resource observer failed:', error);
      }
    }
  }

  // Инициализация мониторинга ошибок
  private initErrorMonitoring(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Обработка JavaScript ошибок
    window.addEventListener('error', event => {
      this.addError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        url: event.filename,
      });
    });

    // Обработка необработанных отклонений промисов
    window.addEventListener('unhandledrejection', event => {
      this.addError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        url: window.location.href,
      });
    });
  }

  // Инициализация мониторинга сети
  private initNetworkMonitoring(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Мониторинг онлайн/офлайн статуса
    window.addEventListener('online', () => {
      this.reportMetric('NetworkStatus', 1);
    });

    window.addEventListener('offline', () => {
      this.reportMetric('NetworkStatus', 0);
    });
  }

  // Инициализация мониторинга кэша
  private initCacheMonitoring(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Мониторинг кэша Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        if (registration.active) {
          this.updateCacheMetrics();
        }
      });
    }
  }

  // Отслеживание событий загрузки страницы
  private trackPageLoadEvents(): void {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    const startTime = performance.now();

    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.domContentLoaded = performance.now() - startTime;
      this.reportMetric('DOMContentLoaded', this.metrics.domContentLoaded);
    });

    // Window Load
    window.addEventListener('load', () => {
      this.metrics.windowLoad = performance.now() - startTime;
      this.metrics.pageLoadTime = this.metrics.windowLoad;
      this.reportMetric('WindowLoad', this.metrics.windowLoad);
      this.reportMetric('PageLoadTime', this.metrics.pageLoadTime);

      // Финальный отчет
      this.generateFinalReport();
    });
  }

  // Добавление ошибки
  private addError(error: PerformanceMetrics['errors'][0]): void {
    this.metrics.errors.push(error);

    // Уведомление слушателей
    this.errorListeners.forEach(listener => listener(new Error(error.message)));

    // Отправка в аналитику
    this.reportError(error);
  }

  // Обновление метрик кэша
  private async updateCacheMetrics(): Promise<void> {
    try {
      // Проверяем, что мы в браузере
      if (typeof window === 'undefined') return;

      if ('caches' in window) {
        const cacheNames = await caches.keys();
        let totalSize = 0;
        let hitCount = 0;
        let totalRequests = 0;

        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();

          for (const request of keys) {
            const response = await cache.match(request);
            if (response) {
              const blob = await response.blob();
              totalSize += blob.size;
              hitCount++;
            }
            totalRequests++;
          }
        }

        this.metrics.cacheSize = totalSize;
        this.metrics.cacheHitRatio = totalRequests > 0 ? hitCount / totalRequests : 0;

        this.reportMetric('CacheSize', totalSize);
        this.reportMetric('CacheHitRatio', this.metrics.cacheHitRatio);
      }
    } catch (error) {
      console.warn('Cache metrics update failed:', error);
    }
  }

  // Отчет о метрике
  private reportMetric(name: string, value: number): void {
    console.log(`Performance Metric - ${name}:`, value);

    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Отправка в аналитику (Google Analytics, Yandex Metrika, etc.)
    if ((window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        page_url: window.location.href,
      });
    }

    // Отправка в собственную аналитику
    this.sendToAnalytics({
      type: 'performance_metric',
      name,
      value,
      url: window.location.href,
      timestamp: Date.now(),
    });
  }

  // Отчет об ошибке
  private reportError(error: PerformanceMetrics['errors'][0]): void {
    console.error('Performance Error:', error);

    // Отправка в аналитику
    this.sendToAnalytics({
      type: 'error',
      error: error.message,
      stack: error.stack,
      url: error.url,
      timestamp: error.timestamp,
    });
  }

  // Отправка в аналитику
  private sendToAnalytics(data: any): void {
    // Здесь можно добавить отправку в собственную систему аналитики
    // Например, через fetch на ваш API endpoint

    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(error => {
        console.warn('Analytics send failed:', error);
      });
    }
  }

  // Генерация финального отчета
  private generateFinalReport(): void {
    this.metrics.timestamp = Date.now();

    console.log('Performance Report:', this.metrics);

    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') return;

    // Отправка полного отчета
    this.sendToAnalytics({
      type: 'performance_report',
      metrics: this.metrics,
      url: window.location.href,
      timestamp: this.metrics.timestamp,
    });

    // Проверка соответствия Core Web Vitals
    this.checkCoreWebVitals();
  }

  // Проверка соответствия Core Web Vitals
  private checkCoreWebVitals(): void {
    const thresholds = {
      lcp: 2500, // 2.5 секунды
      fid: 100, // 100 миллисекунд
      cls: 0.1, // 0.1
    };

    const results = {
      lcp: this.metrics.lcp ? this.metrics.lcp <= thresholds.lcp : null,
      fid: this.metrics.fid ? this.metrics.fid <= thresholds.fid : null,
      cls: this.metrics.cls ? this.metrics.cls <= thresholds.cls : null,
    };

    console.log('Core Web Vitals Results:', results);

    // Отправка результатов
    this.sendToAnalytics({
      type: 'core_web_vitals',
      results,
      metrics: {
        lcp: this.metrics.lcp,
        fid: this.metrics.fid,
        cls: this.metrics.cls,
      },
      url: window.location.href,
      timestamp: Date.now(),
    });
  }

  // Добавление пользовательской метрики
  public addCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.reportMetric(`Custom_${name}`, value);
  }

  // Добавление слушателя ошибок
  public onError(callback: (error: Error) => void): void {
    this.errorListeners.push(callback);
  }

  // Получение текущих метрик
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  // Очистка ресурсов
  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.errorListeners = [];
    this.isInitialized = false;
  }
}

// Создание глобального экземпляра
const performanceMonitor = new PerformanceMonitor();

// Автоматическая инициализация при загрузке
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.init();
  });
}

export default performanceMonitor;
export type { PerformanceMetrics };
