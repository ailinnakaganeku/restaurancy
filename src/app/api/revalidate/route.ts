/* eslint-disable no-console */
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export async function POST(request: Request) {
  const currentdate = new Date();
  const datetime = `Sync at ${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await request.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (data.key !== "secret") return NextResponse.json({success: false});

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (data.key === "secret") {
    revalidatePath("/");

    return NextResponse.json({success: true, datetime});
  }
}

fetch("http://localhost:3000/api/revalidate", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({key: "secret"}),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
