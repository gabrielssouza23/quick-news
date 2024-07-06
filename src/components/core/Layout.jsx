import Header from "../header/Header";
import Footer from "../Footer/Footer";
import "./layout.css"
import MainContainer from "./MainContainer";
import React from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="page">
      <Header onCategoryClick={handleCategoryClick}/>
      <MainContainer selectedCategory={selectedCategory}>
        {children}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;