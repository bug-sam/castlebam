import Link from 'next/link';

export default function Home() {
  return (
    <div id="main1">

        <div id="heading">
            <h2>welcome to castlebam :3</h2>
        </div>

      <div id="nav-container">
        <Link href="/about" className="link">about</Link>
        <Link href="/venues" className="link">venues</Link>
        <Link href="/shows" className="link">shows</Link>
        <Link href="/messageboard" className="link">messageboard</Link>
        <Link href="/blog" className="link">blog</Link>
      </div>

      <div id="last_updated">
        <p>Last updated: April 22 2025 by Dragon</p>
      </div>

    </div>
  );
}