import { useContext } from "react";
import { ApiContext } from "../context";
import { Rate } from "antd";
import { data } from "../data";
import { Header } from "../header";
import { Footer } from "../footer";
import { useLocation, useNavigate } from "react-router";
import logo from "../image/Frame 48095450.png";
import { PhoneOutlined } from "@ant-design/icons";
export const Category = () => {
    const {category,setCategory,catalog,setCatalog,setId} = useContext(ApiContext);
  const filterData = data.filter((item) => item.category === catalog);
  const location = useLocation()
 const navigate = useNavigate();
    return <>
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
              <li style={ location?.pathname === "/delivery" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => {navigate('/delivery')}} class="nav-item top">
                <a class="nav-link" href="#" style={{ color: "#282A30" }}>
                  Yetkazib berish
                </a>
              </li>
             
              <li style={ location?.pathname === "/payment" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => {navigate('/payment')}} class="nav-item top">
                <a
                  class="nav-link"
                  aria-disabled="true"
                  style={{ color: "#282A30" }}  
                >
                  To'lov
                </a>
              </li>
              <li style={ location?.pathname === "/contacts" ? {borderTop:"3px solid #B62D25",cursor:"pointer"} : {cursor:"pointer"}} onClick={() => {navigate("/contacts");}} class="nav-item top">
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
      <div className="py-5">
        <span
          style={{
            backgroundColor: "#EEEEEE",
            display: "inline",
            width: "355px",
          }}
          className="p-2 d-flex align-items-center d-block justify-content-center gap-2 mx-auto rounded-5"
        >
          <button
            style={
                catalog === "door"
                ? { backgroundColor: "white" }
                : { backgroundColor: "transparent" }
            }
            onClick={() => setCatalog("door")}
            className="btn text-black rounded-5 border-0"
          >
            Eshik
          </button>
          <button
           style={
            catalog === "chair"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCatalog("chair")}
            className="btn text-black rounded-5 border-0"
          >
            Stol stul
          </button>
          <button
           style={
            catalog === "pot"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCatalog("pot")}
            className="btn text-black rounded-5 border-0"
          >
            Qozon
          </button>
          <button
           style={
            catalog === "gate"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCatalog("gate")}
            className="btn text-black rounded-5 border-0"
          >
            Zinapoya
          </button>
        </span>

        <div className="row container mx-auto my-5">
        {filterData?.map((item, index) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="mb-4 p-3 rounded-3">
                  <img style={{width:"200px", height:"250px"}} className="w-100 rounded-3" src={item.image} />
                  <div className="text-start">
                    <p
                      style={{ color: "#8D8D8D", fontSize: "16,76px" }}
                      className="p-0 mt-3"
                    >
                      {item?.name}
                    </p>
                    <p
                      style={{ color: "#1E1E1E", fontSize: "21,33px" }}
                      className="p-0 my-3 fw-bold"
                    >
                      {item?.category}
                    </p>
                    <Rate disabled defaultValue={item?.rate} />
                    <button
                    onClick={()=> {
                        navigate(`/about/:${item.id}`); setId(item.id)
                        }}
                      style={{ backgroundColor: "#F7F7F7" }}
                      className="w-100 btn"
                    >
                      Batafsil
                    </button>
                  </div>
                  </div>
                </div>
            );
          })}
        </div>
       
          

        <div className="text-center">
          <button style={{ color: "#B62D25" }} className="btn ">
            To'liq ko'rish{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
    </>
}