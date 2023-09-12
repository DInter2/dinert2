export default function PostLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="mx-auto sm:px-6 pt-24 box-content">
      { children }
    </div>
  )
}
