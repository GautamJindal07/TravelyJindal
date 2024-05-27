import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-lg font-semibold">
                  Trvel with us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                </h2>
                <p className="text-body-color mb-8 text-base">
                Embark on an unforgettable journey to Goa, where each corner is a blend of scenic beauty, rich heritage, and vibrant culture. With our expertly curated tours, you will explore pristine beaches, historic temples, bustling markets, and serene backwaters. 
                </p>
                <p className="text-body-color mb-12 text-base">
                As you journey through the captivating landscapes of Goa, we encourage you to embrace a sustainable and respectful approach to travel. Our tours are designed to provide you with authentic experiences while minimizing your environmental impact. 
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
