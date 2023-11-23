"use client";

import React from "react";
import axios from "axios";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { mailApi } from "@/utility/constants";

const Mail = () => {
  const [sender, setSender] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSend, setIsSend] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      sender,
      email,
      subject,
      message,
    };
    await axios
      .post(mailApi, body)
      .then(() => {
        setTimeout(() => {
          setIsSend(true);
        }, 5000);
        setEmail("");
        setSender("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setIsSend(false);
      });
  };

  return (
    <div className="w-screen ">
      <div className="w-full h-full  py-10 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="md:w-3/4 w-full  md:p-0">
          {isSend && (
            <div className="flex w-full justify-center">
              <div className="p-2 rounded-xl flex items-center px-6 border border-red-500 border-opacity-30 bg-red-500 bg-opacity-20 text-white">
                <MdOutlineMarkEmailRead className="mr-2" size={20} /> Thank you,
                your Email have been sent successful!
              </div>
            </div>
          )}

          <div className="text-gray-400 my-4">
            For all Media / Bookings Enquiries. Lets Get In Touch!
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-full  md:flex my-4">
              <input
                placeholder="ENTER YOUR FULL NAME"
                onChange={(e) => {
                  setSender(e.target.value);
                }}
                className="border-b w-full py-2 border-white  border-opacity-30 text-white text-center focus:placeholder-white focus:border-white focus:outline-0  md:w-1/2 mx-4 bg-transparent text-xs placeholder-white placeholder-opacity-50"
              />
              <input
                placeholder="ENTER YOUR EMAIL ADDRESS"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border-b py-2 border-white text-xs border-opacity-30  text-white text-center focus:placeholder-white focus:border-white focus:outline-0  w-full md:w-1/2 mx-4 bg-transparent  placeholder-white placeholder-opacity-50"
              />
            </div>
            <input
              placeholder="ENTER YOUR MESSAGE SUBJECT"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="border-b pb-2 pt-6 border-white border-opacity-30 text-white  focus:placeholder-white focus:border-white focus:outline-0  w-full text-center mx-4 bg-transparent text-xs placeholder-white placeholder-opacity-50"
            />
            <textarea
              placeholder="ENTER YOUR MESSAGE"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="border-b pb-28 pt-8 border-white border-opacity-30 text-white  focus:placeholder-white focus:border-white focus:outline-0  w-full text-center mx-4 bg-transparent text-sm placeholder-white placeholder-opacity-50"
            />
            <button
              className="bg-transparent my-4 text-white hover:text-red-500 px-4 text-sm py-2 border border-white hover:border-red-500 "
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
