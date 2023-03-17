import React from "react";
import Button from "../../components/common/button";

const ComponentsDemo = () => {
  return (
    <div>
      <Button bar={true} />
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
      Ping
      <svg className="w-20 h-20 p-2 bg-blue-500 rounded-md animate-spin"></svg>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  );
};
export default ComponentsDemo;
