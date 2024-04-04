import React from 'react';

function Footer() {
  return (
    <footer className='bg-black text-grey-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div>
          <h1 className="mt-20 md:mt-0 text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">About MusicHub</h1>
<div className='pt-3 text-slate-300'>          <p>Explore the world of music with MusicHub. Discover new artists, genres, and tracks to enhance your musical journey.</p>
</div>        </div>
        <div>
          <h1 className="mt-20 md:mt-0 text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">Genres</h1>
          <div className='pt-3 text-slate-300'> 
          <ul>
            <li>Rock</li>
            <li>Pop</li>
            <li>Hip Hop</li>
            <li>Electronic</li>
          </ul>
          </div>
        </div>
        <div>
          <h1 className="mt-20 md:mt-0 text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">Connect with Us</h1>
          <div className='pt-3 text-slate-300'> 
          <ul>
            <li>Join our community</li>
            <li>Follow us on Spotify</li>
            <li>Subscribe to our newsletter</li>
            <li>Attend live events</li>
          </ul>
          </div>
        </div>
        <div>
          <h1 className="mt-20 md:mt-0 text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">Contact MusicHub</h1>
          <div className='pt-3 text-slate-300'> 
          <p>Email: info@musichub.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Music Street, Melodyville, Musicland</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} MusicHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
