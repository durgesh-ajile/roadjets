/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import mayuri from '../../assets/temp.png'

const Login = () => {
  // Testimonials data
  const testimonials = [
    {
      text: "Being a female traveller, I often faced issues like safety. Taking a nap while traveling was a challenge. Now I can happily rely on RoadJett without any fear. The best part is that they always have a female prevention system.",
      user: "Mayuri Rao (techie @Microsoft)",
      img: mayuri
    },
    {
      text: "Thank you Roadjets for making intercity travel simple quicker and affordable. I often faced the problem to go to my office at gachibowli because of multiple modes of transportation i have to take leading to high cost and time",
      user: "Vishwak Reddy (operation manager @phenome)",
      img: "https://img.icons8.com/ios-filled/50/F25081/standing-woman.png"
    },
    // Add more testimonials as needed
  ];

  const slideProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: false,
    onRest: () => {
      // Do something on animation end if needed
    },
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Function to show the next testimonial
  const showNextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  // Function to show the previous testimonial
  const showPrevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogInGoogle = () => {
    try {
      window.open("https://curious-hare-jersey.cyclic.app/api/auth/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const apiLogin = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://curious-hare-jersey.cyclic.app/api/login",
        data: {
          username: username,
          password: password,
        },
        withCredentials: true,
      });

      return response;
    } catch (error) {
      // Handle authentication error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      } else {
        throw "An error occurred during login";
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    toast
      .promise(
        apiLogin(),
        {
          loading: "Sign up...",
          success: "Logged in Successfully",
          error: (errorMessage) => `Failed to Log in: ${errorMessage}`,
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
      )
      .then(async (res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        // Check if the sign-up was successful (you can customize this based on your API response structure)
        if (res && res.status === 201) {
          // Introduce a delay before navigating to the login page
          await new Promise((resolve) => setTimeout(resolve, 2000)); // 1000 milliseconds (1 second) delay
          // Redirect to the login page
          navigate("/");
        }
      });
  };

  return (
    <div className="logindiv">
      <Toaster />
      <div className="testimonial">
        <label className="testimonialtitle">RoadRider Testimonials</label>
        <div className="testimonialmain">
          <animated.p className="testimonialmainpara" style={slideProps}>
            {testimonials[currentTestimonialIndex].text}
          </animated.p>
          <div className="testimonialmaininner">
            <div className="usercomment">
              <img
                width="50"
                height="50"
                src={testimonials[currentTestimonialIndex].img}
                alt="standing-woman"
                className="womensvg"
              />
              <animated.h3 className="username" style={slideProps}>
                {testimonials[currentTestimonialIndex].user}
              </animated.h3>
            </div>
            <button className="testimonialreadmebtn">Read More</button>
          </div>
        </div>
        <div className="testimonialnavigate">
        <button className="testimonalleft" onClick={showPrevTestimonial}>
            <FaArrowLeft />
          </button>
          <button className="testimonalright" onClick={showNextTestimonial}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="loginmaindiv">
        <div className="welcomemsg">
          <h3 className="loginheading">Login</h3>
          <h6 className="loginsubheading">
            Welcome back! Please log in to access your account.
          </h6>
        </div>

        <div className="logininputdiv">
          <label className="emaillabel">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            className="emaiinput"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <label className="passwordlabel">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="passwordinput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <a href="" className="forgotpass">
            Forgot Password ?
          </a>
        </div>
        <div className="buttondiv">
          <button
            className="loginbutton"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Login
          </button>
          <button className="googlebutton">
            <div className="googlealign">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
                className="googlelogo"
              />
              <span className="googlelabel" onClick={handleLogInGoogle}>
                Login with Google
              </span>
            </div>
          </button>
          <label className="signup">
            Don't have an account ?{" "}
            <Link to="/signup" style={{ "text-decoration": "none" }}>
              <a href="" className="signupbutton">
                Sign Up
              </a>
            </Link>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/000000/down-left-arrow.png"
              alt="down-left-arrow"
              className="arrowright"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
