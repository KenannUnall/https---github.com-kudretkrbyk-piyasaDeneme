import React from "react";
import PageTitle from "../components/pagetitle";

const Contact = () => {
  return (
    <div>
      <img
        className="absolute w-full left-0 right-0 top-1/3 "
        src="/images/team_bg.png"
      ></img>
      <section className="py-20 bg-[#0c1226] text-white font-chakra">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-12">
            {/* Contact Form */}
            <div
              className="xl:w-5/12 w-full"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="mb-6">
                <h4 className="text-2xl font-bold uppercase mb-4">
                  Have a questionkk
                </h4>
                <p className="text-gray-300 max-w-md">
                  Fill up the Form and our team will get back to you within 24
                  hrs
                </p>
              </div>
              <form
                action="contact/contact-process.php"
                className="space-y-4"
                id="contactform"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full p-3 rounded bg-transparent border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#14C2A3]"
                />
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Email Address"
                  className="w-full p-3 rounded bg-transparent border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#14C2A3]"
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-3 rounded bg-transparent border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#14C2A3]"
                />
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Type your Message"
                  className="w-full p-3 rounded bg-transparent border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#14C2A3]"
                ></textarea>
                <button
                  type="submit"
                  className="relative group overflow-hidden inline-block px-8 py-3 font-semibold uppercase border border-[#14C2A3] text-white hover:bg-[#14C2A3] transition"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-[#14C2A3] opacity-0 group-hover:opacity-100 transition"></span>
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div
              className="xl:w-7/12 w-full"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="xl:pl-36">
                <div className="mb-10 flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <h6 className="text-xl font-semibold mb-2">Location</h6>
                    <ul className="text-gray-300">
                      <li>2163 Phillips Gap Rd West Jefferson, NC, 28694</li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h6 className="text-xl font-semibold mb-2">Contact Us</h6>
                    <ul className="text-gray-300">
                      <li>+1 666 8888</li>
                      <li>Info.avitex@gmail.com</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full h-[430px] rounded overflow-hidden shadow-lg">
                  <iframe
                    title="map"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.30210514409!2d144.9550716623184!3d-37.818421643591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20%C3%9Cc!5e0!3m2!1svi!2s!4v1631871760998!5m2!1svi!2s"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
