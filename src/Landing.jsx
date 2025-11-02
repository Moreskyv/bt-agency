import './Landing.css';
import SplitText from "./blocks/SplitText.jsx";
import BlurText from "./blocks/BlurText.jsx";
import FadeContent from './blocks/FadeContent.jsx'

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleScroll = () => {
    document.getElementById("target")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <div className='landing'>
        <div className='text-box'>
          <SplitText
            text="Комплексный монтаж"
            className="font-semibold text-center"
            style={{
              fontSize: "70px", // Размер шрифта для первого текста
              display: "inline-block",
            }}
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <BlurText
            text="B&T Agency"
            className="font-semibold text-center"
            style={{
              fontSize: "20px", // Размер шрифта для второго текста (меньше)
              display: "inline-block",
            }}
            delay={750}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />

        </div>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='button-box'>
          <a href="https://t.me/egorbchv" target='_blank' rel='noopener norefferer'><button className='sale-box' type='button'>Заказать</button></a>
          <button className='about-box' onClick={handleScroll} type='button'>Узнать больше</button>
        </div>
        </FadeContent>
      </div>
            
    </>
  );
};

export default Landing;