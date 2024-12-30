import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./home.css";
import {
  FaSignInAlt,
  FaUserFriends,
  FaCommentDots,
  FaUsers,
  FaImage,
  FaLock,
} from "react-icons/fa";

function randomImageUrl() {
  const images = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I sign up?",
      answer:
        "To sign up, simply click on the 'Get Started' button and follow the registration process.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use end-to-end encryption to keep your data safe and secure.",
    },
    {
      question: "Can I use the chat application on multiple devices?",
      answer:
        "Absolutely! Our chat application syncs across all your devices, so you can stay connected wherever you are.",
    },
    {
      question: "How can I customize my notifications?",
      answer:
        "You can customize your notification settings in the app's settings menu. Choose which notifications you want to receive and how you want to be alerted.",
    },
    {
      question: "What file formats are supported for file sharing?",
      answer:
        "Our chat application supports a wide range of file formats including documents, images, videos, and more. Check the file upload section for specific formats.",
    },
    {
      question: "Can I create group chats?",
      answer:
        "Yes, you can create and manage group chats. Invite your friends or colleagues and collaborate seamlessly.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "If you forget your password, use the 'Forgot Password' feature on the login page to reset it. Follow the instructions sent to your registered email address.",
    },
    {
      question: "How do I report a problem or bug?",
      answer:
        "To report a problem or bug, please contact our support team through the app's help section or send an email to support@ourchatapp.com.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/logo/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-5"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-screen p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center text-white leading-tight">
            Connect. Chat. Explore.
          </h1>
          <p className="text-lg md:text-2xl text-center max-w-3xl text-white">
            Dive into real-time chat with friends, make meaningful connections,
            and share moments across the globe—all from the palm of your hand.
          </p>
          <div className="mt-16">
            <Link
              to="/login"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 bg-gray-100">
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-medium text-center mb-12 text-black font-playfair">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature 1 */}
            <div className="animated-gradient p-8 rounded-lg shadow-lg text-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-4xl text-white">
                <FaCommentDots />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Real-Time Messaging
              </h3>
              <p className="text-gray-300">
                Instantly connect and chat with people around the globe without
                delay.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="animated-gradient p-8 rounded-lg shadow-lg text-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-4xl text-white">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Group Chats
              </h3>
              <p className="text-gray-300">
                Create or join group conversations with friends, coworkers, or
                communities.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="animated-gradient p-8 rounded-lg shadow-lg text-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-4xl text-white">
                <FaImage />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Media Sharing
              </h3>
              <p className="text-gray-300">
                Share photos, videos, and files easily with your contacts.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="animated-gradient p-8 rounded-lg shadow-lg text-center max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="mb-4 text-4xl text-white">
                <FaLock />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Secure & Private
              </h3>
              <p className="text-gray-300">
                Enjoy end-to-end encryption to keep your conversations private
                and secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-16 bg-cover bg-center section3-bg">
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8 text-white animate__animated animate__fadeIn animate__delay-1s font-playfair">
            How It Works
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xs transform transition-transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s animate__animated animate__slideInUp">
              <div className="text-4xl text-blue-600 mb-4 animate__animated animate__bounceIn">
                <FaSignInAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Sign Up
              </h3>
              <p className="text-gray-600">
                Join the platform with a simple registration process.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xs transform transition-transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s animate__animated animate__slideInUp">
              <div className="text-4xl text-blue-600 mb-4 animate__animated animate__bounceIn">
                <FaUserFriends />
              </div>
              <h3 className=" text-xl font-semibold mb-2 text-gray-800">
                Connect
              </h3>
              <p className="text-gray-600 ">
                Find and connect with friends or join groups of interest.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xs transform transition-transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-4s animate__animated animate__slideInUp">
              <div className="text-4xl text-blue-600 mb-4 animate__animated animate__bounceIn">
                <FaCommentDots />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Start Chatting
              </h3>
              <p className="text-gray-600">
                Engage in conversations, share media, and more!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*testimonials*/}
      <div className="py-12 bg-gray-200 text-blue-900">
        {" "}
        {/* Light background color */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left md:w-6/12 md:ml-20">
            <h2 className="text-2xl md:text-6xl mb-6 font-playfair text-black">
              Our{" "}
              <span className="text-2xl md:text-6xl font-playfair text-blue-900">
                Testimonials
              </span>
            </h2>
            <p className="text-base md:text-lg mb-4 text-gray-800 font-playfair">
              Let's have a look at the feedback of our customers
            </p>
            <p className="text-base md:text-lg mb-4 text-gray-800 font-playfair">
              We are thrilled to share with you the heartfelt feedback from our
              valued users. Their words not only bring joy to our team but also
              highlight how Gupshap is making a positive impact in their lives.
              From connecting with old friends to discovering new communities,
              these testimonials reflect the moments that Gupshap helps to make
              memorable and cherished forever.
            </p>
          </div>

          {/* Right Side Testimonials */}
          <div className="flex-1 md:w-5/12 flex flex-col gap-6 px-6">
            {/* Testimonial 1 */}
            <div className="flex items-center bg-white px-3 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={randomImageUrl()}
                alt="Profile 1"
                className="w-12 h-12 rounded-full mr-4 object-cover shadow-md"
              />
              <div>
                <p className="font-semibold">- Jane Doe</p>
                <p className="text-sm mb-2 text-gray-800">
                  “Gupshap has transformed the way I connect with friends. It's
                  fast, reliable, and secure! I can now effortlessly stay in
                  touch with everyone that matters to me, no matter where I am.
                  The app's intuitive design and seamless functionality make it
                  a top choice for communication.”
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex items-center bg-white px-4 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={randomImageUrl()}
                alt="Profile 2"
                className="w-12 h-12 rounded-full mr-4 object-cover shadow-md"
              />
              <div>
                <p className="font-semibold">- John Smith</p>
                <p className="text-sm mb-2 text-gray-800">
                  “The group chat feature is fantastic. I can easily keep up
                  with multiple groups without any hassle. The customization
                  options and the ease of use are unmatched. Whether I'm
                  coordinating with family or friends, Gupshap makes it simple
                  and enjoyable.”
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex items-center bg-white px-5 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={randomImageUrl()}
                alt="Profile 3"
                className="w-12 h-12 rounded-full mr-4 object-cover shadow-md"
              />
              <div>
                <p className="font-semibold">- Alice Johnson</p>
                <p className="text-sm mb-2 text-gray-800">
                  “Media sharing is a breeze with Gupshap. I love how easy it is
                  to share photos and videos. The platform handles multimedia
                  smoothly and efficiently, which enhances my overall
                  experience. It's a must-have app for staying connected and
                  sharing life's moments.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo & Features Overview Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 text-gray-800 font-playfair">
            Experience Our Chat Application
          </h2>
          {/* Flex container for video and features */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Interactive Demo Video */}
            <div className="w-full md:w-1/2 lg:w-2/5 px-4 mb-8">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden pb-[30%]">
                <video
                  src="/logo/gupshapvideo.mp4"
                  title="Interactive Demo"
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  loop
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
                <div className="relative text-center py-4 px-6 text-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Interactive Demo
                  </h3>
                  <p>
                    Watch a quick demo to see our chat application in action.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Overview */}
            <div className="w-full md:w-1/2 lg:w-3/5 px-4">
              <div className="flex flex-wrap -mx-4">
                {/* Feature 1 */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Real-Time Messaging
                    </h4>
                    <p className="text-gray-800">
                      Communicate instantly with our real-time messaging system.
                      No delays, just seamless interaction.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      File Sharing
                    </h4>
                    <p className="text-gray-800">
                      Share files effortlessly within the chat. Supports various
                      formats for quick and easy file exchanges.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Customizable Notifications
                    </h4>
                    <p className="text-gray-800">
                      Stay updated with customizable notifications. Choose your
                      preferences to never miss important messages.
                    </p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Cross-Platform Access
                    </h4>
                    <p className="text-gray-800">
                      Access your chats from any device. Our application is
                      available on web, mobile, and desktop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="relative py-16 text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 section5-bg"
        >
          <source src="/logo/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Download Our App
          </h2>
          <p className="text-lg mb-6 ">
            Get our app on your favorite platform and start enjoying seamless
            communication today.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Download on the App Store
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>

      {/*faqs*/}
      <div className="relative py-12 bg-gray-100">
        <div className="zigzag-bg absolute inset-0 h-16 w-full -top-16 z-0"></div>
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black font-playfair">
            Frequently Asked Questions
          </h2>
          <div className="rounded-lg shadow-lg p-6 w-full max-w-[180vh] bg-white">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-md shadow-lg" // Shadow around both question and answer
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-start cursor-pointer"
                  >
                    <span className="text-4xl font-bold text-gray-800 mr-8">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                    <h3 className="text-base  font-bold text-gray-800  transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index && (
                    <p className="text-gray-800 mt-2 ml-6">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 animated-gradient text-center text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12">
            {/* Newsletter Signup */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl  mb-4 font-playfair">
                Stay Updated
              </h2>
              <p className="text-base mb-6">
                Sign up for our newsletter to receive the latest updates and
                offers.
              </p>
              <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 bg-white  text-blue-950"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl  mb-4 font-playfair">
                Ready to Get Started?
              </h2>
              <p className="text-base mb-6">
                Join us today and experience seamless communication like never
                before.
              </p>
              <Link
                to="/login"
                className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
