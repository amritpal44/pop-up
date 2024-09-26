
//below images are in `propack/assets/assets/${image_name}`
import dataanalytics from "../Assets/Images/dataanalytics.png"
import Icon11 from "../Assets/Images/Icon11.png";
import Icon12 from "../Assets/Images/Icon12.png";
import Icon13 from "../Assets/Images/Icon13.png";
import Icon21 from "../Assets/Images/Icon21.png";
import Icon22 from "../Assets/Images/Icon22.png";
import Icon23 from "../Assets/Images/Icon23.png";
import Icon24 from "../Assets/Images/Icon24.png";
import Icon25 from "../Assets/Images/Icon25.png";
import Icon31 from "../Assets/Images/Icon31.png";
import Icon32 from "../Assets/Images/Icon32.png";
import Icon33 from "../Assets/Images/Icon33.png";
import Icon34 from "../Assets/Images/Icon34.png";
import Icon35 from "../Assets/Images/Icon35.png";
import Icon41 from "../Assets/Images/Icon41.png";
import Icon42 from "../Assets/Images/Icon42.png";
import Icon43 from "../Assets/Images/Icon43.png";
import Icon44 from "../Assets/Images/Icon44.png";
import Icon45 from "../Assets/Images/Icon45.png";
import Icon46 from "../Assets/Images/Icon46.png";
import Icon51 from "../Assets/Images/Icon51.png";
import Icon52 from "../Assets/Images/Icon52.png";
import Icon53 from "../Assets/Images/Icon53.png";
import Icon54 from "../Assets/Images/Icon54.png";
import Icon61 from "../Assets/Images/Icon61.png";
import Icon62 from "../Assets/Images/Icon62.png";
import Icon63 from "../Assets/Images/Icon63.png";
import Icon64 from "../Assets/Images/Icon64.png";
import Icon65 from "../Assets/Images/Icon65.png";
import Icon66 from "../Assets/Images/Icon66.png";
import user from "../Assets/Images/user.png";


//below are new images
import datascientist from "../Assets/Images/datascientist.png";
import techgeek from "../Assets/Images/techgeek.png";
import fullstackdev from "../Assets/Images/fullstackdev.png";
import business from "../Assets/Images/business.png";
import designing from "../Assets/Images/designing.png";
import appdev from "../Assets/Images/appdev.png";


const data = {
  designing: {
    icon: designing,
    heading: "Creative Designer Combo pack",
    action: "https://tutedude.com/category/designing",
    curric: [
      { icon: Icon11, title: "Adobe Illustrator" },
      { icon: Icon12, title: "Adobe Photoshop" },
      { icon: Icon13, title: "UI/UX" },
      { icon: user, title: "UX Research" },
    ],
    price: "₹799",
    discount: "₹1,499",
    off: "14%",
  },
  datascientist: {
    icon: datascientist,
    heading: "Data Scientist Combo Pack",
    action: "https://tutedude.com/category/datascientist",
    curric: [
      { icon: Icon25, title: "Data Science" },
      { icon: dataanalytics, title: "Data Analytics" },
      { icon: Icon21, title: "SQL" },
      { icon: Icon22, title: "Machine learning" },
      { icon: Icon23, title: "Python" },
      { icon: Icon24, title: "DSA With Python" },
    ],
    price: "₹1,999",
    discount: "₹2,796",
    off: "40%",
  },
  appdev: {
    icon: appdev,
    heading: "App developer Combo pack",
    action: "https://tutedude.com/category/appdev",
    curric: [
      { icon: Icon31, title: "JAVA" },
      { icon: Icon32, title: "Flutter" },
      { icon: Icon33, title: "React Native" },
      { icon: Icon34, title: "React JS" },
      { icon: Icon35, title: "App develop" },
    ],
    price: "₹1,999",
    discount: "₹2,796",
    off: "40%",
  },
  business: {
    icon: business,
    heading: "Business Combo pack",
    action: "https://tutedude.com/category/business",
    curric: [
      { icon: Icon51, title: "Stock Market" },
      { icon: Icon52, title: "FRM" },
      { icon: Icon53, title: "Technical Research" },
      { icon: Icon54, title: "Financial Modelling valuation" },
    ],
    price: "₹799",
    discount: "₹1,499",
    off: "14%",
  },
  techgeek: {
    icon: techgeek,
    heading: "Tech Geek Combo pack",
    action: "https://tutedude.com/category/techgeek",
    curric: [
      { icon: Icon61, title: "Python" },
      { icon: Icon62, title: "App develop" },
      { icon: Icon63, title: "Ethical Hacking" },
      { icon: Icon64, title: "JAVA" },
      { icon: Icon65, title: "Data Science" },
      { icon: Icon66, title: "MERN" },
    ],
    price: "₹1,999",
    discount: "₹2,796",
    off: "40%",
  },
  fullstackdev: {
    icon: fullstackdev,
    heading: "Full Stack Combo pack",
    action: "https://tutedude.com/category/fullstackdev",
    curric: [
      { icon: Icon41, title: "MERN" },
      { icon: Icon34, title: "React JS" },
      { icon: Icon43, title: "DSA With Python" },
      { icon: Icon44, title: "DevOPS" },
      { icon: Icon45, title: "Python" },
      { icon: Icon46, title: "DBMS" },
    ],
    price: "₹1,999",
    discount: "₹2,796",
    off: "40%",
  },
};

  
export default data;
  