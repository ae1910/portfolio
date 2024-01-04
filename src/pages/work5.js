import '../css/App.css';
import mainVideo from "../img/inflationMain.mp4";
import petsHero from "../img/runningpets.png";
import topnewshero from "../img/topnewsHero.png";
import inflationhero from "../img/inflationHero.jpg";
import MoreWork from "../components/morework"
import Work from "../components/work"

const Work4 = () => {
  return (
    <div>
      <div className='homepage-container'>
        <Work 
          title="pawfectly captured"
          hero={petsHero}
          description='A platform where pet lovers can discover images that capture the essence of some of our furry friends. It offer a variety of pet photos to suit every taste and style.'
          show= "true"
          link1="https://ae1910.github.io/pawfully-captured"
          link2="https://github.com/ae1910/pawfully-captured"/>
        <MoreWork 
        link1="/glassify"
        img1="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
        title1="glassify"
        link2="/inflation"
        img2={inflationhero}
        title2="what is inflation?"
        link3="/topnews"
        img3={topnewshero}
        title3="topnews"/>
      </div>
    </div>
  );
}

export default Work4;
