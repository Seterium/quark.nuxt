# Nuxt Quark
Сборщик статических сайтов на базе Nuxt

[//]: <> (Добавить cli для преобразования картинок в webp и avif)
[//]: <> (Добавить cli для резайза картинок под разные разрешения)
[//]: <> (Добавить cli для генерации шрифтов в нужные форматы)

### Команды
``` bash
  # Запуск dev-сервера c hot-reload
  yarn dev

  # Сборка проекта
  yarn build

  # Сборка проекта и запуск предпросмотра
  yarn preview

  # Линтинг всего
  yarn lint

  # Линтинг JS
  yarn lint:js

  # Линтинг стилей
  yarn lint:style

  # Валидация Prettier
  yarn lint:prettier

  # Исправление всех проблем линтинга
  yarn lint:fix

  # Создание новых компонентов (подробнее - в plop/readme)
  yarn new
```

### Общие советы
- Оптимизировать JPG/PNG картинки с помощью оптимизатора (ссылка на оптимальный есть в разделе "Полезные ссылки")
- Если PNG-изображении нет прозрачности и используется широкая палитра цветов - преобразовывать в JPG для уменьшения объема
- Максимально использовать `<picture>` для того, чтобы браузер грузил картинку оптимального размера
- Максимально использовать современные форматы `webp` и `avif` для изображений, но вставлять их **ТОЛЬКО** с помощью `<picture>`
- Использовать в шрифты `woff2` и `woff`, в случае отсутствия таковых - преобразовать исходный шрифт в них с помощью конвертера (ссылка на оптимальный есть в разделе "Полезные ссылки")
### Полезные ссылки
- [<img src="http://www.google.com/s2/favicons?domain=https://nuxtjs.org/" width="12" height="12"/> Документация Nuxt](https://nuxtjs.org/)
- [<img src="http://www.google.com/s2/favicons?domain=https://windicss.org/" width="12" height="12"/> Документация WindiCSS](https://windicss.org)
- [<img src="http://www.google.com/s2/favicons?domain=https://jakearchibald.github.io/svgomg/" width="12" height="12"/> Оптимизация SVG](https://jakearchibald.github.io/svgomg/)
- [<img src="http://www.google.com/s2/favicons?domain=https://imagecompressor.com/" width="12" height="12"/> Оптимизация PNG/JPG](https://imagecompressor.com/)
- [<img src="http://www.google.com/s2/favicons?domain=https://onlinefontconverter.com/" width="12" height="12"/> Конвертация шрифтов](https://onlinefontconverter.com/)
- [<img src="http://www.google.com/s2/favicons?domain=https://github.com" width="12" height="12"/> Про вставку SVG в компоненты](https://github.com/nuxt-community/svg-module)

### Рекомендуемые расширения для VS Code
- [<img src="http://www.google.com/s2/favicons?domain=https://vuejs.org/" width="12" height="12"/> Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [<img src="http://www.google.com/s2/favicons?domain=https://sass-lang.com/" width="12" height="12"/> Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [<img src="https://mikestead.gallerycdn.vsassets.io/extensions/mikestead/dotenv/1.0.1/1519894859412/Microsoft.VisualStudio.Services.Icons.Default" width="12" height="12"/> DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [<img src="http://www.google.com/s2/favicons?domain=https://eslint.org/" width="12" height="12"/> ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [<img src="http://www.google.com/s2/favicons?domain=https://stylelint.io/" width="12" height="12"/> Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [<img src="http://www.google.com/s2/favicons?domain=https://prettier.io/" width="12" height="12"/> Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [<img src="http://www.google.com/s2/favicons?domain=https://windicss.org" width="12" height="12"/> WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)
- [<img src="http://www.google.com/s2/favicons?domain=https://code.visualstudio.com/" width="12" height="12"/> Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [<img src="http://www.google.com/s2/favicons?domain=https://code.visualstudio.com/" width="12" height="12"/> Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)

## Рекомендуемые настройки VS Code
```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "path-autocomplete.pathMappings": {
    "@": "${folder}"
  },
  "eslint.options": {
    "overrideConfigFile": ".eslintrc.js"
  },
  "eslint.validate": [
    "vue",
    "html",
    "javascript"
  ],
  "stylelint.configFile": "stylelint.config.js",
  "stylelint.validate": [
    "css",
    "scss",
    "vue"
  ]
}
```
