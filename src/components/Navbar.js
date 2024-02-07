import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Navbar(props){
    let isLoggedin=props.isLoggedin;
    let setisLoggedin=props.setisLoggedin;

    return(
        <div className='flex justify-between text-white items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/"><img src={logo} width={160} height={32} alt="logo" loading='lazy'></img></Link>
            <nav >
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                     
                </ul>
            </nav>
            {/* Login sigin logout dashboad ka button hogga*/}

            <div className=' flex item-center gap-x-4 '>
                {!isLoggedin &&<Link to="/login"><button className='bg-richblack-800 text-white px-[12px] py-2 rounded-[8px] border border-richblack-700'>Login</button></Link>}
                {!isLoggedin && <Link to="/Signup"><button className='bg-richblack-800 text-white px-[12px] py-2 rounded-[8px] border border-richblack-700'>Signup</button></Link>}
                {isLoggedin && <Link to="/"><button className='bg-richblack-800 text-white px-[12px] py-2 rounded-[8px] border border-richblack-700' onClick={()=>{
                    setisLoggedin(false);
                    toast.success("Logged out")}}>
                        Logout</button></Link>}
                {isLoggedin &&<Link to="/dashboard"><button className='bg-richblack-800 text-white px-[12px] py-2 rounded-[8px] border border-richblack-700'>Dashboard</button></Link>}

                
            </div>




        </div>
    )


} 
export default Navbar;