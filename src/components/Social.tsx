import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react';

const Social = ()=> {
    const socialLinks = [
        {link:"https://github.com/Vivek-Jha-05", icon:IconBrandGithub},
        {link:"https://www.linkedin.com/in/vivek-jha-18375a242/", icon:IconBrandLinkedin},
        {link:"https://www.instagram.com/vivek_.jha/", icon:IconBrandInstagram},
        {link:"https://leetcode.com/DEV_Vivek/", icon:IconBrandLeetcode},
    ];
    const socialIcons = socialLinks.map((socialLink, index)=> {
        return <a href={`${socialLink.link}`} target='_blank' className="vt323-regular text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            <div data-aos="fade-up-left" data-aos-duration="800"><socialLink.icon className='-rotate-90' size={30} /></div>
        </a>
    })
    return <div className="flex items-center text-textColor gap-10 fixed bottom-40 -left-40 rotate-90 md-mx:hidden">
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
    </div>
}

export default Social;