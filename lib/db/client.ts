import { MongoClient } from "mongodb";

const dev_uri = `mongodb://mongo:27017`
const options = {};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new MongoClient(dev_uri, options);
    }
    client = globalWithMongo._mongoClient;
} else {
    if (!process.env.MONGODB_USER) {
        throw new Error('Please add your MONGODB_USER in ".env.local"');
    }
    if (!process.env.MONGODB_PASSWORD) {
        throw new Error('Please add your MONGODB_PASSWORD in ".env.local"');
    }

    const user = process.env.MONGODB_USER;
    const pword = process.env.MONGODB_PASSWORD;
    const prod_uri = `mongodb+srv://${user}:${pword}@castlebam.d13rk.mongodb.net/?retryWrites=true&w=majority&appName=CastleBam`;

    // In production mode, it's best to not use a global variable.
    client = new MongoClient(prod_uri, options);
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default client;
