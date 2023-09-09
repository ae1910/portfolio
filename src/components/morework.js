import '../css/App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from 'gsap/all';

const MoreWork = (props) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(".marquee-part", 5, {
          scrollTrigger: {
            trigger: ".marquee-part",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          x: -250,
        });
    }, [])

    return (
        <div>
            <div className='marquee'>
                <div className='marquee-group'>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                </div>
                <div className='marquee-group'>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                    <p className='marquee-part'>more work</p>
                </div>
            </div>
            <div className="work-container">
                <MoreWorkCard 
                link={props.link1}
                image={props.img1}
                title={props.title1}/>
                <MoreWorkCard
                link={props.link2}
                image={props.img2}
                title={props.title2}/>
                <MoreWorkCard
                link={props.link3}
                image={props.img3}
                title={props.title3}/>
            </div>
        </div>
    );
};

const MoreWorkCard = (props) => {
    return (
        <Link className="work-card" to={props.link} onClick={() => {
            window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
            });}}>
            <div className="image">
                <img src={props.image} alt=""/>
            </div>
            <p className="work-title">{props.title}</p>
        </Link>
    )
}

export default MoreWork;