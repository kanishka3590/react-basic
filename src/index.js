import React from 'react';
import ReactDom from 'react-dom';


//Import Js file
import AlertExm from './Alert';
import BindExm from './Bind';
import BindObject from './BindObject';
import Login from './TryLogin';
import TryOnChange from './TryOnChange';



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

ReactDom.render(<Login/>,document.getElementById('root'));
