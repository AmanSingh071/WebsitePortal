import React  ,{useRef} from'react';
import JoditEditor from 'jodit-react'



const TextEditor=({setvalue})=>{

    const editor=useRef(null);
    return <JoditEditor  ref={editor} onChange={(content)=>setvalue(content)} />;
};
export default TextEditor;