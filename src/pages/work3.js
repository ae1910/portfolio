import '../css/App.css';
import nikshero from "../img/niksHero.jpg";
import topnewshero from "../img/topnewsHero.jpg";
import inflationhero from "../img/inflationHero.jpg";

import mainVideo from "../img/glassifyMain.mp4";
import MoreWork from "../components/morework"
import Work from "../components/work"

const Work3 = () => {
  return (
    <div>
      <div className='homepage-container'>
        <Work 
          title="glassify"
          hero="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
          description='Glassify was created as a resource for identifying and exploring vintage and antique glassware. A catalog for - as the name suggests - classifying glass pieces. While there are a few sites somewhat like this, this site provides a more modern, clean and user-friendly interface that allows for ease of browsing through collections of crowd-sourced entries. From the vibrant colors of Blenko glass to the classic elegance of Viking Glass pieces, it is a place for those seeking to identify vintage glass, for those wanting to expand their knowledge and/or for those who simply want to browse around and see what is out there.'
          show= "true"
          link1="https://swiss1.hunter.cuny.edu/students/dev4/build"
          link2="https://github.com/ae1910/topnews"
          video={mainVideo}/>
        <MoreWork 
        link1="/niks"
        img1={nikshero}
        title1="niks"
        link2="/topnews"
        img2={topnewshero}
        title2="topnews"
        link3="/inflation"
        img3={inflationhero}
        title3="what is inflation?"/>
      </div>
    </div>
  );
}

export default Work3;
