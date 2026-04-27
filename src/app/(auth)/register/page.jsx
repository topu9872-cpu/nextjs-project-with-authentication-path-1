"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async(data) => {
    const { name, email, password, photo } = data;
const {data: res, error}= await authClient.signUp.email({

   name: name,
    email: email,
    password: password,
    image:photo,
    callbackURL: "/",

})
console.log(res,error)
if(res){
  alert('singup successful')
}else if(error){
  alert(error.message)
}

  };

  const [isVisible, setIsVisible] = useState(false);




  return (
    <div className="container mx-auto flex justify-center items-center w-screen h-screen">
      <div className="p-6 border border-gray-300 shadow-2xl bg-white rounded-2xl">
        <Form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-96 flex-col gap-4"
        >
          <h1 className="text-center text-2xl font-bold">
            Register Your Account
          </h1>
          <TextField type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" {...register("name", { required: true })} />
            <FieldError />
          </TextField>
          {errors.name && <p className="text-red-500">Name field is required</p>}
          <TextField type="text">
            <Label>Photo Url</Label>
            <Input placeholder="Enter Your Photo Url" {...register("photo",{
              required: 'Photo Url field is required'})} />
            <FieldError />
          </TextField>
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}
          <TextField
            type="email"
            validate={(value) => {
              if (!/[A-Z0-9].{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter Your Email" {...register("email")} />
            <FieldError />
          </TextField>
          <TextField className="w-full max-full">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full max-full"
                {...register("password", { required: true })}
                placeholder="Enter Your Password"
                type={isVisible ? "text" : "password"}
              />
             
             
              <InputGroup.Suffix>
                <Button
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-3" />
                  ) : (
                    <EyeSlash className="size-3" />
                  )}
                </Button>
              </InputGroup.Suffix>
              
            </InputGroup>
          </TextField>
            {errors.password && (
                <p className="text-red-500">Enter Your Password</p>
              )}
          <div className=" gap-2">
            <Button className="w-full bg-slate-700 rounded-none" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
