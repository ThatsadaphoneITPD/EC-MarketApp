import React, { useState, useEffect } from "react";
import { Form, Input, Modal, message } from "antd";
import { AiFillShop } from "react-icons/ai";
import { UploadForm } from "../index";
import { ContainerComponent } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { listCategories, createProductAction } from "../../redux/actions";
const { confirm } = Modal;

export default function CreateProduct({
  userInfo,
  setModal,
  modal,
  render,
  setRender,
}) {
  const dispatch = useDispatch();

  const { TextArea } = Input;
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  const productCreate = useSelector((state) => state.productCreate);
  const { success, error } = productCreate;

  const [input, setInput] = useState({
    title: "",
    content: "",
    price: 0,
    categories: [],
    files: [],
  });
  const handleAdd = (e) => {
    confirm({
      title: "Will you Add this " + e.title + " items?",
      icon: <AiFillShop size={45} color="#36cfc9" />,
      content: "we wll Post by API to MongoDB",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        dispatch(createProductAction(input))
          .then(() => {
            if (success == true) {
              const mssg = "New Product is add To Store";
              message.success(mssg);
            } else {
              const mssg = `${error}`;
              message.error(mssg);
            }
            setModal(!modal);
            setRender(!render);
          })
          .then(() => {
            resetHandler();
          });
      },
      onCancel() {},
    });
  };

  const isOverflowFile = (currentFileList, fileSize) => {
    const currentSize = currentFileList.reduce((prev, file) => {
      return prev + file.size / 2024;
    }, 0);
    return currentSize + fileSize > 5120;
  };

  const pushInputHandler = (e) => {
    const filter = Array.from(e.target.files)
      .map((file) => {
        let size = file.size / 1024;
        if (isOverflowFile(input.files, size)) {
          return message.error("File size is overflow");
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

  const resetHandler = () => {
    setInput({
      title: "",
      content: "",
      price: 0,
      categories: [],
      files: [],
    });
  };

  async function HandleNameInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (!input.title) {
        throw new Error("title is Empty, pls fulfill");
      } else if (input.categories.length === 0) {
        throw new Error("categories is Empty, pls fulfill");
      } else if (!input.price) {
        throw new Error("price is Empty, pls fulfill");
      } else if (!input.content) {
        throw new Error("content is Empty, pls fulfill");
      } else if (input.files.length === 0) {
        throw new Error("a Item's Pictures is Empty, pls fulfill");
      } else {
        handleAdd(input);
      }
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
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
          defaultValue={input.categories}
        >
          <option value></option>
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
          <button type="submit" className="submit_category" onClick={onSubmit}>
            Add
          </button>
          <button className="btn-trans-Cancel" onClick={() => setModal(!modal)}>
            Close
          </button>
        </div>
      </div>
    </Form>
  );
}
