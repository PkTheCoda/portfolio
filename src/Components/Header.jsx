import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Images/pklogo.png'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'My Work', href: '#work' },
  { name: 'Skills/Tools', href: '#tools' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className='font-outfit font-bold'>Pranav Konjeti</div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md leading-6 text-black font-outfit">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="mailto:pranavkonjeti@gmail.com" className="text-md leading-6 text-black font-outfit">
              Contact Me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#de8c52] from-30% to-[#4133d8] via-[#d21d23] opacity-30 sm:left-[calc(50%-30rem)] sm:bottom-[-20rem] sm:w-[81.1875rem]"
            style={{
              clipPath:
                'polygon(28.22% 33.13%, 37.2% 26.09%, 48.37% 23.76%, 60.27% 26.09%, 66.68% 29.23%, 70.05% 35.52%, 72.34% 46.86%, 71.78% 53.33%, 70.05% 61.09%, 62.84% 64.45%, 51.31% 69.45%, 38.91% 67.34%, 28.22% 57.35%, 23.5% 43.51%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl tracking-tight font-bold text-black sm:text-9xl font-outfit">
              Hi There, I'm <span className='main-gradient'>Pranav Konjeti</span>
            </h1>
            <p className="mt-6 text-xl sm:text-3xl leading-8 text-black font-outfit">
              I'm a highschooler with a <span className='main-gradient font-bold'>passion for web development.</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-xl text-white shadow-xl shadow-red-300/50 font-outfit w-40 h-15 flex items-center justify-center transform transition hover:scale-105"
              >
                About Me
              </a>
              <a href="#" className="text-xl leading-6 text-black font-outfit">
                My Work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c7449b] from-50% to-[#efa717] to-40% via-[#c51010] opacity-30 sm:left-[calc(40%+36rem)] sm:bottom-[20rem] sm:w-[80.1875rem] sm:h-[60rem]"
            style={{
              clipPath:
                'polygon(28.29% 33.22%, 37.29% 26.17%, 48.49% 23.83%, 60.42% 26.17%, 66.84% 29.32%, 70.23% 35.62%, 72.52% 47%, 71.96% 53.49%, 70.23% 61.27%, 63% 64.64%, 51.44% 69.65%, 39.01% 67.54%, 28.29% 57.52%, 23.56% 43.63%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
