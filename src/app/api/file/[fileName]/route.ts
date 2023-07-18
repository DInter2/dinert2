import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
  { params: { fileName } }: { params: { fileName: string } }) {

  const res = await fetch(`https://script.google.com/macros/s/AKfycbyCVtQ7f6K_4LTbhxY80o80fZlrmlvZx9Ry125Gx4RbanSlYJSQxaV2FlMuANqm0eibMg/exec?query=${fileName}`,
   {
    cache: "no-cache"
   });
   const data = await res.json()
   if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return NextResponse.json(data,{
      status: 200,
    }
  );
}

