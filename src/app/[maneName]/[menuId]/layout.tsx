export default function PageLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="mx-auto sm:px-6 box-content">
      { children }
    </div>
  )
}
