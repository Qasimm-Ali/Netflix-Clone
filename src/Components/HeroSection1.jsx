import image from "../assets/Tv.png"
import vdo from "./video.mp4"
export default function HeroSection1(){
    return(
        <>
        <div className="flex justify-center items-center h-[85vh] w-screen bg-black mt-2  ">
            <div className="flex max-md:flex max-md:flex-col max-md:justify-center ">
                <div className="w-[516px] max-lg:w-[400px]  text-white flex flex-col justify-center  gap-6 max-lg:gap-1 "> 
                    <p className=" max-lg:font-semibold max-lg:text-[40px]   h-[61px] font-extrabold text-[48px] max-md:font-medium max-md:text-[30px] max-md:h-[40px] max-md:text-center ">Enjoy on Your TV</p>
                    <p className=" h-[90px] text-[24px] font-normal  max-lg:h-[70] max-lg:text-[20px] max-md:h-[50px] max-md:text-center ] max-md:text-[17px] "> Watch on Smart TVs, Playstation, Xbox, ChromeCast, Apple TV,Blu-rays players, and more.</p>
                </div>
                <div className="relative">
                    <img className="h-96 max-lg:h-60 max-lg:mx-auto relative  z-10 " src={image} alt="image" />
                    <video className="absolute top-[69px] left-[57px] w-[391px] max-lg:w-[235px] max-lg:top-[50px] max-lg:left-[40px] max-md:left-[83px] " autoPlay={true} muted loop src={vdo} controls />
                </div>
            </div>
        </div>
        </>
    )
}