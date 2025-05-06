import { useState } from "react";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    setShowForm(false);
  };

  return (
    <section
      className="relative text-white bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 py-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Train Hard,<br />Play Hard
          </h1>
          <p className="text-gray-300">
            Details Of Different Plans (Monthly, Yearly, Family, Etc...)
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-black font-bold px-6 py-2 rounded"
            >
              Join Now
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white/20 p-3 rounded-full border border-white"
            >
              ▶
            </button>
            <span>Play Demo...</span>
          </div>
        </div>
      </div>

  
      <div className="absolute inset-0 bg-black/70 z-0" />

   
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="bg-white text-black p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Register
              </button>
            </form>
            <button
              className="mt-4 text-sm underline text-gray-600"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-30 px-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-xl bg-red-500 px-2 py-1 rounded"
            >
              ✖
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-80 sm:h-[400px] rounded-lg"
                src="https://www.youtube.com/embed/mAQP5ASH-BA"
                title="Demo Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
