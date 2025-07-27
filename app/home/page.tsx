import Link from "next/link";

export default function Home() {
    return (
        <div id="main1">
            <div id="heading">
                <p>
                    <span style={{ color: "blue" }}>CASTLEBAM</span>{" "}
                    <span style={{ color: "green" }}>
                        IS A LOCALIZED COMMUNITY RESOURCE WHERE SHOWS, IDEAS,
                        AND PLACES MEET.
                    </span>
                </p>
            </div>

            <div id="nav-container">
                <Link href="/venues" className="link">
                    →VENUES
                </Link>
                <Link href="/shows" className="link">
                    →SHOWS
                </Link>
                <Link href="/messageboard" className="link">
                    →MESSAGEBOARD
                </Link>
                <Link href="/blog" className="link">
                    →BLOG
                </Link>
            </div>
            <div id="main2">
                <ol>
                    <li>
                        <span style={{ color: "blue" }}>04/24/25</span>
                        PHILAMOCA W/ ATTACK DOG, BRISTOLTOOTH, POWER OVER
                        ETHERNET
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>04/26/25</span>
                        UKIECLUB W/ LOWERTOWN
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>04/26/25</span>
                        MILBOY W/ YAM YAM, AJAY
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>04/27/25</span>
                        FRANKLIN MUSIC HALL W/ WHIRR, NOTHING, SWERVEDRIVER
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>05/01/25</span>
                        THE MET W/ DEVO
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>05/03/25</span>
                        FRANKLIN MUSIC HALL W/ DJO, POST ANIMAL
                    </li>
                    <li>
                        <span style={{ color: "blue" }}>05/04/25</span>
                        FIRST UNITARIAN CHURCH W/ JANE REMOVER, DAZEGXD, HMMC,
                        DOLLYWOOD1
                    </li>
                </ol>
            </div>
            <div id="last_updated">
                <p>UPDATED: APRIL 22 2025 BY DRAGON</p>
            </div>
        </div>
    );
}
