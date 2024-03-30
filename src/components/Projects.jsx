

import { projects } from '../data'
import Title from './Title'

const Projects = () => {
  return (
    <div className="py-20 align-element" id="projects">
      <Title title="projects" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map(({ id, img, text, title, url, github }) => (
          <div
            key={id}
            target="_blank"
            className="bg-white rounded-md shadow-md hover:shadow-xl duration-300"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-64 object-cover rounded-t-md"
            />
            <div className="my-6 px-4">
              <h2 className="capitalize text-lg font-semibold text-slate-800 tracking-wider">
                {title}
              </h2>
              <a
                href={url}
                target="_blank"
                className="text-slate-700 mt-4 block"
              >
                {url}
              </a>
              <a href={github} target="_blank" className="text-slate-700 block">
                {github}
              </a>
              <p className="mt-2 text-sm text-slate-600 ">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
