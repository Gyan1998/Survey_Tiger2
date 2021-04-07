import React from "react";
import {Link,useHistory} from "react-router-dom";
const Published=({squestions})=>{
  return (
    <>
    	{
    		squestions.length!==0
    		?
    		squestions.map((el,key)=>(
    			<div key={key}>
    				<h3>{el.text}</h3>
					{
						el.options.length===2
						?
						el.options.map((el1,key1)=>(
						<>
							<input type="radio" key={key1} name="radio"/>
							<label style={{marginLeft:"10px"}}>{el1.value}</label><br />
						</>
						))
						:
						el.options.map((el1,key1)=>(
						<>
							<input type="checkbox" key={key1} />
							<label style={{marginLeft:"10px"}}>{el1.value}</label><br />
						</>
						))
					}
    			</div>
    		))
    		:
    		<p>No questions are added.</p>
    	}
    	<Link to="/">
          <button className="btn btn-danger m-1">Confirm</button>
        </Link>
    </>
  );
}

export default Published;