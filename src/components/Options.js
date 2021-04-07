import TypeSelector from "./TypeSelector";
import Question from "./Question";

const Options=({uid,addOptions,deleteOptions,updateOptionText})=>{
  return (
    <>
    	<div className="col-md-8 offset-md-2 col-12 input-gray my-3">
    		<input type="text" className="form-control" placeholder="Type option text ..." onChange={e=>updateOptionText(uid,e.target.value)} />
    		<div className="input-gray-prepend">
    			<button className="btn btn-outline-secondary" type="button" onClick={()=>addOptions()}>+</button>
    			<button className="btn btn-outline-secondary" type="button" onClick={()=>deleteOptions()}>-</button>
    		</div>
    		
    	</div>
    </>
  );
}

export default Options;