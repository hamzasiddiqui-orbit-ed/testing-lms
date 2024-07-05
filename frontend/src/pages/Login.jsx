// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import OrbitEdLogoColored from "../assets/Orbit-Ed-logo-coloured.svg";
import useLogin from "../hooks/useLogin";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    try {
      await login(username, password);
    } catch (err) {
      setError(err.message);
    }

    // setUsername("");
    // setPassword("");
  };

  useEffect(() => {
    if (state.userInfo) {
      switch (state.userInfo.user_type) {
        case "Root":
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
  }, [state.userInfo, navigate]);

  return (
    <div className="flex w-screen h-screen">
      <div className="sm:hidden absolute top-0 flex flex-col items-center justify-center">
        <img src={OrbitEdLogoColored} alt="Orbit-Ed" className="size-32" />
        <p className="text-brand text-xl w-3/4 mt-3">
          Immersive Training Platform for Enterprises
        </p>
      </div>

      <div className="flex flex-col flex-initial w-0 sm:w-7/12 bg-core items-center justify-center invisible sm:visible">
        <img src={OrbitEdLogoColored} alt="Orbit-Ed" className="size-80" />
        <p className="text-brand text-4xl w-3/4 mt-3">
          Immersive Training Platform for Enterprises
        </p>
      </div>
      <div className="flex flex-initial w-full sm:w-5/12 bg-core items-center justify-center">
        <div className="bg-[#8497DB] bg-opacity-20 w-full h-full sm:rounded-l-3xl text-brand flex flex-col items-start justify-center pt-44 ps-5 sm:p-28 ">
          <p className="text-2xl font-semibold">Join Our Portal</p>
          <p className="text-base mt-3">Log in to preview your progress.</p>

          <form className="w-full" onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text ms-2 text-brand font-medium">
                  Username
                </span>
              </div>
              <input
                required
                type="text"
                placeholder="Type here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`input input-bordered w-full max-w-xs rounded-full size-8 bg-[#8497DB] border-brand bg-opacity-20 ${
                  error ? "border-error placeholder-error" : ""
                }`}
              />
            </label>

            <label className="form-control w-full max-w-xs mt-5 relative">
              <div className="label">
                <span className="label-text ms-2 text-brand font-medium">
                  Password{" "}
                </span>
              </div>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input input-bordered w-full max-w-xs rounded-full size-8 bg-[#8497DB] border-brand bg-opacity-20 ${
                  error ? "border-error placeholder-error" : ""
                }`}
              />
              <span className="absolute inset-y-0 top-9 right-3 flex items-center">
                <label
                  onClick={() => setShowPassword(!showPassword)}
                  htmlFor="toggle"
                >
                  {showPassword ? (
                    <BiHide className="text-utility size-5" />
                  ) : (
                    <BiShow className="text-utility size-5" />
                  )}
                </label>
              </span>
            </label>
            {error && (
              <div className="w-full max-w-xs relative pb-5 pt-3">
                <p className="text-error absolute left-3">{error}</p>
              </div>
            )}

            <div className="w-full flex">
              <button
                className="btn-sm bg-[#8497DB] bg-opacity-20 text-brand mt-8 rounded-full px-6 border-[#B5BDD4]"
                type="submit"
                style={{ borderWidth: "1px" }}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Logging In
                  </>
                ) : (
                  <p>Log In</p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
