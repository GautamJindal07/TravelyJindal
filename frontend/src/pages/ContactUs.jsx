import React from "react";

const ContactUs = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
          <div class="mb-12 lg:mb-0">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>

            <p class="text-gray-500 mb-12">
              Didn't find your answer in the FAQ? Contact our sales team.
            </p>

            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>

          <div class="mb-6 md:mb-0">
            <p class="font-bold mb-4">Why Travel with Us?</p>
            <p class="text-gray-500 mb-12">
            At Goa Tours and Travels, we believe that every journey should be an unforgettable experience. With our extensive local knowledge, personalized itineraries, and commitment to sustainable tourism, we ensure that your trip to Goa will be both enriching and memorable. Whether you're seeking adventure, cultural immersion, or relaxation, we have the perfect tour package tailored just for you.
            </p>

            <p class="font-bold mb-4">
            What Makes Our Tours Stand Out?
            </p>
            <p class="text-gray-500 mb-12">
            With us, you're not just a tourist - you're a valued guest. We take pride in our personalized approach, offering flexible itineraries that can be tailored to your preferences. Our knowledgeable guides are passionate about Goa and eager to share their insights and stories with you, making your trip truly special.
            </p>
{/* 
            <p class="font-bold mb-4">
            What Makes Our Tours Stand Out?
            </p>
            <p class="text-gray-500 mb-12">
            With us, you're not just a tourist - you're a valued guest. We take pride in our personalized approach, offering flexible itineraries that can be tailored to your preferences. Our knowledgeable guides are passionate about Goa and eager to share their insights and stories with you, making your trip truly special.
            </p>

            <p class="font-bold mb-4">
            How Do We Support Sustainable Tourism?
            </p>
            <p class="text-gray-500 mb-12">
            Our tours are designed with sustainability in mind. We partner with eco-friendly accommodations, support local businesses, and encourage practices that minimize environmental impact. From organizing beach clean-ups to promoting the use of reusable materials, we actively engage in initiatives that contribute to the well-being of the local ecosystem.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
