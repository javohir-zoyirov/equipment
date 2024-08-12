import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import logo from "../image/Frame 48095450.png";
export const Footer = () => {
  return (
    <div  style={{backgroundColor:"#F7F7F7"}}>
      <div className="row p-3 container mx-auto">
      <div className="col-lg-3">
      <div className="d-flex align-items-center flex-column gap-3">
          <img src={logo} />
          <p className="p-0 m-0">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
      </div>
      </div>

      <div className="col-lg-3">
      <div className="d-flex  flex-column gap-3">
        <p style={{color:"#F6973F"}} className="fw-bold">Asosiy</p>
        <p className="p-0 m-0">Yetkazib berish</p>
        <p className="p-0 m-0">To'lov</p>
        <p className="p-0 m-0">Biz bilan bog'lanish</p>
      </div>
      </div>

      <div className="col-lg-3">
      <div className="d-flex flex-column gap-3">
        <p style={{color:"#F6973F"}} className="fw-bold">Katalog</p>
        <p className="p-0 m-0">Eshiklar</p>
        <p className="p-0 m-0">Stollar</p>
        <p className="p-0 m-0">Zinapoyalar</p>
        <p className="p-0 m-0">Qozonlar</p>
      </div>
      </div>

      <div className="col-lg-3">
      <div className="d-flex flex-column gap-3">
        <p style={{color:"#F6973F"}} className="fw-bold">Ishtimoiy tarmoq</p>
        <p className="p-0 m-0"><FacebookOutlined /><span className="ms-2">Facebook</span></p>
        <p className="p-0 m-0"><TwitterOutlined /><span className="ms-2">Twitter</span></p>
        <p className="p-0 m-0"> <InstagramOutlined /><span className="ms-2">Instagram</span></p>
      </div>
      </div>
    </div>
    </div>
  );
};
