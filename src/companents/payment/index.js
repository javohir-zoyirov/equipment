import { Header } from "../header";
import { Footer } from "../footer";

export const Payment = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="container my-5 flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="row justify-content-center align-items-center" style={{ height: "100%" }}>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div
              className="border p-3 d-flex align-items-center justify-content-center"
              style={{ width: "100%", height: "150px", borderRadius: "20px" }}
            >
              <div className="d-flex align-items-center justify-content-between gap-3">
                <p style={{fontSize:"40px"}} className="p-0 m-0">Naqt</p>
                <img
                  style={{width:"100px", height:"100px"}}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Oj8fCjn_z51-7c0ufl1ZABROiJcxqCLAIBRDmiZYJMzEdBDP9YIiqAfjoJFURc2610Y&usqp=CAU"
                  }
                  alt="Naqt"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div
              className="border d-flex align-items-center justify-content-center"
              style={{ width: "100%", height: "150px", borderRadius: "20px" }}
            >
              <img
                className="w-100 h-100 object-fit-cover"
                src="https://click.uz/click/images/click-white.jpg"
                alt="Click"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div
              className="border d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "150px", borderRadius: "20px" }}
            >
              <img
                className="w-100 h-100 object-fit-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paymeuz_logo.png/2560px-Paymeuz_logo.png"
                alt="Payme"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
