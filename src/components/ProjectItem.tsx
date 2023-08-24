import { useNavigate } from "react-router-dom";
import { projects } from "@/constants";

export const ProjectItem: React.FC<{
    name: keyof typeof projects;
}> = ({ name }) => {
    const navigate = useNavigate();
    return (
        <div
            className="rounded-sm border border-zinc-500 px-3 py-2 shadow-lg hover:border-sky-500 transition-all cursor-pointer font-default relative"
            onClick={() => navigate(`/projects/${name}`)}
        >
            {/* TODO(omer): For some reason `as const` doesn't recognize conditional parameters. Find a way to include url in project types.  */}
            {(projects[name] as any).url && (
                <a
                    onClick={(e) => e.stopPropagation()}
                    href={(projects[name] as any).url}
                    className="absolute w-8 h-8 top-2 right-3 p-1 rounded-full hover:bg-white/10 transition-all"
                >
                    🔗
                </a>
            )}
            <div className="flex flex-col">
                <span className="text-zinc-500 text-sm leading-3">
                    {projects[name].company}
                </span>

                <div className="flex">
                    <h4 className="text-lg font-semibold">
                        {projects[name].title}
                    </h4>
                </div>

                <span className="text-zinc-400 text-sm">
                    {projects[name].description}
                </span>
            </div>
        </div>
    );
};
