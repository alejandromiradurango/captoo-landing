import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white">
        <div className="container py-8">
            <div className="pt-12 flex justify-center gap-8">
                <a className="font-semibold uppercase" href="">Aviso legal</a>
                <a className="font-semibold uppercase" href="">Política de privacidad</a>
                <a className="font-semibold uppercase" href="">Política de cookies</a>
            </div>
            <hr className="py-px bg-white my-3" />
            <div className="pt-4 flex justify-between">
                <span>Copyright © 2022 Captto. Todos los derechos reservados.</span>
                <div className="flex items-center text-xl gap-2">
                    <BiLogoFacebook />
                    <BiLogoTwitter />
                    <BiLogoInstagram />
                    <BiLogoLinkedin />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer