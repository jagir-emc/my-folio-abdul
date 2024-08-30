import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram} from "react-icons/fa"

const socMed = [
    {
        icon: <FaGithub/>,
        path: '/'
    },
    {
        icon: <FaLinkedinIn/>,
        path: '/'
    },
    {
        icon: <FaWhatsapp/>,
        path: '/'
    },
    {
        icon: <FaInstagram/>,
        path: '/'
    },
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socMed.map((social, index)=>{
                return <Link href={social.path} key={index} className={iconStyles}>{social.icon}</Link>
            })
        }
    </div>
  )
}

export default Social