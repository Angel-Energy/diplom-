# 09. Инфраструктура

**Код документа**: СХ-10-09  
**Дата обновления**: 23.06.2025  
**Версия**: 1.2  
**Разработчик**: Иванов И.И.  
**Согласовал**: Петров П.П.  
**Стандарты**: ГОСТ 19.701-90

---

## Инфраструктурные решения
Проект развёртывается с помощью Docker и CI/CD (GitHub Actions). Для мониторинга используется Prometheus, для резервного копирования — автоматизированные скрипты.

### Пример Dockerfile:
```dockerfile
FROM openjdk:17-jdk
WORKDIR /app
COPY . .
RUN ./gradlew build
CMD ["java", "-jar", "build/libs/app.jar"]
```

## Диаграммы инфраструктуры
- **Deployment Diagram**  
  ![Deployment Diagram](diagrams/infrastructure/deployment.mmd)
- **Network Topology**  
  ![Network Topology](diagrams/infrastructure/network-topology.mmd)
- **Server Setup**  
  _TODO: добавить диаграмму_
- **Backup Strategy**  
  ![Backup Strategy](diagrams/infrastructure/backup-strategy.mmd)
- **Load Balancing Diagram**  
  _TODO: добавить диаграмму_ 