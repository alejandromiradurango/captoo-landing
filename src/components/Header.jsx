import { logo } from "../assets"

const Header = () => {
  return (
    <header className="container py-4 lg:py-8 flex justify-center lg:justify-normal">
        <img className="w-36 lg:w-auto" src={logo} alt="Logo Captto" />
    </header>
  )
}

export default Header