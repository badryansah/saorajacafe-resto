import React from "react";
import Home from "./Home/page";
function page() {
  return (
    <>
      <section className="h-screen bg-white flex flex-col font-sans text-black overflow-hidden border-t-0">
        <Home />
      </section>
    </>
  );
}

export default page;
