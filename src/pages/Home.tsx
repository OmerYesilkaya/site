import { LatestProjects, ThreeJs } from "@/views";
import circleColor from "@/assets/circleColor.svg";

export const Home: React.FC = () => {
    return (
        <div className="gap-10 xl:gap-32 flex flex-col relative">
            <img
                src={circleColor}
                className="absolute w-full xl:w-1/4 xl:right-12 opacity-10 xl:opacity-30"
            />
            <ThreeJs />
            <div className="xl:w-2/3 w-full text-center xl:text-left xl:gap-0 gap-2 flex flex-col xl:mt-0 mt-40">
                <h2 className="text-zinc-300 font-medium text-3xl font-default">
                    Hello, I'm Omer 👋
                </h2>
                <p className="text-zinc-400 text-sm">
                    I'm a front-end developer with{" "}
                    <span className="text-sky-500 hover:text-sky-300 transition-all">
                        more than 3 years of experience
                    </span>
                    , specializing in creating high-performing and visually
                    appealing applications. Currently working with{" "}
                    <span className="text-sky-500 hover:text-sky-300 transition-all">
                        React
                    </span>{" "}
                    and{" "}
                    <span className="text-sky-500 hover:text-sky-300 transition-all">
                        Typescript
                    </span>
                    , I strive to improve user experiences through innovative
                    solutions and continuously stay up to date with the latest
                    web development technologies.
                </p>
            </div>
            <LatestProjects />
            <div className="mt-auto flex flex-col gap-8">
                <h2 className="text-zinc-300 font-medium text-2xl font-default">
                    Get in touch 🤙
                </h2>
                <div className="text-zinc-400">
                    Email me at{" "}
                    <a
                        href="mailto:omerfarukyesilkaya@gmail.com"
                        className=" font-default hover:text-white transition-all cursor-pointer"
                    >
                        omerfarukyesilkaya@gmail.com
                    </a>{" "}
                    or check my other socials below.
                </div>
                <div className="flex flex-col">
                    <a
                        href="https://github.com/OmerYesilkaya"
                        className="text-zinc-400 font-default hover:text-white transition-all cursor-pointer"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omer-yesilkaya-a6546b12b/"
                        className="text-zinc-400 font-default hover:text-white transition-all cursor-pointer"
                    >
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    );
};
