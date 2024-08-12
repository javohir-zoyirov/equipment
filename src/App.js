import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./companents/home-page";
import { ApiContext } from "./companents/context";
import { Header } from "./companents/header";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'swiper/css';
import { About } from "./companents/about-door";
import { Contact } from "./companents/contact";
import { Delivery } from "./companents/delivery";
import { Payment } from "./companents/payment";
import { useState } from "react";
import { Category } from "./companents/category";

function App() {
  const [category, setCategory] = useState("door");
  const [catalog, setCatalog] = useState('');
  const [id, setId] = useState(null);

  return (
    <ApiContext.Provider value={{setCategory,category,catalog,setCatalog, id, setId}}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/navbar" element={<Header />} />
          <Route path="/about-door" element={<About/>} />
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/katalog" element={<Category/>}/>
          <Route path="/about/:id" element={<About/>}/>
        </Routes>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;
