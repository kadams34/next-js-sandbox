import React from 'react'



const Footer = () => {

    function getCurrentYear() {
        return new Date().getFullYear()
    }

    return (
        <div>
            <p>©<a href="https://github.com/kadams34">Kevin Adams</a> | {getCurrentYear()}</p>
        </div>
    )
}

export default Footer
