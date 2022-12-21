import React from "react";

// import images
import Image from "../../assets/img/hero-img.png";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Section2 from "./Section2";

const Referrals = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-11 items-center lg:flex-row">
          {/* hero text */}
          <div className="flex-1">
            {/* title */}
            <h1
              className="text-[30px] lg:text-[64px] font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Invite Friends Earn Rewards
            </h1>
            <p
              className="max-w-[440px] leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button
              className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Join Now
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className="flex-1">
            <img src={Image} alt="" data-aos="fade-up" data-aos-delay="600" />
          </div>
        </div>
        <Section2 />
      </div>
    </section>
  );
};

export default Referrals;
