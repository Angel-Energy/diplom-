'use client';

import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Link from 'next/link';
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | undefined;
  errorId?: string | undefined;
  timestamp?: string | null | undefined;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorId: undefined,
      timestamp: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Возвращаем только базовое состояние без динамических значений
    return {
      hasError: true,
      error,
      errorId: undefined,
      timestamp: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Генерируем errorId и timestamp только на клиенте
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Обновляем состояние с динамическими значениями
    this.setState({
      errorId,
      timestamp,
    });

    // Логирование ошибки
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Log error with additional context
    console.error('Error Details:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId,
      timestamp,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server-side',
      url: typeof window !== 'undefined' ? window.location.href : 'server-side',
    });

    // Report error to analytics (internal handling)
    this.reportErrorToAnalytics(error, errorInfo);
  }

  private reportErrorToAnalytics = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // This is a placeholder for actual error reporting
      // In production, you would integrate with services like Sentry, LogRocket, etc.
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: this.state.timestamp,
        url: typeof window !== 'undefined' ? window.location.href : 'server-side',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server-side',
      };

      // Example: Send to your analytics service
      // analytics.track('Error Boundary Caught', errorData)

      console.log('Error reported to analytics:', errorData);
    } catch (analyticsError) {
      console.error('Failed to report error to analytics:', analyticsError);
    }
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorId: undefined,
      timestamp: undefined,
    } as State);
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='min-h-screen bg-slate-900 flex items-center justify-center p-4'>
          <div className='max-w-md w-full bg-slate-800 rounded-lg p-6 border border-slate-700'>
            <div className='flex items-center space-x-3 mb-4'>
              <AlertTriangle className='h-6 w-6 text-red-400' />
              <h2 className='text-xl font-semibold text-white'>Что-то пошло не так</h2>
            </div>

            <p className='text-slate-300 mb-4'>
              Произошла непредвиденная ошибка. Пожалуйста, попробуйте обновить страницу.
            </p>

            {this.state.errorId && (
              <div className='mb-4 p-2 bg-slate-900/50 rounded text-xs text-slate-400'>
                ID ошибки: {this.state.errorId}
              </div>
            )}

            {this.state.error && (
              <details className='mb-4'>
                <summary className='text-sm text-slate-400 cursor-pointer hover:text-slate-300 flex items-center'>
                  <Bug className='h-4 w-4 mr-2' />
                  Подробности ошибки
                </summary>
                <pre className='mt-2 text-xs text-red-400 bg-slate-900 p-2 rounded overflow-auto max-h-32'>
                  {this.state.error.message}
                  {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                    <div className='mt-2 text-slate-500'>{this.state.error.stack}</div>
                  )}
                </pre>
              </details>
            )}

            <div className='flex flex-col space-y-2'>
              <Button onClick={this.handleReset} className='w-full'>
                <RefreshCw className='h-4 w-4 mr-2' />
                Попробовать снова
              </Button>

              <div className='flex space-x-2'>
                <Button variant='outline' onClick={this.handleReload} className='flex-1'>
                  Обновить страницу
                </Button>

                <Link href='/'>
                  <Button variant='outline' className='flex-1'>
                    <Home className='h-4 w-4 mr-2' />
                    На главную
                  </Button>
                </Link>
              </div>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className='mt-4 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-400'>
                💡 Режим разработки: Ошибка зафиксирована в консоли браузера
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
