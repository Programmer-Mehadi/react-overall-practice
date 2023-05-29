import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { DataContext } from "../../contexts/Data";

const Home = () => {
  const { users, dispatch } = useContext(DataContext);
  const [userList, setUserList] = useState(users);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await response.json();
      dispatch({ type: "FETCH_USER", payload: userData });
    };
    if (userList === null) {
      fetchData();
      setUserList(users);
    }
    setUserList(users);
  }, [userList, users]);

  const showUsers = () => {
    setUserList(null);
  };

  return (
    <div>
      <div className="flex justify-center pt-20 gap-5">
        <PrimaryButton
          onClick={showUsers}
          className="bg-blue-400 px-10 py-2 font-semibold rounded-[4px] text-white"
          text="Add"
        />
      </div>
      <div className="mt-20 grid gridc-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {userList?.length &&
          userList?.map((user) => {
            const { id, name, phone, email } = user;
            return (
              <div key={id} className="bg-blue-900 rounded-[4px] p-4">
                <h1 className="text-lg font-bold text-white">{name}</h1>
                <p className="text-base font-normal text-white">{phone}</p>
                <p className="text-base font-normal text-white">{email}</p>
                <PrimaryButton
                  className="bg-red-400 hover:bg-red-800 hover:transition-all px-10 py-2 font-semibold rounded-[4px] text-white mt-4"
                  text="Delete"
                  onClick={() => dispatch({ type: "DELETE_USER", payload: id })}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
