import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { headers } from 'next/dist/client/components/headers';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag!);
  // fetch("")
  // .then(response => response.json())
  // .then(data => {
  //   return NextResponse.json( data );
  // })
  // .catch(error => {
  //   console.error('Erro ao buscar o arquivo JSON:', error);
  // });
  return NextResponse.json({ revalidated: true, now: Date.now().toString() });
}
