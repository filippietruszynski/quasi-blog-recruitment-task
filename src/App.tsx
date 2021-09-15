import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import NavBar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";

import * as api from "./api/requests";
import { IPosts } from "./components/types";

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPosts>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getAllPosts();
        setPosts(data);
      } catch (error) {
        toast.error("Unfortunately, we were unable to fetch posts.");
      }
    })();
  }, [setPosts]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={`/posts/:postId`} exact>
            <NavBar posts={posts} />
            <Post posts={posts} />
          </Route>
          <Route path="/posts" exact>
            <NavBar posts={posts} />
            <Posts posts={posts} />
          </Route>
          <Route path="/*">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </BrowserRouter>
      <CssBaseline />
      <ToastContainer />
    </>
  );
};

export default App;

// TODO: Solve NavBar multiplication
// TODO: Limit :postId routes to the number of posts returned from api
// TODO: Improve readability of styling code
// TODO: Implement real error handling
