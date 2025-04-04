import Link from 'next/link';

export default function Home() {
  return (
    <div id="main1">

        <div id="heading">
            <h2>welcome to castlebam :3</h2>
        </div>

      <div id="nav-container">
        <Link href="/about" className="link">about</Link>
        <Link href="/blog" className="link">venues</Link>
        <Link href="/shows" className="link">shows</Link>
        <Link href="/messageboard" className="link">messageboard</Link>
        <Link href="/blog" className="link">blog</Link>
        <Link href="/photos" className="link">photography</Link>
      </div>

      <div id="last_updated">
        <p>Last updated: March 25 2025 by Dragon</p>
      </div>

    </div>
  );
}