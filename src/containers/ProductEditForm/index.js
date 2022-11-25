import React, { useState, useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { EditFilled } from "@ant-design/icons";
import { UploadForm } from "../index";
import { ContainerComponent } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { listCategories, EditItemAction } from "../../redux/actions";
const { confirm } = Modal;

export default function EditeProduct({
  userInfo,
  EditItem,
  setModal,
  modal,
  render,
  setRender,
  closeEdit,
}) {
  const dispatch = useDispatch();
  const [alertError, setAlertError] = useState("");

  const { TextArea } = Input;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const [input, setInput] = useState({
    title: EditItem.title,
    content: EditItem.content,
    price: EditItem.price,
    categories: [EditItem?.category.map((i) => i._id)],
    files: [],
  });

  const isOverflowFile = (currentFileList, fileSize) => {
    const currentSize = currentFileList.reduce((prev, file) => {
      return prev + file.size / 1024;
    }, 0);
    return currentSize + fileSize > 5120;
  };

  const pushInputHandler = (e) => {
    const filter = Array.from(e.target.files)
      .map((file) => {
        let size = file.size / 2024;
        if (isOverflowFile(input.files, size)) {
          alert("File size is overflow");
          setAlertError("File size is overflow");
          return;
        }
        return file;
      })
      .filter((file) => file);

    setInput((input) => {
      return {
        ...input,
        files: [...input.files, ...filter],
      };
    });
  };
  const eliminateFile = (id) => {
    setInput((input) => ({
      ...input,
      files: input.files.filter((file, index) => id !== index),
    }));
  };

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch, userInfo]);

  async function HandleNameInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  }

  const handlePut = (e) => {
    confirm({
      title: "Sure!!? Edit this items?" + e.title + ">+>" + input.title,
      icon: <EditFilled />,
      content: "Directly Put to API of item DB",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(EditItemAction(EditItem._id, input))
          .then(() => {
            setRender(!render);
          })
          .then(() => countDown("Done Edition"))
          .then(() => {
            closeEdit();
          });
      },
      onCancel() {},
    });
  };
  const countDown = (message) => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: ` ${message}`,
      content: `a Task is Done, Pls Wait a`,
    });
    setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `${message} <---->.${secondsToGo}s.`,
      });
    }, 1000);
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  };

  async function onEdit(e) {
    e.preventDefault();
    try {
      if (!input.title) throw new Error("title is Empty, pls fulfill");
      if (!input.content) throw new Error("content is Empty, pls fulfill");
      if (!input.categories)
        throw new Error("categories is Empty, pls fulfill");
      if (!input.price) throw new Error("price is Empty, pls fulfill");
      handlePut(EditItem);
    } catch (error) {
      setAlertError(error.message);
      countDown(alertError);
    }
    // console.log(input);
  }

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "small" }}
        onValuesChange={"small"}
        size={"small"}
      >
        <Form.Item label="Title">
          <Input name="title" onChange={HandleNameInput} value={input.title} />
        </Form.Item>
        <Form.Item label="Category">
          <select
            onChange={HandleNameInput}
            name="categories"
            value={input.categories}
          >
            {categories &&
              categories.map((i) => <option value={i._id}>{i.name}</option>)}
          </select>
        </Form.Item>

        <Form.Item label="Price">
          <Input name="price" onChange={HandleNameInput} value={input.price} />
        </Form.Item>
        <Form.Item label="Content">
          <TextArea
            rows={4}
            name="content"
            onChange={HandleNameInput}
            defaultValue={EditItem.content}
            value={input.content}
          />
        </Form.Item>
        <ContainerComponent.Pane>
          <UploadForm
            files={input.files}
            eliminateFile={eliminateFile}
            setFiles={pushInputHandler}
          ></UploadForm>
        </ContainerComponent.Pane>
        <div className="form-container">
          <div className="question-container">
            <button type="submit" className="submit_category" onClick={onEdit}>
              Edit
            </button>
            <button
              className="btn-trans-Cancel"
              onClick={() => setModal(!modal)}
            >
              Close
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}
