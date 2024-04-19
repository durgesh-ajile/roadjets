// import React from 'react'
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import axios from "axios";
import { Button } from "react-scroll";
import toast, { Toaster } from "react-hot-toast";
import ContentLoader from "react-content-loader";

const Navbar = () => {
  const location = useLocation();
  const selected = {
    borderRadius: "8px",
    background: "var(--white-95, #F1F1F3)",
  };
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://seal-app-aximy.ondigitalocean.app/api/auth/check",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 202) {
          console.log(response);
          setLoading(false);
          setIsAuth(true);
          setUserData(response.data.user);
        }
      } catch (err) {
        console.log(err.response);
        setLoading(false);
        if (err.response.status === 401) {
          setIsAuth(false);
        }
      }
    };

    checkAuthentication();
  }, [token]);

  const apilogOut = async () => {
    localStorage.removeItem("token");
    axios({
      method: "post",
      url: "https://seal-app-aximy.ondigitalocean.app/api/logout",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setIsAuth(false);
        return "Logout successfully";
      })
      .catch((err) => {
        console.log(err);
        throw "Something went wrong";
        // setLoading(false);
      });
  };

  const handleLogout = async () => {
    toast.promise(
      apilogOut(),
      {
        loading: "Sign up...",
        success: "Logout successfully",
        error: "something went wrong",
      },
      {
        style: {
          minWidth: "250px",
          backgroundColor: "black",
          color: "white",
        },
        success: {
          duration: 5000,
          icon: "🚀",
        },
      }
    );
  };

  const SkeletonLoader = () => (
    <ContentLoader
      speed={2}
      width={180}
      height={40}
      viewBox="0 0 120 40"
      backgroundColor="#D3D3D3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="120" height="40" />
    </ContentLoader>
  );

  return (
    <div className="navbar" id="navbar">
      <Toaster />
      <div className="nav-title" onClick={() => {
        navigate("/services")
      }}>
        <span style={{ marginRight: "10px" }}>
        Tired Of City Travel Delays? Book Raodjets 🚗🚀 & Experience The Difference
        </span>
        <FaArrowRight id="arrow-icon" />
      </div>
      <div className="nav-links">
        <Link to="/">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Link>
        <div className="links">
          <Link className="navigatelink" to="/">
            <div style={location.pathname === "/" ? selected : null}>Home</div>
          </Link>
          <Link className="navigatelink" to="/services">
            <div style={location.pathname === "/services" ? selected : null}>
              Services
            </div>
          </Link>
          <Link className="navigatelink" to="/about">
            <div style={location.pathname === "/about" ? selected : null}>
              About Us
            </div>
          </Link>
          {/* <div style={location.pathname === "/pricing" ? selected : null}>Pricing</div> */}
          <Link className="navigatelink" to="/contactus">
            <div style={location.pathname === "/contactus" ? selected : null}>
              Contact Us
            </div>
          </Link>
        </div>

        {loading ? (
          <SkeletonLoader />
        ) : isAuth ? (
          <div className="loggedUser">
            <div className="user-welcome">
              Welcome, User! {userData.FullName}
            </div>
            <button className="logoutbtn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="signup-in">
            <Link className="navigatelink" to="/signup">
              <button id="signup-btn">Sign Up</button>
            </Link>
            <Link className="navigatelink" to="/login">
              <button id="login-btn">Login</button>
            </Link>
          </div>
        )}

        <div id="sidebar">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = ({
  userData,
  isAuthenticated,
  showPopup,
  setShowPopup,
  select,
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const NavbarboxRef = useRef(null);
  const location = useLocation();

  const handleLogout = () => {
    axios({
      method: "get",
      url: "https://api.speakerore.com/api/logout",
      withCredentials: true,
    })
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggle = () => {
    const box = NavbarboxRef.current;
    // Apply initial styles
    box.style.transition = "transform 0.3s ease-in-out";
    box.style.transform = sidebarToggle && "translateX(70%)";
    box.style.right = !sidebarToggle && "-21%";
    box.style.display = sidebarToggle ? "block" : "none";

    // Delay style changes to ensure initial styles are applied before transition
    setTimeout(() => {
      box.style.transition = "transform 0.3s ease-out";
      box.style.transform = sidebarToggle
        ? "translateX(-0%)"
        : "translateX(70%)";
      box.style.right = sidebarToggle ? "0%" : "-21%";
    }, 200);
    setSidebarToggle(!sidebarToggle);
  };
  // const handleSignInClick = () => {
  //   setShowPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <div className="Navbar_coontainer">
        <Link to="/">
          <div className="Navbar_logo">{/* <img src={logo} alt="" /> */}</div>
        </Link>
        <div onClick={() => handleToggle()} className="Navbar_hambergure_icon">
          <h4 style={{ marginRight: "10px" }}></h4>
          <GiHamburgerMenu />
        </div>
      </div>
      {!sidebarToggle && (
        <div
          onClick={() => handleToggle()}
          className="Eventlist_speakerore_sidebar_empty_div"
        ></div>
      )}
      {
        // !sidebarToggle &&
        <div
          ref={NavbarboxRef}
          id="Navbar_sidebar_id"
          className="Navbar_sidebar"
        >
          <div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="Navbar_inputfield">
              <div>
                <Link to="/">
                  <div
                    className="nav-select"
                    id={location.pathname === "/" ? "side-select" : ""}
                    onClick={() => handleToggle()}
                  >
                    Home
                  </div>
                </Link>
                <Link to="/Services">
                  <div
                    className="nav-select"
                    id={location.pathname === "/Services" ? "side-select" : ""}
                    onClick={() => handleToggle()}
                  >
                    Services
                  </div>
                </Link>
                <Link to="/About">
                  <div
                    className="nav-select"
                    id={location.pathname === "/About" ? "side-select" : ""}
                    onClick={() => handleToggle()}
                  >
                    About Us
                  </div>
                </Link>
                <Link to="/Contactus">
                  <div
                    className="nav-select"
                    id={location.pathname === "/Contactus" ? "side-select" : ""}
                    onClick={() => handleToggle()}
                  >
                    Contacts
                  </div>
                </Link>
              </div>
            </div>
            <hr />
            {isAuth ? (
              <div className="logout" style={{ marginTop: "20px" }}>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                  <IoMdLogOut />{" "}
                  <span style={{ margin: "2px 0 0 3px" }}>Logout</span>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
