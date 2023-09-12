import { Menu } from "@/types/Menu";
import  { MdHome, MdAutoStories, MdPhone, MdPhotoLibrary, MdPermMedia, MdAssessment } from 'react-icons/md';
export const institutionalMenu: Menu = {
  title: "INSTITUCIONAL",
  subMenu:[
    {
    link: "ESTRUTURA_ORGANIZACIONAL/1WOkP9Dcp3w2q_HpbcyOQFvBBl-wS1fer",
    title: "ESTRUTURA ORGANIZACIONAL",
     },{
      title: "HISTÓRICO",
      link: "HISTORICO/1x7ruw7OMAl6o4o15KkBn7sGmixKkz8kA"
     }
  ]
}

export const contactsMenu: Menu = {
  title: "CONTATO",
  subMenu:[
    {
    link: "CONTATO/1RWshGpwhx6g6BWcBc7FWDBXvVOk1UgDX",
    title: "3º GRUPAMENTO DE BOMBEIROS Serra Talhada",
     },{
      title: "4º GRUPAMENTO DE BOMBEIROS Petrolina",
      link: "CONTATO/1sQRT0gThm4GjnbZTJhCrgtZpa8VPrkjB"
     },{
      title: "5º GRUPAMENTO DE BOMBEIROS Salgueiro",
      link: "CONTATO/1sQRT0gThm4GjnbZTJhCrgtZpa8VPrkjB"
     },{
      title: "9º GRUPAMENTO DE BOMBEIROS Arcoverde",
      link: "CONTATO/1sQRT0gThm4GjnbZTJhCrgtZpa8VPrkjB"
     },{
      title: "CAT SERTÃO: Atendimento ao Público",
      link: "CONTATO/1sQRT0gThm4GjnbZTJhCrgtZpa8VPrkjB"
     },
  ]
}

const estatistica: Menu = {

  title: "ESTATISTICA",
  subMenu:[
    {
    link: "ESTATISTICA/1KfNCAQT6ZObIrQ0Y7s6AmhylktQkpDQE",
    title: "ATIVIDADES COMINITÁRIAS",
     },{
      title: "SALA DE MONITORAMENTO",
      link: "ESTATISTICA/1GOuYGQQk3BAaamKmf231reXh-LwcYlXH"
     }
  ]
}
const event: Menu = {
  link: "/post",
  title: "EVENTOS",
}
export  const menu: Menu[] = [
  {
    title:"INÍCIO",
    link: "/",
    icon: <MdHome size={30} />
  },
  {...institutionalMenu, icon: <MdAutoStories size={30} />,},
  {...contactsMenu, icon: <MdPhone size={30} />},
  {...estatistica, icon: <MdAssessment size={30} />},
  {...event, icon: <MdPhotoLibrary size={30} />}
]
