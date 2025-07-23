// import React, { useEffect, useState } from 'react';
// import { Info } from '../User.tsx';
// //@ts-ignore
// import DOTS from "vanta/src/vanta.dots";
// //@ts-ignore
// import TRUNK from "vanta/src/vanta.trunk";
// import Typewriter from 'typewriter-effect';
// import { Button, useMatches } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import ResumeViewer from './ResumeViewer.tsx';
// import { IconArrowRight, IconDownload } from '@tabler/icons-react';
// import { Particles } from './magicui/particles.tsx';
// import { NeonGradientCard } from './magicui/neon-gradient-card.tsx';

// const About = () => {
//     const [opened, { open, close }] = useDisclosure(false);

//     const btn = useMatches({
//         xs:'xs',
//         sm:'sm',
//         md:'md',
//         lg:'lg'
//     })

//     return (
//         <>
//             <div data-aos="zoom-out-up" data-aos-duration="800" className='mt-28 flex relative overflow-hidden vt323-regular items-center justify-around px-10 py-10 sm-mx:px-4 xs-mx:py-4 xs-mx:px-2 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 xs-mx:justify-between' id='bg'>
//                 <Particles
//                     className="absolute inset-0 -z-20 h-full"
//                     quantity={1000}
//                     ease={80}
//                     vx={.1}
//                     vy={.1}
//                     color="#64FFDA"
//                     refresh
//                 />
//                 <div className='bs:ml-20 font-mono flex flex-col w-3/5 lg-mx:gap-3 bs-mx:items-center md-mx:w-full' id='About'>
//                     <div className='text-3xl text-primaryColor lg-mx:text-2xl xs-mx:text-xl xms-mx:text-lg'>Hi, I am</div>
//                     <div className='text-white text-[4.25rem] font-bold font-mono lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xms-mx:text-[27px]'>{Info.name}</div>
//                     <div className='text-white text-4xl flex xms-mx:text-[10px] xs-mx:text-xsm lg-mx:text-[25px] sm-mx:text-xl'>I'm a&nbsp;<span className='text-primaryColor font-semibold'><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /></span></div>
//                     <div className='text-textColor text-xl my-8 lg-mx:my-0 text-justify w-[90%] font-semibold font-mono lg-mx:text-base sm-mx:text-sm xs-mx:text-xs'>{Info.bio}</div>
//                     <div className='flex gap-3'>
//                         <Button onClick={open} size={btn} variant="filled" color='#64FFDA' className='!text-bgColor !w-fit'>Check Resume </Button>
//                         <Button size={btn} variant="outline" color='#64FFDA' className='!text-primaryColor !w-fit' rightSection={<IconDownload size={20} />} component='a' href='/Vivek_Resume.pdf' download={Info.name} > Download </Button>
//                     </div>
//                 </div>
//                 <div className=' h-fit flex justify-center items-center w-fit bs:mr-14 rounded-full' id='photo'>
//                     <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center lg-mx:w-64 lg-mx:h-64 xms-mx:w-56 xms-mx:h-56">
//                         <img className='w-full h-full rounded-full ' src="/profile.png" alt="profile" />
//                     </NeonGradientCard>
//                 </div>
//             </div>
//             <ResumeViewer opened={opened} close={close} />
//         </>
//     )
// }

// export default About;

import React from 'react';
import { Info } from '../User.tsx';
import Typewriter from 'typewriter-effect';
import { Button, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResumeViewer from './ResumeViewer.tsx';
import { IconDownload } from '@tabler/icons-react';
import { Particles } from './magicui/particles.tsx';
import { NeonGradientCard } from './magicui/neon-gradient-card.tsx';

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    return (
        <>
            <div
                data-aos="zoom-out-up"
                data-aos-duration="800"
                id="bg"
                className="relative overflow-visible flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 gap-8  mt-24 md:mt-32 h-fit"
            >
                <Particles
                    className="absolute inset-0 -z-20 vt323-regular h-full"
                    quantity={1000}
                    ease={80}
                    vx={0.1}
                    vy={0.1}
                    color="#64FFDA"
                    refresh
                />

                {/* Left Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl bs:ml-20 font-mono w-3/5 lg-mx:gap-3 bs-mx:items-center md-mx:w-full " id="About">
                    <div className="text-primaryColor text-2xl md:text-3xl mb-1">Hi, I am</div>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{Info.name}</h1>
                    <h2 className="text-white font-mono text-xl sm:text-2xl md:text-3xl flex gap-1 items-center mt-2">
                        I'm a&nbsp;
                        <span className="text-primaryColor font-semibold">
                            <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }} />
                        </span>
                    </h2>
                    <p className="text-textColor text-base sm:text-lg md:text-xl font-semibold mt-4 md:mt-6 leading-relaxed text-balance">
                        {Info.bio}
                    </p>
                    <div className="flex gap-3 mt-6">
                        <Button onClick={open} size={btn} variant="filled" color="#64FFDA" className="!text-bgColor">
                            Check Resume
                        </Button>
                        <Button
                            size={btn}
                            variant="outline"
                            color="#64FFDA"
                            className="!text-primaryColor"
                            rightSection={<IconDownload size={20} />}
                            component="a"
                            href="Vivek_Resume.pdf"
                            download={Info.name}
                        >
                            Download
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                {/* <div className="flex justify-center items-center w-72 sm:w-80 md:w-80 lg:w-96">
          <NeonGradientCard className="w-full aspect-square rounded-full overflow-hidden">
            <img src="/profile.png" alt="profile" className="w-full h-full object-cover rounded-full" />
          </NeonGradientCard> */}
                <div className=' h-fit flex justify-center items-center w-fit bs:mr-14 rounded-full ' id='photo'>
                    <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center lg-mx:w-64 lg-mx:h-64 xms-mx:w-56 xms-mx:h-56">
                        <img className='w-full h-full rounded-full ' src="profile.png" alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>

            <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
