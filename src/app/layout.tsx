import { RootFolderDto } from '../types/RootFolder'
import './globals.css'
import { Inter } from 'next/font/google'
import MainContent from './Components/layout/content/MainContent'
import Footer from './Components/layout/footer/Footer'
import DrawerServerSubmenuMaping from './Components/layout/drawer/DrawerServer.submenuMaping'
import ResponsiveDrawer from './Components/layout/drawer/ResponsiveDrawer'
import RegisterModal from './Components/modals/RegisterModal'
import LoginModal from './Components/modals/LoginModal'
import SearchModal from './Components/modals/SearchModal'
import { menu } from './Components/layout/drawer/menus'
import getCurrentUser, { AuthUser } from './actions/getCurrentUser'
import SectionMenuLink from './Components/layout/drawer/link/SectionMenuLink'
import PostModal from './Components/modals/PostModal'
import { AppBar } from './Components/layout/app_bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DInter 2',
  description: 'Drive da DInter 2',
}
async function getDriveLinks(): Promise<RootFolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyRJmaLH_1QMotqUeKmW7CrKyBoW9WZdWZn_ptojiK1Z6JS6ko4hVXwUaNA51oMdHyf4w/exec?folderId=1tCl6a-X1Uct25pxWZpBlnQo44Qpjis4N`,
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

  const currentUser: AuthUser = await getCurrentUser();
  const resp = await Promise.all([getDriveLinks()])
  return (
    <html lang="pt">
      <body className={inter.className}>
        <RegisterModal />
        <LoginModal />
        <PostModal />
        <SearchModal />
        <ResponsiveDrawer>
          <DrawerServerSubmenuMaping link={false} data={menu} />
          {currentUser! && resp[0].folders.map((folder, index) => <SectionMenuLink key={folder.id} folders={folder.folders} index={index} />)}
        </ResponsiveDrawer>
        <div className='max-w-screen h-full'>
          <AppBar.root>
            <AppBar.drawerButon />
            <AppBar.nav>
              <AppBar.searchButton currentUser={currentUser} />
              <AppBar.socials />
              <AppBar.menu currentUser={currentUser} />
            </AppBar.nav>
          </AppBar.root>
          <MainContent >
            {children}
          </MainContent>
          <Footer description='Descrição' title='DInter 2' />
        </div>
      </body>
    </html>
  )
}
