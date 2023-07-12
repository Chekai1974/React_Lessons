import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
function AddTask() {
  const [task, setTask] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    setTask((last_objs) => [...last_objs, data]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Task name</label>
          <input
            type="text"
            {...register("name", {
              required: "Add title",
            })}
          />
          <div>{errors?.name && (errors?.name.message || <p>Error!</p>)}</div>
        </div>
        <div>
          <label>Task name</label>
          <input
            type="text"
            {...register("description", {
              required: "Add description",
            })}
          />
          <div>{errors?.description &&(errors?.description.message || <p>Error!</p>)}</div>
        </div>
        <button>Add</button>
      </form>
      <div>
        {task.map((elem, index) => {
          return (
            <div key={index}>
              <p>{elem.name}</p>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddTask;
