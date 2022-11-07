import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
//   faTwitter
// } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa"
import ConfigIcon from "../../Context/ConfigIcon"
import useView from "../../Hooks/useView"
import SocialLinks from "../SocialLinks/SocialLinks"
import "./Footer.scss"

function Footer() {
    const { width } = useView()
    const breakpoint = 960

    let date = new Date()
    let year = date.getFullYear()

    const footerLinks = () => {
        return (
            <div className='footer-right'>
                <ConfigIcon>
                    <SocialLinks />
                </ConfigIcon>
            </div>
        )
    }

    const mobile = () => {
        return (
            <footer id='footer'>
                <div className='footer-mid'>
                    <span>
                        Copyright &#169; {year}
                        <br />
                        Pate's Programming
                    </span>
                </div>
            </footer>
        )
    }

    const desktop = () => {
        return (
            <footer id='footer'>
                <div className='footer-left' style={{ overflow: "hidden" }}>
                    <span>
                        Copyright &#169; {year}
                        <br />
                        Pate's Programming
                    </span>
                </div>
                <div className='footer-mid'>
                    <h3 className='footer-text'>
                        Designed and Developed by
                        <br />
                        Wade Pate and Pate's Programming
                    </h3>
                </div>
                {footerLinks()}
            </footer>
        )
    }

    return width < breakpoint ? mobile() : desktop()
}

export default Footer
