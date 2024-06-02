import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Header(){
    return(
        <div className="bg-image bg-center bg-no-repeat bg-auto relative  h-[100vh] w-[100%]   ">
        <div className="Container w-screen h-[100vh] absolute  ">
            <div className="Navbar m-auto mt-5 flex w-[80%] justify-between items-center ">
                <div><img className="z-[10px]" src={logo} alt="avc" /></div>
                <div><button className="h-8 w-20 text-white bg-red-600 hover:bg-red-700 font-medium text-[16px] rounded-md"> <Link className="" to="/login"> Sign In </Link> </button> </div>
            </div>
            <div className="text-white w-screen h-[80vh]  flex flex-col justify-center items-center gap-6  max-lg:gap-4 max-sm:gap-1 " >
                <p className="font-extrabold text-5xl max-lg:text-3xl flex flex-wrap text-center max-lg:font-semibold px-12 max-sm:font-medium max-sm:text-2xl max-sm:px-12 ">Unlimited movies, TV shows, and more</p>
                <p className="font-sans text-3xl max-lg:text-xl text-center px-10  max-sm:px-12 max-sm:text-[16px] ">watch anywhere,Cancel anytime </p>
                <p className="font-sans text-[22px] max-lg:text-xl max-sm:w-screen text-center px-10  max-sm:px-12 max-sm:text-[18px] ">Ready to watch? Enter yout email to create or restart your membership</p>
                <p className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-4">
                    <input id="input" className="w-[280px] h-12 outline-none bg-transparent  border-[2px] border-gray-500  pl-2 rounded-sm  placeholder:text-white font-medium  " type="search" placeholder="Email Address" />
                    <button className= "bg-red-600 hover:bg-red-700 text-white h-12 w-40 font-medium mx-4 rounded-sm text-xl box-border max-sm:w-32 max-sm:h-10 max-sm:text-[16px] "> Get Started<MdKeyboardArrowRight className="inline-block font-bold text-3xl " /> </button>
                </p>
            </div>
        </div>
        </div>
    )
}