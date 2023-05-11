export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default  function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home page
    </main>
  )
}

