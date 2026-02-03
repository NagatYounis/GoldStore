import { useForm } from "react-hook-form";
import { useLogin } from "../api/features/login";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { useAuth } from "../context/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "../api/loginSchema";
import { CiUser } from "react-icons/ci";
type Inputs = {
  username: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useLogin();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(formSchema) });
  // const [formData, setFormData] = useState<Inputs>({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };
  const onSubmit = (data: Inputs) => {
    console.log(data);
    login(data.username);
    navigate("/");
    mutate(
      {
        username: data.username,
        //email: data.email,
        password: data.password,
      },
      {
        onSuccess: (res) => {
          console.log("login success", res);
        },
        onError: (err) => {
          console.log("login error", err);
        },
      },
    );
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }

  return (
    <div className="w-full p-33 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-[#222]"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">login</h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        {/* <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <span>
            <MdOutlineMail />
          </span>{" "}
          <input
            type="email"
            // name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            // value={formData.email}
            // onChange={handleChange}
           {...register("email", { required: "Email is required" })}

          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        </div> */}

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <span>
            <CiUser />
          </span>
          <input
            type="text"
            placeholder="Username"
            className="border-none outline-none ring-0"
            {...register("username")}
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <span>
            <FaLock />
          </span>{" "}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        
        </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        <div className="mt-4 text-left text-white">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-[#333] hover:opacity-90 transition-opacity"
        >
          {isPending ? "Logging..." : "Login"}
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?
          <Link to="/signUp" className="text-white hover:underline pl-2">
            click here
          </Link>
        </p>
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {(error as Error).message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
