import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogIn from "./components/Login/FormLogin";
import Loading from "./components/HomePage/Loading/Loading";
import HomePage from "./components/HomePage/HomePageArtistList/HomePageArtistList";
import Pageresa from "./components/Formresa/Pageresa";
import Login from "./components/Login/Login";
import Faq from "./components/FAQ/Faq";
import ArtistPage from "./components/Artiste-page/Artist-page";
import Mention from "./components/Mentions/Mention";
import FestivalPage from "./components/Festival-page/Festival-page";
import Footer from "./components/Footer/Footer";
import PageFullArtist from "./components/PageFullArtist/PageFullArtist";
import PageFullFestival from "./components/PageFullFestival/PageFullFestival";
import ScrollToTop from "./components/ScrolltoTop";
import FormFirstConnexion from "./components/Login/FormFirstConnexion";
import FormForget from "./components/Login/FormForget";
import PageContact from "./components/contact/PageContact";
import "./App.css";

const App = () => {
  const [selectedFestival, setSelectedFestival] = useState("");
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Login />}>
                <Route path="" element={<FormLogIn />} />
                <Route
                  path="premiere-connexion"
                  element={
                    <FormFirstConnexion
                      userName={userName}
                      setUserName={setUserName}
                      userAvatar={userAvatar}
                      setUserAvatar={setUserAvatar}
                    />
                  }
                />
                <Route path="mot-de-passe-oublie" element={<FormForget />} />
              </Route>
              <Route
                path="/home"
                element={
                  <HomePage userName={userName} userAvatar={userAvatar} />
                }
              />
              <Route
                path="/artiste"
                element={
                  <PageFullArtist userName={userName} userAvatar={userAvatar} />
                }
              />
              <Route
                path="/festival"
                element={
                  <PageFullFestival
                    userName={userName}
                    userAvatar={userAvatar}
                  />
                }
              />
              <Route
                path="/reservation"
                element={
                  <Pageresa
                    userName={userName}
                    userAvatar={userAvatar}
                    selectedFestival={selectedFestival}
                  />
                }
              />
              <Route
                path="/artiste/:artistName"
                element={
                  <ArtistPage userName={userName} userAvatar={userAvatar} />
                }
              />
              <Route
                path="/mentions-legales"
                element={
                  <Mention userName={userName} userAvatar={userAvatar} />
                }
              />
              <Route
                path="/Faq"
                element={<Faq userName={userName} userAvatar={userAvatar} />}
              />
              <Route
                path="/festival/:id"
                element={
                  <FestivalPage
                    userName={userName}
                    userAvatar={userAvatar}
                    selectedFestival={selectedFestival}
                    setSelectedFestival={setSelectedFestival}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <PageContact userName={userName} userAvatar={userAvatar} />
                }
              />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
