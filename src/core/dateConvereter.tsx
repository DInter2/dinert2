"use client"

export const DateBr = ({date}:{date: string}) => {
  const dateBr = date.toString().split('T')[0].split("-").reverse().join("/")
  return (
    <small
      className="leading-5 text-gray-500 dark:text-gray-400">
        {dateBr}
    </small>
  )
}
