import { useState } from "react";
import { useSignIn, useSignUp } from "../hooks/useAuth";
import { validSign } from "../util/signValidation";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Sign({ currentUser }) {
  const [signup, setSignUp] = useState(true);
  const [selected, setSelected] = useState("Personal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const { mutate: signUp } = useSignUp(setMsg);
  const { mutate: signIn } = useSignIn(setMsg);

  const handleSignClick = (signType) => {
    setMsg("");
    let type = selected;
    if (!validSign(signType, email, password, name, type))
      return setMsg("Inputs are not valid");

    signType === "signin"
      ? signIn({ email, password })
      : signUp({ type, name, email, password });
  };

  return (
    <>
      {!currentUser && (
        <div className="sign-container">
          <h1>{signup ? "Sign Up" : "Sign In"}</h1>
          <h3>Welcome to professional community</h3>
          <div className="inputs-container">
            {signup && <Input name="Name" value={name} setValue={setName} />}
            <Input name="Email or phone" value={email} setValue={setEmail} />
            <Input
              name="Password"
              type={"password"}
              value={password}
              setValue={setPass}
            />
            {signup && (
              <Select
                name="Account type"
                options={options}
                setSelected={setSelected}
                selected={selected}
                noDefault={true}
              />
            )}
            <div className="invalid-msg">{msg}</div>
          </div>

          <div
            className="switch"
            onClick={() => {
              setMsg("");
              setSignUp(!signup);
            }}>
            {signup ? "I already have an account" : "I don't have an account"}
          </div>

          <Button
            text={signup ? "Sign Up" : "Sign In"}
            onClick={() => handleSignClick(signup ? "signup" : "signin")}
          />
        </div>
      )}
    </>
  );
}
const options = ["Personal", "Company"];
