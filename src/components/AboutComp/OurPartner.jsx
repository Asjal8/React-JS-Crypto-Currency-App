import React from "react";

import partner from "../../assets/img/partners.png";

import { ourPartner } from "../../data";

const OurPartner = () => {
  return (
    <section className="section">
      <div className="container mx-auto py-10 px-8">
        <div className="text-center">
          <h2
            className="section-title"
            data-aos="fade-down"
            data-aos-offset="400"
          >
            Our Partners
          </h2>
        </div>

        <div className="grid mt-48" data-aos="fade-down" data-aos-offset="400">
          <div className="">
            <img
              className="rounded-t-lg"
              src={partner}
              alt=""
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
