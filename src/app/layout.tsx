import { RootFolderDto } from '../types/RootFolder'
import './globals.css'
import { Inter } from 'next/font/google'
import MainContent from './Components/layout/content/MainContent'
import Footer from './Components/layout/footer/Footer'
import MuiThemeClient from './Components/client/clienteContext/Context.Client'
import DrawerServerSubmenuMaping from './Components/layout/drawer/DrawerServer.submenuMaping'
import AppBarHeader from './Components/layout/header/AppBarHeader'
import ResponsiveDrawer from './Components/layout/drawer/ResponsiveDrawer'
import RegisterModal from './Components/modals/RegisterModal'
import LoginModal from './Components/modals/LoginModal'
import SearchModal from './Components/modals/SearchModal'
import { menu } from './Components/layout/drawer/menus'
import getCurrentUser from './actions/getCurrentUser'
import SectionMenuLink from './Components/layout/drawer/link/SectionMenuLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DInter 2',
  description: 'Drive da DInter 2',
}
async function getDriveLinks() :Promise<RootFolderDto>{
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
  let email: string | null = "";
  const currentUser = await getCurrentUser();
  if(currentUser!=null) email = currentUser.email ?? null;
  const resp = await Promise.all([getDriveLinks()])
  return (
    <html lang="pt">
      <body className={inter.className}>
        <MuiThemeClient>
        <RegisterModal />
        <LoginModal />
        <SearchModal/>
          <ResponsiveDrawer>
              <DrawerServerSubmenuMaping link={false} data={menu}/>
              {currentUser!&& resp[0].folders.map((folder, index) => <SectionMenuLink key={folder.id} folders={folder.folders} index={index}/>)}
          </ResponsiveDrawer>
          <AppBarHeader currentUser={email}/>
          <MainContent >
            { children }

          </MainContent>
            <Footer description='Descrição' title='DInter 2'/>
        </ MuiThemeClient>
     </body>
    </html>
  )
}
