import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
