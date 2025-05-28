import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
