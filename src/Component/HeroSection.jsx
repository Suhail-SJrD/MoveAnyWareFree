import React, { useState, useEffect } from "react";
import HeroSectionCSS from "../CustomCss/HeroSectionCSS.module.css";
import axios from "axios";
import { message } from "antd";
import { FaPhoneVolume } from "react-icons/fa"; // Added missing import
// import loader from "../Assets/HeroSection/loader.gif"; // Ensure the loader image path is correct
import loader from "../Assets/HeroSection/loaderimg.gif";

function Loader({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <img src={loader} alt="Loading" className="w-16" />
    </div>
  );
}

function HeroSection() {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${today.getFullYear()}`;

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    origin: localStorage.getItem("origin") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    pax: localStorage.getItem("pax") || "",
    date: formattedDate,
    packageName: localStorage.getItem("place") || "Generic Place",
  });

  useEffect(() => {
    // Store form data in localStorage whenever it changes
    Object.keys(formData).forEach((key) =>
      localStorage.setItem(key, formData[key])
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Force update the formData with the latest local storage values
    const updatedFormData = {
      ...formData,
      packageName: localStorage.getItem("place") || "Generic Place",
    };

    setFormData(updatedFormData);

    // Add form validation as needed, then proceed to submit
    if (!/^\d{10}$/.test(updatedFormData.phone)) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    try {
      const enquiryUrl =
        "https://packages-aq69.onrender.com/api/v1/packages/sendmail";
      // Send the latest data
      await axios.post(enquiryUrl, updatedFormData);

      // Reset form, clear local storage, etc.
      setFormData({
        name: "",
        email: "",
        phone: "",
        origin: "",
        pax: "",
        date: formattedDate,
        packageName: localStorage.getItem("place") || "Generic Place",
      });
      setIsLoading(false);
      localStorage.clear();
      message.success("Form submission is successful");
    } catch (error) {
      setIsLoading(false);
      message.error("Form submission failed. Please try again.");
    }
  };

  // Handling the Phone Number Clicking
  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <section
        className={`${HeroSectionCSS.newheroSection} h-auto py-10 px-2 md:mt-[3rem] flex flex-col md:flex-row items-center justify-center md:justify-evenly `} /**bg-gradient-to-r from-blue-500 to-teal-500 */
      >
        <div
          className={`text-black text-center md:text-left md:space-y-7 w-full md:w-[55%] p-4 md:p-6 ${HeroSectionCSS.LTR}`}
        >
          <h1 className="text-3xl text-black md:text-4xl font-bold mb-4 leading-tight">
            Kerala Tour Packages - Up to 30% Off, Lowest Price Guaranteed
          </h1>
          <p className="text-base text-black md:text-[1.3rem]">
            Book customized Kerala Packages with exciting deals & offers.
          </p>
          <p className="text-sm text-black md:text-base mt-2">
            Cochin | Munnar | Alleppey | Thekkady | Kovalam | Varkala
          </p>
          <div className="relative inline-block">
            <p className="text-sm text-black md:text-base mt-2 ">
              Want Free Consultation? Ask Our Travel Expert!
            </p>
            <div className="flex items-center justify-center md:absolute md:top-[-4rem] md:right-[-7rem]">
              <div className={HeroSectionCSS.circles} onClick={handleCallClick}>
                <FaPhoneVolume
                  className={`${HeroSectionCSS.icon} bg-white w-[3rem] h-[3rem] p-2 rounded-full cursor-pointer`}
                />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white shadow-lg rounded-lg w-full md:w-[40%] max-w-md p-6 md:ml-10 mt-8 md:mt-0 ${HeroSectionCSS.BoomingEffect} relative`}
        >
          <Loader isLoading={isLoading} />
          <div className="z-10 relative">
            <h3 className="text-2xl font-semibold mb-4">Get Your Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              {["name", "email", "phone", "pax", "origin"].map(
                (field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field}
                      className="text-sm font-medium text-gray-700"
                    >
                      {field === "pax"
                        ? "Passengers"
                        : field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      {["name", "email", "phone"].includes(field) && (
                        <span className="text-red-600">*</span>
                      )}
                    </label>
                    <input
                      type={field === "phone" ? "number" : "text"}
                      name={field}
                      id={field}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleChange}
                      value={formData[field]}
                      required={["name", "email", "phone"].includes(field)}
                    />
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full bg-brandCol text-white py-3 rounded-lg mt-4 hover:bg-opacity-90 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
