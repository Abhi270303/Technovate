import React from "react";
import UserProfile from "../img/user_profile_image.png";

const Testimonials = () => {
  return (
    <div className="flex">
      <div className=" ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <p>Vivek Sahu</p>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
          "I stumbled upon this restaurant, and it was a life-changing
          experience! The food was out of this world, the service was
          impeccable, and the prices were unbelievably low. I can't wait to go
          back!"
        </p>
      </div>

      <div className="ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <p>Vivek Sahu</p>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
          "I stumbled upon this restaurant, and it was a life-changing
          experience! The food was out of this world, the service was
          impeccable, and the prices were unbelievably low. I can't wait to go
          back!"
        </p>
      </div>

      <div className="ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <p>Vivek Sahu</p>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
          "I stumbled upon this restaurant, and it was a life-changing
          experience! The food was out of this world, the service was
          impeccable, and the prices were unbelievably low. I can't wait to go
          back!"
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
