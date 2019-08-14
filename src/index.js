import React from 'react';
import ReactDom from 'react-dom';


//Import Js file
import AlertExm from './Alert';
import BindExm from './Bind';
import BindObject from './BindObject';
import Login from './TryLogin';
import TryOnChange from './TryOnChange';
import ChangeAfter from './ComponentDidMount'
import CompUpdate from './ShouldComponentUpdate'
import PhoneNo from './PhoneNo';
import SimpleMap from './gmap';
import Geolocater from './Geolocater';
import Map from './Map';
import PhoneEmailvalidation from './task1';
import { geolocated } from 'react-geolocated';
import NewMap from './newMap';
import MapView from './MapView';
//import geolocated from './Geolocater';



// const element = 
// 		(
// 	<div>
// 	<h1>First Heading</h1>
// 	<p>Paragraph started</p>
// 	<table>
// 	<tr>
// 	<td>Name</td>
// 	<td>City</td>
// 	</tr>
// 	</table>
// 	<input type="text"/>		
//     </div>	);
//     ReactDom.render(element,document.getElementById('root'));

// ReactDom.render(<Employee/>,document.getElementById('root'));

// function tick(){
//     const ele = (
//         <div>
//             <h1>Changing Time!</h1>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDom.render(ele,document.getElementById('root'));
// }

// setInterval(tick,1000);

//ReactDom.render(<PhoneNo/>,document.getElementById('root'));
//ReactDom.render(<SimpleMap/>,document.getElementById('root'));
//ReactDom.render(<Geolocater/>,document.getElementById('root'));
ReactDom.render(<Map/>,document.getElementById('root'));
//ReactDom.render(<geolocated/>,document.getElementById('root'))
//ReactDom.render(<MapView/>,document.getElementById('root'));
//ReactDom.render(<PhoneEmailvalidation/>,document.getElementById('root'))
