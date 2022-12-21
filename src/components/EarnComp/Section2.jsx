import React from "react";

// import images
import referral from "../../assets/img/referrals.png";

import { cardRefferal } from "../../data";

const Section2 = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col mt-48 gap-20 items-center lg:flex-row">
          {/* hero text */}
          <div className="flex-1">
            {/* title */}
            <h1
              className="text-[32px] text-center lg:text-[40px] font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              How Does Refferal Program Works
            </h1>
            <p
              className="max-w-[440px] text-center leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              eveniet voluptas repellendus! Reprehenderit vel aperiam suscipit
              possimus commodi totam nulla dolorum architecto saepe tempore
              molestiae eius, omnis nesciunt explicabo odit unde, iusto nostrum
              nihil! Deserunt id laudantium fuga unde vitae?
            </p>

            <img
              src={referral}
              alt=""
              data-aos="fade-down"
              data-aos-delay="600"
            />
          </div>

          <div className="flex-1 mb-10">
            {/* title */}
            {cardRefferal.map((card) => (
              <div className="shadow-lg rounded-lg p-5">
                <img
                  src={card.image}
                  alt=""
                  height={80}
                  width={80}
                  className="flex items-center mb-5"
                  data-aos="fade-down"
                  data-aos-delay="500"
                />
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-5"
                    data-aos="fade-down"
                    data-aos-delay="500"
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-lg font-normal text-white mv-3"
                    data-aos="fade-down"
                    data-aos-delay="600"
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
