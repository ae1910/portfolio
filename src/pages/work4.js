import '../css/App.css';
import mainVideo from "../img/inflationMain.mp4";
import nikshero from "../img/niksHero.jpg";
import topnewshero from "../img/topnewsHero.jpg";
import inflationhero from "../img/inflationHero.jpg";
import fullScreen from "../img/InflationWireframe.png";
import MoreWork from "../components/morework"
import Work from "../components/work"

const Work4 = () => {
  return (
    <div>
      <div className='homepage-container'>
        <Work 
          title="what is inflation?"
          hero={inflationhero}
          description='Inflation affects all aspects of our economy, from what you buy, invest and earn to taxes and borrowing. That being said it is important to understand what it is.
          There are many articles, videos and more out there for people to learn about inflation. However, because there is so much information on it, it can feel overwhelming. On top of that the information is expressed in a way that it makes it complicated and wordy. Overall, it makes it hard for someone to understand what inflation is.
          This site was created to be able to explain what inflation is in a simpler way that gets to the point. As well as being able to demonstrate the information in a more visual way so visitors of the site can get a better grasp of the information than just through the use of words.
          '
          show= "true"
          link1="https://ae1910.github.io/inflation/"
          link2="https://github.com/ae1910/inflation"
          video={mainVideo}/>
        <img className='fullscreen' src={fullScreen} alt="Wireframe of site"/>
        <MoreWork 
        link1="/glassify"
        img1="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
        title1="glassify"
        link2="/niks"
        img2={nikshero}
        title2="niks"
        link3="/topnews"
        img3={topnewshero}
        title3="topnews"/>
      </div>
    </div>
  );
}

export default Work4;
