import client from "@/lib/db/client";

const getDB = () => process.env.NODE_ENV === "development" ? "dev" : "prod";

export type Table = "users" | "shows" | "venues";

export const insert = async (table: Table, row: any) => {
    try {
        await client.connect();
        await client.db(getDB()).collection(table).insertOne(row);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export const getCollection = async <T>(table: Table): Promise<T[]> => {
    let results: T[] = [];
    try {
        await client.connect();
        results = await client.db(getDB()).collection(table).find().toArray() as T[];
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return results;
}

export const getRow = async <T>(table: Table, predicate: (row: T) => boolean): Promise<T> => {
    const collection = await getCollection<T>(table);
    return collection.find(predicate) as T;
}
