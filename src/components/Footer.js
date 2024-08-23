//import Image from 'next/image'
//import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-white text-black p-2'>
      <div className='copyright font-size-8 text-center'>
        &copy;dig1t {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
