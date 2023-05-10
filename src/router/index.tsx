import { Navigate } from "react-router-dom";

import About from "@/views/AboutPage";
import Home from "@/views/HomePage";
import { lazy } from "react";
import Login from "@/views/Login";
// import User from "@/views/User";

const User = lazy(() => import('@/views/User'))

const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Navigate to='/user' />,
            },
            {
                path: '/user',
                element: <User />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/3/1',
                element: <div>/3/1</div>,
            },
            {
                path: '/3/2',
                element: <div>/3/2</div>,
            },
            {
                path: '/4/1',
                element: <div>/4/1</div>,
            },
            {
                path: '/4/2',
                element: <div>/4/2</div>,
            },
            {
                path: '*',
                element: <div>not found</div>
                // element: <Navigate to='/user' />
            }
        ]
    }
];


// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import App from "@/App";
// import Home from "@views/HomePage";
// import About from "@views/AboutPage";

// const AppRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}>
//                 <Route path="/" element={<Navigate to='/home' />}/>
//                 <Route path='/home' element={<Home />}/>
//                 <Route path="/about" element={<About/>}/>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )

// export default AppRouter;

export default routes;