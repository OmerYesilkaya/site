import { Link } from "react-router-dom";
import { ProjectItem } from "@/components";

export const LatestProjects: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between items-center">
                <h4 className="text-zinc-300 font-medium text-2xl font-default select-none">
                    Latest Projects
                </h4>
                <Link to="/projects">
                    <button className="text-zinc-500 font-default underline hover:text-zinc-200 transition-all cursor-pointer decoration-dashed select-none underline-offset-4">
                        See all
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-2 text-zinc-200">
                <ProjectItem name="author" />
                {/* <ProjectItem name="vto" /> */}
                <ProjectItem name="vidyodan" />
                <ProjectItem name="choyses" />
            </div>
        </div>
    );
};
