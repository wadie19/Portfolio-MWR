import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";
const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <motion.img 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
                width={400} src={logo} alt="myLogo" className="my-20" />
            </div>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.2, delay: index * 0.5}}
                    href={link.href} key={index} target="_blank"
                    rel="noopener noreferrer">
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            <p 
                className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy; Copy rights 2024 - Mohamed Wadie REZGUI
            </p>
        </div>
    )
}

export default Footer