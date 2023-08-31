import React, { useEffect } from "react";
import styles from "./FileUpload.module.css";

function FileUpload({ setUrl }) {
  useEffect(() => {
    const cloudName = "dcgjiwxzx";
    const uploadPreset = "gbtjcomo";

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url"],
        multiple: false,
        singleUploadAutoClose: false,
        maxImageHeight: 200,
        maxImageWidth: 200,
        clientAllowedFormats: ["png", "jpg"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          document
            .getElementById("preview")
            .setAttribute("src", result.info.secure_url);
          setUrl(result.info.secure_url);
        }
      }
    );

    const uploadButton = document.getElementById("upload_widget");
    uploadButton.addEventListener("click", () => {
      myWidget.open();
    });

    return () => {
      uploadButton.removeEventListener("click", () => {
        myWidget.open();
      });
    };
  }, [setUrl]);

  return (
    <div className={styles.file_upload}>
      <p>Upload Product Image Here!</p>
      <button id="upload_widget">Upload</button>
    </div>
  );
}

export default FileUpload;
