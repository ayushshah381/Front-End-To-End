import { useState, useEffect, useRef } from "react";

const GET_USERS = "https://dummyjson.com/users/search?q=";
const SearchPill = () => {
  const [inputName, setInputName] = useState("");
  const [users, setUsers] = useState();
  const [pills, setPills] = useState([]);

  const inputRef = useRef();
  useEffect(() => {
    let timer;
    const fetchUsers = async (input) => {
      const res = await fetch(GET_USERS + input);
      const data = await res.json();
      const usersList = data.users;
      setUsers(usersList);
    };

    if (inputName) {
      // debounce
      timer = setTimeout(() => {
        fetchUsers(inputName);
      }, 400);
    } else {
      setUsers([]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inputName]);

  const addUserToPill = (user) => {
    setPills((prev) => [...prev, user]);
    setUsers([]);
    setInputName("");
    inputRef.current.focus();
  };

  const removePill = (id) => {
    const newPills = pills.filter((pill) => pill.id !== id);
    setPills(newPills);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <div className="box-container">
        <div className="pills-container">
          {pills.map((pill) => {
            return (
              <div
                key={pill.id}
                onClick={() => {
                  removePill(pill.id);
                }}
                className="pill"
              >
                {`${pill.firstName} ${pill.lastName}`}
              </div>
            );
          })}
        </div>
        <input
          ref={inputRef}
          value={inputName}
          type="text"
          className="text-input"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
      </div>
      <div className="suggestions">
        {users?.map((user) => {
          return (
            <div
              onClick={() => {
                addUserToPill(user);
              }}
              className="suggestion"
              key={user.id}
            >
              {user.firstName} {user.lastName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPill;
