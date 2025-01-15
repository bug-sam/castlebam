import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>U Kno BamBam Savage as Fu</h1>
            <div>
                <Link href="/shows">Shows</Link>
            </div>
            <div>
                <Link href="/venues">Venues</Link>
            </div>
        </div>
    );
}
