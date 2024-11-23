import React, { useState, useEffect } from "react";
import { ButtonColor } from "../../Utils/constants";
import CustomButton from "../Common/CustomButton";

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setEmail("");
      return;
    }
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 5000);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="bg-gray-1 text-white py-10 px-5 flex justify-center items-center flex-col">
      {!isSubscribed ? (
        <>
          <div className="flex flex-col sm:flex-row w-full justify-between">
            <div className="text-white-0">
              <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
              <p className="mb-6 text-gray-300">
                Stay up to date with the latest news, announcements and articles.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:min-w-[300px] px-4 py-2 rounded-md bg-white text-gray-900"
              />
              <CustomButton onClick={handleSubscribe} colorClass={ButtonColor.DARK_BLUE}>
                Subscribe
              </CustomButton>
            </div>
          </div>
          {error && <p className="text-red-1 my-2">{error}</p>}
        </>
      ) : (
        <div className="text-center text-white-0">
          <h2 className="text-2xl font-bold mb-4">Thank you for subscribing!</h2>
          <p className="text-gray-300">You will receive updates shortly.</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;
