import { IconHexagonLetterV } from '@tabler/icons-react';
import SideBar from "./SideBar.tsx";
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Burger, em } from '@mantine/core';
import { useEffect, useState } from 'react';

const links = ["About","Projects","Experience","Skills","Contact"];
const navLinks = (col:Boolean, clicked:any)=> {
    const handleClick=() => {
        if(clicked) clicked();
    }
    return links.map((link, index) => {
        return <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center' :''} text-textColor text-lg  vt323-regular hover:text-primaryColor`} href={`#${link}`} > 
            <span className="text-primaryColor ">0{index+1}. </span>
        {link}</a>
    })
}

const Header=()=> {
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);
    const controlNavbar = () => {
        if(window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
        else setShow(true);
        if(window.scrollY > 70) setShadow(true);
        else setShadow(false);
        setScrollY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    
    return (
        <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out z-10 top-0 fixed w-full justify-between bg-bgColor h-[17vh] md-mx:h-[10vh] px-10 dm-mono-regular items-center`}>
            <IconHexagonLetterV className="" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
            <div className="md:flex gap-8 hidden">
                {navLinks(false, null)}
            </div>
            <Burger className='md:!hidden -z-10' color='#64FFDA' size="lg" opened={opened} onClick={toggle} />
            <SideBar opened={opened} toggle={toggle} />
            {/* <SideBar/> */}
        </nav>
    );
}

export default Header;
export {navLinks};