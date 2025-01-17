import client from "@/lib/db/client";

const getDB = () => process.env.NODE_ENV === "development" ? "dev" : "prod";

export const insert = async (table: string, row: any) => {
    try {
        await client.connect();
        await client.db(getDB()).collection(table).insertOne(row);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
