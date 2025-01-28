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
        <Link href="/photos" className="link">photography</Link>
        <Link href="/archive" className="link">things i want to remember</Link>
        <Link href="/music" className="link">music</Link>
        <Link href="/music" className="link">blog</Link>
      </div>

      <div id="last_updated">
        <p>Last updated: January 23 2025 by Dragon</p>
      </div>

    </div>
  );
}