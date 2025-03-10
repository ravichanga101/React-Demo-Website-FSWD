import { Card, CardContent } from "../components/ui/Card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Card className="p-6 max-w-lg mx-auto shadow-md">
      <CardContent>
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          We'd love to hear from you! Send us a message below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
