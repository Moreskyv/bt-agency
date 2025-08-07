import './Landing.css';
import SplitText from "./blocks/SplitText.jsx";
import BlurText from "./blocks/BlurText.jsx";

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div className='landing'>
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
            
    </>
  );
};

export default Landing;