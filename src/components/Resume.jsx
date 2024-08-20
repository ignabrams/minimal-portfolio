import React from "react";
import Title from "./Title";

function Resume() {
  const handleDownload = () => {
    // Create a new anchor element
    const link = document.createElement("a");
    // Set the href attribute to the path of the PDF file
    link.href = "/assets/ignacio-resume.pdf";
    // Set the download attribute with a value that will be used as the file name
    link.download = "ignacio-resume.pdf";
    // Append the anchor to the document body
    document.body.appendChild(link);
    // Programmatically click the anchor to trigger the download
    link.click();
    // Remove the anchor from the document
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col my-20">
        <Title>Resume</Title>
        <button
          type="button"
          onClick={handleDownload}
          className="relative w-40 h-10 cursor-pointer flex items-center border-2 border-gray-400 shadow-[4px_4px_0px_0px_#dedede] bg-[#323232] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none "
        >
          <span className="transform translate-x-5 text-[#dedede] font-semibold">
            Download
          </span>
          <span className="absolute transform translate-x-28 h-full w-11 bg-teal-400 flex items-center justify-center transition-all duration-300 ">
            <svg
              className="w-5 fill-current text-[#dedede]"
              viewBox="0 0 35 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default Resume;
