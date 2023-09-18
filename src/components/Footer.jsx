import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi"

const Footer = () => {

  const socialLinks = [
    {
        icon: <BiLogoFacebook />,
        url: 'https://www.facebook.com/captto',
        title: 'Entrar al Facebook de Captto'
    },
    {
        icon: <BiLogoTwitter />,
        url: 'https://twitter.com/captto_es',
        title: 'Entrar al Twitter de Captto'
    },
    {
        icon: <BiLogoInstagram />,
        url: 'https://www.instagram.com/captto_es/',
        title: 'Entrar al Instagram de Captto'
    },
    {
        icon: <BiLogoLinkedin />,
        url: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG3uKYLfNYCGAAAAYRCtsiQ-moOh5kg7K9susUokwy7OF9Wy4gG7mIyRPna01tYnKi9TQS8h0KMqyZalmg7LudGKLkxZsDflbyggCiVNT3yc1pVNLZXgP-bl1XguMZxzprOzXg=&original_referer=https://captto.com/&sessionRedirect=httpswww.linkedin.comcompanycaptto',
        title: 'Entrar al LinkedIn de Captto'
    },
  ];

  return (
    <footer className="bg-violet-900 text-white">
        <div className="container py-8 px-6 lg:px-0">
            <div className="py-8 lg:py-0 lg:pt-12 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
                <a className="font-semibold uppercase" href="https://www.captto.com/aviso-legal/" target="_blank" rel="noreferrer">Aviso legal</a>
                <a className="font-semibold uppercase" href="https://www.captto.com/politica-privacidad/" target="_blank" rel="noreferrer">Política de privacidad</a>
                <a className="font-semibold uppercase" href="https://www.captto.com/politica-de-cookies/" target="_blank" rel="noreferrer">Política de cookies</a>
            </div>
            <hr className="py-px bg-white my-3" />
            <div className="pt-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
                <span className="text-center lg:text-start">Copyright © {new Date().getFullYear()} Captto. Todos los derechos reservados.</span>
                <div className="flex items-center text-2xl gap-2"> 
                    {socialLinks.map((social, index) => (
                        <a className="hover:brightness-75 transition-all duration-300" key={index} href={social.url} title={social.title}>
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer