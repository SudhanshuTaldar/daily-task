import React, { useState } from 'react';

export default function AddTodo({ addTodo, display, todo }) {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [hobb, setHobb] = useState('');
  const [hdesc, setHdesc] = useState('');
  const [qual, setQual] = useState('');
  const [perc, setPerc] = useState('');

  const [show, setShow] = useState();
  const [show1, setShow1] = useState(false);

  const submit = (e) => {
    // {display = "print"}
    e.preventDefault();
    let desc1 = todo.map((todo) => {
      return todo.desc;
    })

    const rsult = desc1.find(element => element === desc);
    console.log("final reslt", rsult);

    console.log("i am checker", desc1);
    console.log(desc);

    if (rsult !== undefined) {
      alert('Phone number is already exits!');
      setShow(!show)
    }
    else if (!title || !desc) {
      // alert('User-Data can not be blank');
      setShow(!show)
    } else if (!hobb || !hdesc) {
      setShow1(!show)
      // alert('are you confirm');
    } else if (!qual || !perc) {
      // alert('are you confirm');
    }
    else {
      addTodo(title, desc, hobb, hdesc, qual, perc);
      setTitle("");
      setDesc("");
      setHobb("");
      setHdesc("");
      setPerc("");
      setQual("");
      
      display = 'print';
      console.log("function todo", display);
    }
  }


  return (
    <>
      {/* <AddTodo1 addTodo={addTodo} display={display}/> */}
      <div className='container my-3'>
        <h3 className='text-center'>Step:1 Personal Information</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Name:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Phone Number:</label>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
          </div>
          <button onClick={() => setShow(!show)} className="btn btn-lg btn-dark">Next</button>
          {show ? <div className='container my-3'>
            <h3 className='text-center'>Step:2 Hobbies</h3>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Hobbies Name:</label>
              <input type="text" value={hobb} onChange={(e) => setHobb(e.target.value)} className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description:</label>
              <input type="text" value={hdesc} onChange={(e) => setHdesc(e.target.value)} className="form-control" id="desc" />
            </div>
            <button onClick={() => setShow1(!show1)} className="btn btn-lg btn-dark">Next</button>
            {show1 ? <div className='container my-3'>
              <h3 className='text-center'>Step:3 Qualification</h3>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Last Education-Qualification Name:</label>
                <input type="text" value={qual} onChange={(e) => setQual(e.target.value)} className="form-control" id="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Percentage:</label>
                <input type="text" value={perc} onChange={(e) => setPerc(e.target.value)} className="form-control" id="desc" />
              </div>
              <button type='submit' className="btn btn-lg btn-dark">Submit</button>
            </div> : null}
          </div> : null}


        </form>
      </div>

    </>
  )

}
