import { Menu } from "@/types/Menu";
import { MdHome, MdAutoStories, MdPhone, MdPhotoLibrary, MdPermMedia, MdAssessment } from 'react-icons/md';
export const institutionalMenu: Menu = {
  title: "INSTITUCIONAL",
  subMenu: [
    {
      link: "ESTRUTURA_ORGANIZACIONAL/1WOkP9Dcp3w2q_HpbcyOQFvBBl-wS1fer",
      title: "ESTRUTURA ORGANIZACIONAL",
    }, {
      title: "HISTÓRICO",
      link: "HISTORICO/1x7ruw7OMAl6o4o15KkBn7sGmixKkz8kA"
    }
  ]
}

export const contactsMenu: Menu = {
  title: "CONTATO",
  subMenu: [
    {
      link: "CONTATO/1RWshGpwhx6g6BWcBc7FWDBXvVOk1UgDX",
      title: "3º GRUPAMENTO DE BOMBEIROS Serra Talhada",
    }, {
      title: "4º GRUPAMENTO DE BOMBEIROS Petrolina",
      link: "CONTATO/1zf08M67zYbFzYhURJiFW3n5r044Sej5S"
    }, {
      title: "5º GRUPAMENTO DE BOMBEIROS Salgueiro",
      link: "CONTATO/1-fMAuFpgmtH2bGtY8zZPs5xh90MMAEUG"
    }, {
      title: "9º GRUPAMENTO DE BOMBEIROS Arcoverde",
      link: "CONTATO/1FR0WzHoZBpzFnA48p44X9RFTmtOn_MJH"
    }, {
      title: "CAT SERTÃO: Atendimento ao Público",
      link: "CONTATO/1kmtsh_Rur2ufP1u3IzCldZNNc8ZNlnAE"
    },
  ]
}

const estatistica: Menu = {
  title: "ESTATISTICA",
  link: "/ESTATISTICA/15Yyzf7te87AJQgYsWHZ4mdUL1aAMTZ1e"
}
const event: Menu = {
  link: "/posts",
  title: "EVENTOS",
}
export const menu: Menu[] = [
  {
    title: "INÍCIO",
    link: "/",
    icon: <MdHome size={30} />
  },
  { ...institutionalMenu, icon: <MdAutoStories size={30} />, },
  { ...contactsMenu, icon: <MdPhone size={30} /> },
  { ...estatistica, icon: <MdAssessment size={30} /> },
  { ...event, icon: <MdPhotoLibrary size={30} /> }
]
