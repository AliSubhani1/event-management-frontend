import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomButton from '../../Components/Common/CustomButton';
import { ButtonColor } from '../../Utils/constants';
import Spinner from '../../Components/Common/Spinner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .send(
        'service_iw6o4fv',
        'template_235hxpe',
        formData,
        'N1SnmYsaMn5Nu862K'
      )
      .then(() => {
        setIsLoading(false); // Stop loading
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 10000); // Show success message for 10 seconds
      })
      .catch((err) => {
        setIsLoading(false); // Stop loading
        console.error('Failed to send email:', err);
      });
  };

  return (
    <div className="bg-black text-white p-12 flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-gray-400">
          Feel free to reach us out any time to get your issues resolved.
        </p>
        <p>
          <strong>Call us at: </strong>
          +35801234567
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
        {formSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
            <p>Your message has been sent successfully. Our support team will get back to you soon.</p>
          </div>
        ) : isLoading ? <Spinner /> : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="your name"
                className="w-full mt-2 p-3 rounded-md text-white border border-gray-0 border-opacity-40 focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Just saying hi"
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's talk about..."
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                rows={4}
                required
              ></textarea>
            </div>
            <CustomButton
              type="submit"
              className="mr-4"
              colorClass={ButtonColor.DARK_BLUE}
              disabled={isLoading} // Disable the button when loading
            >
                Send Message
            </CustomButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
