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
			jsx: 'export default function 404() {\n  return (\n    <>\n      {/*\n        This component requires updating your template:\n\n        ```\n        <html class="h-full">\n        <body class="h-full">\n        ```\n      */}\n      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">\n        <div className="max-w-max mx-auto">\n          <main className="sm:flex">\n            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>\n            <div className="sm:ml-6">\n              <div className="sm:border-l sm:border-gray-200 sm:pl-6">\n                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>\n                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>\n              </div>\n              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Go back home\n                </a>\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Contact support\n                </a>\n              </div>\n            </div>\n          </main>\n        </div>\n      </div>\n    </>\n  )\n}',
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
			jsx: 'export default function CTA() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">\n          <span className="block">Ready to dive in?</span>\n          <span className="block">Start your free trial today.</span>\n        </h2>\n        <div className="mt-8 flex justify-center">\n          <div className="inline-flex rounded-md shadow">\n            <a\n              href="#"\n              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"\n            >\n              Get started\n            </a>\n          </div>\n          <div className="ml-3 inline-flex">\n            <a\n              href="#"\n              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"\n            >\n              Learn more\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 8,
			category: 'cta',
			name: 'cta-simple-centered-branded',
			preview:
				'https://i.postimg.cc/HWJwQtnr/Screenshot-from-2022-10-30-01-04-20.png',
			jsx: 'export default function CTA() {\n  return (\n    <div className="bg-indigo-700">\n      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">\n        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">\n          <span className="block">Boost your productivity.</span>\n          <span className="block">Start using Workflow today.</span>\n        </h2>\n        <p className="mt-4 text-lg leading-6 text-indigo-200">\n          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.\n        </p>\n        <a\n          href="#"\n          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"\n        >\n          Sign up for free\n        </a>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 9,
			category: 'cta',
			name: 'cta-split-with-image',
			preview:
				'https://i.postimg.cc/fy0RJywb/Screenshot-from-2022-10-30-01-04-37.png',
			jsx: 'export default function CTA() {\n  return (\n    <div className="relative bg-gray-800">\n      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">\n        <img\n          className="w-full h-full object-cover"\n          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"\n          alt=""\n        />\n      </div>\n      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">\n        <div className="md:ml-auto md:w-1/2 md:pl-10">\n          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>\n          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>\n          <p className="mt-3 text-lg text-gray-300">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a\n            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum\n            tincidunt duis.\n          </p>\n          <div className="mt-8">\n            <div className="inline-flex rounded-md shadow">\n              <a\n                href="#"\n                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"\n              >\n                Visit the help center\n                <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />\n              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />\n            </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
	],
	Newsletter: [
		{
			id: 10,
			category: 'newsletter',
			name: 'newsletter-simple-stacked',
			preview:
				'https://i.postimg.cc/3wFkjk5f/Screenshot-from-2022-10-30-01-26-57.png',
			jsx: '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">\n          Want product news and updates?\n        </h2>\n        <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">\n          Sign up for our newsletter.\n        </p>\n        <form className="mt-8 sm:flex">\n          <label htmlFor="email-address" className="sr-only">\n            Email address\n          </label>\n          <input\n            id="email-address"\n            name="email"\n            type="email"\n            autoComplete="email"\n            required\n            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"\n            placeholder="Enter your email"\n          />\n          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">\n            <button\n              type="submit"\n              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n            >\n              Notify me\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 11,
			category: 'newsletter',
			name: 'newsletter-centered-with-graphic',
			preview:
				'https://i.postimg.cc/1zQgNpTN/Screenshot-from-2022-10-30-01-27-39.png',
			jsx: '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white py-16 sm:py-24">\n      <div className="relative sm:py-16">\n        <div aria-hidden="true" className="hidden sm:block">\n          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />\n          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">\n            <defs>\n              <pattern\n                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"\n                x={0}\n                y={0}\n                width={20}\n                height={20}\n                patternUnits="userSpaceOnUse"\n              >\n                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n              </pattern>\n            </defs>\n            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />\n          </svg>\n        </div>\n        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">\n          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">\n            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">\n              <svg\n                className="absolute inset-0 h-full w-full"\n                preserveAspectRatio="xMidYMid slice"\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 1463 360"\n              >\n                <path\n                  className="text-indigo-500 text-opacity-40"\n                  fill="currentColor"\n                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"\n                />\n                <path\n                  className="text-indigo-700 text-opacity-40"\n                  fill="currentColor"\n                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"\n                />\n              </svg>\n            </div>\n            <div className="relative">\n              <div className="sm:text-center">\n                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">\n                  Get notified when we&rsquo;re launching.\n                </h2>\n                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">\n                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque\n                  tristique pellentesque.\n                </p>\n              </div>\n              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">\n                <div className="min-w-0 flex-1">\n                  <label htmlFor="cta-email" className="sr-only">\n                    Email address\n                  </label>\n                  <input\n                    id="cta-email"\n                    type="email"\n                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"\n                    placeholder="Enter your email"\n                  />\n                </div>\n                <div className="mt-4 sm:mt-0 sm:ml-3">\n                  <button\n                    type="submit"\n                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"\n                  >\n                    Notify me\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 12,
			category: 'newsletter',
			name: 'newsletter-with-description',
			preview:
				'https://i.postimg.cc/YqTLtczR/Screenshot-from-2022-10-30-01-28-05.png',
			jsx: '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">\n        <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">\n          <div className="lg:w-0 lg:flex-1">\n            <h2 className="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>\n            <p className="mt-4 max-w-3xl text-lg text-indigo-100">\n              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet\n              fugiat.\n            </p>\n          </div>\n          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">\n            <form className="sm:flex">\n              <label htmlFor="email-address" className="sr-only">\n                Email address\n              </label>\n              <input\n                id="email-address"\n                name="email-address"\n                type="email"\n                autoComplete="email"\n                required\n                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"\n                placeholder="Enter your email"\n              />\n              <button\n                type="submit"\n                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"\n              >\n                Notify me\n              </button>\n            </form>\n            <p className="mt-3 text-sm text-indigo-100">\n              We care about the protection of your data. Read our{\' \'}\n              <a href="#" className="text-white font-medium underline">\n                Privacy Policy.\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
	],
	stats: [
		{
			id: 13,
			category: 'stats',
			name: 'stats-simple',
			preview:
				'https://i.postimg.cc/t7G1tWTf/Screenshot-from-2022-10-30-01-41-41.png',
			jsx: 'export default function Stats() {\n  return (\n    <div className="bg-gray-50 pt-12 sm:pt-16">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">\n            Trusted by developers from over 80 planets\n          </h2>\n          <p className="mt-3 text-xl text-gray-500 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n      </div>\n      <div className="mt-10 pb-12 bg-white sm:pb-16">\n        <div className="relative">\n          <div className="absolute inset-0 h-1/2 bg-gray-50" />\n          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n            <div className="max-w-4xl mx-auto">\n              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">\n                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>\n                </div>\n                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>\n                </div>\n                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>\n                </div>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 14,
			category: 'stats',
			name: 'stats-brand',
			preview:
				'https://i.postimg.cc/wv3wRy7L/Screenshot-from-2022-10-30-01-43-35.png',
			jsx: 'export default function Stats() {\n  return (\n    <div className="bg-indigo-800">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers from over 80 planets</h2>\n          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">\n          <div className="flex flex-col">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>\n          </div>\n        </dl>\n      </div>\n    </div>\n  )\n}\n',
		},
	],
	Logoclouds: [
		{
			id: 15,
			category: 'logoclouds',
			name: 'logoclouds-off-white-grid',
			preview:
				'https://i.postimg.cc/gkL1B5c8/Screenshot-from-2022-10-30-01-50-28.png',
			jsx: 'export default function Logoclouds() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">\n          Trusted by over 5 very average small businesses\n        </p>\n        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"\n              alt="Workcation"\n            />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"\n              alt="StaticKit"\n            />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"\n              alt="Statamic"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 16,
			category: 'logoclouds',
			name: 'logoclouds-simple-with-heading',
			preview:
				'https://i.postimg.cc/QtMygYnB/Screenshot-from-2022-10-30-01-51-06.png',
			jsx: 'export default function Logoclouds() {\n  return (\n    <div className="bg-indigo-200 bg-opacity-25">\n      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">\n        <div className="lg:grid lg:grid-cols-2 lg:gap-8">\n          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">\n            The world\'s most innovative companies use Workflow\n          </h2>\n          <div className="flow-root self-center mt-8 lg:mt-0">\n            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img\n                  className="h-12"\n                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"\n                  alt="Workcation"\n                />\n              </div>\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />\n              </div>\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img className="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
		},
		{
			id: 17,
			category: 'logoclouds',
			name: 'logoclouds-simple-with-heading-brand',
			preview:
				'https://i.postimg.cc/PxFFSbBS/Screenshot-from-2022-10-30-01-50-47.png',
			jsx: 'export default function Logoclouds() {\n  return (\n    <div className="bg-indigo-700">\n      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">\n        <h2 className="text-3xl font-extrabold text-white">The world\'s most innovative companies use Workflow</h2>\n        <div className="flow-root mt-8 lg:mt-10">\n          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg" alt="Mirage" />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"\n                alt="StaticKit"\n              />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"\n                alt="Transistor"\n              />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"\n                alt="Workcation"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
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
