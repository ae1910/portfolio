import '../css/App.css';
import Work from "../components/work"
import mainVideo from "../img/topnewsMain.mp4";
import topnewshero from "../img/topnewsHero.jpg";
import nikshero from "../img/niksHero.jpg";
import inflationhero from "../img/inflationHero.jpg";
import fullScreen from "../img/generalShot.png";
import mobileVideo from "../img/topnewsMobile.mp4";
import mobileShot1 from "../img/topnewsMobileShot1.png";
import mobileShot2 from "../img/topnewsMobileShot2.png";
import MoreWork from "../components/morework"

const Work1 = () => {
  return (
    <div>
      <div className='homepage-container'>
        <Work 
          title="topnews"
          hero={topnewshero}
          description='topnews is a website that displays news from various U.S. news sources through the use of the News API. View the latest news headlines based on the category of your choosing from the categories available, such as sports, business or entertainment. If you are looking for something specific, search for what you are looking for using the search bar to easily go through the thousands of articles available.'
          show= "false"
          link1=""
          link2="https://github.com/ae1910/topnews"
          video={mainVideo}/>
        <img className='fullscreen' src={fullScreen} alt="Screenshot of General news category"/>
        <div className='fullscreen three-screen'>
          <div className="column">
            <img src={mobileShot1} alt='Screenshot of General news category on mobile'/>
          </div>
          <div className="column middle-video">
            <div className='phone-island'></div>
            <video autoPlay muted loop src={mobileVideo} alt='Video of site on mobile' type="video/mp4"/>
          </div>
          <div className="column">
            <img src={mobileShot2} alt='Screenshot of search results on mobile'/>
          </div>
        </div>
        <MoreWork 
        link1="/inflation"
        img1={inflationhero}
        title1="what is inflation?"
        link2="/glassify"
        img2="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
        title2="glassify"
        link3="/niks"
        img3={nikshero}
        title3="niks"/>
      </div>
    </div>
  );
}

export default Work1;
