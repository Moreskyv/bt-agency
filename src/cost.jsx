import './cost.css'

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
    <div className='cost-main-container'>
        <div className='cost-container'>
            <div className='cost-content-box'>
                <div className='cost-text-box'>
                    <div className='cost-main-text'>
                        <p>Хотите узнать стоимость вашего видео?</p>
                    </div>
                    <div className='cost-second-text'>
                        <p>Нажмите на кнопку ниже, и мы свяжемся с вами в Telegram для уточнения деталей!</p>
                    </div>
                </div>
                <div className='cost-button-box'>
                    <a href="https://t.me/bntagency" target='_blank' rel='noopener norefferer'><button className='telegram' type='button'>
      <svg
        style={{ fill: '#FFFFFF' }}
        className="telegram-svg"
        viewBox="0,0,256,256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{
            mixBlendMode: 'normal',
            textAnchor: 'none',
            fontSize: 'none',
            fontWeight: 'none',
            fontFamily: 'none',
            strokeDashoffset: '0',
            strokeDasharray: '',
            strokeMiterlimit: '10',
            strokeLinejoin: 'miter',
            strokeLinecap: 'butt',
            strokeWidth: '1',
            stroke: 'none',
            fillRule: 'nonzero',
            fill: '#ffffff',
          }}
        >
          <g transform="scale(5.12,5.12)">
            <path
              d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"
            />
          </g>
        </g>
      </svg>
      <span className="telegram-text">Telegram</span>
    </button>
    </a>
                </div>
            </div>
        </div>

    </div>
    </>

  )}

export default Landing