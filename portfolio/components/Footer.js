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

const Footer = () => {

    function getCurrentYear() {
        return new Date().getFullYear()
    }

    return (
        <FooterSection>
            <p>©<a href="https://github.com/kadams34">Kevin Adams</a> | {getCurrentYear()}</p>
        </FooterSection>
    )
}

export default Footer
