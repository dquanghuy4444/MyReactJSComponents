import React , { useCallback , useState} from "react";

import * as Helpers from "./helpers";
import "./GeneratePdfFromImageWithJspdf.css";

function GeneratePdfFromImageWithJspdf() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = useCallback(
    (event) => {
      const fileList = event.target.files;
      const fileArray = fileList ? Array.from(fileList) : [];
      const fileToImagePromises = fileArray.map(Helpers.fileToImageURL);
      Promise.all(fileToImagePromises).then(setUploadedImages);
    },
    [setUploadedImages]
  );

  const cleanUpUploadedImages = useCallback(() => {
    setUploadedImages([]);
    uploadedImages.forEach((image) => {
      URL.revokeObjectURL(image.src);
    });
  }, [setUploadedImages, uploadedImages]);

  const generatePdfFromImages = useCallback(() => {
    Helpers.generatePdfFromImages(uploadedImages);
    cleanUpUploadedImages();
  }, [uploadedImages, cleanUpUploadedImages]);

  return (
    <>
      <h1>Convert images to PDFs</h1>

      <div className="images-container">
        {uploadedImages.length > 0 ? (
          uploadedImages.map((image) => (
            <img key={image.src} src={image.src} alt={""} className="uploaded-image" />
          ))
        ) : (
          <p>Upload some images...</p>
        )}
      </div>

      <div className="buttons-container">
        <label htmlFor="file-input">
          <span className="button">Upload images</span>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            multiple
          />
        </label>

        <button
          onClick={generatePdfFromImages}
          className="button"
          disabled={uploadedImages.length === 0}
        >
          Generate PDF
        </button>
      </div>
    </>
  );
}

export default GeneratePdfFromImageWithJspdf;
