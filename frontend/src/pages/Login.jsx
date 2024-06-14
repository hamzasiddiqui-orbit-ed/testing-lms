import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import OrbitLogo from "../assets/orbitlogo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.error("failed to login", error);
    }

    // setError(false);
    // setLoading(true);
    // console.log("handle submit called.");

    // if (username == '' || password == '') {
    //   setError('Input fields should not be empty!');
    // }

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // axios
    //   .post(
    //     "/api/users/login",
    //     { username, password },
    //     config
    //   )
    //   .then((response) => {
    //     // Handle successful login
    //     const data = response.data;
    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //     console.log("Login successful:", data);
    //     setLoading(false);
    //     navigate('/admin_dashboard');
    //   })
    //   .catch((error) => {
    //     // Handle errors
    //     console.error("Error logging in:", error);
    //     setLoading(false);
    //     setError('Invalid Login credentials. Please try again.');
    //   });
  };

  useEffect(() => {
    if (userInfo) {
      switch (userInfo.userClass) {
        case "Admin":
          navigate("/admin_dashboard");
          break;
        case "Manager":
          navigate("/manager_dashboard");
          break;
        case "Learner":
          navigate("/learner_dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [userInfo, history]);

  return (
    <>
      <div className="flex justify-center">
        <img
          src={OrbitLogo}
          alt="Orbit-ED"
          style={{ width: "150px" }}
          className="mb-5"
        />
      </div>
      <Card isBlurred className="bg-white/10" shadow="lg">
        <CardHeader className="flex gap-3 justify-center">
          <p className="text-3xl font-semibold text-white p-1">
            Sign In To Portal
          </p>
        </CardHeader>
        <Divider className="bg-white" />
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Username"
              size="md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 mb-5 text-white"
            />
            <Input
              isRequired
              variant="bordered"
              type="password"
              label="Password"
              size="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-5 text-white"
            />
            <Button
              type="submit"
              color="warning"
              style={{ width: "400px" }}
              size="lg"
              className="text-white mb-3"
              isLoading={isLoading}
            >
              Log In
            </Button>
            {error && (
              <div
                className="border-2 bg-red-100 border-red-400 text-red-700 px-4 py-3 relative mt-2 mb-2"
                style={{ borderRadius: "15px" }}
                role="alert"
              >
                <strong className="font-bold">{error}</strong>
              </div>
            )}
          </form>
        </CardBody>
      </Card>
    </>
  );
}

export default Login;
