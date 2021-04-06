import React from 'react'
import Link from 'next/link'



const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href="/" passHref>
                    <a>Kevin Adams Web Development</a>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <a>Home</a>
                </Link>
                <Link href="/about" passHref>
                    <a>About</a>
                </Link>
                <Link href="/portfolio" passHref>
                    <a>Portfolio</a>
                </Link>
                <Link href="/contact" passHref>
                    <a>Contact</a>
                </Link>
                <Link href="/resume" passHref>
                    <a>Resume</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
