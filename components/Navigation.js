import Link from "next/link";
import Underlined from "./Underlined";

export default function Navigation() {
    return <header>
        <ul>
            <li>
                <Underlined>
                    <Link href="/about">About</Link>
                </Underlined>
            </li>
            <li>
                <Underlined>
                    <Link href="/gallery">Gallery</Link>
                </Underlined>
            </li>
            <li>
                <Underlined>
                    <Link href="/contact">Contact</Link>
                </Underlined>
            </li>
        </ul>
    </header>
}