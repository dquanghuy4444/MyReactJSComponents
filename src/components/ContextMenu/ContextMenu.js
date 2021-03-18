import React , { useEffect } from 'react';
import "./ContextMenu.css";

function ContextMenu() { 
    useEffect(() => {
        function hideMenu() { 
            if(document.getElementById("contextMenu")){
                document.getElementById("contextMenu") 
                .style.display = "none" 
            }

        } 

        function rightClick(e) { 
            e.preventDefault(); 

            if (document.getElementById("contextMenu").style.display === "block"){ 
                hideMenu(); 
            }else{ 
                var menu = document.getElementById("contextMenu")      
                menu.style.display = 'block'; 
                menu.style.left = e.pageX + "px"; 
                menu.style.top = e.pageY + "px"; 
            } 
        } 

        document.onclick = hideMenu; 
        document.oncontextmenu = rightClick; 

        return () =>{
            document.onclick = null; 
            document.oncontextmenu = null; 
        }
    }, [])

    return (
        <div id="contextMenu" className="context-menu" style={{display: "none"}}> 
            <ul className="menu"> 
                <li className="share"><a href="#"><i className="fa fa-share" aria-hidden="true"></i> Share</a></li> 
                <li className="rename"><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i> Rename</a></li> 
                <li className="link"><a href="#"><i className="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li> 
                <li className="copy"><a href="#"><i className="fa fa-copy" aria-hidden="true"></i> Copy to</a></li> 
                <li className="paste"><a href="#"><i className="fa fa-paste" aria-hidden="true"></i> Move to</a></li> 
                <li className="download"><a href="#"><i className="fa fa-download" aria-hidden="true"></i> Download</a></li> 
                <li className="trash"><a href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li> 
            </ul> 
        </div> 
    )
}

export default ContextMenu;


