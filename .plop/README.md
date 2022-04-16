# Plop

Небольшая утилита, позволяющая быстро генерировать различные файлы по заданным шаблонам

```bash
  # Запуск plop
  yarn new
```

При запуске команды без дополнительных аргументов - будет включен режим выбора параметров генератора

Также можно указать сразу все необходимые параметры - тогда предыдущий пункт будет опущен и нужный генератор сразу будет запущен

```bash
  # Создаст новый компонент src/components/folder/subfolder/NewComponent.vue
  yarn new component NewComponent folder/subfolder/

  # Создаст новый компонент страницы src/pages/folder/subfolder/newpage.vue
  # Важное отличие от component - в пути нужно указать имя конечного файла без расширения .vue
  # Это связано с особенностями роутинга в Nuxt
  yarn new page NewPageComponent folder/subfolder/newpage
```
