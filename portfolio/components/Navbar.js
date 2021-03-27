import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Kevin Adams Web Development</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href="/portfolio" passHref>
                    <StyledLink>Portfolio</StyledLink>
                </Link>
                <Link href="/contact" passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
