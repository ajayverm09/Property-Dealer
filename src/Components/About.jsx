import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center font-serif text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        MANCHANDA REALTORS PVT. LTD.
      </h1>
      <p className="text-sm sm:text-base mb-8 italic">
        Real Estate Consultant
      </p>

      <div className="flex flex-col md:flex-row md:items-start md:gap-10 text-left">
        <div className="md:w-2/3 text-sm leading-6">
          <p className="italic text-black mb-6 text-base">
            “Owning a home is a keystone of wealth… both financial affluence and emotional security.”
          </p>
          <p className="mb-4">
            Manchanda Realtors Pvt Ltd. is a property dealer in Gurgaon that offers assistance with all real estate-related choices.
            It was established to serve the needs of the market by enhancing people’s lives. For both corporate clients and private clients,
            we handle the entire real estate investment lifecycle. Along with advising individual buyers and sellers on their real estate investment choices,
            our advisory and relationship personnel arm clients with knowledge and tools to make wiser investment decisions in the future.
          </p>
          <p>
            <strong>Commitments –</strong> We are committed to buying, selling, financing, leasing, managing, and valuing assets.
            To offering tactical assistance, portfolio analysis, site selection, and other services. In the Indian real estate market,
            Manchanda Realtors Pvt Ltd. is the most promising and rapidly expanding professional organization.
            The dedicated staff at Manchanda Realtors Pvt Ltd. has a proven track record of excellent and unquestionable performance.
            We are well-praised in the business for our ground-breaking concepts, best practices for the industry, honesty in our dealings,
            dependability, and customer-centric, value-driven attitude.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img
            src="https://manchandarealtors.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-03-at-6.26.50-PM.jpeg"
            alt="Office"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
          OUR NETWORK
        </h2>
        <div className="border-b-2 border-blue-400 w-16 mx-auto mb-10"></div>

        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          <div className="md:w-1/2">
            <img
              src="https://manchandarealtors.com/wp-content/uploads/2021/06/dfdkjfjdfn.jpg"
              alt="Network"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-sm leading-6">
            <p className="mb-4">
              Services – While Manchanda Realtors Pvt Ltd. primarily services the Delhi-NCR area.
              Moreover we aim to grow by collaborating with agents who are multilingual and from different cultural backgrounds.
              We guarantee beneficial partnerships to ensure the growth and success of every co-network
              which is equally important. As the most professional property dealer in Gurgaon,
              this enables us to advocate for the investment interests and high ROI of our clients.
            </p>
            <p>
              We focus on real estate investment, leasing, land brokerage, land sale/purchase,
              and real estate allied services. We aim to bring together the best property dealer in Gurgaon
              as well as around India. So let’s work together to create quality living!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
