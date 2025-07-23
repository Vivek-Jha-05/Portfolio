import { ProjectInfo } from "../User.tsx";
import ProjectCard from "./ProjectCard.tsx";


const Projects = () => {
    return (
        <div className="pl-[96px] pr-[80px] mb-15 mt-10 md-mx:px-6 font-mono " id="Projects">
            <h1 className="text-4xl mb-5 font-bold text-center text-white sm-mx:text-3xl xs-mx:text-2xl"><span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
            <div className="flex flex-wrap justify-around gap-4 md-mx:gap-2 sm-mx:justify-center">
                {
                    ProjectInfo.map((project:any, index:number) => <ProjectCard key={index } title={project.title} description={project.description} status={project.status} image={project.image} live={project.live} link={project.link} github={project.github} techStack={project.techStack} type={project.type} />)
                }
            </div>
        </div>
    );
}

export default Projects;