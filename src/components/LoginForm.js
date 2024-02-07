 
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function LoginForm({setIsLoggedIn})
{ 

    const navigate=useNavigate();
    const[showPassword, setShowPassword] = useState(false);

     const[formData,setFormData]=useState({email:"",password:""});
   
     function changeHandler(event){
        setFormData((prevData)=>{
            return{...prevData,[event.target.name]:event.target.value}
        })
    }
     
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

    }

     return(
        <div className=" ">
            <form className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submitHandler}>
                <label className="w-full">
                    <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Email Address<sup className=" text-pink-200">*</sup></p>
                    <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" required type="email" name="email" value={formData.email}  placeholder="Enter email id" onChange={changeHandler}/>  
                </label>
                <label className="w-full relative">
                    <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Password<sup className=" text-pink-200">*</sup></p>
                    <input required
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        type= {showPassword ? ("text") : ("password")}
                        value = {formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        name="password"
                       
                    /> 
                     <span className="text-white absolute right-3 top-[40px] cursor-pointer text-[20px] font-bold" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                         </span>
                    
                   
                     
                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-100 text-end">
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button className=" bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]  ">
                    Sign In
                </button>

            </form>
        </div>
     )
     
    
}
export default LoginForm;