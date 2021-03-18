import React , { useEffect } from 'react';
import { toChars , getCharsMap } from './toChars';

const styleShow = {
    fontFamily:" Courier New",
    fontSize: "10px",
    lineHeight: "8px",   
}
function ConvertImagesIntoText() { 

    function showImage(){ 
        var show=document.getElementById("show"),  
        img=document.getElementsByTagName("img")[0],  
        canvas = document.createElement("canvas");   

        var file = document.getElementById('file').files[0];
        if(!file){  
            alert("Vui lòng chọn tệp tin"); 
            return;
        }  

        var ctx = canvas.getContext('2d'); 
        var url = URL.createObjectURL(file);  

        img.src = url;  
        img.onload=function(){  
            canvas.width=img.naturalWidth;  
            canvas.height=img.naturalHeight;  
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  
            let chars = toChars(ctx,canvas.width,canvas.height,100);  
            let charsTemp = chars.slice("rn");
            for(let chars in charsTemp){
                show.append(`<span>${chars}</span><br></br>`)
            }
        }  
    }  

    return (
        <div>
            <input type="file" id="file"></input>
            <button type="button" onClick={ showImage }>Tạo</button>
            <div>
                <img src={""} style={{width: "100px"}} alt=""></img>
            </div>
            <div id="show" style={ styleShow }></div> 
        </div>
 
    )
}

export default ConvertImagesIntoText;


