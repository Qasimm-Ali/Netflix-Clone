import image from "../assets/Kids.png"
export default function HeroSection4(){
    return(
        <div className="flex justify-center items-center h-[85vh] w-[100vw] bg-black mt-2  ">
        <div className="flex max-md:flex max-md:flex-col-reverse max-md:justify-center ">
          <div>
            <img
              className="h-80 max-lg:h-60 max-lg:mx-auto max-md:h-72 "
              src={image}
              alt="image"
            />
          </div>
          <div className=" w-[563px] text-white flex flex-col justify-center  gap-6 max-lg:gap-1  max-lg:w-[400px]  mt-2">
            <p className=" max-lg:font-semibold max-lg:mx-auto max-lg:text-[30px]    h-[61px] font-extrabold text-[48px] max-md:font-medium max-md:text-[30px] max-md:h-[40px] max-md:text-center ">
            Create profiles for kids
            </p>
            <p className="  h-[90px] max-lg:mx-auto text-[24px] font-normal max-lg:h-[50] max-lg:text-[19px] max-md:h-[50px] max-md:mx-auto max-md:text-center ] max-md:text-[17px] ">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    )
}