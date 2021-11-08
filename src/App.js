import './App.css';
import ReactPhotoSphereViewer from 'react-photosphere'
import React from 'react';
import logo from './pano_2048.jpg'

class App extends React.Component{
    render (){
        return (
            <div>
                <ReactPhotoSphereViewer src= {logo}/>
            </div>
        );
    }
}
export default App;