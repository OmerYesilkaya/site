import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Home, ProjectDetails, Projects } from "@/pages";

const Layout = () => {
    return (
        <div className="bg-zinc-900 min-h-screen flex justify-center p-10 xl:p-32 bg-noise">
            <div className="xl:w-1/3 xl:min-w-[800px]">
                <Outlet />
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/projects/:name",
                element: <ProjectDetails />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
