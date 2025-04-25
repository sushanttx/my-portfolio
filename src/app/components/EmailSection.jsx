"use client";   
import React, { useState } from "react";
import GithubIcon from "../../../public/github1.png";
import LinkedinIcon from "../../../public/linkedin1.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(""); 
  const [isSending, setIsSending] = useState(false); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setIsSending(true); 

    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!email || !subject || !message) {
      setError("All fields are required.");
      setIsSending(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    const data = { email, subject, message };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (resData.status === 200) {
        setEmailSubmitted(true);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }

    setIsSending(false);
  };

  const handleReset = () => {
    setEmailSubmitted(false);
  };

  return (
    <section id="contacts" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Drop a message, and I&apos;ll get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sushanttx"><Image src={GithubIcon} alt="Github Icon" /></Link>
          <Link href="https://www.linkedin.com/in/sushantlanghi/"><Image src={LinkedinIcon} alt="Linkedin Icon" /></Link>
        </div>
      </div>
      
      <div>
        {emailSubmitted ? (
          <div className="flex flex-col items-center animate-fadeIn">
            <p className="text-[#60A5FA] text-2xl font-semibold mb-4 drop-shadow-lg">
              ✅ Email Sent Successfully!
            </p>
            <button 
              onClick={handleReset} 
              className="bg-[#60A5FA] hover:bg-[#3B82F6] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              Send Another Email
            </button>
          </div>
        ) : (
          <form className="flex flex-col animate-slideIn" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="name@domain.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="What should we talk about?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Describe..."
              />
            </div>

            <button
              type="submit"
              className={`font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 ${
                isSending ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
              } text-white`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
