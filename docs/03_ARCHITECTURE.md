# 03. Архитектура

**Код документа**: СХ-10-03  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90, ISO/IEC 12207

---

## Архитектурный обзор
Проект построен по паттерну MVVM (Model-View-ViewModel) с использованием Jetpack Compose для UI и модульной архитектуры для масштабируемости и тестируемости. Взаимодействие между слоями строго типизировано, бизнес-логика вынесена во ViewModel, а навигация реализована через Navigation Compose.

### Пример архитектурного слоя (Kotlin):
```kotlin
class GameViewModel(private val repository: GameRepository) : ViewModel() {
    val state: LiveData<GameState> = repository.state
    fun onEvent(event: GameEvent) { /* ... */ }
}
```

## Диаграммы архитектуры
- **MVVM Component Diagram**  
  ![MVVM Component Diagram](diagrams/architecture/mvvm-component.mmd)
- **MVVM Data Flow**  
  ![MVVM Data Flow](diagrams/architecture/mvvm-data-flow.mmd)
- **Class Diagram**  
  ![Class Diagram](diagrams/architecture/class-diagram.mmd)
- **Package Diagram**  
  ![Package Diagram](diagrams/architecture/package-diagram.mmd)
- **Dependency Diagram**  
  ![Dependency Diagram](diagrams/architecture/dependency-diagram.mmd)

> Все диаграммы представлены в формате Mermaid и доступны для просмотра и редактирования в папке diagrams/architecture/. 