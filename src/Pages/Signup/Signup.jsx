import React, { useEffect, useState } from "react";
import "./Signup.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import mayuri from '../../assets/temp.png'

const Signup = () => {
  const navigate = useNavigate();

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

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const slideProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: false,
    onRest: () => {
      // Do something on animation end if needed
    },
  });

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

  const handleSignUpGoogle = () => {
    try {
      window.open("https://seal-app-aximy.ondigitalocean.app/api/auth/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiSignUp = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://seal-app-aximy.ondigitalocean.app/api/signup",
        data: {
          fullName: fullName,
          email: email,
          password: password,
        },
      });

      return response;
    } catch (error) {
      // console.log("error " + error.response.data.message);
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      throw errorMessage;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    toast
      .promise(
        apiSignUp(),
        {
          loading: "Sign up...",
          success: "Signed up Successfully. Please log In",
          error: (errorMessage) => `Failed to sign up: ${errorMessage}`,
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
        // Check if the sign-up was successful (you can customize this based on your API response structure)
        if (res && res.status === 201) {
          // Introduce a delay before navigating to the login page
          await new Promise((resolve) => setTimeout(resolve, 1000)); // 1000 milliseconds (1 second) delay
          // Redirect to the login page
          navigate("/login");
        }
      });
  };

  return (
    <div className="logindiv">
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
          <h3 className="loginheading">Sign Up</h3>
          <h6 className="loginsubheading">
            Create account to unlock exclusive features.
          </h6>
        </div>

        <div className="signupinputdiv">
          <label className="emaillabel">Full Name</label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="emaiinput"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          ></input>
          <label className="emaillabel">Email</label>
          <input
            type="Email"
            placeholder="Enter your Email"
            className="emaiinput"
            onChange={(e) => {
              setEmail(e.target.value);
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
              handleSignUp(e);
            }}
          >
            Sign Up
          </button>
          <button
            className="googlebutton"
            onClick={(e) => {
              handleSignUpGoogle(e);
            }}
          >
            <div className="googlealign">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
                className="googlelogo"
              />
              <span className="googlelabel">Sign Up with Google</span>
            </div>
          </button>
          <label className="signup">
            Already have an Account ?{" "}
            <Link to="/login" style={{ "text-decoration": "none" }}>
              <a className="signupbutton">Login</a>
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
      <Toaster />
    </div>
  );
};

export default Signup;
