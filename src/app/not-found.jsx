import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      backgroundColor: '#fff8f0',
      color: '#d8860c',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#444' }}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
    <Link href="/" style={{
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#d8860c',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
        Go Home
      </Link>
    </div>
  );
}
