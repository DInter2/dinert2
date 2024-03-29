import { Suspense } from "react"
import { MobileMemu } from "./mobileMenu"
import { MobileMenuContent } from "./mobileMenuContent"
import { FolderDto } from "@/types/Folder";

export const Nav = ({menus}:{menus: FolderDto[]}) => {
  return (
    <nav>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-800">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
					<div className="flex-shrink-0">
					</div>
					<MobileMemu>
						<Suspense fallback={<div>Loading...</div>}>
							<MobileMenuContent  menus={menus}/>
						</Suspense>
					</MobileMemu>
					</div>
					<div className="hidden md:block">
					<div className="ml-4 flex items-center md:ml-6">
						<button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span className="sr-only">View notifications</span>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
						</svg>
						</button>
						<div className="relative ml-3">
						<div>
							<button type="button" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
							<span className="sr-only">Open user menu</span>
							</button>
						</div>
							{/* <Menu /> */}
						</div>
					</div>
					</div>
					<div className="-mr-2 flex md:hidden">
					<button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
						<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					</div>
				</div>
				</div>
				<div className="md:hidden" id="mobile-menu">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							<a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
						</div>
					<div className="border-t border-gray-700 pb-3 pt-4">
							<div className="flex items-center px-5">
							<div className="flex-shrink-0">
							</div>
						<div className="ml-3">
							<div className="text-base font-medium leading-none text-white">Tom Cook</div>
							<div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
						</div>
						<button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
							<span className="sr-only">View notifications</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
							</svg>
						</button>
						</div>
						<div className="mt-3 space-y-1 px-2 flex-none">
						<a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
						<a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
						<a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
						</div>
					</div>
				</div>
			</nav>
  )
}
