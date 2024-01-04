import '../css/App.css';
import nikshero from "../img/niksHero.jpg";
import topnewshero from "../img/topnewsHero.png";
import inflationhero from "../img/inflationHero.jpg";
import shot1 from "../img/niksShot1.png";
import shot2 from "../img/niksShot2.png";
import mainVideo from "../img/niksMain.mp4";
import niksVideo from "../img/niksVideo.mp4";
import MoreWork from "../components/morework"
import Work from "../components/work"

const Work2 = () => {
  return (
    <div>
      <div className='homepage-container'>
        <Work 
          title="niks"
          hero={nikshero}
          description='With so many products on the market, it can be difficult to figure out what skincare products will work for you. Choosing skincare is an overwhelming task and this site would simplify the process by allowing users to see what products work within their routine, as it also includes a quiz that could help products based on your skin type and concern. NIKS offers a clear and concise information about skincare for people that are new or wish to learn more about skincare all in one place. Everybody has different skin types and concerns and deserves access to the information they need to achieve their skin goals.
          '
          show= "false"
          link1=""
          link2="https://github.com/ae1910/niks"
          video={mainVideo}/>
          <div className='fullscreen two-screen'>
            <div className="column">
              <img src={shot1} alt='Screenshot of General news category on mobile'/>
            </div>
            <div className="column">
              <img src={shot2} alt='Screenshot of search results on mobile'/>
            </div>
          </div>
          <div className="fullscreen">
            <video autoPlay muted loop src={niksVideo} type="video/mp4"/>
          </div>
        <MoreWork 
        link1="/topnews"
        img1={topnewshero}
        title1="topnews"
        link2="/glassify"
        img2="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
        title2="glassify"
        link3="/inflation"
        img3={inflationhero}
        title3="what is inflation?"/>
      </div>
    </div>
  );
}

export default Work2;
