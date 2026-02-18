import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// component names must start with an uppercase letter
const ApiDemo4 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {
    try {
      console.log("Form Data:", data);

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users", // Replace with your API
        data
      );

      console.log("Response:", response.data);

      alert("User Created Successfully!");
      reset(); // clear form
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>Name is required</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Email is required</p>}
        </div>

        {/* Age */}
        <div>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age", { required: true })}
          />
          {errors.age && <p>Age is required</p>}
        </div>

          {/* isActive */}
        <div>
          <label>
            <input
              type="radio"
              value="Active"
              {...register("isActive", { required: true })}
            /> Active
          </label>
          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              value="Not Active"
              {...register("isActive", { required: true })}
            /> Not Active
          </label>
          {errors.isActive && <p>Please select active status</p>}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is required</p>}
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default ApiDemo4;