import logo from "../assets/logo.svg"

export default function LoginPage() {
  return (
    <>
    <div className="h-[110vh] ">
      <div className=" bg-image bg-auto bg-top  bg-no-repeat  relative   h-[110vh] w-screen  ">
        <div className="Container1 w-[100%] max-md:bg-black absolute top-0 h-[110vh] " >
            <div className="Logo flex absolute max-md:text-center max-md:w-screen max-md:mx-auto ">
                <img  className="relative top-10 left-16 max-lg:h-[30px] max-lg:top-5 max-lg:left-11 " src={logo} alt="logo" />
            </div>
            <div className="flex items-center h-[110vh] justify-center relative top-6  ">
                <div className="box h-[90vh] w-[450px] bg-black bg-opacity-60 text-white      p-[1px] box-border flex flex-col  gap-5 max-2xl:gap-3 max-2xl:h-[100vh] max-xl:h-[100vh] max-lg:h-[90vh] max-xl:gap-2 max-lg:gap-1 max-md:w-full  ">
                    <p className="font-extrabold text-3xl relative left-[70px] pt-8 max-xl:text-xl max-lg:text-xl max-md:text-2xl max-md:left-[140px] max-md:w-screen ">Sign In</p>
                    <p className="text-center"> <input placeholder="  Enter Mobile number" className=" max-xl:h-[35px] max-xl:w-[60%] p-5 font-xl text-white h-[40px] w-[70%] bg-zinc-700 bg-opacity-25 border-[1px] border-gray-600 " type="number" /> </p>
                    <p className=" text-center"> <input placeholder="  Enter password" className=" max-xl:h-[35px] max-xl:w-[60%] p-5 font-xl h-[40px] w-[70%] bg-zinc-700 bg-opacity-25 border-[1px] border-gray-600 " type="password" /> </p>
                    <p className="text-center">
                         <button className="bg-red-700 hover:bg-red-600 text-white font-medium text-center w-[70%] h-[40px]  max-xl:h-[35px] max-xl:w-[60%]   ">Sign In</button>
                         </p>
                    <p className="text-xl  text-center max-xl:text-[16px] ">Or</p>
                    <p className="text-center">
                    <button className="bg-zinc-700 bg-opacity-60 text-white font-medium text-center w-[70%] h-[40px]  max-xl:h-[35px] max-xl:w-[60%] max-xl:font-normal max-xl:text-[15px]" >Use a Sign-In code </button>
                    </p>
                    <p className="text-center hover:underline hover:text-gray-500">Forgot passord? </p>
                    <p  className="relative hover:text-zinc-300 cursor-pointer left-[73px] max-md:left-[93px]"> <input className="w-[16px] h-4 cursor-pointer" type="checkbox"  /> <span className="max-xl:text-[16px]  ">Remember me</span></p>
                    <p className="relative left-[73px]"> <span className="text-zinc-300 max-xl:text-[16px]">New to netflix ? </span> <span className="font-medium text-[17px] max-xl:text-[16px]">Sign up now</span> </p>
                    <p className="relative hover:text-zinc-300 cursor-pointer left-[73px] w-[70%] font-normal text-[15px] max-xl:text-[16px] ">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="text-blue-600" href="#"> Learn more.</a></p>
                </div>
            </div>
        </div>
      </div>
    </div>

    </>
  );
}
