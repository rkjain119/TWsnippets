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

const vscode = acquireVsCodeApi()

function renderComponent(components) {
	const container = document.getElementById('content')
	container.innerHTML = ''

	if (components.length <= 0) {
		container.innerHTML = 'No component matches the search!!'
	}

	components.map(component => {
		const div = document.createElement('div')
		div.id = `trigger-${component.id}`
		div.className = 'trigger'

		const imgEl = document.createElement('img')
		imgEl.src = component.preview
		imgEl.classList.add('img')

		const title = document.createElement('h3')
		title.innerText = component.name
		title.className = 'title'

		div.append(imgEl, title)

		div.addEventListener('click', () => {
			vscode.postMessage({
				command: 'INSERT',
				message: component.jsx,
			})
		})

		container.append(div)
	})
}

function he() {
	renderComponent(components)

	function handleSearch(e) {
		const search = e.target.value
		const filtered = components.filter(component => {
			return component.name.includes(search)
		})
		renderComponent(filtered)
	}

	const searchEl = document.getElementById('search')
	searchEl.addEventListener('keyup', handleSearch)
}

he()
