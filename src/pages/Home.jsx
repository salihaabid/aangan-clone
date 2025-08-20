import BestSeller from '../ui/BestSeller';
import DealsCombos from '../ui/DealsCombos';
import FeatureBanner from '../ui/FeatureBanner';
import Header from '../ui/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <BestSeller />
      <DealsCombos />
      <FeatureBanner />
    </div>
  );
}
