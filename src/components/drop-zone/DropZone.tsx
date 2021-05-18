import { useState } from "react";
import "./DropZone.scss";
import UploadFileScreen from "./upload-file/upload-file.screen";

function DropZone() {
  const [files, setFiles] = useState<any>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragOver = (event: any) =>{
    event.preventDefault();
    if(isDragging){
      return;
    }
    setIsDragging(true);
  }
  
  const dragEnter = (event: any) =>{
    event.preventDefault();
    // setIsDragging(false);
  }

  const dragLeave = (event: any) =>{
    event.preventDefault();
    if(!isDragging){
      return;
    }
    // console.log(event)
    setIsDragging(false);
  }

  const fileDrop = (event: any) =>{
    event.preventDefault();
    setIsDragging(false);

    if(event.dataTransfer.files.length > 0){
      const fileList = event.dataTransfer.files;

      let fileListTemp: any[] = [];

      for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index];

        const pathFile = URL.createObjectURL(file); 

        file["pathFile"] = pathFile
        fileListTemp.push(file)
      }
      setFiles((prev:any) => [...prev , ...fileListTemp]);
      
    }
  }

  const removeFile = (name: string) => {
    const list = files.filter((file: any) => file.name !== name);
    setFiles(list);
  };

  return (
      <div 
        className={"wrapper"}
        onDragOver={dragOver}
      >
        <div 
            className={"wrapper__dropzone flex-center " + (isDragging ? "" : "d-none")}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
        >
          <h4>Thả tệp tại đây</h4>
        </div>

        {
          files.length > 0 && (
            files.map((file:any , index:any) => (
              <UploadFileScreen
                key={index}
                file={file}
                removeFile={removeFile}
            ></UploadFileScreen>
            ))
          )
        }
      </div>
  );
}

export default DropZone;