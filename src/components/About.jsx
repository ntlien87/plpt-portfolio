import Title from './Title'
import aboutImg from '../assets/about.svg'

const About = () => {
  return (
    <div className="py-20  bg-white" id='about'>
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about image" className="w-full h-64" />
        <div>
          <Title title={'code and coffee'} />
          <p className='text-slate-700 mt-8 leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error accusamus iusto ducimus dolorem amet ut rerum omnis sapiente ipsum facere officiis perferendis commodi numquam deserunt, mollitia quod harum fugit odit!</p>
        </div>
      </div>
    </div>
  )
}
export default About
