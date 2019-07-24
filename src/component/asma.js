import React, { Component } from 'react';


class Uploading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // function getBase64Image(img){
        //     var canvas = document.createElement("canvas");
        //     canvas.width = img.width;
        //     canvas.height = img.height;
        
        //     var ctx = canvas.getContext("2d");
        //     ctx.drawImage(img, 0, 0);
        
        //     var dataURL = canvas.toDataURL("image/png");
        
        //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        // }
        // let bannerImage = document.getElementById('bannerImg');
        // const imgData = getBase64Image(bannerImage);
        // localStorage.setItem("imgData", imgData);
        // var dataImage = localStorage.getItem('imgData');
        // const bannerImg = document.getElementById('tableBanner');
        // bannerImg.src = "data:image/png;base64," + dataImage;
        return ( 
            <div>
                <div>
  <input type="file" id="uploadBannerImage"  />
  <hr />
  <img src id="tableBanner" alt="asma" />
</div>

            </div>
        );
    }
}
 
export default Uploading;