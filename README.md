# Nuxt Quark
Сборщик статических сайтов на базе Nuxt

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

  # Запуск quark.tools
  yarn ace
```

### Developer notes
- **Картинки**
  - Оптимизировать JPG/PNG с помощью `yarn ace optimize`
  - Генерировать оптимальные размеры под популярные разрешения с помощью `yarn ace generate <image> --sizes [...sizes]`
  - Конвертировать в современные форматы `webp` и `avif` с помощью `yarn ace generate <image> --formats [...formats]`
  - Для форматов `webp` и `avif` **обязательно** использовать `<picture>` для обеспечения поддержки старых браузеров
- **Шрифты**
  - Использовать шрифты в форматах `woff2`, `woff` и `ttf` (подключать все 3, именно в таком порядке). В случае отсутствия какого-либо формата - использовать конвертер (ссылка есть ниже)
  - Добавлять `<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>` для каждого отдельного шрифта в формате `woff2`
- **Выход "в прод"**
  - Провести проверку по [<img src="http://www.google.com/s2/favicons?domain=https://frontendchecklist.io/" width="12" height="12"/> чеклисту](https://frontendchecklist.io/)
  - Запустить проветку Lighthouse в браузере для выявления критических проблем производительности
- **Общие советы**
  - Не тащить в проект лишние зависимости, особенно имеющие большой вес (если только функционал этой библиотеки критически необходим)
  - Максимально пользоваться синтаксисом Atomic CSS (в нашем случае - WindiCSS) для уменьшения количества стилей
  - Все ссылки на внешние ресурсы, открываемые в новой вкладке **обязательно** должны иметь атрибут `rel="noopener noreferrer"`
### Полезные ссылки
- [<img src="http://www.google.com/s2/favicons?domain=https://nuxtjs.org/" width="12" height="12"/> Документация Nuxt](https://nuxtjs.org/)
  - [<img src="https://raw.githubusercontent.com/nuxt-community/awesome-nuxt/master/media/awesome-nuxt-logo.svg" width="12" height="12"/> Awesome Nuxt](https://github.com/nuxt-community/awesome-nuxt)
- [<img src="http://www.google.com/s2/favicons?domain=https://windicss.org/" width="12" height="12"/> Документация WindiCSS](https://windicss.org)
  - [<img src="http://www.google.com/s2/favicons?domain=https://tailwindcomponents.com" width="12" height="12"/> Компоненты WindiCSS](https://tailwindcomponents.com)
- [<img src="http://www.google.com/s2/favicons?domain=https://bundlephobia.com/" width="12" height="12"/> Bundlephobia - проверка веса зависимости](https://bundlephobia.com/)
- [<img src="http://www.google.com/s2/favicons?domain=https://imagecompressor.com/" width="12" height="12"/> Оптимизация PNG/JPG](https://imagecompressor.com/)
- [<img src="http://www.google.com/s2/favicons?domain=https://jakearchibald.github.io/svgomg/" width="12" height="12"/> Оптимизация SVG](https://jakearchibald.github.io/svgomg/)
- [<img src="http://www.google.com/s2/favicons?domain=https://github.com" width="12" height="12"/> Про вставку SVG в компоненты](https://github.com/nuxt-community/svg-module)
- [<img src="http://www.google.com/s2/favicons?domain=https://onlinefontconverter.com/" width="12" height="12"/> Конвертер шрифтов](https://onlinefontconverter.com/)
### Рекомендуемые расширения для VS Code
- [<img src="http://www.google.com/s2/favicons?domain=https://vuejs.org/" width="12" height="12"/> Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [<img src="http://www.google.com/s2/favicons?domain=https://sass-lang.com/" width="12" height="12"/> Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [<img src="http://www.google.com/s2/favicons?domain=https://code.visualstudio.com/" width="12" height="12"/> DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
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
    "@": "${folder}/src"
  },
  "eslint.options": {
    "overrideConfigFile": ".eslintrc.js"
  },
  "eslint.validate": [
    "vue",
    "html",
    "javascript"
  ],
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": [
    "css",
    "scss",
    "vue"
  ]
}
```
