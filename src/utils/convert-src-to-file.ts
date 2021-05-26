const ConverSrcToFile= async (src:string, fileName:string, mimeType:string)=>{
        return await (fetch(src)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], fileName, {type:mimeType});})
    );
}
export default ConverSrcToFile