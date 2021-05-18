
import React , { useEffect } from 'react';
import "./ScrollIndicatorBar.css";

const ScrollIndicatorBar = () => {

  
    useEffect(() => {
        const indicateScrollBar = (event) => {
            const ele = document.querySelector("#wrapper");
            const eleContainer = document.querySelector(".container");

            const winScroll = event.target.scrollTop;
            const height = ele.clientHeight - eleContainer.clientHeight;
            const scrolled = ((winScroll) / height) * 100;
            document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;     
            console.log(winScroll);      
        } 
        
        window.addEventListener("scroll", indicateScrollBar , true);

        return() => {
            window.removeEventListener("scroll", indicateScrollBar , true);
        }
    } , [])

    return (
        <div>
            <div className='scroll-bar-wrapper'> 
                <div className='scroll-bar'></div>
            </div>
            <main style={{width:"50% " , margin:"auto" , fontSize:"2em" }}  id="wrapper">
                <h1>Scroll bar indicator</h1>
                <p >scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
                <p>scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll</p>
            </main>
        </div>

    );
}

export default ScrollIndicatorBar;
