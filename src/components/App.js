import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
