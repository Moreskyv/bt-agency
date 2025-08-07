import './feedback.css';
import CardSwap, { Card } from './blocks/CardSwap/CardSwap.jsx';
import AnimatedContent from './AnimatedContent/AnimatedContent.jsx'

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
    <div>
        <div style={{ height: '1000px', position: 'relative', paddingTop: '500px' }}>
        <AnimatedContent
  distance={250}
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
  <div><div className='feedback-text'><p>Отзывы</p></div></div>
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
  <div> <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={false}
        >
            <Card>
            <h2>YouTube-канал «Мир кулинарии»</h2>
            <h3>Анна Ковалёва</h3>
            <p>"Обратились в это агентство по рекомендации, и не пожалели ни секунды! Монтаж нашего рекламного ролика был выполнен на высшем уровне. Видео получилось динамичным, стильным и полностью передало нашу идею. Спасибо за профессионализм и оперативность!</p>
            </Card>
            <Card>
            <h2>корпоративный канал компании «ТехноСфера» "</h2>
            <h3>Дмитрий Смирнов</h3>
            <p>"Работаю с этим агентством уже второй раз, и каждый раз поражаюсь их скорости и вниманию к деталям. Наше мероприятие требовало срочного монтажа видеоролика, и они справились всего за два дня! При этом качество не пострадало – всё было идеально выверено: от цветокоррекции до звукового сопровождения.</p>
            </Card>
            <Card>
            <h2>Instagram-блог «Fashion Life» "</h2>
            <h3>Екатерина Петрова</h3>
            <p>"Хочу выразить огромную благодарность за создание нашего промо-видео! Команда проявила невероятную креативность, предложив уникальные решения для нашей идеи. Мы даже не ожидали, что результат превзойдет все ожидания. Теперь наше видео стало настоящим хитом в социальных сетях!</p>
            </Card>
                <Card>
            <h2>YouTube-канал «Автопутешествия» "</h2>
            <h3>Алексей Морозов</h3>
            <p>"Очень довольны сотрудничеством! Ребята сразу поняли, чего мы хотим, и предложили несколько интересных вариантов монтажа. В процессе работы всегда были на связи, отвечали быстро и помогали с любыми правками. Итоговый ролик получился именно таким, как мы мечтали.</p>
            </Card>
                <Card>
            <h2>рекламный отдел компании «ЭкоЛайф» "</h2>
            <h3>Марина Сидорова</h3>
            <p>"Заказывали монтаж большого рекламного проекта с множеством эффектов и графики. Думали, что такой объем работы займёт много времени, но агентство справилось в срок и даже раньше! Все этапы были выполнены чётко, а результат превзошёл наши ожидания.</p>
            </Card>
        </CardSwap></div>
</AnimatedContent>
       
        </div>
    </div>
    </>

  )}

export default Landing