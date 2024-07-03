'use client';
import BannerExclusive from '@/components/homepage/BannerExclusive';
import BannerNewCollections from '@/components/homepage/BannerNewCollections';
import BannerSubscribe from '@/components/homepage/BannerSubscribe';
import NewCollection from '@/components/homepage/NewCollection';
import WomenPopular from '@/components/homepage/WomenPopular';
import { useSelector } from 'react-redux';

export default function Home() {

  const { sidebarIsOpen } = useSelector( state => state.shopSlice );

  return (
    <main className={ sidebarIsOpen ? "h-[90vh] overflow-hidden" : "" }>
      <BannerNewCollections />
      <WomenPopular />
      <BannerExclusive />
      <NewCollection />
      <BannerSubscribe />
    </main>
  );
}
