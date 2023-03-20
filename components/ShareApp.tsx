"use client";
import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

type Props = {
  sharePop: boolean;
  setSharePop: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShareApp({ sharePop, setSharePop }: Props) {
  return (
    <div className="absolute top-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm transition-all">
      <div className="flex flex-col gap-12 shadow-lg bg-white px-5 py-5 rounded-md">
        {/* closing btn */}
        <div className="flex items-center justify-between font-semibold">
          <span>Share this App</span>
          <MdClose
            className="text-headingColor-400 text-2xl font-mono"
            onClick={() => setSharePop(!sharePop)}
          />
        </div>

        <div className="wrapper relative flex justify-around space-x-4 items-center w-auto">
          {/* facebook site */}
          <FacebookShareButton url={"https://fyp-front-end.vercel.app/"}>
            <FaFacebook className="text-3xl text-gray-300 hover:text-blue-500" />
          </FacebookShareButton>

          {/* LinkedIn */}
          <LinkedinShareButton url={"https://fyp-front-end.vercel.app/"}>
            <FaLinkedin className="text-3xl text-gray-300 hover:text-blue-700" />
          </LinkedinShareButton>
          {/* whatsapp */}
          <WhatsappShareButton url={"https://fyp-front-end.vercel.app/"}>
            <FaWhatsapp className="text-3xl text-gray-300 hover:text-green-500" />
          </WhatsappShareButton>
          {/* Twitter */}
          <TwitterShareButton
            url={"https://fyp-front-end.vercel.app/"}
            title={"WSSCM"}
          >
            <FaTwitter className="text-3xl text-gray-300 hover:text-blue-400" />
          </TwitterShareButton>
          {/* email */}
          <EmailShareButton
            url={"https://fyp-front-end.vercel.app/"}
            subject={"WSSCM official app"}
            body={
              "This is a wsscm official app through you can easily file any type of complaint which are related to WSSCM"
            }
          >
            <HiMail className="text-3xl text-gray-300 hover:text-red-500" />
          </EmailShareButton>
        </div>
        <div className="flex items-center justify-between">
          <input
            className="text-sm w-[65%] overflow-hidden px-1 py-1 border-[1px] border-gray-400 rounded-md"
            value="https://fyp-front-end.vercel.app/"
          />
          <button
            className="text-sm px-1 py-1 bg-primaryColor-500 text-white rounded-md"
            onClick={() =>
              navigator.clipboard.writeText("https://fyp-front-end.vercel.app/")
            }
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareApp;
