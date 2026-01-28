import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { LoginPayLoad } from "./auth.type";
import { LoginSchema } from "./auth.sechema";

const LoginApi = async (data: LoginPayLoad) => {
  return new Promise<{ data: any }>((resolve) => {
    setTimeout(() => {
      resolve({ data: { message: "Login successful", user: data.username } });
    }, 1000);
  });
};

export default function LoginPage() {
  const [value, setValue] = useState(4);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayLoad>({ resolver: yupResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginPayLoad> = (data) => {
    mutate(data);
  };

  const navigate = useNavigate();

  const [isVisible, setVisible] = useState<boolean>(false);
  const toggleVisibility = () => setVisible(!isVisible);

  const { mutate, isPending } = useMutation({
    mutationFn: LoginApi,
    onSuccess: (data) => {
      console.log(data?.data);
      navigate("/");
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="space-y-4 w-full">
      <div className="space-y-7 text-center">
        <div className="font-bold text-5xl">Login</div>
        <div className="text-2xl">Enter Your details below</div>
      </div>
      <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="birthdaytime">Birthday (date and time):</label>
        <input id="birthdaytime" name="birthdaytime" type="datetime-local" />

        <label htmlFor="myfile">Select a file:</label>
        <input id="myfile" name="myfile" type="file" />
        <div>
          <input
            id="vol"
            max="100"
            min="0"
            name="vol"
            type="range"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <output>{value}</output>
        </div>

        <div>
          <Input
            {...register("username")}
            fullWidth
            placeholder="Enter Your Username"
            radius="lg"
            type="text"
          />
          {errors.username && (
            <p className="text-red-500 text-sm pt-1">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <Input
            {...register("password")}
            fullWidth
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-solid outline-transparent"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaRegEye className="text-xl pointer-event-nones text-default-400" />
                ) : (
                  <FaRegEyeSlash className="text-xl pointer-event-nones text-default-400" />
                )}
              </button>
            }
            placeholder="Enter Password"
            radius="lg"
            type={isVisible ? "text" : "password"}
          />
          {errors.password && (
            <p className="text-red-500 text-sm pt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          fullWidth
          className="text-white bg-red-600 py-6"
          isLoading={isPending}
          size="lg"
          type="submit"
        >
          {isPending ? "Loging in" : "Login"}
        </Button>
      </form>
    </div>
  );
}
