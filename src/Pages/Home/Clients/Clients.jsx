import React from "react";
import slider1 from "../../../assets/images/Clients/client1.png";
import slider2 from "../../../assets/images/Clients/client2.webp";
import slider3 from "../../../assets/images/Clients/client3.webp";
import slider4 from "../../../assets/images/Clients/client4.webp";
import slider5 from "../../../assets/images/Clients/client5.webp";
import slider6 from "../../../assets/images/Clients/client6.png";
const Clients = () => {
  const clients = [slider1, slider2, slider3, slider4, slider5, slider6];

  return (
    <section>
      <marquee
        direction="right"
        behavior="scroll"
        scrollamount="20"
        className="py-16 my-5 border border-y-2 border-x-0 bg-white"
      >
        <div className="flex gap-x-10 justify-between items-center">
          {clients?.map((client) => (
            <div className="mx-auto">
              <img className="w-28" src={client} />
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default Clients;
