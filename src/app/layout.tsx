import { RootFolderDto } from './types/RootFolder'
import './globals.css'
import { Inter } from 'next/font/google'
import MainContent from './Components/layout/content/MainContent'
import { CustonThemeProvider } from './Components/client/theme/MuiTheme.Context'
import Footer from './Components/layout/footer/Footer'
import HeaderDrawer from './Components/layout/header_drawer/HeaderDrawer'
import MuiThemeClient from './Components/client/theme/MuiTheme.Client'
import DrawerServer from './Components/layout/drawer/DrawerServer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DInter 2',
  description: 'Drive da DInter 2',
}
async function getMobileMenus() :Promise<RootFolderDto>{
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbzZEIm4IKP3SHz6A0hf6y7gvVELqZiGutV5_Hzy9PDBHwY6F3yZEvkjSO0BvboVDfXjLQ/exec?folderId=1S0xfEFx6JRZj1ldN2won-SpXZC7QBQ17`,

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
  const menus = getMobileMenus()
  return (
    <html lang="pt">
      <body className={inter.className}>
          <MuiThemeClient>
            <HeaderDrawer>
              <DrawerServer data={(await menus).folders}/>
            </HeaderDrawer>
            <MainContent >
              <div className='min-h-screen min-w-max flex-1'>
                { children }
              </div>
              <Footer description='Descrição' title='DInter 2'/>
            </MainContent>
        </ MuiThemeClient>
     </body>
    </html>
  )
}
