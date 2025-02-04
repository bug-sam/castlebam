import { get } from "@/lib/db/models/Show";

export async function GET() {
    const shows = await get();
    return Response.json(shows);
}
