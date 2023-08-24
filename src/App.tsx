import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Home, ProjectDetails, Projects } from "@/pages";

const Layout = () => {
    return (
        <div className="bg-zinc-900 min-h-screen flex justify-center p-32 bg-noise">
            <div className="w-1/3 min-w-[800px]">
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
