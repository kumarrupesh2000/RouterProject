import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';



const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const[accountType,setaccountType]=useState("student");

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    // const signupData={...formData};

   

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }


    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        // const accountData = {
        //     ...formData
        // };
        const finalData={...formData,accountType}
        console.log("printing account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


  return (
    <div className=''>
        {/* student-Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType==="student" ?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2  px-5 transition-all duration-200 rounded-full `} onClick={()=>setaccountType("student")}>
                Student
            </button>
            <button  className={`${accountType==="instructor" ?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2  px-5 transition-all duration-200 rounded-full `} onClick={()=>setaccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form className="flex flex-col w-full gap-y-4 mt-6"  onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div className='flex gap-9 w-full'>
                    <label className="">
                        <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">First Name<sup className=" text-pink-200">*</sup></p>
                        <input
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p  className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Last Name<sup className=" text-pink-200">*</sup></p>
                        <input
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
            </div>
            {/* email Add */}
            <label>
                    <p  className="text-white text-[0.875rem] mb-1 leading-[1.375rem]" >Email Address<sup className=" text-pink-200">*</sup></p>
                    <input
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div>
                <label className='relative'>
                    <p  className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Create Password<sup className=" text-pink-200">*</sup></p>
                    <input
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                    />
                    <span className="text-white absolute right-3 top-[40px] cursor-pointer text-[20px] font-bold" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label className='relative'>
                    <p  className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Confirm Password<sup className=" text-pink-200">*</sup></p>
                    <input
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                    />
                    <span className="text-white absolute right-3 top-[75px] cursor-pointer text-[20px] font-bold" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
        <button className=" bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]  ">
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
