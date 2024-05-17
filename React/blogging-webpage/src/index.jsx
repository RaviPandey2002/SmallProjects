import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createRoutesFromChildren,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Post from "./components/CreatePost/CreatePost";
import App from "./App";
import PostPage from "./components/PostPage/PostPage";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: 'home',
//           element: <Home title={title} />
//         },
//         {
//           path: 'post',
//           element: <Post />
//         },
//         {
//           path: 'about',
//           element: <About />
//         }
//       ]
//     }
//   ]
// );

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="post" element={<Post />} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

export default App;

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
