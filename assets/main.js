const components = {
	Button: [
		{
			id: 1,
			category: 'button',
			name: 'button-primary-small',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667059900/tws/buttons.01-primary-buttons.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
		{
			id: 2,
			category: 'button',
			name: 'button-primary-medium',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067003/tws/buttons.01-primary-small.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
		{
			id: 3,
			category: 'button',
			name: 'button-primary-base',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067127/tws/buttons.01-primary-medium.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
		{
			id: 4,
			category: 'button',
			name: 'button-primary-large',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
	],
	Input: [
		{
			id: 3,
			category: 'input',
			name: 'input-primary-base',
			preview:
				'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
		{
			id: 4,
			category: 'input',
			name: 'input-primary-large',
			preview:
				'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
			jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
		},
	],
	404: [
		{
			id: 5,
			category: '404',
			name: '404-simple',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
			jsx: 'export default function 404() {\n  return (\n    <>\n      {/*\n        This example requires updating your template:\n\n        ```\n        <html class="h-full">\n        <body class="h-full">\n        ```\n      */}\n      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">\n        <div className="max-w-max mx-auto">\n          <main className="sm:flex">\n            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>\n            <div className="sm:ml-6">\n              <div className="sm:border-l sm:border-gray-200 sm:pl-6">\n                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>\n                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>\n              </div>\n              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Go back home\n                </a>\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Contact support\n                </a>\n              </div>\n            </div>\n          </main>\n        </div>\n      </div>\n    </>\n  )\n}',
		},
		{
			id: 6,
			category: '404',
			name: '404-split-image',
			preview:
				'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
			jsx: 'export default function 404() {\n  return (\n    <>\n      <div className="bg-white min-h-full flex flex-col lg:relative">\n        <div className="flex-grow flex flex-col">\n          <main className="flex-grow flex flex-col bg-white">\n            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">\n              <div className="flex-shrink-0 pt-10 sm:pt-16">\n                <a href="/" className="inline-flex">\n                  <span className="sr-only">Workflow</span>\n                  <img\n                    className="h-12 w-auto"\n                    src="https://res.cloudinary.com/dyl08vtii/image/upload/v1651259046/logo_l2yxf3.svg"\n                    alt=""\n                  />\n                </a>\n              </div>\n              <div className="flex-shrink-0 my-auto py-16 sm:py-32">\n                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>\n                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">\n                  Page not found\n                </h1>\n                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>\n                <div className="mt-6">\n                  <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">\n                    Go back home<span aria-hidden="true"> &rarr;</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </main>\n          <footer className="flex-shrink-0 bg-gray-50">\n            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">\n              <nav className="flex space-x-4">\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Contact Support\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Status\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Twitter\n                </a>\n              </nav>\n            </div>\n          </footer>\n        </div>\n        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">\n          <img\n            className="absolute inset-0 h-full w-full object-cover"\n            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"\n            alt=""\n          />\n        </div>\n      </div>\n    </>\n  )\n}\n',
		},
	],
	CTA: [
		{
			id: 7,
			category: 'cta',
			name: 'cta-simple-centered',
			preview:
				'https://i.postimg.cc/YjKqg79z/Screenshot-from-2022-10-30-01-04-01.png',
			jsx: 'export default function Example() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">\n          <span className="block">Ready to dive in?</span>\n          <span className="block">Start your free trial today.</span>\n        </h2>\n        <div className="mt-8 flex justify-center">\n          <div className="inline-flex rounded-md shadow">\n            <a\n              href="#"\n              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"\n            >\n              Get started\n            </a>\n          </div>\n          <div className="ml-3 inline-flex">\n            <a\n              href="#"\n              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"\n            >\n              Learn more\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 8,
			category: 'cta',
			name: 'cta-simple-centered-branded',
			preview:
				'https://i.postimg.cc/HWJwQtnr/Screenshot-from-2022-10-30-01-04-20.png',
			jsx: 'export default function Example() {\n  return (\n    <div className="bg-indigo-700">\n      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">\n        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">\n          <span className="block">Boost your productivity.</span>\n          <span className="block">Start using Workflow today.</span>\n        </h2>\n        <p className="mt-4 text-lg leading-6 text-indigo-200">\n          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.\n        </p>\n        <a\n          href="#"\n          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"\n        >\n          Sign up for free\n        </a>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 9,
			category: 'cta',
			name: 'cta-split-with-image',
			preview:
				'https://i.postimg.cc/fy0RJywb/Screenshot-from-2022-10-30-01-04-37.png',
			jsx: 'export default function Example() {\n  return (\n    <div className="relative bg-gray-800">\n      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">\n        <img\n          className="w-full h-full object-cover"\n          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"\n          alt=""\n        />\n      </div>\n      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">\n        <div className="md:ml-auto md:w-1/2 md:pl-10">\n          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>\n          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>\n          <p className="mt-3 text-lg text-gray-300">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a\n            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum\n            tincidunt duis.\n          </p>\n          <div className="mt-8">\n            <div className="inline-flex rounded-md shadow">\n              <a\n                href="#"\n                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"\n              >\n                Visit the help center\n                <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />\n              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />\n            </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
	],
}

const vscode = acquireVsCodeApi()

function renderComponent(components) {
	const container = document.getElementById('content')
	container.innerHTML = ''

	// if (Object == undefined || Object.entries(components).length <= 0) {
	//   container.innerHTML = 'No component matches the search!!'
	// }

	Object.keys(components).forEach(category => {
		const categoryContainer = document.createElement('ul')
		const categoryTitle = document.createElement('h3')
		categoryTitle.innerText = category
		categoryTitle.className = 'category-title'
		categoryContainer.appendChild(categoryTitle)
		// categoryContainer.className = ''

		container.append(categoryContainer)

		components[category].map(component => {
			const div = document.createElement('li')
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

			categoryTitle.append(div)
		})
	})
}

function he() {
	renderComponent(components)

	function handleSearch(e) {
		const search = e.target.value
		Object.keys(components).forEach(category => {
			const categoryArr = components[category]

			const filterd = categoryArr.some(item => {
				return item.name.includes('button')
			})

			console.log(filterd)
		})
		const filtered = Object.keys(components).forEach(category => {
			console.log('CATEEGORY', category)
			components[category].filter(component => {
				console.log('COMPONENT', component)
				return component.name.includes(search)
			})
		})

		// const filtered = components.filter(component => {
		//   return component.name.includes(search)
		// })
		renderComponent(filtered)
	}

	const searchEl = document.getElementById('search')
	searchEl.addEventListener('keyup', handleSearch)
}

he()
