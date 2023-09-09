import authorVideo from "@/assets/videos/author.mp4";
import choysesVideo from "@/assets/videos/choyses.mp4";
import cmosWebsiteVideo from "@/assets/videos/cmosWebsite.mp4";
// import fitroomVideo from "@/assets/videos/fitroom.mp4";
import onlineExpoVideo from "@/assets/videos/onlineExpo.mp4";
import rickAndMortyVideo from "@/assets/videos/rickAndMorty.mp4";
import sailingAndPeopleVideo from "@/assets/videos/sailingAndPeople.mp4";
import sudokuVideo from "@/assets/videos/sudoku.mp4";
import trelloVideo from "@/assets/videos/trello.mp4";
import vidyodanVideo from "@/assets/videos/vidyodan.mp4";

export const projects = {
    author: {
        video: authorVideo,
        title: "Author",
        description:
            "It’s a cloud-native 3D CAD platform that’s tailor made for apparel development, giving you a shared web environment to accurately prototype garments, simulate fit and make decisions together.",
        company: "SEDDI",
        accomplishments: [
            "Revamped the user interface of the web-based garment engineering CAD tool, delivering a modernized and improved look and feel to enhance user experience.",
            "Led a successful migration of the entire codebase to TypeScript, streamlining development processes and improving overall code quality and maintainability.",
            "Created and maintained a reusable UI component library using Styled Components and Storybook, which significantly reduced development time and improved consistency across the front-end team's projects.",
            "Implemented enhancements to existing tools and systems, both for developers and users, improving performance, functionality, and usability.",
        ],
        techStack: ["ts", "redux", "styledComponents", "three", "react"],
    },
    // vto: {
    //     video: fitroomVideo,
    //     title: "Fitroom",
    //     description:
    //         "A virtual try-on project that allows users to try on the garments created in Author or on any other CAD tool on a custom tailored virtual avatar.",
    //     company: "SEDDI",
    //     accomplishments: [
    //         "As one of the select developers entrusted with the responsibility of devising a cutting-edge virtual fashion try-on solution, I played an integral role in developing a platform that empowers users to effortlessly simulate custom avatars, try-on different garments and make informed purchasing decisions with ease.",
    //     ],
    //     techStack: ["ts", "redux", "styledComponents", "three", "react"],
    // },
    vidyodan: {
        video: vidyodanVideo,
        title: "Vidyodan",
        description:
            "An e-commerce platform that integrates short video presentations for products, offering a dynamic glimpse of items in action. By allowing users to follow influencers who create content with specific products, the site combines the appeal of social media with online shopping, providing an engaging and unique shopping experience.",
        company: "SHFT",
        accomplishments: [
            "Transformed multiple complex Figma designs into highly usable and performant web applications using modern frameworks like Next.js and Tailwind UI.",
            "Contributed to the development of a full-scale e-commerce application, including implementing secure checkout flows with bank verifications, designing intuitive message verification interfaces, and developing filterable, sortable, and paginated product discovery pages.",
        ],
        techStack: ["ts", "tailwind", "reactQuery", "nextJS"],
    },
    choyses: {
        video: choysesVideo,
        title: "Choyses Workbench",
        description:
            "A web application to create movies with branching decision-based stories. Your choises will affect how your movie will play out.",
        company: "CMOS",
        accomplishments: [
            "Leveraged HTML Canvas extensively to design visually engaging and interactive interfaces, pushing the limits of graphic design and interactivity",
        ],
        techStack: ["ts", "react", "tailwind"],
    },
    sailingAndPeople: {
        video: sailingAndPeopleVideo,
        title: "Sailing And People",
        description:
            "Yatch renting web application. Look through the yatchs and reserve it. Have your next vacation out in the seas.",
        company: "CMOS",
        accomplishments: [
            "Created user-friendly content management panels that allowed customers to easily manage and control their applications.",
        ],
        techStack: ["js", "react", "tailwind"],
    },
    cmosWeb: {
        video: cmosWebsiteVideo,
        title: "Cmos Website",
        description: "3D themed CMOS company website.",
        company: "CMOS",
        accomplishments: [
            "Created user-friendly content management panels that allowed customers to easily manage and control their applications.",
        ],
        techStack: ["ts", "react", "three", "tailwind"],
    },
    multiTenantAdminPanel: {
        video: onlineExpoVideo,
        title: "Multi-tenant Admin Panel",
        description:
            "A multi-tenant admin panel. Great tool to control multiple applications with similar admin panel needs.",
        company: "CMOS",
        accomplishments: [
            "Utilized RESTful API services to seamlessly retrieve and send data across multiple applications, enhancing overall system integration and efficiency.",
        ],
        techStack: ["ts", "react", "chakraUI"],
    },
    rickAndMortyDb: {
        video: rickAndMortyVideo,
        title: "Rick & Morty DB",
        description:
            "A pretty user interface using an example API for the tv show we all love.",
        company: "PERSONAL",
        techStack: ["ts", "react", "tailwind", "reactQuery"],

        url: "https://github.com/OmerYesilkaya/rick-and-morty-code-challenge",
    },
    sudoku: {
        video: sudokuVideo,
        title: "Sudoku Game",
        description:
            "Simple sudoku game using Zustand as state management tool.",
        company: "PERSONAL",
        techStack: ["ts", "react", "zustand", "chakraUI"],
        url: "https://github.com/OmerYesilkaya/sudoku-web-case-study",
    },
    trelloClone: {
        video: trelloVideo,
        title: "Trello Clone",
        description:
            "A Trello clone project to get better at using the drag&drop API.",
        company: "PERSONAL",
        techStack: ["ts", "chakraUI", "react", "motion", "zustand"],
        url: "https://github.com/OmerYesilkaya/trello-copy-study",
    },
} as const;
