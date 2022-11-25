import React, { useState, useEffect } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function CreateNote({ setModal, modal }) {
  const dispatch = useDispatch();
  const [noteAdd, setNoteadd] = useState({
    title: "",
    content: "",
    category: "",
  });
  const resetHandler = () => {
    setNoteadd({
      title: "",
      content: "",
      category: "",
    });
  };

  async function HandleNameInput(e) {
    setNoteadd({ ...noteAdd, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {}

  return (
    <div className="c-modal__container">
      <form>
        <div className="form-container">
          <div className="question-container">
            <label className="question-label">Note Title</label>
            <input
              className="row-input"
              type="text"
              name="title"
              onChange={HandleNameInput}
              value={noteAdd.title}
            />
          </div>
          <div className="question-container">
            <label className="question-label">Content</label>
            <input
              className="row-input"
              type="text"
              name="content"
              onChange={HandleNameInput}
              value={noteAdd.content}
            />
          </div>
          <div className="question-container">
            <label className="question-label">Category</label>
            <input
              className="row-input"
              type="text"
              name="category"
              onChange={HandleNameInput}
              value={noteAdd.category}
            />
          </div>
        </div>
        <div className="form-container">
          <div className="question-container">
            <button
              type="submit"
              className="submit_category"
              onClick={onSubmit}
            >
              Add
            </button>
            <button
              className="btn-trans-Cancel"
              onClick={() => setModal(!modal)}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
