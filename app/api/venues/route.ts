import { getVenues } from "@/lib/db/operations/Venue";

export async function GET() {
    const venues = await getVenues();
    return Response.json(venues);
}
