import React from "react";

const Mail = ()=> {
    return <div className="!flex !items-center text-textColor gap-10 fixed bottom-40 -right-40 rotate-90" >
        <div data-aos-duration="800" data-aos="fade-down-left" className="flex">
        <a href="mailto:vjha11090@gmail.com" className="vt323-regular md-mx:hidden text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            Vjha1109@gmail.com
        </a>
        </div>
        <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor md-mx:hidden"/>
    </div>
}
export default Mail;