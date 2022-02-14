import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthContext } from "../shared/Contexts/AuthContexts";
import { auth, firestore } from "../shared/connfig/firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //CreateUser
  const addUser = (e) => {
    e.preventDefault();
    let data = {
      firstname,
      lastname,
      email,
      password,
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await setDoc(doc(firestore, "Users", user.uid), data);
        console.log("Sign up successs!");
        navigate("/about");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  return (
    <div className="w-screen flex items-center justify-center mx-auto">
      <form className="w-96" onSubmit={addUser}>
        <h1 className="font-bold text-2xl text-center mb-4">Signup</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstname" className="text-red">
            Firstname
          </label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border rounded-sm p-1"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname" className="text-red">
            Lastname
          </label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border rounded-sm p-1"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-red">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-sm p-1"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-red">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-sm p-1"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white w-full py-2 mt-4"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;