import { getShows } from "@/lib/db/operations/Show";

export async function GET() {
    const shows = await getShows();
    return Response.json(shows);
}
