import React,{ useState } from "react";

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState(""); 
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("title and task des can not be null");
        } else{
            addTodo(title,des);
            setTitle("");
            setDes("");
        }
    }
    return (
        <div className="container">
            <h3>Add ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Add task</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" value={title} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Des</label>
                    <input type="text" onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="des" value={des}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
