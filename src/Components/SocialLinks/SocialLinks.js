import React from "react"
import {
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaFileAlt,
} from "react-icons/fa"
import ConfigIcon from "../../Context/ConfigIcon"
import "./SocialLinks.scss"

function SocialLinks() {
    const icons = [
        {
            id: 0,
            href: "https://github.com/Dozr13",
            className: "github social",
            target: "_blank",
            rel: "noopener noreferrer",
            name: "Github",
            icon: FaGithubSquare,
        },
        {
            id: 1,
            href: "https://www.linkedin.com/in/wadejp8/",
            className: "linkedIn social",
            target: "_blank",
            rel: "noopener noreferrer",
            name: "LinkedIn",
            icon: FaLinkedin,
        },
        {
            id: 2,
            href: "https://www.twitter.com/wadejp8",
            className: "twitter social",
            target: "_blank",
            rel: "noopener noreferrer",
            name: "Twitter",
            icon: FaTwitterSquare,
        },
        {
            id: 3,
            href: "https://docs.google.com/document/d/1vPKxhWEvZaZPhgv4o_l1R4xF3BZ2F7BKPkTJD4-pz38/edit?usp=sharing",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "resume-link social",
            name: "Resume",
            icon: FaFileAlt,
        },
    ]

    return (
        <>
            <div className='info-links'>
                <a
                    href='https://github.com/Dozr13'
                    className='github social'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaGithubSquare />
                </a>
                <a
                    href='https://www.linkedin.com/in/wadejp8/'
                    className='linkedIn social'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaLinkedin />
                </a>
                <a
                    href='https://www.twitter.com/wadejp8'
                    className='twitter social'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaTwitterSquare />
                </a>
            </div>
            <div>
                <a
                    href='https://docs.google.com/document/d/1vPKxhWEvZaZPhgv4o_l1R4xF3BZ2F7BKPkTJD4-pz38/edit?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='resume social'
                >
                    <FaFileAlt />
                </a>
            </div>
        </>
    )
}

export default SocialLinks
