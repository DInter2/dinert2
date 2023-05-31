import { FileDto } from "@/types/File";
import { revalidatePath } from "next/cache";

let files:  FileDto[] = []
const SearshDrive = () => {
  async function addItem(data: FormData) {
    'use server';
    const term = data.get("term") as String;
    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbxU79A01sTvj9lw7h5QZt3fMlSWu8rHktCAQx6loFUchN9ga03agU_ajKH8nPkpLf4VnA/exec?query=folder&term=${term}`,
      {cache: "no-cache"}
      );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    res.json().then((data) => {
      files =[ ...data.files ];
      console.log(files)
    })

    revalidatePath("/drive/search")
  }

  return (
    <div className="flex justify-center mt-[40vh]">
      <div className="w-1/3">
        <form action={addItem}>
          <input type="text" name="term" className="text-gray-950 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" placeholder="Pesquisar..." />
          <button type="submit"  className="text-gray-950 ">Add to Cart</button>
        </form>
        <ul>
          {files.map((file)=><li key={file.id}>{file.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default SearshDrive;
