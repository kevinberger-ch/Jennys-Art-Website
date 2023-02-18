import Link from "next/link";

export default function Navigation() {
    return <header>
        <ul>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/gallery">Gallery</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </header>
}