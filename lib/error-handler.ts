import { toast } from '@/hooks/use-toast';

/**
 * Интерфейс для ошибок приложения
 */
export interface AppError {
  message: string;
  code?: string | undefined;
  details?: any;
  context?: string | undefined;
  timestamp?: Date | undefined;
  stack?: string | undefined;
}

/**
 * Типы ошибок для лучшей категоризации
 */
export enum ErrorType {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Коды ошибок для систематизации
 */
export enum ErrorCode {
  // Сетевые ошибки
  NETWORK_TIMEOUT = 'NETWORK_TIMEOUT',
  NETWORK_OFFLINE = 'NETWORK_OFFLINE',
  NETWORK_REQUEST_FAILED = 'NETWORK_REQUEST_FAILED',

  // Ошибки валидации
  VALIDATION_REQUIRED = 'VALIDATION_REQUIRED',
  VALIDATION_INVALID_FORMAT = 'VALIDATION_INVALID_FORMAT',
  VALIDATION_TOO_LONG = 'VALIDATION_TOO_LONG',
  VALIDATION_TOO_SHORT = 'VALIDATION_TOO_SHORT',

  // Ошибки аутентификации
  AUTH_INVALID_CREDENTIALS = 'AUTH_INVALID_CREDENTIALS',
  AUTH_TOKEN_EXPIRED = 'AUTH_TOKEN_EXPIRED',
  AUTH_TOKEN_INVALID = 'AUTH_TOKEN_INVALID',

  // Ошибки авторизации
  AUTH_INSUFFICIENT_PERMISSIONS = 'AUTH_INSUFFICIENT_PERMISSIONS',
  AUTH_ACCESS_DENIED = 'AUTH_ACCESS_DENIED',

  // Ошибки ресурсов
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  RESOURCE_ALREADY_EXISTS = 'RESOURCE_ALREADY_EXISTS',

  // Серверные ошибки
  SERVER_INTERNAL_ERROR = 'SERVER_INTERNAL_ERROR',
  SERVER_SERVICE_UNAVAILABLE = 'SERVER_SERVICE_UNAVAILABLE',

  // Клиентские ошибки
  CLIENT_INVALID_INPUT = 'CLIENT_INVALID_INPUT',
  CLIENT_BROWSER_NOT_SUPPORTED = 'CLIENT_BROWSER_NOT_SUPPORTED',

