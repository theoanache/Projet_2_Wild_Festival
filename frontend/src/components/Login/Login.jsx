import React, { useEffect } from "react";
import "./Login.css";
import { CircleLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router";
import logoaccueil from "./assets/unknown.png";

const Login = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="loginPage">
      <AnimatePresence>
        <motion.div
          className="accueil"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="logoAccueil"
            src={logoaccueil}
            alt="logoaccueuil"
            initial={{ y: -80, x: 700, opacity: 0, scale: 0.3, rotate: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1, rotate: -360 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="loginPage__loader">
        {loading ? (
          <CircleLoader color="#554994" size="150" speedMultiplier="1.2" />
        ) : (
          <div className="login">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
