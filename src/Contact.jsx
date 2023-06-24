import React from "react";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex-col overflow-hidden">
      <Navbar></Navbar>
      <div className="flex h-screen items-center justify-center bg-[#e5e6e5]">
        <div class="w-full lg:w-3/4 items-center justify-center p-12 bg-[#9fa0ff] text-center rounded-xl container mx-auto place-self-center mb-16">
          <h1 class="text-white text-3xl mb-8 font-bold">Contact Us.</h1>
          <div className="flex flex-col gap-3 text-white ">
            <p className="font-medium">
              If you have any questions or feedback about our flashcard app,
              we'd love to hear from you! You can contact us using the
              information below:
            </p>{" "}
            <p className="font-medium">Email: support@memo.com</p>{" "}
            <p className="font-medium">Phone: +1 (555) 555-5555</p>{" "}
            <p className="font-medium">
              Our office hours are Monday through Friday, 9am to 5pm EST. If you
              reach out to us outside of these hours, we'll do our best to get
              back to you as soon as possible.
            </p>{" "}
            <p className="font-medium">
              Thank you for using our flashcard app! We appreciate your support
              and feedback.
            </p>
            <button
              className="font-normal underline underline-offset-2 hover:text-[#e5e6e5] pt-8 text-sm text-white"
              onClick={() => navigate("/")}
            >
              {" "}
              Back home{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
