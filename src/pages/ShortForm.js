import React, { useReducer } from "react";

const ShortForm = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    // const data = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    // };
    console.log(state);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center space-y-6">
      <form className="space-y-6 shadow-md p-10" onSubmit={submit}>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="lastName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <button
          className="px-4 py-3 bg-indigo-500 text-white rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
