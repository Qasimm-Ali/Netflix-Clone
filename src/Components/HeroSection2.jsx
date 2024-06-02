import image from "../assets/Mobile.jpg";
export default function HeroSection2() {
  return (
    <div className="flex justify-center items-center h-[85vh] w-screen bg-black mt-2  ">
      <div className="flex max-md:flex max-md:flex-col-reverse max-md:justify-center ">
        <div>
          <img
            className="h-80 max-lg:h-60 max-lg:mx-auto max-md:h-72 max-sm:w-90 "
            src={image}
            alt="image"
          />
        </div>
        <div className="text-white flex flex-col justify-center w-[530px] max-lg:w-auto ">
          <p className=" max-lg:font-semibold max-lg:text-[25px]  max-lg:text-center max-lg:mx-auto font-extrabold text-[40px] max-md:font-medium max-md:text-[20px]  max-md:text-center ">
          Download your shows to watch offline
          </p>
          <p className=" h-[90px] text-[24px] mt-3 font-normal  max-lg:h-[70] max-lg:text-[20px] max-md:h-[50px]  max-md:text-center ] max-md:text-[17px] ">
          Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
}
