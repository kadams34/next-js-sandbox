import React from 'react'
import Link from 'next/link'



const Header = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <Link href="/" passHref>
                    <a>Kevin Adams Web Development</a>
                </Link>
            </div>
            <div className="ml-auto">
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
        </>
    )
}

export default Header
