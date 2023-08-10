export interface Menu {
  title: string
  subMenu?: Menu[],
  link?: string,
  icon?: JSX.Element
}
