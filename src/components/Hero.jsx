/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24" >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-7xl font-bold tracking-wider text-slate-800">
            I'm Phuong
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning Ideas to interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
            <a href="#">
              <FaFacebookSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
            </a>
          </div>
        </div>
        <div className="hidden md:inline-block ">
          <img src={heroImg} alt="hero image" className="h-80 lg:h-96" />
        </div>
      </div>
    </section>
  )
}
export default Hero
