import { useParams, Link } from "react-router-dom";
import { projects, techStacks } from "@/constants";

export const ProjectDetails: React.FC = () => {
    const { name } = useParams();
    const projectDetails = projects[name];

    return (
        <div className="flex flex-col font-default gap-6">
            <div className="flex w-full justify-between">
                <div>
                    <h4 className="text-zinc-500 text-xl leading-3">
                        {projectDetails.company}
                    </h4>
                    <h2 className="text-zinc-400 text-4xl font-bold">
                        {projectDetails.title}
                    </h2>
                </div>
                <Link to="/projects">
                    <button className="text-zinc-500 font-default underline hover:text-zinc-200 transition-all cursor-pointer decoration-dashed select-none underline-offset-4">
                        Go back
                    </button>
                </Link>
            </div>
            <video
                src={projectDetails.video}
                className="w-full object-contain rounded-lg overflow-hidden"
                muted
                autoPlay
                loop
            />
            <div className="text-zinc-400">{projectDetails.description}</div>
            {projectDetails.accomplishments &&
                projectDetails.accomplishments.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <h4 className="text-zinc-400 text-2xl font-semibold">
                            Accomplishments
                        </h4>
                        {projectDetails.accomplishments.map((a) => {
                            return <li className="text-zinc-400">{a}</li>;
                        })}
                    </div>
                )}
            <div className="flex flex-col gap-2">
                <h4 className="text-zinc-400 text-2xl font-semibold">
                    Technology Stack
                </h4>
                <div className="flex rounded-md bg-zinc-900">
                    {projectDetails.techStack.map((stack) => {
                        return (
                            <a
                                className="border-r-2 border-zinc-950 p-2 hover:brightness-50 transition-all cursor-pointer"
                                title={techStacks[stack].title}
                                href={techStacks[stack].url}
                            >
                                <img
                                    src={techStacks[stack].icon}
                                    className="w-10 h-10"
                                />
                            </a>
                        );
                    })}
                </div>
                di
            </div>
        </div>
    );
};
