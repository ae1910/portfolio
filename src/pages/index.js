import '../css/App.css';
import { useEffect } from 'react';
import Item from "../components/item";
import topnewshero from "../img/topnewsHero.png";
import nikshero from "../img/niksHero.jpg";
import inflationhero from "../img/inflationHero.jpg";
import petsHero from "../img/runningpets.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  function startLoader() {
    document.body.style.overflow = 'hidden';
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
      if(currentValue === 100) {
        return;
      }
      if (currentValue < 100) {
        currentValue += Math.floor(Math.random() * 10) + 1;
      }
      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue;

      let delay = Math.floor(Math.random() * 185) + 50;
      if(currentValue < 100) {
        setTimeout(updateCounter, delay);
      }
    }
    updateCounter();
  }

  useEffect(() => {
    startLoader();
    
    gsap.to(".percent", 0.25,  {
        delay: 3.5,
        opacity: 0
    });
    gsap.to(".bar", 1.5,  {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5,
        },
        ease: "power4.inOut",
        onComplete: () => {
          document.body.style.overflowY = "auto";
          document.querySelector(".loader-overlay").style.display = "none";
        }
    });

    
    gsap.to(".welcome, .about", 3, {
      scrollTrigger: {
        scrub: true
      },
      y: -150,
    });
    gsap.fromTo(".welcome h1, .intro", 1.5,
      {opacity: 0,
      yPercent: 75,},
      {opacity: 1,
      yPercent: 0,
      ease: "power2.out",
      stagger: 0.1}
    );
    gsap.fromTo(".about p", 3,
      {opacity: 0,
      yPercent: 80},
      {opacity: 1,
      yPercent: 0,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".about",
        start: "top 95%",
        toggleActions: "restart none none none"
      }}
    );
    gsap.to(".shadow", 3, {
      scrollTrigger: {
        scrub: true
      },
      y: -75
    });
}, [])


  return (
    <div>
      <div className="loader-overlay">
        <h1 className='percent'><span className="counter">0</span>%</h1>
        <div className="bar"></div>
      </div>
      <div className='intro-container'>
        <h1 className='hey'>Hey Hey!</h1>
        <div className='welcome'>
          <h1>Welcome to my</h1>
          <h1>show & tell</h1>
          <p className='intro'>Hey hey! My name is Ana Edwards and I am a Web Designer, Web Developer and Software Engineer from New York.</p>
        </div>
      </div>
      <div className='about'>
        <p>Every since I was little, I loved creating. It could have been drawing, crafting, building or sewing, it didn't matter I was eager to do them all. Designing websites and bringing them to life, just adds on to that list. My passion for creating is what motivates me.</p>
      </div>
      <div className='works-container'>
        <div className='titles-container'>
          <div className='works-title'>
            <h1>Some of my</h1>
            <h1>works</h1>
          </div>
          <div className='works-title shadow'>
            <h1>Some of my</h1>
            <h1>works</h1>
          </div>
        </div>
        <div className='works-list'>
          <Item 
              link="/pet-gallery"
              title="pawfectly captured"
              image={petsHero}
              description='A platform where pet lovers can discover images that capture the essence of some of our furry friends.'
              show= "true"
              link1="https://ae1910.github.io/pawfully-captured"
              link2="https://github.com/ae1910/pawfully-captured"/>
          <Item 
            link="/topnews"
            title="topnews"
            image={topnewshero}
            description='A news website for browsing news from various sources built with Javascript and the News API.'
            show= "true"
            link1="https://topnews-s6va.onrender.com/"
            link2="https://github.com/ae1910/topnews"/> 
          <Item 
            link="/inflation"
            title="what is inflation?"
            image={inflationhero}
            description='A responsive website informing users on what inflation is in a more simple and visual way.'
            show= "true"
            link1="https://ae1910.github.io/inflation/"
            link2="https://github.com/ae1910/inflation"/>
          <Item 
            link="/glassify"
            title="glassify"
            image="https://www.nonamehiding.com/wp-content/uploads/2022/05/Color.jpg"
            description='A crowd-sourced website for identifying and exploring vintage and antique glassware.'
            show= "true"
            link1="https://swiss1.hunter.cuny.edu/students/dev4/build"
            link2="https://github.com/ae1910/topnews"/>
          <Item 
            link="/niks"
            title="niks"
            image={nikshero}
            description='A group project of an informative site about skincare for people for people that are new and wish to learn more about skincare. Main role was to oversee and work on the front-end of the site, making sure all the pages that were needed, were included, cohesive, and responsive.'
            show= "false"
            link1=""
            link2="https://github.com/ae1910/niks"/>
        </div>
      </div>
    </div>
  );
}

export default Home;