import React from "react";
import PageSeperator from "../../components/icons/page separator";
import { useEffect, useState } from "react";
import apis from "../../services/apis";
import { User } from "../../services/model.types";

const Home = () => {
  const [user, setUser] = useState<User>();
  const getUser = async () => {
    const [fetchData, error] = await apis.auth.session();
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
    <div className="page-container bg-primary-5">
      <div className="responsive-container">
        <div className="px-4 pb-16">
          <h2 className="text-[14px] tracking-[4px] md:text-[16px] md:tracking-[8px] lg:text-[18px] font-sans capitalize">
            Hello {user?.firstName} {user?.lastName}
          </h2>
          <h2 className="text-[35px] sm:[text-50px] md:text-[60px] lg:text-[90px] xl:text-[100px] capitalize">
            Wellcome to gallery admin
          </h2>
        </div>
      </div>
      <PageSeperator className="fill-primary-10" />
    </div>
  );
};

export default Home;
