import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaYoutube} from "react-icons/fa"

const socMed = [
    {
        icon: <FaYoutube/>,
        path: 'https://www.youtube.com/@ReachTechnologies'
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.linkedin.com/in/divakar-asokan'
    },
    {
        icon: <FaWhatsapp/>,
        path: 'https://wa.me/message/QI6MZW6UZMNPA1'
    },
    {
        icon: <FaInstagram/>,
        path: 'https://www.instagram.com/_di_va__30/'
    },
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socMed.map((social, index)=>{
                return <Link href={social.path} target="_blank" key={index} className={iconStyles}>{social.icon}</Link>
            })
        }
    </div>
  )
}

export default Social