import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";


export default function Index({items=[], cards=[], collectors=[]}) {
  return <div className="container">
      <Header />
      <Featured items={items} />
      <Trending cards={cards} />
      <TopCollectors collectors={collectors.sort(function(a, b){return b-a}) } />
      <How />
      <Auctions cards={cards} />
      <Footer />
      <ProductInfoTitle />
  </div>


  ;
}
