import React from 'react';
import isFileImage from '../../../utils/is-file-image';
import niceBytes from '../../../utils/nice-bytes';

import './upload-file.scss';

function UploadFileScreen(props: any) {
  const { file, removeFile } = props;
  const isFileImg = isFileImage(file);

  let styles = {};

  if (isFileImg) {
    styles = {
      backgroundImage: `url(${file.pathFile})`,
      width: props.width,
      height: props.height
    }
  } 

  return (
    <div
      className={"uploadfile-container " + (isFileImg ? "" : " file")}
      style={styles}
    >

      {
        !isFileImg && (
          <div className="uploadfile-main">
            {/* {
              getIcon(file.name)
            } */}
            <div className="body-semibold">
              <p>
                { file.name.split('.').shift() }
              </p>
              <span>
                 .
                 { file.name.split('.').pop() }
               </span>
            </div>
            <span className="subtitle-regular-2">
              {niceBytes(file.size)}
            </span>
          </div>
        )
      }

      <div
        className="uploadfile-icon-delete-panel flex-center cursor-pointer"
        onClick={() => { removeFile(file.name) }}
      >
        X
      </div>
    </div>
  );

}

export default UploadFileScreen;
