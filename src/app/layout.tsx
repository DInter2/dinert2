import { RootFolderDto } from '../types/RootFolder'
import './globals.css'
import { Inter } from 'next/font/google'
import MainContent from './Components/layout/content/MainContent'
import Footer from './Components/layout/footer/Footer'
import MuiThemeClient from './Components/client/clienteContext/Context.Client'
import DrawerServer from './Components/layout/drawer/DrawerServer'
import AppBarHeader from './Components/layout/header/AppBarHeader'
import ResponsiveDrawer from './Components/layout/drawer/ResponsiveDrawer'
import SectionMenuLink from './Components/layout/drawer/link/SectionMenuLink'
import RegisterModal from './Components/modals/RegisterModal'
import LoginModal from './Components/modals/LoginModal'
import SearchModal from './Components/modals/SearchModal'
import getCurrentUser from './actions/getCurrentUser'

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
async function getMobileMenus() :Promise<RootFolderDto>{
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbysxzOOYjczLr8B_zYj071CBAk9bwYSQ81LlaZ3LdCadi7uMPI_ruKLmC1Jfg0FSaTTjg/exec?folderId=1S0xfEFx6JRZj1ldN2won-SpXZC7QBQ17`,
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
  const currentUser = await getCurrentUser();
  const resp = await Promise.all([getMobileMenus(), getDriveLinks()])
  return (
    <html lang="pt">
      <body className={inter.className}>
        <MuiThemeClient>
        <RegisterModal />
        <LoginModal />
        <SearchModal/>
          <AppBarHeader currentUser={currentUser}/>
            <ResponsiveDrawer>
              <DrawerServer link={false} data={resp[0].folders}/>
              {currentUser!&& resp[1].folders.map((folder, index) => <SectionMenuLink key={folder.id} folders={folder.folders} index={index}/>)}
            </ResponsiveDrawer>
          <MainContent >
            { children }
          </MainContent>
            <Footer description='Descrição' title='DInter 2'/>
        </ MuiThemeClient>
     </body>
    </html>
  )
}
