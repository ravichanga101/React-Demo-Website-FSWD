import { Card, CardContent } from "../components/ui/Card";
import React from "react";

const About = () => {
  return (
    <Card className="p-6 max-w-lg mx-auto shadow-md">
      <CardContent>
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          About Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Welcome to our website! We are dedicated to providing the best
          services and products to our customers. Our team is passionate about
          what we do and we strive to exceed your expectations.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver high-quality products and services that
              bring value to our customers. We are committed to continuous
              improvement and innovation to meet the evolving needs of our
              clients.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Customer Satisfaction</li>
              <li>Integrity and Transparency</li>
              <li>Innovation and Excellence</li>
              <li>Teamwork and Collaboration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-600">
              Our team is composed of talented and dedicated professionals who
              are passionate about their work. We believe in fostering a
              collaborative and inclusive environment where everyone can thrive
              and contribute to our success.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
