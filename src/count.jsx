import CountUp from './CountUp.jsx'
import './countUp.css'
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx'

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
     <div className='count-text-box'>


<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0.2}
  delay={0}
>
  <div>
    <p><CountUp
  from={0}
  to={50}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"/>+ <br /> реализованных проектов</p>

  </div>
</AnimatedContent>

     </div>
    </>
  );
};

export default Landing;
