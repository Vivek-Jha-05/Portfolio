import { SkillInfo } from "../User.tsx";
import SkillCard from "./SkillCard.tsx";

const Skills = () => {
    return (
        <div className="pl-[96px] pr-[80px] my-10 mb-10 mt-20 md-mx:px-6 font-mono " id="Skills">
            <h1 className="text-4xl mb-10 font-bold text-center text-white sm-mx:text-3xl xs-mx:text-2xl"><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
            <div className="flex flex-wrap justify-around gap-4 md-mx:gap-2 sm-mx:justify-center">
            {
                SkillInfo.map((skill: any, index:number)=> <SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
        </div>
    );
}

export default Skills;