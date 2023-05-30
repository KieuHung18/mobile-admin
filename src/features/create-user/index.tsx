import React from "react";
import Button from "../../components/common/button";
import InputContainer from "../../components/common/input/input-container";
import Input from "../../components/common/input/input-field";
import apis from "../../services/apis";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const data = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    if (data.confirmPassword === data.password) {
      const [connection, error] = await apis.users.create(data);
      if (error) {
        alert(error.message);
      } else {
        navigate("/reports");
        alert("User added");
      }
    } else {
      alert("Confirm password incorrect");
    }
  };

  return (
    <div className="page-container bg-primary-5">
      <div className="responsive-container">
        <form onSubmit={handleCreate}>
          <InputContainer lable="First name" className="my-2">
            <Input
              onBlur={(e: { target: { value: string } }) => {
                data.firstName = e.target.value;
              }}
              required
            />
          </InputContainer>
          <InputContainer lable="Last name" className="my-2">
            <Input
              onBlur={(e: { target: { value: string } }) => {
                data.lastName = e.target.value;
              }}
              required
            />
          </InputContainer>
          <InputContainer lable="Email">
            <Input
              type="email"
              onBlur={(e: { target: { value: string } }) => {
                data.email = e.target.value;
              }}
              required
            />
          </InputContainer>
          <InputContainer lable="Password" className="my-2">
            <Input
              type="password"
              onBlur={(e: { target: { value: string } }) => {
                data.password = e.target.value;
              }}
              required
            />
          </InputContainer>
          <InputContainer lable="Confirm password">
            <Input
              type="password"
              onBlur={(e: { target: { value: string } }) => {
                data.confirmPassword = e.target.value;
              }}
              required
            />
          </InputContainer>

          <Button className="w-full my-4">Create User</Button>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;
