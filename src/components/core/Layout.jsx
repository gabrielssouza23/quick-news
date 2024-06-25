import Header from "../header/Header";
import Footer from "../Footer/Footer";
import "./layout.css"

const Layout = ({/* children */ }) => {
  return (
    <div className="page">
      <Header />
      <main>
        {/* {children} */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;