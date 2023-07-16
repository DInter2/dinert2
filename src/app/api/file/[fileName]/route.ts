import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
  { params: { fileName } }: { params: { fileName: string } }) {

  const res = await fetch(`https://script.google.com/macros/s/AKfycbyU6k1OceS7geopFr8vptefOIb-dBmjWTWeeqfBFMs0n79cDpq6EEOS_bga74bTUk7yGQ/exec?query=${fileName}`,
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

