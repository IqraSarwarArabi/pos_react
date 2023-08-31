import React from "react";

function FileUploaderCustom() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        var height = this.height;
        var width = this.width;
        if (height > 200 || width > 200) {
          alert(
            "Height and Width must not exceed 200px.\n Current Dimensions are " +
              this.height +
              "*" +
              this.width
          );
        }
      };
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
    </div>
  );
}

export default FileUploaderCustom;
