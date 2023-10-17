import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-monserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="http://"></a>Register
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hambuger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
