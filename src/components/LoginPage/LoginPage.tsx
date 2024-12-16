import React from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.css";

type FormValues = {
  username: string;
  password: string;
};
export const LoginPage = () => {
  const form = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h1>Login</h1>
        <form role="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.inputContainer}>
            <label htmlFor="username" className={styles.labelStyles}>
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
              className={styles.input}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.labelStyles}>
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              className={styles.input}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
