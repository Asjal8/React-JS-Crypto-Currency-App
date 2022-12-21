import React from "react";

// import data
import { about } from "../../data";

const Section2 = () => {
  return (
    <section className="section lg:pt-[320px] text-white lg:-mt-[220px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[45px] lg:flex-row">
          <div
            className=" text-white w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div className="mb-4">
              <div className="text-[32px] font-bold text-center">
                Privacy And Security First
              </div>
            </div>

            {/* item description */}
            <p className="mb-6 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              quam maxime cupiditate voluptatibus officiis porro repellendus,
              eius nesciunt sed placeat, facere provident quis sunt iste
              similique voluptas! Officiis enim ab minima?
            </p>

            <div className="mt-14 flex flex-row gap-7 lg:ml-28">
              {about.map((item, index) => {
                return (
                  <div>
                    <img
                      className="mb-6 flex flex-row justify-center"
                      src={item.image}
                      alt=""
                      data-aos="fade-left"
                      data-aos-offset="400"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className=" text-white w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div className="mb-4">
              <div className="text-[32px] font-bold text-center">
                Global, Free and Open to anyone
              </div>
            </div>

            <div className="mb-4">
              <div className="text-[25px] font-bold text-center">Thousand</div>
            </div>

            <p className="mb-6 text-center">
              Please Connect to Wallet First and get referral link
            </p>

            <div className="mb-4">
              <div className="text-[25px] font-bold text-center">
                $ 1 Billion+
              </div>
            </div>

            <p className="mb-6 text-center">
              Share your referral link with your friends and track the
              performance of each mining on Referral page
            </p>

            <div className="mb-4">
              <div className="text-[25px] font-bold text-center">200,000</div>
            </div>

            <p className="mb-6 text-center">
              You will get your friends 30% mining rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
