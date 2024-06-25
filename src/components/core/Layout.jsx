import Header from "../header/Header";
import Footer from "../Footer/Footer";
import "./layout.css"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;