import React from "react";
import { useForm } from "react-hook-form";
function AddMessage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Text:</label>
        <input
          type="text"
          {...register("name", {
            required: "Add name",
          })}
        />
        <div>{errors?.text && (errors?.text?.message || <p>Error!</p>)}</div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Add email",
          })}
        />
        <div>{errors?.email && (errors?.email?.message || <p>Error!</p>)}</div>
        <label>Topic:</label>
        <input
          type="text"
          {...register("topic", {
            required: "Add your topic",
            minLength: { value: 10, message: "Min 10" },
            maxLength: { value: 30, message: "Min 30" },
          })}
        />
        <div>{errors?.topic && (errors?.topic?.message || <p>Error!</p>)}</div>
        <label>Message:</label>
        <textarea
          {...register("mess", {
            required: "Add your text message",
            maxLength: { value: 200, message: "Max 200 sumbols" },
            minLength: { value: 80, message: "Min 80 sumbols" },
          })}
        ></textarea>
        <div>{errors?.mess && (errors?.mess?.message || <p>Error!</p>)}</div>
        <button disabled={!isValid}>Send</button>
      </form>
      <p></p>
    </div>
  );
}

export default AddMessage;
