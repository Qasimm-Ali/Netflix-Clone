import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function HeroSection5(){
    const data = [
        {
            question : "What is netflix",
            symbol : <IoMdAdd/> ,
        },
        {
            question : "How much does Netflix cost ?",
            symbol : <IoMdAdd/> ,
        },
        {
            question : "Where i can watch ? ",
            symbol : <IoMdAdd/> ,
        },
        {
            question : "How do i cancel ?",
            symbol : <IoMdAdd/> ,
        },
        {
            question : "Where can i  watch on Netflix ?",
            symbol : <IoMdAdd/> ,
        },
        {
            question : "Is Netflix good for kids ? ",
            symbol : <IoMdAdd/> ,
        },
    ]
    return(
        <>
        <div className="h-[110vh]  max-xl:h-[110vh]   bg-black w-screen mt-3 text-white">
            <div className="heading text-center flex justify-center pt-10   ">
                <p className="   font-extrabold text-5xl flex justify-center flex-wrap max-lg:w-[600px] max-lg:text-3xl max-lg:font-bold  w-[1123px] h-[61px] max-sm:text-xl max-sm:h-[30px] ">Frequently asked Questions</p>
            </div>
            <div>
                {data.map((item,ind) => (
                    <p className="flex justify-center  m-[13px] max-md:m-[10px]  ">
                        <button className="max-2xl:h-[39px] max-2xl:p-[25px] max-xl:h-[28px] max-xl:p-[13px]   w-[1127px] flex items-center bg-zinc-800 justify-between  p-[40px] hover:bg-zinc-700 max-lg:p-[17px] " key={ind}><span className="text-2xl max-lg:text-xl max-md:text-xl max-sm:text-[16px]"> {item.question}</span > <span className=" text-[40px] max-md:text-2xl ">  {item.symbol} </span> </button>
                    </p>
                ))}
            </div>
            <div className="text-center w-[910px]  mx-auto max-lg:w-[400px] max-sm:w-[300px] flex flex-col   ">
                <p className=" mx-auto text-[20px] max-md:text-[17px] max-lg:w-[470px] max-sm:w-full flex flex-col flex-wrap   ">Ready to watch? Enter your email to create or restart your membership.</p>
                <p> 
                <div className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-4">
                    <input id="input1" className="w-[300px] h-14 outline-none bg-transparent  border-[2px] border-gray-500 pl-2 rounded-sm  placeholder:text-white font-medium bg-zinc-700 max-lg:w-[250px] max-lg:h-10 max-md:w-[210px] max-md:h-8 max-sm:w-[190px] max-sm:h-8 " type="search" placeholder="Email Address" />
                    <button className= "bg-red-600 hover:bg-red-700 text-white h-14 w-40 font-medium mx-4 rounded-sm text-xl max-lg:h-10 max-lg:w-28 max-lg:text-xs box-border max-sm:w-28 max-sm:h-8 max-sm:text-[16px] max-sm:mx-0  ">Get Started<MdKeyboardArrowRight className="inline-block font-bold text-3xl max-md:text-2xl max-sm:text-xl max-lg:hidden " /> </button>
                </div>
                </p>
            </div>
        </div>
        </>
    )
}