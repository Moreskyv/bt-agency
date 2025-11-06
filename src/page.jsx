import './page.css'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#090215',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}
      >
        Создаём <span  className="page-main-text" style={{ color: '#4B2EFF'}}>кинематографию</span> вместе с <br />B&T Agency
      </h2>

      <p
        style={{
          color: '#9ca3af',
          maxWidth: '500px',
          marginBottom: '2.5rem',
          fontSize: '1rem',
          fontFamily: 'lato',
        }}
      >
        Мы создаём визуальные истории и видеомонтажи, которые выделяют ваш бренд и заставляют его запомниться.
      </p>

      <a
        href="https://t.me/egorbchv"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          backgroundColor: '#4B2EFF',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '1rem',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0 8px 25px rgba(75,46,255,0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(75,46,255,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(75,46,255,0.4)';
        }}
      >
        💬 Связаться в Telegram
      </a>

      <div
        style={{
          marginTop: '3rem',
          fontSize: '0.9rem',
          color: '#6b7280'
        }}
      >
        © {new Date().getFullYear()} B&T Agency — Все права защищены.
      </div>
    </footer>
  );
}
