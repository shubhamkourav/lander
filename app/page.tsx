import Banner from '@components/Home/Banner';
import Brands from '@components/Home/Brands';
import FAQ from '@components/Home/FAQ';
import Features from '@components/Home/Features';
import Pricing from '@components/Home/Pricing';
import Recommendation from '@components/Home/Recommendation';
import Subscription from '@components/Home/Subscription';
import Trusted from '@components/Home/Trusted';
export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <Features />
      <Trusted />
      <Recommendation />
      <Pricing />
      <FAQ />
      <Subscription />
    </>
  );
}
