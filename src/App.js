import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const NavBar = lazy(() => import("./components/NavBar"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AgenciesAndLinks = lazy(() => import("./pages/AgenciesAndLinks"));
const CommunityEvent = lazy(() => import("./pages/CommunityEvent"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Home = lazy(() => import("./pages/Home"));
const JPandRecruit = lazy(() => import("./pages/JPandRecruit"));
const NextGen = lazy(() => import("./pages/NextGen"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/agencies-and-links" element={<AgenciesAndLinks />} />
            <Route path="/community-events" element={<CommunityEvent />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/job-posting-and-recruitment"
              element={<JPandRecruit />}
            />
            <Route path="/next-generation-911" element={<NextGen />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
