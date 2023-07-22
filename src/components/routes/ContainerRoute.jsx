import React from "react";
import {
  Home,
  Fashion,
  Jewels,
  Makeup,
  Models,
  Photo,
  Rent,
  Studio,
  Video,
  Profile,PageNotFound, EditProfile
} from "../../pages";
import { Routes, Route } from "react-router-dom";
import { Header, NavBar, Footer } from "../../components";
import ResetConfirm from "../auth/ResetConfirm";
import PrivateRoute from "./PrivateRoute";

const ContainerRoute = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container-fluid px-0">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fashion" element={<Fashion />} />
          <Route exact path="/jewels" element={<Jewels />} />
          <Route exact path="/makeup" element={<Makeup />} />
          <Route exact path="/models" element={<Models />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/rent" element={<Rent />} />
          <Route exact path="/studio" element={<Studio />} />
          <Route exact path="/video" element={<Video />} />
          <Route exact path="/confirm" element={<ResetConfirm />} />
          <Route exact path="/:username" element={<Profile />} />
          <Route element={<PrivateRoute />}>
             <Route exact path ='/:username/edit' element={<EditProfile/>} />
          </Route>
          <Route path="*" element = {<PageNotFound/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default ContainerRoute;
