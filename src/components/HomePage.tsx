import React, { useEffect, useState } from "react";
import Header from "./Header.tsx"
import Mail from "./Mail.tsx";
import Social from "./Social.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Skills from './Skills.tsx';
import Experience from "./Experience.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import { Loader } from "./Loader.tsx";
import { Toaster } from 'react-hot-toast';

const HomePage = ()=> {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])

    return <div>
        { loading !== true ? <>
        <Toaster/>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        <Mail/>
        <Social/>
        </> :
        <div className="min-h-[100vh] flex items-center overflow-hidden justify-center" >
        <Loader />
        </div>}
    </ div>
};

export default HomePage;