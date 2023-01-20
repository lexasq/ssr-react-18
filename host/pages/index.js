// host/pages/index.js
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('remote/Nav'), { ssr: false });

export default function HomePage() {
  return (
      <div>
        This is my ssr host
        <Nav />
      </div>
  );
}