import { get } from "@/lib/db/models/Venue";

export async function GET() {
    const venues = await get();
    return Response.json(venues);
}
