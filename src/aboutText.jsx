import './aboutText.css'
import SplitText from "./blocks/SplitText.jsx";

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div className='aboutText'>
        <div className='text' id='target'>
            <p>
            
            </p>
            <SplitText
          text="Мы создаем видео, которое увлекает, продает и вдохновляет. Все услуги — от идеи до готового контента — в режиме одного окна."
          className="font-semibold text-center"
          style={{
            fontSize: "70px", // Размер шрифта для первого текста
            display: "inline-block",
          }}
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </div>
      </div>
    </>
  );
};

export default Landing;
