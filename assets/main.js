const components = [
  {
    id: 1,
    category: 'button',
    name: 'btn-1',
    preview:
      'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
    jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
  },
  {
    id: 2,
    category: 'button',
    name: 'btn-2',
    preview:
      'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
    jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
  },
  {
    id: 3,
    category: 'button',
    name: 'btn-3',
    preview:
      'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
    jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
  },
]

function he() {
  const vscode = acquireVsCodeApi()

  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(json => {
  //       const list = document.createElement('ul')
  //       json.forEach(user => {
  //         const listItem = document.createElement('li')
  //         list.appendChild(listItem)
  //         listItem.innerText = user.title
  //       })
  //       {
  //         json.map(todo => {
  //           todo.text
  //         })
  //       }
  //       document.body.appendChild(list)
  //     })

  components.map(component => {
    const dropdown = document.getElementById('dropdown')
    const option = document.createElement('option')
    option.value = component.id
    option.innerText = component.name
    dropdown.appendChild(option)

    var result = dropdown.options[dropdown.selectedIndex].value

    var container = document.getElementById('container')

    const div = document.createElement('div')
    div.id = `trigger-${component.id}`
    div.className = 'trigger'

    // add image to current div from component.preview inner html
    div.innerHTML = `<img class="img" src="${component.preview}" />`

    const title = document.createElement('h3')
    title.innerText = component.name
    title.className = 'title'
    div.appendChild(title)

    div.addEventListener('click', () => {
      vscode.postMessage({
        command: 'INSERT',
        message: component.jsx,
      })
    })
    container.append(div)
  })
}
he()
