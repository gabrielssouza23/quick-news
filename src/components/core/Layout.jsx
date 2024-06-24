import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Layout = ({/* children */ }) => {
  return (
    <div>
      <Header />
      <main>
        {/* {children} */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;