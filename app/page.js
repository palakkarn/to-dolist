"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setMaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault(); //it stops the page from reloading
    setMaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };
  const deleteHandler = (i) => {
    let copytask = [...maintask]; //copied old array
    copytask.splice(i, 1); //for deleting element
    setMaintask(copytask);
  };
  let renderTask = <h2>No Task available</h2>; // for showing the task
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" bg-red-600 text-white px-5 py-4 rounded font-bold "
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-3 text-5xl font-bold text-center">
        My TODO LIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button className=" bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className=" p-8 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
