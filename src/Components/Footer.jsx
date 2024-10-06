import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <img width={400} src="../src/assets/logo.png" alt="myLogo" className="my-20" />
            </div>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a href={link.href} key={index} target="_blank"
                    rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy; Copy rights 2024 - Mohamed Wadie REZGUI
            </p>
        </div>
    )
}

export default Footer