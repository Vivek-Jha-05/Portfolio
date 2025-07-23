import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User.tsx";

const TimeLineItem = (items: any) => {
    const size = useMatches({
        xs: 15,
        md: 20
    })
    
    return items.map((item: any, index: number) => <Timeline.Item data-aos="fade-up" data-aos-duration="800" key={index} className="!pt-12 !mb-2 sm-mx:!p-1 " bullet={<IconBriefcaseFilled className="!text-bgColor" size={20}/>}>
        <div className="border border-primaryColor shadow-[0_0_10px_0_#64FFDA50] p-4 rounded-2xl flex flex-col gap-2 hover:-translate-y-2 transition transform duration-300 ease-in-out sm-mx:p-2">
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16 md-mx:w-14" src={`/icons/${item.company}.png`} alt="company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold md-mx:text-xl xs-mx:text-lg xms-mx:text-sm">{item.role}</div>
                    <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            <div className="text-textColor leading-6 md-mx:text-sm xs-mx:text-xs">
                {item.description}
            </div>
            <div className="text-lg font-medium text-textColor md-mx:text-base xs-mx:text-xs sm-mx:text-sm flex gap-1">
                <div className="font-semibold text-white">Skills:</div>
                <div className="flex gap-1 flex-wrap">
                {
                    item.skills.map((skill: any, index: number) => <div key={index}> &#x2022; {skill}</div>)
                }
                </div>
            </div>
        </div>
    </Timeline.Item>)
}

const Experience = () => {
    const size = useMatches({
        xs: 15,
        md: 20
    })
    const dot = useMatches({
        xs: 25,
        md: 30
    })
    return (
        <div className="pl-[96px] pr-[80px] my-10 mb-28 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 font-mono" id="Experience">
            <h1 className="text-4xl mb-10 font-bold text-center text-white sm-mx:text-2xl xs-mx:text-xl"><span className="text-primaryColor">04.&nbsp;</span>Experiences</h1>
            <Timeline active={5} bulletSize={dot} lineWidth={2} color="#64FFDA">
                {TimeLineItem(ExperienceInfo)}
                <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={20}/>}></Timeline.Item>
            </Timeline>
        </div>
    );
}

export default Experience;