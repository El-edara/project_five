/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x500");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleLogoChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="banner"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white rounded-full hover:bg-gray-600">
          <label htmlFor="bannerUpload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="bannerUpload"
            className="hidden"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Channel Logo */}
      <div className="flex items-center ml-4 mt-[2rem] relative">
        <img
          src={profileUrl}
          alt="logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[4rem] z-10 mt-[10rem] bg-gray-800 text-white rounded-full hover:bg-gray-600">
          <label htmlFor="logo" className="cursor-pointer ">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            className="hidden"
            onChange={handleLogoChange}
          />
        </button>
        {/* Channel Details */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Edara</h1>
          <p className="ml-[4rem]">1M views</p>
          <p className="mt-2 ml-[4rem]">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect from the
            channel.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded ml-[4rem] hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};
export default Profile;
