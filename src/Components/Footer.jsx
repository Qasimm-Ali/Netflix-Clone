export default function Footer(){
    return(
        <>
        <div className=" h-[60vh] bg-black w-screen mt-3 text-white flex justify-evenly items-center flex-wrap max-lg:flex max-lg:flex-col max-lg:justify-center  " >
                    <ul className="max-sm:hidden" >
                        <a className="block underline  text-zinc-400 " href="#">Questions ? Contact us</a>
                        <a className="block underline  text-zinc-400 " href="#">FAQ</a>
                        <a className="block underline  text-zinc-400 " href="#">Account</a>
                        <a className="block underline  text-zinc-400 " href="#">Investor Relations</a>
                        <p className="block underline  text-zinc-400 " href="#"> <select className="bg-zinc-900 w-[100px] h-7 p-[3px] mx-2 rounded-md cursor-pointer hover:bg-zinc-700 text-white  ">
                            <option id="dd" >  English</option>
                            <option value="Spanish"> Spanish</option>
                            </select> </p>
                        <a className="block underline text-zinc-400 " href="#">Provacy</a>
                    </ul>
                    <div className="max-sm:flex gap-3 max-sm:text-[14px]">
                    <ul >
                        <a className="block underline text-zinc-400 " href="#">Help Center</a>
                        <a className="block underline text-zinc-400 " href="#">Cookies</a>
                        <a className="block underline text-zinc-400 " href="#">Jobs</a>
                        <a className="block underline text-zinc-400 " href="#">Legal Notices</a>
                    </ul>
                    <ul>
                        <a className="block underline text-zinc-400 " href="#">Account</a>
                        <a className="block underline text-zinc-400 " href="#">Corporate Information</a>
                        <a className="block underline text-zinc-400 " href="#">Only on Netflix</a>
                    </ul>
                    <ul>
                        <a className="block underline text-zinc-400 " href="#">Media Center</a>
                        <a className="block underline text-zinc-400 " href="#">Terms of Use</a>
                        <a className="block underline text-zinc-400 " href="#">Contact Us</a>
                    </ul>
                    </div>
                </div>
        </>
    )
}