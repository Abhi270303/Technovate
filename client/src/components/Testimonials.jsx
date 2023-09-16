import React from "react";
import UserProfile from "../img/profile-icon.svg";
import { AiOutlineMenu} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="flex">
      <div className="  ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <div className="flex flex-col leading-3 justify-center items-center">
            <p>Vivek Sahu</p>
            <p className="text-sm text-footerSubtitle">Mumbai, India</p>
          </div>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
          "ReliefDAO provided a glimmer of hope in the darkest times. When my family needed urgent assistance during the conflict, the ability to receive help through trusted friends made all the difference. ReliefDAO's innovative approach truly transformed our lives."
        </p>
      </div>

      <div className="  ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <div className="flex flex-col leading-3 justify-center items-center">
            <p>David Morales</p>
            <p className="text-sm text-footerSubtitle">New York, USA</p>
          </div>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
        "Supporting ReliefDAO's global fundraising efforts has been a rewarding experience. Knowing that my contributions can directly impact those in need, regardless of where they are, gives me hope for a better world."
        </p>
      </div>
      <div className="  ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <div className="flex flex-col leading-3 justify-center items-center">
            <p>Sarah Thompson</p>
            <p className="text-sm text-footerSubtitle">Mogadishu, Somalia</p>
          </div>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
        "ReliefDAO's blockchain technology has brought transparency and accountability to humanitarian aid in Somalia. As a local coordinator, I've seen firsthand how this platform efficiently directs funds to those who require immediate assistance. It's a game-changer for our community."
        </p>
      </div>
      <div className="  ml-10 w-96 h-full flex flex-col gap-3 border border-lightPrimary p-6 rounded-lg">
        <div className=" flex items-center justify-center gap-3">
          <img src={UserProfile} className=" rounded-full w-9" />
          <div className="flex flex-col leading-3 justify-center items-center">
            <p>Dr. Aisha Ahmed</p>
            <p className="text-sm text-footerSubtitle">Aleppo, Syria</p>
          </div>
        </div>
        <p className="text-sm text-footerSubtitle text-center">
        "ReliefDAO came to my rescue when my family was caught in a conflict zone. With no access to traditional banking, their blockchain technology allowed me to receive funds securely and quickly through a trusted friend. It was a lifeline in our darkest hour."
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
