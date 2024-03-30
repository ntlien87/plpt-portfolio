import { links } from '../data'

const Navbar = () => {
  return (
    <nav className="bg-emerald-100" id="home">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-3 sm:gap-x-16  p-8 sm:items-center">
        <a href="#" className="text-slate-800 font-bold text-3xl ">
          Web<span className="text-emerald-600 tracking-widest">Dev</span>
        </a>
        <div className="flex items-center gap-x-4 capitalize text-slate-800 font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-emerald-600 duration-300 sm:text-lg tracking-wide"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
