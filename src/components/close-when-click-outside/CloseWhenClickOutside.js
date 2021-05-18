
import { useEffect, useRef, useState } from 'react';

function CloseWhenClickOutside() {
    const outside = useRef();
    const [isOpen , setIsOpen] = useState(false);

    const handleClickOutside = (event) => {
        if(!outside?.current){
            return;
        }
        
        if(outside.current.contains(event.target)){
            return;
        }

        setIsOpen(false);
    }

    useEffect(() =>{
        document.addEventListener("click" , handleClickOutside);

        return () =>{
            document.removeEventListener("click" , handleClickOutside);
        }
    },[])

    return (
        <div className="wrapper" ref={outside}>
            <button onClick={() => setIsOpen(prev => !prev)}>
                Toggle modal
            </button>

            {
                isOpen && (
                    <div>Hello world</div>
                )
            }
        </div>
    );
}

export default CloseWhenClickOutside;
