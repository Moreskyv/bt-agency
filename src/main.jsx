import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Aurora from './blocks/Aurora.jsx';
import './font.css';
import Landing from './Landing.jsx';
import About from './aboutText.jsx';
import CircularText from './blocks/CircularText';
import Services from  './services.jsx'
import ProfileCard from './blocks/ProfileCard/ProfileCard.jsx'
import avatar from './avatar1.png';
import avatarr from './avatar2.png';
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx';
import Card1 from './card1.jsx';
import ScrollVelocity from './blocks/ScrollVelocity.jsx';
import Cost from './cost.jsx';
import Feedback from './feedback.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Aurora
      colorStops={["#CDF7F6", "#8FB8DE", "#9A94BC"]}
      blend={1}
      amplitude={1.0}
      speed={0.5}
    />

    <Landing>
    </Landing>
    <About>
    </About>

    <CircularText
  text="B&T agency*B&T agency*B&T agency*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
  <div><Services></Services></div>
<ScrollVelocity
  texts={['B&T Agency', 'Make your happy']} 
  velocity={100} 
  className="custom-scroll-text"
/>

<Card1></Card1>

<AnimatedContent
  distance={450}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0}
  delay={0}
>
  <div><Cost></Cost></div>
</AnimatedContent>
<Feedback></Feedback>



  </StrictMode>
);