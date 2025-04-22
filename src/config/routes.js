import Home from "../pages/Home";
import Participants from "../pages/Participants";
import Schedule from "../pages/Schedule";
import Contests from "../pages/Contests";
import Gallery from "../pages/Gallery";

export const routes = [
  { path: "/", element: <Home />, label: "INICIO" },
  { path: "/participants", element: <Participants />, label: "PARTICIPANTES" },
  { path: "/schedule", element: <Schedule />, label: "CRONOGRAMA" },
  { path: "/contests", element: <Contests />, label: "ACTIVIDADES" },
  { path: "/gallery", element: <Gallery />, label: "GALERÍA" },
];
