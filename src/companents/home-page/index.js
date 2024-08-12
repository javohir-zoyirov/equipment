import ReactPlayer from "react-player";
import { Header } from "../header";
import rasm1 from "../image/1-rasm.png";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import eshik from "../image/eshik.png";
import zina1 from "../image/zina1.png";
import zina2 from "../image/zina2.png";
import zina3 from "../image/zina3.png";
import fikr2 from "../image/fikr2.png";
import fikr3 from "../image/fikr3.png";
import dasturxon from "../image/dasturxon.png";
import x from "../image/x-octagon.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./home-page.css";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rate } from "antd";
import { Footer } from "../footer";
import { data } from "../data";
import { useContext, useState } from "react";
import { ApiContext } from "../context";
import { useNavigate } from "react-router";
export const HomePage = () => {
  const {category, setCategory, setId,id} = useContext(ApiContext);
  const filterData = data.filter((item) => item.category === category);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
        style={{ height: "500px" }}
        className="container mx-auto my-5 d-flex align-items-center gap-5 "
      >
        <div className="">
          <p style={{ color: "#B62D25", fontSize: "20px" }} className="fw-bold">
            DECORATE HOME
          </p>
          <h1
            style={{ color: "#282A30", fontSize: "64px" }}
            className="fw-bold"
          >
            PRIMIUM SIFATDAGI MDF ESHIKLAR
          </h1>
          <div className="my-4">
            <p>
              <img src={icon1} /> To'g'ridan to'g'ri ishlab chiqaruvchidan
            </p>
            <p style={{ marginLeft: "67px" }}>
              <img src={icon2} /> 1 yil bepul serviz ko'rsatamiz
            </p>
            <p style={{ marginLeft: "134px" }}>
              <img src={icon3} />
              Sifatga 5 yillik kafolat beramiz
            </p>
          </div>
          <button
            style={{ backgroundColor: "#B62D25" }}
            className="btn text-white"
          >
            Buyurtma berish
          </button>
        </div>
        <div className="">
          <img className="w-100 object-fit-cover" src={rasm1} />
        </div>
      </div>

      <div style={{ backgroundColor: "#000000E5" }}>
        <div className="row container mx-auto py-3">
          <div className="col-lg-3">
            <div className="border-end text-center">
              <p
                className="p-0 m-0"
                style={{ color: "#B62D25", fontSize: "24px" }}
              >
                10 yil
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "12px" }}
              >
                Tajribaga ega mutaxasislar
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="border-end text-center">
              <p
                className="p-0 m-0"
                style={{ color: "#B62D25", fontSize: "24px" }}
              >
                7 000 dan
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "12px" }}
              >
                Ortiq topshirilgan loyihalar
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="border-end text-center">
              <p
                className="p-0 m-0"
                style={{ color: "#B62D25", fontSize: "24px" }}
              >
                47 000 ta
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "12px" }}
              >
                Ishlab chiqarilgan mahsulot
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="border-end text-center">
              <p
                className="p-0 m-0"
                style={{ color: "#B62D25", fontSize: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-infinity"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
                </svg>
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "12px" }}
              >
                Tajribaga ega mutaxasislar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReactPlayer
          width={"100%"}
          height={"500px"}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        />
      </div>

      <div style={{ backgroundColor: "#F7F7F7" }} className="py-5">
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
              category === "door"
                ? { backgroundColor: "white" }
                : { backgroundColor: "transparent" }
            }
            onClick={() => setCategory("door")}
            className="btn text-black rounded-5 border-0"
          >
            Eshik
          </button>
          <button
           style={
            category === "chair"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCategory("chair")}
            className="btn text-black rounded-5 border-0"
          >
            Stol stul
          </button>
          <button
           style={
            category === "pot"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCategory("pot")}
            className="btn text-black rounded-5 border-0"
          >
            Qozon
          </button>
          <button
           style={
            category === "gate"
              ? { backgroundColor: "white" }
              : { backgroundColor: "transparent" }
          }
            onClick={() => setCategory("gate")}
            className="btn text-black rounded-5 border-0"
          >
            Zinapoya
          </button>
        </span>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper my-5 container mx-auto"
        >
          {filterData?.map((item, index) => {
            return (
              <SwiperSlide>
                <div onClick={() => {}}>
                  <img style={{width:"250px", height:"300px"}} className="w-100" src={item.image} />
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
              </SwiperSlide>
            );
          })}
        </Swiper>

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

      <div className="d-flex align-items-center justify-content-between my-5">
        <div className="ms-5 ps-5 w-50">
          <p style={{ color: "#B62D25", fontSize: "18px" }} className="p-0 m-0">
            Mahsulotlar
          </p>
          <p
            style={{ color: "#1E1E1E", fontSize: "42px" }}
            className="fw-bold p-0 m-0"
          >
            Bizning ishlarimizdan Na'munalar
          </p>
          <p style={{ fontSize: "18px", color: "#1E1E1E" }} className="p-0 m-0">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
        </div>
        <div className="d-flex align-items-center gap-4 w-30">
          <div className="d-flex align-items-center flex-column">
            <img className="w-100 object-fit-cover" src={zina1} />
            <img className="w-100 object-fit-cover" src={zina2} />
          </div>
          <div className="text-bottom">
            <img className="w-100 object-fit-cover" src={zina3} />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p style={{ color: "#B62D25", fontSize: "18px" }} className="">
          fikrlar
        </p>
        <p style={{ color: "#1E1E1E", fontSize: "42px" }}>
          Mijozlarimizning fikirlari
        </p>

        <div className="row container mx-auto mt-5">
          <div className="col-lg-4">
            <div className="position-relative">
              <img style={{ height: "406px" }} className="w-100" src={fikr3} />
              <div
                style={{ width: "200px", right: "57px" }}
                className="position-absolute bottom-0 bg-white p-3 rounded-4 m-3"
              >
                <p className="p-0 m-0">Abror Ahmedov</p>
                <p className="p-0 m-0">Shifokor</p>
                <p className="p-0 m-0">
                  “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                  terlihat mahal“
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="position-relative">
              <img style={{ height: "406px" }} className="w-100" src={fikr2} />
              <div
                style={{ width: "200px", right: "57px" }}
                className="position-absolute bottom-0 bg-white p-3 rounded-4 m-3"
              >
                <p className="p-0 m-0">Abror Ahmedov</p>
                <p className="p-0 m-0">Shifokor</p>
                <p className="p-0 m-0">
                  “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                  terlihat mahal“
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="position-relative">
              <img style={{ height: "406px" }} className="w-100" src={fikr3} />
              <div
                style={{ width: "200px", right: "57px" }}
                className="position-absolute bottom-0 bg-white p-3 rounded-4 m-3"
              >
                <p className="p-0 m-0">Abror Ahmedov</p>
                <p className="p-0 m-0">Shifokor</p>
                <p className="p-0 m-0">
                  “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                  terlihat mahal“
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center my-5 containe">
        <div>
          <img className="w-100" src={dasturxon} />
        </div>
        <div className="p-4">
          <p style={{ fontSize: "36px" }} className="p-0 m-0">
            Tanlovda adashsangiz quyidagi
            <span style={{ color: "#B62D25" }} className="px-4">
              muammolarga
            </span>{" "}
            duch kelishingiz mumkin
          </p>

          <div className="d-flex align-items-center justify-content-between mt-4">
            <div>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Asablaringiz va qimmatli vaqtingizdan ayrilishingiz
                </span>
              </p>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Eshik muddatdan kechiktirib berilishi
                </span>
              </p>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Qiynalib topgan mablag'ingizni yo'qotishingiz
                </span>
              </p>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Tezda rangi o'chib, sarg'ayib ketishi
                </span>
              </p>
            </div>
            <div>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Asablaringiz va qimmatli vaqtingizdan ayrilishingiz
                </span>
              </p>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Eshik muddatdan kechiktirib berilishi
                </span>
              </p>
              <p>
                <img src={x} />

                <span className="ms-2">
                  Qiynalib topgan mablag'ingizni yo'qotishingiz
                </span>
              </p>
              <p>
                <img src={x} />
                <span className="ms-2">
                  Tezda rangi o'chib, sarg'ayib ketishi
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" text-center position-relative">
        <p className="p-0 m-0 container mx-auto" style={{ fontSize: "32px" }}>
          Bizning eshiklar bilan yuqoridagi muammolarga duch kelsangiz,
          ma'muriyat <span style={{ color: "#B62D25" }} className="mx-2">harajat</span> va{" "}
          <span style={{ color: "#B62D25" }} className="mx-2">majburiyatlarni</span>ƒo'z
          zimmasiga oladi
        </p>
        <img className="position-absolute start-0 top-100" src={eshik1} alt="#" />
        <img className="position-absolute end-0 top-0" src={eshik2} alt="#" />

        <div>

        </div>
      </div> */}

      {/* <div>
        <p>Yana bir ustunlik jihatimiz</p>
        <p>7 bosqichli sifat nazoratidan o'tkazamiz</p>
      </div> */}

      <Footer />
    </>
  );
};
