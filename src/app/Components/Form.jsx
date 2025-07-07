"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Replace with your backend API or Formspree endpoint
      console.log("Sending message...", data);
      reset(); // Clear form
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    }
  };


  // seconf form

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit1 = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Submitted:", { username, password });
    alert(`Username: ${username}\nPassword: ${password}`);
    setUsername("");
    setPassword("");

  };


  return (
    <>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form-wrapper max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-amber-500"> Contact Us</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && (
          <p className="error-message">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-8!">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          rows={4}
          {...register("message", { required: "Message is required" })}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>


    <form
  onSubmit={handleSubmit1}
  className="contact-form-wrapper max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200"
>
  <h2 className="text-2xl font-semibold text-amber-500  text-center  mb-6 ">Login to save Data</h2>

  <div className="mb-5">
    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
    <input
      type="text"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      className="block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      required
    />
  </div>

  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      className="block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      required
    />
  </div>

  <button
    type="submit"
    className="mt-6! w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>



    </>
  );
}
