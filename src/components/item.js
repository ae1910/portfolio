import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import githubLogo from "../img/github-mark.svg";
import newWindowIcon from "../img/new-window.svg";


const Item = (props) => {
    const [isLink, setIsLink] = useState(false);

    useEffect(() => {
        if(props.show == "true") {
            setIsLink(true);
        }
    }, [])
    return (
        <>
            <div className='work-item'>
                <Link className='item-img' to={props.link} onClick={() => {
                    window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    });}}>
                    <img src={props.image}/>
                </Link>
                <div className='item-info'>
                    <div>
                        <h2 className='item-title'>{props.title}</h2>
                        <p className='item-description'>{props.description}</p>
                    </div>
                    {isLink ?
                    <div className="links">
                        <a className="link" href={props.link1} target="_blank"><img src={newWindowIcon}/> view website</a>
                        <a className="link" href={props.link2} target="_blank"><img src={githubLogo}/> github</a>
                    </div>
                    : <div className="links">
                        <a className="link" href={props.link2} target="_blank"><img src={githubLogo}/> github</a>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Item;