import React, { Component } from 'react';
import './imageUploader.css'

class ImageUploaderItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageSource:''
        }
    }
    handleImage=(e)=>{
        var reader = new FileReader();
        reader.onload =(event)=>{
            var img = new Image();
            img.onload = function(){
                document.getElementById('imageCanvas').width = img.width;
                document.getElementById('imageCanvas').height = img.height;
                document.getElementById('imageCanvas').getContext('2d').drawImage(img,0,0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({imageSource:img.src})
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
    render() { 
        return ( 
            <div className='ImageUploaderItem containerFluid'>
                <div>        
                    <input  type="file" id='imagetoupload' style={{"display":"none"}} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage}/>
                    <label for="imagetoupload" style={{"border":"1px solid","width":"100%"}}><button className='btn btn-danger'>Click me to upload image</button></label>
                    <canvas id="imageCanvas" className='canvasNotshown'></canvas>
                    <img src={this.state.imageSource} alt='asma'/>
                    {console.log('myImageCode',this.state.imageSource)}
                     
                </div>
            </div>   
        );
    }
}
 
export default ImageUploaderItem;