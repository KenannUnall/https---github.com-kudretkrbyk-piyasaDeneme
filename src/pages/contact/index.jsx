import React from 'react';

function ContactPage() {
  return (
    <section className="py-20 bg-[#141A31]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <div className="space-y-4">
              <p className="text-[#14C2A3] font-bold uppercase tracking-wider">Contact Us</p>
              <h4 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h4>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-8 border border-white/10" data-aos="fade-up" data-aos-duration="800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#14C2A3] text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#14C2A3] text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#14C2A3] text-white"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#14C2A3] text-white resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#14C2A3] text-white font-bold rounded-lg hover:bg-[#0fa890] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage; 