import QueryIcon from "@/assets/query.svg";
import ReduxIcon from "@/assets/redux.svg";
import JsIcon from "@/assets/js.svg";
import TsIcon from "@/assets/ts.svg";
import MotionIcon from "@/assets/motion.svg";
import NextJSIcon from "@/assets/next.svg";
import ThreeIcon from "@/assets/threejs.svg";
import TailwindIcon from "@/assets/tailwind.svg";
import ReactIcon from "@/assets/react.svg";
import HTMLIcon from "@/assets/html.svg";
import CSSIcon from "@/assets/css.svg";
import RemotionIcon from "@/assets/remotion.svg";

export const techStacks = {
    reactQuery: {
        icon: QueryIcon,
        title: "React Query",
        url: "https://tanstack.com/query/v3/",
    },
    redux: {
        icon: ReduxIcon,
        title: "Redux",
        url: "https://redux.js.org/",
    },
    js: {
        icon: JsIcon,
        title: "Javascript",
        url: "https://javascript.info/js",
    },
    ts: {
        icon: TsIcon,
        title: "Typescript",
        url: "https://www.typescriptlang.org/",
    },
    motion: {
        icon: MotionIcon,
        title: "Motion",
        url: "https://www.framer.com/motion/",
    },
    nextJS: { icon: NextJSIcon, title: "Next", url: "https://nextjs.org/" },
    three: { icon: ThreeIcon, title: "Three.js", url: "https://threejs.org/" },
    tailwind: {
        icon: TailwindIcon,
        title: "Tailwind",
        url: "https://tailwindcss.com/",
    },
    react: { icon: ReactIcon, title: "React", url: "https://react.dev/" },
    styledComponents: {
        icon: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
        title: "Styled Components",
        url: "https://styled-components.com/",
    },
    zustand: {
        icon: "https://avatars.githubusercontent.com/u/45790596?s=48&v=4",
        title: "Zustand",
        url: "https://zustand-demo.pmnd.rs/",
    },
    chakraUI: {
        icon: "https://avatars.githubusercontent.com/u/54212428?s=48&v=4",
        title: "Chakra UI",
        url: "https://chakra-ui.com/",
    },
    html: {
        icon: HTMLIcon,
        title: "HTML",
        url: "https://en.wikipedia.org/wiki/HTML",
    },
    css: {
        icon: CSSIcon,
        title: "CSS",
        url: "https://en.wikipedia.org/wiki/CSS",
    },
    remotion: {
        icon: RemotionIcon,
        title: "Remotion",
        url: "https://www.remotion.dev/",
    },
} as const;
