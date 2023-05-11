import { RootFolderDto } from './types/RootFolder'
import { Nav } from './Components/layout/nav/nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DInter 2',
  description: 'Drive da DInter 2',
}
async function getMobileMenus() :Promise<RootFolderDto>{
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbzZEIm4IKP3SHz6A0hf6y7gvVELqZiGutV5_Hzy9PDBHwY6F3yZEvkjSO0BvboVDfXjLQ/exec?folderId=1S0xfEFx6JRZj1ldN2won-SpXZC7QBQ17`,
    // { next: { revalidate: 360 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menus = await getMobileMenus()
  return (
    <html lang="pt">
      <body className={inter.className}><section>
        <div className="min-h-full">
        <Nav menus={menus.folders}/>
			<main>
				<div className="mx-auto max-w-7xl min-h-screen py-4 sm:px-6 lg:px-8 bg-blue-100">
          { children }
				</div>
			</main>
			</div>
      </section></body>
    </html>
  )
}
