export default function PageLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="mx-auto max-w-full sm:px-6  ">
      { children }
    </div>
  )
}
