import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.a`
    color: white;
`

const Footer = () => {

    function getCurrentYear() {
        return new Date().getFullYear()
    }

    return (
        <FooterSection>
            <p>©<StyledLink href="https://github.com/kadams34">Kevin Adams</StyledLink> | {getCurrentYear()}</p>
        </FooterSection>
    )
}

export default Footer
