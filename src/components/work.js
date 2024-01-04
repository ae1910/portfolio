import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import newWindowIcon from "../img/new-window.svg";
import githubLogo from "../img/github-mark.svg";

gsap.registerPlugin(ScrollTrigger);

const Work = (props) => {
    console.log(props.link2)
    const [isLink, setIsLink] = useState(false);

    useEffect(() => {
        if(props.link1 !== "") {
            setIsLink(true);
        }
    
        gsap.to(".article-title.shadow", 2, {
          scrollTrigger: {
            scrub: true
          },
          y: -300
        });
    
    }, [])

    return (
        <>
            <main id="main-container">
                <div className="title-container">
                    <h1 className="article-title">{props.title}</h1>
                    <h1 className="article-title shadow">{props.title}</h1>
                </div>
                <div className="reveal">
                    <img src={props.hero}/>
                </div>
                <div className="article-container">
                    <div className="article-main">
                    <div className='description'>
                        <p>{props.description}</p>
                        {isLink ?
                        <div className="links">
                            <a className="link" href={props.link1} target="_blank"><img src={newWindowIcon}/> view website</a>
                            <a className="link" href={props.link2} target="_blank"><img src={githubLogo}/> github</a>
                        </div>
                        : <div className="links">
                            <a className="link" href={props.link2} target="_blank"><img src={githubLogo}/> github</a>
                        </div>}
                    </div>
                    <div className="video">
                        <video autoPlay muted loop src={props.video} type="video/mp4"/>
                    </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Work;