  // Неизвестные ошибки
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * Обрабатывает ошибки и возвращает структурированный объект ошибки
 * @param error - Ошибка для обработки
 * @param context - Контекст, в котором произошла ошибка
 * @returns Структурированный объект ошибки
 */
export function handleError(error: unknown, context?: string): AppError {
  let appError: AppError;

  if (error instanceof Error) {
    appError = {
      message: error.message,
      details: error.stack,
      stack: error.stack,
      context,
      timestamp: new Date(),
    };
  } else if (typeof error === 'string') {
    appError = {
      message: error,
      context,
      timestamp: new Date(),
    };
  } else if (error && typeof error === 'object' && 'message' in error) {
    appError = {
      message: String(error.message),
      details: error,
      context,
      timestamp: new Date(),
    };
  } else {
    appError = {
      message: 'Произошла неизвестная ошибка',
      details: error,
      context,
      timestamp: new Date(),
    };
  }

  // Определяем тип ошибки на основе сообщения и контекста
  appError.code = determineErrorCode(appError.message, context);

  // Логируем ошибку для отладки
  logError(appError);

  // Показываем уведомление пользователю
  showErrorNotification(appError);

  return appError;
}

/**
 * Определяет код ошибки на основе сообщения и контекста
 * @param message - Сообщение ошибки
 * @param context - Контекст ошибки
 * @returns Код ошибки
 */
function determineErrorCode(message: string, context?: string): string {
  const lowerMessage = message.toLowerCase();
  const lowerContext = context?.toLowerCase() || '';

  // Сетевые ошибки
  if (
    lowerMessage.includes('network') ||
    lowerMessage.includes('fetch') ||
    lowerMessage.includes('http')
  ) {
    if (lowerMessage.includes('timeout')) return ErrorCode.NETWORK_TIMEOUT;
    if (lowerMessage.includes('offline') || lowerMessage.includes('connection'))
      return ErrorCode.NETWORK_OFFLINE;
    return ErrorCode.NETWORK_REQUEST_FAILED;
  }

  // Ошибки валидации
  if (
    lowerMessage.includes('validation') ||
    lowerMessage.includes('invalid') ||
    lowerMessage.includes('required')
  ) {
    if (lowerMessage.includes('required')) return ErrorCode.VALIDATION_REQUIRED;
    if (lowerMessage.includes('format')) return ErrorCode.VALIDATION_INVALID_FORMAT;
    if (lowerMessage.includes('too long')) return ErrorCode.VALIDATION_TOO_LONG;
    if (lowerMessage.includes('too short')) return ErrorCode.VALIDATION_TOO_SHORT;
    return ErrorCode.VALIDATION_REQUIRED;
  }

  // Ошибки аутентификации
  if (
    lowerMessage.includes('auth') ||
    lowerMessage.includes('login') ||
    lowerMessage.includes('token')
  ) {
    if (lowerMessage.includes('expired')) return ErrorCode.AUTH_TOKEN_EXPIRED;
    if (lowerMessage.includes('invalid')) return ErrorCode.AUTH_TOKEN_INVALID;
    return ErrorCode.AUTH_INVALID_CREDENTIALS;
  }

  // Ошибки авторизации
  if (
    lowerMessage.includes('permission') ||
    lowerMessage.includes('access') ||
    lowerMessage.includes('denied')
  ) {
    return ErrorCode.AUTH_ACCESS_DENIED;
  }

  // Ошибки ресурсов
  if (lowerMessage.includes('not found') || lowerMessage.includes('404')) {
    return ErrorCode.RESOURCE_NOT_FOUND;
  }

  // Серверные ошибки
  if (
    lowerMessage.includes('server') ||
    lowerMessage.includes('500') ||
    lowerMessage.includes('internal')
  ) {
    return ErrorCode.SERVER_INTERNAL_ERROR;
  }

  return ErrorCode.UNKNOWN_ERROR;
}

/**
 * Логирует ошибку для отладки
 * @param error - Ошибка для логирования
 */
function logError(error: AppError): void {
  const logData = {
    message: error.message,
    code: error.code,
    context: error.context,
    timestamp: error.timestamp?.toISOString(),
    stack: error.stack,
    details: error.details,
  };

  // В development режиме выводим подробную информацию
  if (process.env.NODE_ENV === 'development') {
    console.group(`🚨 Error${error.context ? ` in ${error.context}` : ''}`);
    console.error('Error Details:', logData);
    console.groupEnd();
  } else {
    // В production логируем только основную информацию
    console.error(`Error${error.context ? ` in ${error.context}` : ''}:`, error.message);
  }

  // Здесь можно добавить отправку ошибок в сервис мониторинга
  // например, Sentry, LogRocket, etc.
  // sendToErrorTracking(logData)
}

/**
 * Показывает уведомление об ошибке пользователю
 * @param error - Ошибка для отображения
 */
function showErrorNotification(error: AppError): void {
  const getErrorMessage = (error: AppError): string => {
    switch (error.code) {
      case ErrorCode.NETWORK_TIMEOUT:
        return 'Превышено время ожидания ответа от сервера';
      case ErrorCode.NETWORK_OFFLINE:
        return 'Нет подключения к интернету';
      case ErrorCode.NETWORK_REQUEST_FAILED:
        return 'Ошибка сетевого запроса';
      case ErrorCode.VALIDATION_REQUIRED:
        return 'Пожалуйста, заполните все обязательные поля';
      case ErrorCode.VALIDATION_INVALID_FORMAT:
        return 'Неверный формат данных';
      case ErrorCode.AUTH_INVALID_CREDENTIALS:
        return 'Неверные учетные данные';
      case ErrorCode.AUTH_TOKEN_EXPIRED:
        return 'Сессия истекла, пожалуйста, войдите снова';
      case ErrorCode.AUTH_ACCESS_DENIED:
        return 'Доступ запрещен';
      case ErrorCode.RESOURCE_NOT_FOUND:
        return 'Запрашиваемый ресурс не найден';
      case ErrorCode.SERVER_INTERNAL_ERROR:
        return 'Внутренняя ошибка сервера';
      default:
        return error.message || 'Произошла неизвестная ошибка';
    }
  };

  toast({
    title: 'Ошибка',
    description: getErrorMessage(error),
    variant: 'destructive',
    duration: 5000,
  });
}

/**
 * Обрабатывает асинхронные ошибки
 * @param promise - Promise для обработки
 * @param context - Контекст операции
 * @returns Promise с обработкой ошибок
 */
export function handleAsyncError<T>(promise: Promise<T>, context?: string): Promise<T> {
  return promise.catch(error => {
    handleError(error, context);
    throw error;
  });
}

/**
 * Создает функцию-обертку для обработки ошибок
 * @param fn - Функция для обертывания
 * @param context - Контекст функции
 * @returns Функция с обработкой ошибок
 */
export function withErrorHandling<T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    try {
      const result = fn(...args);
      if (result instanceof Promise) {
        return handleAsyncError(result, context) as ReturnType<T>;
      }
      return result;
    } catch (error) {
      handleError(error, context);
      throw error;
    }
  };
}

/**
 * Проверяет, является ли ошибка критической
 * @param error - Ошибка для проверки
 * @returns true если ошибка критическая
 */
export function isCriticalError(error: AppError): boolean {
  const criticalCodes = [
    ErrorCode.SERVER_INTERNAL_ERROR,
    ErrorCode.NETWORK_OFFLINE,
    ErrorCode.AUTH_TOKEN_EXPIRED,
  ];
  return criticalCodes.includes(error.code as ErrorCode);
}

/**
 * Получает пользовательское сообщение об ошибке
 * @param error - Ошибка
 * @returns Пользовательское сообщение
 */
export function getUserFriendlyMessage(error: AppError): string {
  const messages: Record<string, string> = {
    [ErrorCode.NETWORK_TIMEOUT]: 'Сервер не отвечает. Попробуйте позже.',
    [ErrorCode.NETWORK_OFFLINE]: 'Проверьте подключение к интернету.',
    [ErrorCode.VALIDATION_REQUIRED]: 'Заполните все обязательные поля.',
    [ErrorCode.AUTH_INVALID_CREDENTIALS]: 'Неверный логин или пароль.',
    [ErrorCode.RESOURCE_NOT_FOUND]: 'Запрашиваемая страница не найдена.',
    [ErrorCode.SERVER_INTERNAL_ERROR]: 'Технические работы. Попробуйте позже.',
  };

  return messages[error.code || ''] || error.message || 'Что-то пошло не так.';
}
