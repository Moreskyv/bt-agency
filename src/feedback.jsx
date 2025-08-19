import './feedback.css'
import SplitText from "./blocks/SplitText.jsx";
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx'


  

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const feedback = () => {
    console.log('All element has been animated');   


return (
    <>
    <div className='feedback-container'>
        <div className='feedback-screen'>
            <div className='feedback-text-box'>
                <p className='feedback-text'>
                    <SplitText
  text="Отзывы"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.3}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
                </p>
            </div>
            <div className='feedback-items-box'>
                <div class="grid-container">
                <AnimatedContent
  distance={150}
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
                    <div class="grid-item">
                        <div className='grid-avatar'>
                            <div className='avatar-box'>
                                <img src="https://optim.tildacdn.com/tild6230-3638-4032-b261-366165633036/-/cover/120x120/center/center/-/format/webp/__2024-09-28__164519.png.webp" alt="avatar" className='avatar-feedback' />
                            </div>
                        </div>
                        <div className='grid-text-box'>
                            <div className='grid-feedback f1'><p>У меня нет правок, я считаю, что это шедевр российского кинематографа. Монтаж гениален, все вставки, все песни - все все все, сердечно вас благодарю девочки, видно, что вы очень постарались и результат меня очень радует, это очень круто!</p></div>
                            <div className='grid-author'>Юлия Шакалидка</div>
                            <div className='grid-channel'>Ведущая подкаста "Я так чувствую"</div>
                        </div>
                    </div>
                    </AnimatedContent>
                    <AnimatedContent
  distance={150}
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
                    <div class="grid-item">
                        <div className='grid-avatar'>
                            <div className='avatar-box'><img src="https://optim.tildacdn.com/tild3534-3931-4630-a231-353236663766/-/cover/120x120/center/center/-/format/webp/__2024-09-28__163949.png.webp" alt="avatar" className='avatar-feedback' /></div>
                        </div>
                        <div className='grid-text-box'>
                            <div className='grid-feedback f2'>Невероятные профессионалы в своей сфере с широким диапазоном услуг! В короткие сроки выполнили свои задачи, всегда на связи (даже в выходные!), внесли быстро большое количество правок, всегда дорабатывали до идеального результата!</div>
                            <div className='grid-author'>Елена</div>
                            <div className='grid-channel'>Проектный менеджер блогера @arkusha.a</div>
                        </div>
                    </div>
                    </AnimatedContent>
                    <AnimatedContent
  distance={150}
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
                    <div class="grid-item">
                        <div className='grid-avatar'>
                            <div className='avatar-box'><div className='avatar-box'><img src="https://optim.tildacdn.com/tild6639-3766-4336-b236-396638663365/-/cover/120x120/center/center/-/format/webp/__2024-09-28__164649.png.webp" alt="avatar" className='avatar-feedback' /></div></div>
                        </div>
                        <div className='grid-text-box'>
                            <div className='grid-feedback f3'>Со стороны вижу, как наши горизонтальные и вертикальные ролики становятся все круче и круче благодаря вам!
</div>
                            <div className='grid-author'>Анна Кузьмина</div>
                            <div className='grid-channel'>Маркетолог канала "Андрей Невский про похудение"</div>
                        </div>
                    </div>
                    </AnimatedContent>
                    <AnimatedContent
  distance={150}
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
                    <div class="grid-item">
                        <div className='grid-avatar'>
                            <div className='avatar-box'><div className='avatar-box'><img src="https://optim.tildacdn.com/tild3862-6365-4734-b536-656333346230/-/cover/120x120/center/center/-/format/webp/__2024-09-28__165042.png.webp" alt="avatar" className='avatar-feedback' /></div></div>
                        </div>
                        <div className='grid-text-box'>
                            <div className='grid-feedback f4'>Наконец-то нашел крутых монтажеров, это уже моя 4 или 5 попытка найти именно такой монтаж!</div>
                            <div className='grid-author'>Андрей Спайси</div>
                            <div className='grid-channel'>Ведущий канала "Бизнес в США"</div>
                        </div>
                    </div>
                    </AnimatedContent>
            </div>
            </div>
        </div>
    </div>
    </>
)};

export default feedback