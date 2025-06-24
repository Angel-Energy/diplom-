# Сообщение 404

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-blue.svg)](https://kotlinlang.org/)
[![Android](https://img.shields.io/badge/Android-API%2021+-green.svg)](https://developer.android.com/)
[![Compose](https://img.shields.io/badge/Compose-1.5.0-orange.svg)](https://developer.android.com/jetpack/compose)

> Психологический детектив для Android с ветвящимся сюжетом и мини-играми

## 🎮 О проекте

**«Сообщение 404»** — это интерактивная игра-детектив, имитирующая интерфейс мессенджера. Игрок выступает в роли программиста Алексея Соколова, который расследует загадочные события через чаты, документы и мини-игры.

### ✨ Ключевые особенности

- 🕵️ **10 игровых дней** с уникальными событиями
- 🌳 **60+ сюжетных путей** и 6 различных концовок
- 🎯 **60 мини-игр** по программированию и логике
- 🔒 **Полная офлайн-функциональность**
- 🇷🇺 **Соответствие 152-ФЗ и ГОСТ Р 34.12-2015**
- 🎨 **Material Design 3** с тёмной темой
- 🔐 **AES-256 шифрование** данных

## 📱 Скриншоты

<div align="center">
  <img src="assets/screenshots/chat-screen.png" width="200" alt="Чат">
  <img src="assets/screenshots/mini-game.png" width="200" alt="Мини-игра">
  <img src="assets/screenshots/dialog.png" width="200" alt="Диалог">
</div>

## 🚀 Быстрый старт

### Для пользователей

1. **Скачать APK** с [релизов](https://github.com/your-username/message-404/releases)
2. **Установить** на Android устройство (API 21+)
3. **Запустить** и начать игру

### Для разработчиков

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/message-404.git
cd message-404

# Настроить базу данных
sudo /opt/lampp/lampp start
mysql -u root -p
CREATE DATABASE game_db;

# Запустить сервер
cd server
./gradlew run

# Собрать Android приложение
cd android
./gradlew assembleDebug
```

## 📚 Документация

Полная документация проекта доступна в папке [`docs/`](docs/):

### 📋 Основная документация
- [📖 Введение](docs/INTRODUCTION.md) — обзор проекта и концепции
- [📋 Требования](docs/REQUIREMENTS.md) — функциональные и нефункциональные требования
- [🏗️ Архитектура](docs/ARCHITECTURE.md) — техническая архитектура системы
- [⚙️ Установка](docs/SETUP_GUIDE.md) — инструкции по развертыванию

### 🎮 Игровой дизайн
- [🎯 Игровой дизайн](docs/GAME_DESIGN.md) — механики, сюжет, геймплей
- [🎨 UI/UX дизайн](docs/UI_UX_DESIGN.md) — пользовательский интерфейс
- [📊 Динамические диаграммы](docs/DYNAMIC_DIAGRAMS.md) — диаграммы поведения

### 💾 Техническая документация
- [🗄️ Модели данных](docs/DATA_MODELS.md) — структура данных и схемы БД
- [🔌 API спецификация](docs/API_SPEC.md) — документация API
- [🖥️ Инфраструктура](docs/INFRASTRUCTURE.md) — серверная инфраструктура

### 🔧 Операционная документация
- [👨‍💻 Руководство разработчика](docs/DEVELOPMENT_GUIDE.md) — стандарты разработки
- [🧪 Тестирование](docs/TESTING.md) — стратегия тестирования
- [📊 Мониторинг](docs/MONITORING.md) — настройка мониторинга
- [🔒 Безопасность](docs/SECURITY.md) — политики безопасности

### 📊 Поддержка и планирование
- [❓ FAQ](docs/FAQ.md) — часто задаваемые вопросы
- [🗺️ Дорожная карта](docs/ROADMAP.md) — планы развития
- [📝 Журнал изменений](docs/CHANGELOG.md) — история версий

### ⚖️ Правовая документация
- [📄 Лицензия](docs/LICENSE.md) — лицензионное соглашение
- [🔐 Политика конфиденциальности](docs/PRIVACY_POLICY.md) — обработка данных
- [📋 Условия использования](docs/TERMS_OF_SERVICE.md) — условия использования

## 📖 Документация API

- Подробная документация по API доступна в разделе [API](./app/docs/api/page.tsx) и в файле [05_API_SPECIFICATION.md](./docs/05_API_SPECIFICATION.md).
- Используется OpenAPI 3.0 (Swagger) для формализации спецификации.
- Примеры запросов и ответов, описание эндпоинтов, рекомендации для разработчиков.
- Автоматизация: можно добавить npm-скрипт для валидации спецификации (например, через swagger-cli).

## 🛠️ Технологический стек

### Frontend (Android)
- **Язык:** [Kotlin](https://kotlinlang.org/) 1.9.0
- **UI Framework:** [Jetpack Compose](https://developer.android.com/jetpack/compose) 1.5.0
- **Архитектура:** MVVM + Clean Architecture
- **База данных:** [Room](https://developer.android.com/training/data-storage/room) (SQLite)
- **Сеть:** [Retrofit](https://square.github.io/retrofit/) + [OkHttp](https://square.github.io/okhttp/)
- **DI:** [Hilt](https://dagger.dev/hilt/)

### Backend (Server)
- **Язык:** [Kotlin](https://kotlinlang.org/) 1.9.0
- **Framework:** [Ktor](https://ktor.io/) 2.3.0
- **База данных:** [MySQL](https://www.mysql.com/) 8.0
- **Аутентификация:** [JWT](https://jwt.io/)
- **Шифрование:** AES-256

### Инфраструктура
- **Веб-сервер:** [Nginx](https://nginx.org/)
- **SSL:** [Let's Encrypt](https://letsencrypt.org/)
- **Мониторинг:** [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

## 📊 Статистика проекта

![GitHub stars](https://img.shields.io/github/stars/your-username/message-404?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/message-404?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/message-404)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/message-404)

## 🔒 Безопасность и соответствие

### Российские стандарты
- **152-ФЗ** "О персональных данных" — анонимная авторизация
- **ГОСТ Р 34.12-2015** — криптографическая защита
- **ГОСТ Р 34.10-2012** — электронная подпись

### Международные стандарты
- **WCAG 2.1 AA** — доступность
- **Material Design 3** — дизайн-система
- **REST API** — архитектура API

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Пожалуйста, ознакомьтесь с:

- [📖 Руководство по вкладу](docs/CONTRIBUTING.md)
- [📋 Кодекс поведения](docs/CODE_OF_CONDUCT.md)
- [👨‍💻 Стандарты разработки](docs/DEVELOPMENT_GUIDE.md)

### Как внести вклад

1. **Fork** репозиторий
2. **Создайте** ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. **Зафиксируйте** изменения (`git commit -m 'Add amazing feature'`)
4. **Отправьте** в ветку (`git push origin feature/amazing-feature`)
5. **Откройте** Pull Request

## 💬 Обратная связь

### Форма обратной связи

Все предложения новых функций, улучшений и идей собираются через нашу форму обратной связи:

- **🌐 Веб-форма**: [Форма обратной связи](/feedback) — автоматически создает задачи в трекере
- **📧 Email**: support@message404.ru
- **💬 Telegram**: [@message404_support](https://t.me/message404_support)
- **🎮 Discord**: [Message 404 Community](https://discord.gg/message404)

### Процесс обработки предложений

1. **Заполнение формы** на сайте проекта
2. **Автоматический анализ** предложения системой
3. **Создание задачи** в GitHub Issues
4. **Назначение приоритета** и меток
5. **Рассмотрение командой** проекта
6. **Обновление статуса** задачи

## 🐛 Отчеты об ошибках

Если вы нашли ошибку, пожалуйста, создайте [issue](https://github.com/your-username/message-404/issues) с подробным описанием:

- Операционная система и версия
- Шаги для воспроизведения
- Ожидаемое и фактическое поведение
- Скриншоты (если применимо)

## 💬 Поддержка

### Получение помощи
- **📚 Документация:** Изучите соответствующие разделы в [`docs/`](docs/)
- **❓ FAQ:** [Часто задаваемые вопросы](docs/FAQ.md)
- **🐛 Issues:** [GitHub Issues](https://github.com/your-username/message-404/issues)
- **💭 Discussions:** [GitHub Discussions](https://github.com/your-username/message-404/discussions)

### Контакты
- **📧 Email:** support@message404.ru
- **📱 Telegram:** [@message404_support](https://t.me/message404_support)
- **🎮 Discord:** [Message 404 Community](https://discord.gg/message404)

## 📄 Лицензия

Проект распространяется под лицензией [MIT License](docs/LICENSE.md). См. файл `LICENSE` для получения дополнительной информации.

## 🙏 Благодарности

Спасибо всем участникам проекта за их вклад в создание «Сообщения 404»!

### Основные участники
- **Разработчики:** [Список участников](https://github.com/your-username/message-404/graphs/contributors)
- **Дизайнеры:** Команда UI/UX
- **Тестировщики:** QA команда
- **Сообщество:** Все пользователи и контрибьюторы

## 📈 Дорожная карта

См. [дорожную карту](docs/ROADMAP.md) для планов развития проекта.

### Версия 1.0.0 (Текущая)
- ✅ Основной функционал игры
- ✅ 10 игровых дней
- ✅ 60+ сюжетных путей
- ✅ 60 мини-игр
- ✅ Офлайн-режим

### Версия 1.1.0 (Планируется)
- 🔄 Улучшения UI/UX
- 🔄 Дополнительные мини-игры
- 🔄 Оптимизация производительности
- 🔄 Расширенная аналитика

### Версия 2.0.0 (Будущее)
- 📱 iOS версия
- 🎮 DLC контент
- 🌍 Мультиязычная поддержка
- 🔧 Расширенные настройки

---

**Версия:** 1.0.0  
**Последнее обновление:** Декабрь 2024  
**Следующее обновление:** Январь 2025

<div align="center">
  <sub>Сделано с ❤️ командой Message 404</sub>
</div>

# Архитектура хранения диаграмм

## Структура

- Все диаграммы хранятся в виде отдельных файлов Mermaid (.mmd) в папке `public/diagrams/` с подкаталогами по категориям:
  - `public/diagrams/architecture/`
  - `public/diagrams/data/`
  - `public/diagrams/game/`
  - `public/diagrams/behavior/`
  - `public/diagrams/ui/`
  - `public/diagrams/infrastructure/`
  - `public/diagrams/api/`

## Использование на страницах

Вместо хранения кода диаграммы в TSX-файле, используйте компонент:

```tsx
<MermaidDiagram
  title="Название диаграммы"
  src="/diagrams/architecture/mvvm-component.mmd"
  description="Описание диаграммы"
  category="Архитектура"
/>
```

## 🗂️ Преимущества модульной архитектуры

### Отдельные файлы
Каждая диаграмма хранится в собственном `.mmd`-файле, что обеспечивает удобное управление и прозрачную структуру проекта.

### 🔧 Простое управление
Любую диаграмму легко найти, отредактировать или обновить — не нужно искать её в большом монолитном файле.

### 📈 Масштабируемость
Добавление новых диаграмм не требует изменений в основном коде приложения — просто добавьте новый `.mmd`-файл и обновите каталог.

# Автоматизация и тестирование диаграмм

## Добавление новой диаграммы
1. Создайте .mmd файл в нужной папке внутри `public/diagrams/<категория>/`.
2. На нужной странице используйте компонент `<MermaidDiagram src="/diagrams/<категория>/<имя>.mmd" ... />`.

## Тестирование
- Откройте все страницы с диаграммами в браузере.
- Проверьте, что все диаграммы корректно загружаются и отображаются.
- В случае ошибки загрузки .mmd файла компонент покажет ошибку (fetch error).
- Проверьте, что копирование кода диаграммы работает.
- Для автоматизации можно реализовать скрипт, который обходит все .mmd файлы и проверяет их доступность.

## 🧪 Автоматизация тестирования диаграмм

- Все .mmd файлы автоматически проверяются на синтаксис с помощью Mermaid CLI.
- Для запуска локально: `npm run test:diagrams`
- Проверка запускается автоматически при каждом push/pull request (GitHub Actions).

## 🔄 Система версионирования

- Все .mmd файлы отслеживаются через git.
- Любое изменение диаграммы фиксируется в истории коммитов.

## 🚀 CI/CD пайплайн

- При каждом изменении диаграмм или скриптов проверки запускается автоматическая валидация.
- Если синтаксис неверный — pull request не будет принят.

## 🛠️ Отчет об исправлениях и багфиксах

- Все найденные баги и ошибки фиксируются с подробным описанием причины и способа устранения.
- Для каждого релиза ведется отдельный файл [FIXES_REPORT.md](./FIXES_REPORT.md) с хронологией исправлений.
- В коммитах используются осмысленные сообщения (fix, bug, hotfix и т.д.) для удобства отслеживания истории.

