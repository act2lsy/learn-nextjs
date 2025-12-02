import { NextResponse } from "next/server";

export type TDummy = {
  id: number;
  title: string;
  description: string;
};

const d: TDummy[] = [
  { id: 1, title: `T1`, description: `D1` },
  { id: 2, title: `T2`, description: `D2` },
  { id: 3, title: `T3`, description: `D3` },
  { id: 4, title: `T4`, description: `D4` },
];

export async function GET() {
  return NextResponse.json(d);
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  d.push(res);
  return Response.json({ request });
}
