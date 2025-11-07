
import ProfileCard from './blocks/ProfileCard/ProfileCard.jsx'
import avatar from './avatar5.png';
import './card1.css';
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx'

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
    <div className='blank'>
      <AnimatedContent
  distance={-450}
  direction="horizontal"
  reverse={false}
  duration={1}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0}
  delay={0}
>
  <div>    <div className='container'>
    <ProfileCard
  name="Туманский Саид"
  title="Сооснователь агенства"
  handle="Krosset"
  status="Online"
  contactText="Написать"
  avatarUrl={avatar}
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => open('/https://t.me/Krosset')}
/>
    </div></div>
</AnimatedContent>

     <AnimatedContent
  distance={450}
  direction="horizontal"
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
     <div className='text-boxx'>
        <p className='text'>
          Минимум с вашей стороны — максимум с нашей.
Всё, что нам нужно — это исходные материалы и задача.
Дальше мы берём всё в свои руки:
от разработки идеи и отбора контента до монтажа и финальных правок.

В результате вы получаете готовый к публикации материал, без лишней суеты.</p></div>  
  </div>
</AnimatedContent>

    </div>

    </>
      );
};

export default Landing;