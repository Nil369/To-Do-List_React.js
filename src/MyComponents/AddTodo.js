import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit= (e)=>{

        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

       

    }
    return (
        <>
            <div className="container my-3">
                <h2>Add Your Todos</h2>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">To-do Title</label>
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">To-do Description</label>
                        <textarea className="form-control" rows="5" type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                    </div>

            
                   
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
