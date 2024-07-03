'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Links = () => {

  const pathName = usePathname();

  const [pageDisplayed, setPageDisplayed] = useState( pathName );

  useEffect( () => {
    setPageDisplayed( pathName );
  }, [pathName] );




  return (
    <div className='hidden md:flex gap-6 text-xl'>
      <button >
        <Link href={ "/" } className={ pageDisplayed === "/" ? "border-b-4 border-pink-400  pb-2" : "" }>Shop</Link>
      </button>
      <button>
        <Link href={ "/men" } className={ pageDisplayed === "/men" ? "border-b-4 border-pink-400 pb-2" : "" }>Men</Link>
      </button>
      <button>
        <Link href={ "/women" } className={ pageDisplayed === "/women" ? "border-b-4 border-pink-400 pb-2" : "" }>Women</Link>
      </button>
      <button >
        <Link href={ "/kids" } className={ pageDisplayed === "/kids" ? "border-b-4 border-pink-400 pb-2" : "" }>Kids</Link>
      </button>
    </div>
  );
};

export default Links;