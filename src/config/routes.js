import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Participants = React.lazy(() => import("../pages/Participants"));
const Schedule = React.lazy(() => import("../pages/Schedule"));
const Contests = React.lazy(() => import("../pages/Contests"));
const Gallery = React.lazy(() => import("../pages/Gallery"));
//const Stamps = React.lazy(() => import("../pages/Stamps"));

export const routes = [
  { path: "/", element: <Home />, label: "INICIO" },
  { path: "/participants", element: <Participants />, label: "PARTICIPANTES" },
  { path: "/schedule", element: <Schedule />, label: "CRONOGRAMA" },
  { path: "/contests", element: <Contests />, label: "ACTIVIDADES" },
  //{ path: "/stamps", element: <Stamps />, label: "COLECCIONADOR" },
  { path: "/gallery", element: <Gallery />, label: "GALERÍA" },
];
