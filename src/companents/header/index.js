import { PhoneOutlined } from "@ant-design/icons";
import logo from "../image/Frame 48095450.png";
import { useLocation, useNavigate } from "react-router";
import "./header.css";
import { useContext, useState } from "react";
import { ApiContext } from "../context";
export const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const location = useLocation();
  const {catalog, setCatalog} = useContext(ApiContext);  
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container mx-auto">
          <img style={{cursor:"pointer"}} onClick={() => {navigate('/')}} className="navbar-brend" src={logo} />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li onClick={() => {}} style={ location?.pathname === "/katalog" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} class="nav-item dropdown top">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#282A30" }}
                >
                  Katalog
                </a>
                <ul class="dropdown-menu p-3">
                  <li onClick={() => {setCatalog('door');navigate('/katalog')}} style={ active === 0 ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} className="bottom">
                    <a
                      class="dropdown-item"
                      href="#"
                      style={{ color: "#282A30" }}
                    >
                      Eshiklar
                    </a>
                  </li>
                  <li onClick={() => {setCatalog('chair');navigate('/katalog')}} style={{cursor:"pointer"}} className="bottom">
                    <a
                      class="dropdown-item"
                      href="#"
                      style={{ color: "#282A30" }}
                    >
                      Stullar
                    </a>
                  </li>
                  <li onClick={() => {setCatalog('pot');navigate('/katalog')}} style={{cursor:"pointer"}} className="bottom">
                    <a
                      class="dropdown-item"
                      href="#"
                      style={{ color: "#282A30" }}
                    >
                      Qozonlar
                    </a>
                  </li>
                  <li onClick={() => {setCatalog('gate');navigate('/katalog')}} style={{cursor:"pointer"}} className="bottom">
                    <a
                      class="dropdown-item"
                      href="#"
                      style={{ color: "#282A30" }}
                    >
                      Darvozalar
                    </a>
                  </li>
                </ul>
              </li>
              <li style={ location?.pathname === "/delivery" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => {navigate('/delivery'); setActive(2)}} class="nav-item top">
                <a class="nav-link" href="#" style={{ color: "#282A30" }}>
                  Yetkazib berish
                </a>
              </li>
             
              <li style={ location?.pathname === "/payment" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => {setActive(3); navigate('/payment')}} class="nav-item top">
                <a
                  class="nav-link"
                  aria-disabled="true"
                  style={{ color: "#282A30" }}
                >
                  To'lov
                </a>
              </li>
              <li style={ location?.pathname === "/contacts" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => { setActive(4);navigate("/contacts");}} class="nav-item top">
                <a
                  class="nav-link "
                  aria-disabled="true"
                  style={{ color: "#282A30" }}
                >
                  Biz bilan bog'lanish
                </a>
              </li>
            </ul>
            <div  style={{cursor:"pointer"}} className="phone">
              <p style={{ color: "#282A30" }} className="p-0 m-0">
                <PhoneOutlined />
                <span className="ms-2">+998 90 010-85-10</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
