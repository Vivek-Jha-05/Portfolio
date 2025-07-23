import { Avatar } from "@mantine/core";

const SkillBadge = (skills:[]) => {
    return (
        skills.map((skill:any, index:number) => <div key={index} className="flex gap-2 border-textColor py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1 border rounded-2xl items-center">
            <img className="w-[48px] bs-mx:w-[36px] xms-mx:w-[28px] !p-1" src={`/icons/${skill}.png`} />
            <div className="text-textColor text-xl">{skill}</div>
        </div>)
    )
}

const SkillCard = (props:any) => {
    return <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="w-[48%] bs-mx:w-[80%] md-mx:w-full shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border border-primaryColor p-5 bs-mx:p-3">
        <div className="text-3xl mb-4 text-white text-center font-bold sm-mx:text-2xl xms-mx:text-xl">{props.title}</div>
        <div className="flex flex-wrap gap-3 bs-mx:gap-2 justify-center">
            {SkillBadge(props.skills)}
        </div>
    </div>
}

export default SkillCard;