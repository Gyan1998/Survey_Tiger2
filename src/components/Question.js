import TypeSelector from "./TypeSelector";

const Question=({setQtext})=>{
  return (
    <>
    	<div className="col-md-8 offset-md-2 col-12 input-gray my-3">
    		<div className="input-gray-prepend">
    			<span className="input-group-text" id="basic-addon1">?</span>
    		</div>
    		<input type="text" className="form-control" placeholder="Type question text ..." onChange={e=>setQtext(e.target.value)} />
    	</div>
    </>
  );
}

export default Question;