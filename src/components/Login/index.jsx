import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../helpers";

const LoginPage = ({ setIsLoading, setLoggedUser }) => {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (credentials) => {
    try {
      setIsLoading(true);
      const res = await api.post(`/auth/login`, credentials);
      setLoggedUser(res.data);
    } catch (err) {
      setError(err);
      setLoggedUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) console.log(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          minLength: {
            value: 8,
            message: "It must have more than 8 characters",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email",
          },
        })}
        placeholder="Email"
      />
      {errors.email ? (
        <span style={{ color: "red" }}>{errors.email.message}</span>
      ) : null}
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "It must have more than 6 characters",
          },
        })}
        placeholder="Password"
      />
      {errors.password ? (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      ) : null}
      <input type="submit" value="Login" />
      {error ? (
        <p style={{ color: "red" }}>Login fail: "{error.message}"</p>
      ) : null}
    </form>
  );
};

export default LoginPage;
