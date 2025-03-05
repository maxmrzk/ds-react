import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Our App</h1>
          <p className="mt-2">Your gateway to a better experience</p>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <p className="text-gray-700">
            Discover the amazing features we offer to make your life easier.
          </p>
        </section>
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700">
            Sign up today and start enjoying the benefits.
          </p>
          <button
            onClick={handleLoginRedirect}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Our App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
