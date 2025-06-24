# 04. Модель данных

**Код документа**: СХ-10-04  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90

---

## Описание модели данных
Модель данных включает пользователей, игровые состояния, сцены, флаги и репозитории. Используется Room для локального хранения и сериализация в JSON для сцен.

### Пример сущности (Kotlin):
```kotlin
@Entity
data class User(
    @PrimaryKey val id: Int,
    val name: String
)
```

## Диаграммы данных
- **ER Diagram**  
  ![ER Diagram](diagrams/data/er-diagram.mmd)
- **Repository Data Flow**  
  ![Repository Data Flow](diagrams/data/repository-data-flow.mmd)
- **JSON Scene Structure**  
  ![JSON Scene Structure](diagrams/data/json-scene-structure.mmd)
- **Flag Conditions Logic**  
  ![Flag Conditions Logic](diagrams/data/flag-conditions-logic.mmd) 