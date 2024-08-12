import { Footer } from "../footer";
import { Header } from "../header";
import ford from "../image/image 11.png";
export const Delivery = () => {
  return (
    <>
      <Header />
      <div className="row container mx-auto my-5">
        <div className="col-lg-6 col-12">
          <img className="w-100" src={ford} alt="#" />
        </div>
        <div className="col-lg-6 px-5 col-12">
          <p style={{color:"#000000", fontSize:"20px"}}>
            Biz kompayniya mijozlariga g'amxo'rlik qilamiz. Bizning eshiklar
            qulay va juda oson ichki eshiklarimizga buyurtma bering
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle me-2"
              viewBox="0 0 16 16"
              style={{ color: "#33FF00" }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            Eshiklarni etkazib berish maxsus jihozlangan transport vositasida
            amalga oshiriladi
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle me-2"
              viewBox="0 0 16 16"
              style={{ color: "#33FF00" }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            Shuningdek, siz funktsiyadan foydalanishingiz mumkin: "ombordan olib
            ketish".
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle me-2"
              viewBox="0 0 16 16"
              style={{ color: "#33FF00" }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            Qulfni yoki mandalni o'rnatish, menteşalarni osib qo'yish,
            tutqichlarni mahkamlash. Eshik ramkasini yig'ish va o'rnatish;
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle me-2"
              viewBox="0 0 16 16"
              style={{ color: "#33FF00" }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            Sizga qulay bo'lgan har qanday vaqtda tezkor etkazib berishni
            kafolatlaymiz!
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};
