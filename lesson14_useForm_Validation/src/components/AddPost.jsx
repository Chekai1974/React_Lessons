// import React from "react";
// import { useForm } from "react-hook-form";

// function AddPost() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   console.log(errors);

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           {...register("name", {
//             required: "Input is required",
//             minLength: { value: 8, message: "Min 8 " },
//             maxLength: { value: 20, message: "Max 20" },
//           })}
//         />
//         <button>Send</button>
//       </form>
//       <div>{errors?.name && (errors?.name?.message || <p>Error!</p>)}</div>
//     </div>
//   );
// }

// export default AddPost;
import React from "react";
import { useForm } from "react-hook-form";

function AddPost() {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid},
    reset,
    } = useForm({mode:"onBlur"});
  const onSubmit = (data) => {
      console.log(data);
      reset()
  };
  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Text of posts</label>
          <textarea
            {...register("text", {
              required: "Add your text it's required",
              maxLength: { value: 180, message: "Max 180" },
            })}
          ></textarea>
        </div>
        <div>{errors?.text && (errors?.text?.message || <p>Required</p>)}</div>
        <div>
          <label>ID user:</label>
          <input
            type="number"
            {...register("userId", {
              required: "Add id it's required",
              min: { value: 0, message: "id from 0 - 20" },
              max: { value: 20, message: "id from 0 - 20" },
              valueAsNumber: true,
            })}
          />
        </div>
        <div>
          {errors?.userId && (errors?.userId?.message || <p>Required</p>)}
        </div>
        
        <button disabled={!isValid}>Add</button>
      </form>
    </div>
  );
}

export default AddPost;
