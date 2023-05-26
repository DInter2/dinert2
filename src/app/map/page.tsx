import clientPromise from "@/lib/dbConected"

export default async function Map() {
  const  clientConect = async  ()  =>  {
    try {
       await clientPromise;
     return true;
    } catch ( error) {
      console.error(error)
      return false;
    }
  }
  const mong = await clientConect()
  return (
    <h1>Mapa dinâmico {mong? "is conected": "is not conected"}</h1>
  )
}
