import { useState } from "react";
import cn from "classnames";
import { techStacks } from "@/constants";

const ProjectItem: React.FC<{
    projectName: string;
    companyName: string;
    techStack: (keyof typeof techStacks)[];
}> = ({ projectName, companyName, techStack }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
                "rounded-sm border border-zinc-500 p-1 shadow-lg hover:border-white transition-all cursor-pointer font-default ",
                {
                    "h-[300px]": isOpen,
                    "h-[34px]": !isOpen,
                }
            )}
        >
            <div className="flex justify-between">
                <div className="gap-3 flex h-min select-none">
                    <span className="bg-white text-zinc-900 px-2 rounded-sm text-xs items-center flex font-bold w-14 justify-center">
                        {companyName}
                    </span>
                    {projectName}
                </div>
                <div className="flex gap-1  select-none">
                    {techStack.map((stack) => (
                        <div>
                            <img
                                src={techStacks[stack].icon}
                                className="w-6 h-6 rounded-sm bg-white border border-white"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col mt-1">
                    <div className="w-full h-px bg-zinc-400" />
                    <p className="text-sm text-zinc-400 p-1">
                        Tempor tempor ipsum non in nulla laboris nulla. Culpa
                        irure fugiat ex dolor ex consectetur ut Lorem. Et qui
                        anim deserunt ullamco Lorem pariatur dolore
                        reprehenderit ea cillum nulla tempor do.
                    </p>
                </div>
            )}
        </div>
    );
};

export const Projects: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between items-center">
                <h4 className="text-zinc-300 font-medium text-2xl font-default select-none">
                    Latest Projects
                </h4>
                <button className="text-zinc-500 font-default underline hover:text-zinc-200 transition-all cursor-pointer decoration-dashed select-none">
                    See all
                </button>
            </div>
            <div className="flex flex-col gap-2 text-zinc-200">
                <ProjectItem
                    projectName="Author"
                    companyName="SEDDI"
                    techStack={["three", "redux", "ts", "styledComponents"]}
                />
                <ProjectItem
                    projectName="VTO"
                    companyName="SEDDI"
                    techStack={["redux", "ts", "styledComponents"]}
                />
                <ProjectItem
                    projectName="Vidyodan"
                    companyName="SHFT"
                    techStack={["reactQuery", "ts", "tailwind", "nextJS"]}
                />
            </div>
        </div>
    );
};
