import React from "react";
import Button from "../../components/common/button";
import apis from "../../services/apis";
import { useEffect, useState } from "react";
import { User } from "../../services/model.types";

const AboutMe = () => {
  const [user, setUser] = useState<User>();
  const getUser = async () => {
    const [fetchData, error] = await apis.users.retrieve(
      "kieuhungcm2015@gmail.com"
    );
    if (!error) {
      setUser(fetchData);
    } else {
      alert(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="page-container bg-primary-10">
      <div className="reponsive-container">
        <div className="grid lg:grid-flow-col 2xl:max-w-[72vw]">
          <div className="mb-10 px-4">
            <img src={user?.profileUrl}></img>
          </div>
          <div className="px-4 pb-16 2xl:p-16">
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light leading-[60px] my-9">
              {user?.aboutMe}
            </h2>
            <p className="mb-4">{user?.description}</p>
            <span className="font-mrsSaint text-[90px] lowercase">
              {user?.lastName}
            </span>
            <p className="text-[17px] mb-4 capitalize">{user?.title}</p>
            <div className="w-44">
              <Button variant="secondary">MORE ABOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
