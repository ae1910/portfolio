import githubLogo from "../img/github-mark.svg";
import newWindowIcon from "../img/new-window.svg";
import { useState, useEffect } from "react";
import { gsap, ScrollTrigger } from 'gsap/all';

const Work = (props) => {
    const [isLink, setIsLink] = useState(false);

    useEffect(() => {
        if(props.show == "true") {
            setIsLink(true);
        }

        gsap.registerPlugin(ScrollTrigger);
    
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