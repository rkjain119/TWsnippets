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
      jsx: 'export default function 404() {\n  return (\n    <>\n\n      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">\n        <div className="max-w-max mx-auto">\n          <main className="sm:flex">\n            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>\n            <div className="sm:ml-6">\n              <div className="sm:border-l sm:border-gray-200 sm:pl-6">\n                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>\n                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>\n              </div>\n              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Go back home\n                </a>\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Contact support\n                </a>\n              </div>\n            </div>\n          </main>\n        </div>\n      </div>\n    </>\n  )\n}\n',
    },
    {
      id: 6,
      category: '404',
      name: '404-split-image',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function 404() {\n  return (\n    <>\n      <div className="bg-white min-h-full flex flex-col lg:relative">\n        <div className="flex-grow flex flex-col">\n          <main className="flex-grow flex flex-col bg-white">\n            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">\n              <div className="flex-shrink-0 pt-10 sm:pt-16">\n                <a href="/" className="inline-flex">\n                  <span className="sr-only">twsnippet</span>\n                  <img\n                    className="h-12 w-auto"\n                    src="https://res.cloudinary.com/dyl08vtii/image/upload/v1667068703/tws/logo_byv4mp.svg"\n                    alt=""\n                  />\n                </a>\n              </div>\n              <div className="flex-shrink-0 my-auto py-16 sm:py-32">\n                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>\n                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">\n                  Page not found\n                </h1>\n                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>\n                <div className="mt-6">\n                  <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">\n                    Go back home<span aria-hidden="true"> &rarr;</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </main>\n          <footer className="flex-shrink-0 bg-gray-50">\n            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">\n              <nav className="flex space-x-4">\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Contact Support\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Status\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Twitter\n                </a>\n              </nav>\n            </div>\n          </footer>\n        </div>\n        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">\n          <img\n            className="absolute inset-0 h-full w-full object-cover"\n            src="https://images.unsplash.com/photo-1600304594992-98c1262b0889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"\n            alt=""\n          />\n        </div>\n      </div>\n    </>\n  )\n}\n',
    },
    {
      id: 7,
      category: '404',
      name: '404-simple-logo',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function 404Logo() {\n  return (\n    <>\n      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">\n        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">\n          <div className="flex-shrink-0 flex justify-center">\n            <a href="/" className="inline-flex">\n              <span className="sr-only">Workflow</span>\n              <img\n                className="h-12 w-auto"\n                src="https://res.cloudinary.com/dyl08vtii/image/upload/v1667068703/tws/logo_byv4mp.svg"\n                alt=""\n              />\n            </a>\n          </div>\n          <div className="py-16">\n            <div className="text-center">\n              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>\n              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>\n              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>\n              <div className="mt-6">\n                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">\n                  Go back home<span aria-hidden="true"> &rarr;</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </main>\n        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">\n          <nav className="flex justify-center space-x-4">\n            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n              Contact Support\n            </a>\n            <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n              Status\n            </a>\n            <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n              Twitter\n            </a>\n          </nav>\n        </footer>\n      </div>\n    </>\n  )\n}\n',
    },
  ],
  Header: [
    {
      id: 8,
      category: 'Header',
      name: 'Header-simple-centered',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function Header() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">\n        <div className="text-center">\n          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>\n          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">\n            Take control of your team.\n          </p>\n          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">\n            Start building for free, then add a site plan to go live. Account plans unlock additional features.\n          </p>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 9,
      category: 'Header',
      name: 'Header-simple-background',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: '"export default function Header() {\n  return (\n    <div className="relative bg-indigo-800">\n      <div className="absolute inset-0">\n        <img\n          className="w-full h-full object-cover"\n          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"\n          alt=""\n        />\n        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />\n      </div>\n      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">\n        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>\n        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">\n          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel\n          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.\n        </p>\n      </div>\n    </div>\n  )\n}\n"	',
    },
  ],
  Stats: [
    {
      id: 10,
      category: 'Stats',
      name: 'Stats-simple-card',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function Stats() {\n  return (\n    <div className="bg-gray-50 pt-12 sm:pt-16">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">\n            Trusted by developers from over 80 planets\n          </h2>\n          <p className="mt-3 text-xl text-gray-500 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n      </div>\n      <div className="mt-10 pb-12 bg-white sm:pb-16">\n        <div className="relative">\n          <div className="absolute inset-0 h-1/2 bg-gray-50" />\n          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n            <div className="max-w-4xl mx-auto">\n              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">\n                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>\n                </div>\n                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>\n                </div>\n                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>\n                </div>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 11,
      category: 'Stats',
      name: 'Stats-simple-card',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function Stats() {\n  return (\n    <div className="bg-indigo-800">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers from over 80 planets</h2>\n          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">\n          <div className="flex flex-col">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>\n          </div>\n        </dl>\n      </div>\n    </div>\n  )\n}\n',
    },
  ],
  Testimonials: [
    {
      id: 12,
      category: 'Testimonials',
      name: 'Testimonials-split-color',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function Testimonials() {\n  return (\n    <section className="bg-indigo-800">\n      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">\n        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">\n          <div className="md:flex-shrink-0">\n            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />\n          </div>\n          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">\n            <div className="relative text-lg font-medium text-white md:flex-grow">\n              <svg\n                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"\n                fill="currentColor"\n                viewBox="0 0 32 32"\n                aria-hidden="true"\n              >\n                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />\n              </svg>\n              <p className="relative">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                molestiae. Numquam corrupti in laborum sed rerum et corporis.\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="flex items-start">\n                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">\n                  <img\n                    className="h-12 w-12 rounded-full"\n                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="ml-4">\n                  <div className="text-base font-medium text-white">Judith Black</div>\n                  <div className="text-base font-medium text-indigo-200">CEO, Tuple</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n        <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">\n          <div className="md:flex-shrink-0">\n            <img\n              className="h-12"\n              src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"\n              alt="Workcation"\n            />\n          </div>\n          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">\n            <div className="relative text-lg font-medium text-white md:flex-grow">\n              <svg\n                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"\n                fill="currentColor"\n                viewBox="0 0 32 32"\n              >\n                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />\n              </svg>\n              <p className="relative">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente\n                alias molestiae.\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="flex items-start">\n                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">\n                  <img\n                    className="h-12 w-12 rounded-full"\n                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="ml-4">\n                  <div className="text-base font-medium text-white">Joseph Rodriguez</div>\n                  <div className="text-base font-medium text-indigo-200">CEO, Workcation</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
    {
      id: 13,
      category: 'Testimonials',
      name: 'Testimonial-simple-centered',
      preview: 'https://i.ibb.co/0nQqZ3r/testimonial-1.png',
      jsx: 'export default function Testemonial() {\n  return (\n    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">\n      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <svg\n          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"\n          width={404}\n          height={404}\n          fill="none"\n          viewBox="0 0 404 404"\n          role="img"\n          aria-labelledby="svg-workcation"\n        >\n          <title id="svg-workcation">Workcation</title>\n          <defs>\n            <pattern\n              id="ad119f34-7694-4c31-947f-5c9d249b21f3"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />\n        </svg>\n\n        <div className="relative">\n          <img\n            className="mx-auto h-8"\n            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"\n            alt="Workcation"\n          />\n          <blockquote className="mt-10">\n            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">\n              <p>\n                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente\n                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="md:flex md:items-center md:justify-center">\n                <div className="md:flex-shrink-0">\n                  <img\n                    className="mx-auto h-10 w-10 rounded-full"\n                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">\n                  <div className="text-base font-medium text-gray-900">jay Leno</div>\n\n                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">\n                    <path d="M11 0h3L9 20H6l5-20z" />\n                  </svg>\n\n                  <div className="text-base font-medium text-gray-500">CEO, Sudopers</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
    {
      id: 14,
      category: 'Testimonials',
      name: 'Testimonial-large-avatar',
      preview: 'https://i.ibb.co/0nQqZ3r/testimonial-1.png',
      jsx: 'export default function Testimonial() {\n  return (\n    <section className="bg-white overflow-hidden">\n      <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">\n        <svg\n          className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"\n          width={784}\n          height={404}\n          fill="none"\n          viewBox="0 0 784 404"\n          aria-hidden="true"\n        >\n          <defs>\n            <pattern\n              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />\n        </svg>\n\n        <svg\n          className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"\n          width={404}\n          height={784}\n          fill="none"\n          viewBox="0 0 404 784"\n          aria-hidden="true"\n        >\n          <defs>\n            <pattern\n              id="56409614-3d62-4985-9a10-7ca758a8f4f0"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />\n        </svg>\n\n        <div className="relative lg:flex lg:items-center">\n          <div className="hidden lg:block lg:flex-shrink-0">\n            <img\n              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"\n              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n              alt=""\n            />\n          </div>\n\n          <div className="relative lg:ml-10">\n            <svg\n              className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"\n              stroke="currentColor"\n              fill="none"\n              viewBox="0 0 144 144"\n              aria-hidden="true"\n            >\n              <path\n                strokeWidth={2}\n                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"\n              />\n            </svg>\n            <blockquote className="relative">\n              <div className="text-2xl leading-9 font-medium text-gray-900">\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                  molestiae. Numquam corrupti in laborum sed rerum et corporis.\n                </p>\n              </div>\n              <footer className="mt-8">\n                <div className="flex">\n                  <div className="flex-shrink-0 lg:hidden">\n                    <img\n                      className="h-12 w-12 rounded-full"\n                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                      alt=""\n                    />\n                  </div>\n                  <div className="ml-4 lg:ml-0">\n                    <div className="text-base font-medium text-gray-900">Doremon</div>\n                    <div className="text-base font-medium text-indigo-600">CEO, TvAshi</div>\n                  </div>\n                </div>\n              </footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
  ],
  Empty_State: [
    {
      id: 15,
      category: 'Empty State',
      name: 'Empty State-add-button',
      preview: 'https://i.ibb.co/0nQqZ3r/testimonial-1.png',
      jsx: 'import { PlusIcon } from \'@heroicons/react/24/solid\'\nimport { FolderPlusIcon } from \'@heroicons/react/24/outline\'\n\nexport default function Empty() {\n  return (\n    <div className="text-center">\n    <FolderPlusIcon\n        className="mx-auto h-12 w-12 text-gray-400"\n        aria-hidden="true"\n      />\n      <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>\n      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>\n      <div className="mt-6">\n        <button\n          type="button"\n          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n        >\n          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />\n          New Project\n        </button>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 16,
      category: 'Empty State',
      name: 'Empty State-border',
      preview: 'https://i.ibb.co/0nQqZ3r/testimonial-1.png',
      jsx: 'export default function Empty() {\n  return (\n    <button\n      type="button"\n      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n    >\n      <svg\n        className="mx-auto h-12 w-12 text-gray-400"\n        xmlns="http://www.w3.org/2000/svg"\n        stroke="currentColor"\n        fill="none"\n        viewBox="0 0 48 48"\n        aria-hidden="true"\n      >\n        <path\n          strokeLinecap="round"\n          strokeLinejoin="round"\n          strokeWidth={2}\n          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"\n        />\n      </svg>\n      <span className="mt-2 block text-sm font-medium text-gray-900">Create a new database</span>\n    </button>\n  )\n}\n',
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
