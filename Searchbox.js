import React, { useState } from 'react';
import  Multiselect  from 'multiselect-react-dropdown';
import './Multi.css'
const Searchbox = () => {
	const data = [
		{ "title": "React", "id": "react" },
		{ "title":"Angular", "id": "angular" }, 
		{ "title": "Vue", "id": "vue" }, 
		{ "title":"Ember", "id": "ember" } 
	];

	const [options] = useState(data);


  return (
	<>
		<div style={{width:'90%', justifyContent:"center", display:"flex"}}>
			<div className='Searchbox'>
				<h5 style={{color:"blue"}}>Multiselect dropdown useStare </h5><br />
				<Multiselect options={options} displayValue="title" />
			</div>
		</div>
	</>
  );
}

export default Searchbox;