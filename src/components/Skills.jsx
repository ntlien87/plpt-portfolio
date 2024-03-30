import { skills } from '../data'
import Title from './Title'

const Skills = () => {
  return (
    <div className="py-20 align-element " id="skills">
      <Title title="Tech Stack" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ id, title, Icon, text }) => (
          <div key={id} className="flex flex-col gap-y-4 items-center justify-center bg-white p-4 rounded-md shadow-md">
            <Icon className="h-16 w-1/6 text-emerald-600" />
            <h4 className='text-lg font-semibold text-slate-800 tracking-wider'>{title}</h4>
            <p className='text-center text-slate-700 tracking-wide'>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Skills
