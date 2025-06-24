# 10. Руководство по развертыванию

**Код документа**: СХ-10-10  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90

---

## Инструкции по развертыванию
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/your-org/message-404.git
   cd message-404
   ```
2. Соберите и запустите сервер:
   ```sh
   ./gradlew build
   java -jar build/libs/app.jar
   ```
3. Для Android:
   - Откройте проект в Android Studio.
   - Соберите и запустите на эмуляторе или устройстве.
4. Для Docker:
   ```sh
   docker build -t message-404 .
   docker run -p 8080:8080 message-404
   ```

## Требования к окружению
- JDK 17+, Android Studio Giraffe+, Docker 24+, Node.js 20+.
- Переменные среды: `DB_URL`, `JWT_SECRET`, `API_KEY` и др.

## CI/CD
- Используйте GitHub Actions для автоматизации сборки и деплоя. 