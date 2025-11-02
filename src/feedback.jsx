import './feedback.css';
import SplitText from "./blocks/SplitText.jsx";
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Feedback = () => {
  const feedbacks = [
    {
      avatar: "https://optim.tildacdn.com/tild6230-3638-4032-b261-366165633036/-/cover/120x120/center/center/-/format/webp/__2024-09-28__164519.png.webp",
      text: "У меня нет правок, я считаю, что это шедевр российского кинематографа. Монтаж гениален, все вставки, все песни - все все все, сердечно вас благодарю девочки, видно, что вы очень постарались и результат меня очень радует, это очень круто!",
      author: "Юлия Шакалидка",
      channel: 'Ведущая подкаста "Я так чувствую"',
    },
    {
      avatar: "https://optim.tildacdn.com/tild3534-3931-4630-a231-353236663766/-/cover/120x120/center/center/-/format/webp/__2024-09-28__163949.png.webp",
      text: "Невероятные профессионалы в своей сфере с широким диапазоном услуг! В короткие сроки выполнили свои задачи, всегда на связи (даже в выходные!), внесли быстро большое количество правок, всегда дорабатывали до идеального результата!",
      author: "Елена",
      channel: 'Проектный менеджер блогера @arkusha.a',
    },
    {
      avatar: "https://optim.tildacdn.com/tild6639-3766-4336-b236-396638663365/-/cover/120x120/center/center/-/format/webp/__2024-09-28__164649.png.webp",
      text: "Со стороны вижу, как наши горизонтальные и вертикальные ролики становятся все круче и круче благодаря вам!",
      author: "Анна Кузьмина",
      channel: 'Маркетолог канала "Андрей Невский про похудение"',
    },
    {
      avatar: "https://optim.tildacdn.com/tild3862-6365-4734-b536-656333346230/-/cover/120x120/center/center/-/format/webp/__2024-09-28__165042.png.webp",
      text: "Наконец-то нашел крутых монтажеров, это уже моя 4 или 5 попытка найти именно такой монтаж!",
      author: "Андрей Спайси",
      channel: 'Ведущий канала "Бизнес в США"',
    }
  ];

  return (
    <div className='feedback-container'>
      <div className='feedback-screen'>
        <div className='feedback-text-box'>
          <SplitText
            text="Отзывы"
            className="feedback-title"
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
        </div>

        <div className='feedback-items-box'>
          <div className="grid-container">
            {feedbacks.map((item, index) => (
              <AnimatedContent
                key={index}
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
                <div className="grid-item">
                  <div className='grid-avatar'>
                    <div className='avatar-box'>
                      <img src={item.avatar} alt="avatar" className='avatar-feedback' />
                    </div>
                  </div>
                  <div className='grid-text-box'>
                    <div className='grid-feedback'>{item.text}</div>
                    <div className='grid-author'>{item.author}</div>
                    <div className='grid-channel'>{item.channel}</div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
