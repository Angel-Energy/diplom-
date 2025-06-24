import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Объединяет CSS классы с помощью clsx и tailwind-merge
 * @param inputs - CSS классы для объединения
 * @returns Объединенная строка CSS классов
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Форматирует дату в читаемый формат
 * @param date - Дата для форматирования
 * @param locale - Локаль (по умолчанию 'ru-RU')
 * @returns Отформатированная дата
 */
export function formatDate(date: Date | string, locale = 'ru-RU'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Форматирует время в читаемый формат
 * @param date - Дата для форматирования
 * @param locale - Локаль (по умолчанию 'ru-RU')
 * @returns Отформатированное время
 */
export function formatTime(date: Date | string, locale = 'ru-RU'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Форматирует размер файла в читаемый формат
 * @param bytes - Размер в байтах
 * @returns Отформатированный размер
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Б';

  const k = 1024;
  const sizes = ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Генерирует случайный ID
 * @param length - Длина ID (по умолчанию 8)
 * @returns Случайный ID
 */
export function generateId(length = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Дебаунс функция для оптимизации производительности
 * @param func - Функция для дебаунса
 * @param wait - Время ожидания в миллисекундах
 * @returns Дебаунсированная функция
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Троттлинг функция для ограничения частоты вызовов
 * @param func - Функция для троттлинга
 * @param limit - Лимит вызовов в миллисекундах
 * @returns Троттлированная функция
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Проверяет, является ли значение пустым
 * @param value - Значение для проверки
 * @returns true если значение пустое
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Безопасно получает значение из объекта по пути
 * @param obj - Объект
 * @param path - Путь к значению (например, 'user.profile.name')
 * @param defaultValue - Значение по умолчанию
 * @returns Значение или defaultValue
 */
export function get(obj: any, path: string, defaultValue?: any): any {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result == null || typeof result !== 'object') {
      return defaultValue;
    }
    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
}

/**
 * Копирует текст в буфер обмена
 * @param text - Текст для копирования
 * @returns Promise с результатом операции
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Проверяем, что мы в браузере
    if (typeof window === 'undefined') {
      return false;
    }

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback для небезопасного контекста
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      textArea.remove();
      return result;
    }
  } catch (error) {
    console.error('Ошибка копирования в буфер обмена:', error);
    return false;
  }
}

/**
 * Проверяет, поддерживается ли функция в браузере
 * @param feature - Название функции для проверки
 * @returns true если функция поддерживается
 */
export function isSupported(feature: string): boolean {
  if (typeof window === 'undefined') return false;

  const features: Record<string, () => boolean> = {
    clipboard: () => !!navigator.clipboard,
    localStorage: () => {
      try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    },
    sessionStorage: () => {
      try {
        const test = '__sessionStorage_test__';
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    },
    webp: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    },
    avif: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    },
  };

  return features[feature] ? features[feature]() : false;
}

/**
 * Создает URL для скачивания файла
 * @param data - Данные файла
 * @param filename - Имя файла
 * @param mimeType - MIME тип
 * @returns URL для скачивания
 */
export function createDownloadUrl(
  data: string | Blob,
  filename: string,
  mimeType = 'application/octet-stream'
): string {
  const blob = typeof data === 'string' ? new Blob([data], { type: mimeType }) : data;
  return URL.createObjectURL(blob);
}

/**
 * Скачивает файл
 * @param data - Данные файла
 * @param filename - Имя файла
 * @param mimeType - MIME тип
 */
export function downloadFile(
  data: string | Blob,
  filename: string,
  mimeType = 'application/octet-stream'
): void {
  const url = createDownloadUrl(data, filename, mimeType);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
