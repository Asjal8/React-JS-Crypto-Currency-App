import React from "react";

import Image from "../../assets/img/hero-img.png";
import OurPartner from "./OurPartner";
import OurTeam from "./OurTeam";
import Section2 from "./Section2";

const AboutComp = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            About US
          </h2>
          <p
            className="section-subtitle text-lg mb-16 max-w-full mx-auto"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Our Company was founded in 2022 with the of providing a simple and
            easy to use platform for mining and trading cryptocurrencies. We are
            a team of experienced professionals with a passion for blockchain
            technology and cryptocurrencies. We are dedicated to providing our
            customers with the best possible service and support. We are
            committed to providing our customers with the best possible service
            and support. We are committed to providing our customers with the
            best possible service and support.
          </p>

          <img
            src={Image}
            alt="About Us Image"
            className="section-subtitle text-lg mb-16 max-w-full mx-auto"
            data-aos="fade-down"
            data-aos-offset="450"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
