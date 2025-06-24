# 06. Модели поведения

**Код документа**: СХ-10-06  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90

---

## Динамические модели
Модели поведения описывают сценарии взаимодействия пользователя с системой, переходы между состояниями, обработку событий и логику ветвлений.

### Пример диаграммы состояний (Mermaid):
```mermaid
stateDiagram-v2
  [*] --> Idle
  Idle --> Loading : fetch()
  Loading --> Success : 200 OK
  Loading --> Error : 4xx/5xx
  Error --> Idle : retry()
  Success --> Idle : reset()
```

## Диаграммы поведения
- **Sequence Diagram**  
  ![Sequence Diagram](diagrams/behavior/sequence-diagram.mmd)
- **Activity Diagram**  
  ![Activity Diagram](diagrams/behavior/activity-diagram.mmd)
- **State Machine**  
  ![State Machine](diagrams/behavior/state-machine.mmd)
- **Interaction Diagram**  
  _TODO: добавить диаграмму_
- **Event Flow Diagram**  
  _TODO: добавить диаграмму_ 