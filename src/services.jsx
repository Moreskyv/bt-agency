import './services.css';
import FlowingMenu from './blocks/FlowingMenu/FlowingMenu.jsx';
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx';

const Services = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const demoItems = [
  { link: '#', text: 'Видео для YouTube'},
  { link: '#', text: 'Reels/ shorts/ tiktok'},
  { link: '#', text: 'Подкасты'},
  { link: '#', text: 'Онлайн курсы'},
  { link: '#', text: 'Заставки/ перебивки'}
];

return (
    <>
    <div className='Services'>
        <div className='text-box'>
          <AnimatedContent
  distance={450}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0}
  delay={0}
>
  <div><p className='Main-text'>Наши услуги:</p></div>
</AnimatedContent>
          <AnimatedContent
  distance={-450}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0}
  delay={0}
>
  <div><p className='Second-text'>Профессиональный монтаж видео для любых форматов и каналов.</p></div>
</AnimatedContent>
            </div>
<AnimatedContent
  distance={350}
  direction="vertical"
  reverse={false}
  duration={1}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0}
  delay={0}
>
  <div>
    <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
</div>
</AnimatedContent>

    </div>
    </>
);
};

export default Services;