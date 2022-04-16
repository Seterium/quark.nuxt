module.exports = function (plop) {
  plop.setGenerator('page', {
    description: 'Create new page',
    prompts: [
      {
        type: 'input',
        name: 'NAME',
        message: 'Name:',
      },
      {
        type: 'input',
        name: 'PATH',
        message: 'Path:',
        default: 'unnamed',
      },
    ],
    actions: () => [
      {
        type: 'add',
        templateFile: './plop/page/page.vue.hbs',
        path: './pages/{{ PATH }}.vue',
      },
    ],
  })

  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'NAME',
        message: 'Name:',
      },
      {
        type: 'input',
        name: 'PATH',
        message: 'Path:',
        default: '/',
      },
    ],
    actions: () => [
      {
        type: 'add',
        templateFile: './plop/component/component.vue.hbs',
        path: './components/{{ PATH }}{{ NAME }}.vue',
      },
    ],
  })
}
