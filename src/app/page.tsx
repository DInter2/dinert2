import { CardTodo } from "./blog/components/Cards/Card";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getData(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async  function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     <ul>
      {data.map((todo)=>{
        return (
          <li key={todo.id}>
            <CardTodo todo={todo}/>
          </li>
        )
      })}
     </ul>
    </main>
  )
}

