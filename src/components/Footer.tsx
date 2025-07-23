import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { Info} from "../User.tsx";

const Footer =() => {
const socialLinks = [
        {link:"https://github.com/Vivek-Jha-05", icon:IconBrandGithub},
        {link:"https://www.linkedin.com/in/vivek-jha-18375a242/", icon:IconBrandLinkedin},
        {link:"https://www.instagram.com/vivek_.jha/", icon:IconBrandInstagram},
        {link:"https://leetcode.com/DEV_Vivek/", icon:IconBrandLeetcode},
    ];
const socialIcons = socialLinks.map((socialLink, index)=> {
        return <a href={`${socialLink.link}`} target='_blank' rel="noreferrer" className="vt323-regular text-lg text-textColor hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
            <socialLink.icon className=''size={30} />
        </a>
    })

    return <div className="mt-10 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="md-mx:flex gap-8 hidden sm-mx:gap-6">{socialIcons}</div>
        <div className="text-3xl text-primaryColor font-semibold md-mx:text-2xl">{Info.name}</div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name}<span className="xs-mx:hidden"> | </span> <span>All Rights Reserved</span></div>
    </div>
}

export default Footer;