import { Link } from "react-router-dom";
import { ProjectItem } from "@/components";
import { projects } from "@/constants";

export const Projects: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full flex justify-between">
                <h4 className="text-zinc-300 font-medium text-3xl font-default select-none">
                    Projects
                </h4>
                <Link to="/">
                    <button className="text-zinc-500 font-default underline hover:text-zinc-200 transition-all cursor-pointer decoration-dashed select-none underline-offset-4 whitespace-nowrap">
                        Go back home
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-2 text-zinc-200">
                {Object.keys(projects).map((project: keyof typeof projects) => {
                    return <ProjectItem key={project} name={project} />;
                })}
            </div>
        </div>
    );
};
