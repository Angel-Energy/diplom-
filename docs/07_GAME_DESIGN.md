# 07. Дизайн игры

**Код документа**: СХ-10-07  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90

---

## Механики и сценарии
Дизайн игры включает ветвящиеся истории, мини-игры, условия концовок и влияние выбора игрока на развитие сюжета. Все сценарии документируются в виде диаграмм и таблиц переходов.

### Пример ветвления сюжета (Mermaid):
```mermaid
flowchart TD
  Start --> Choice1
  Choice1 -- Да --> Ending1
  Choice1 -- Нет --> Choice2
  Choice2 -- Спасти --> Ending2
  Choice2 -- Оставить --> Ending3
```

## Диаграммы игрового дизайна
- **Branching Story**  
  ![Branching Story](diagrams/game/branching-story.mmd)
- **MiniGame Flow**  
  ![MiniGame Flow](diagrams/game/minigame-flow.mmd)
- **Ending Conditions**  
  ![Ending Conditions](diagrams/game/ending-conditions.mmd)
- **Choice Impact Diagram**  
  ![Choice Impact Diagram](diagrams/game/choice-impact.mmd) 