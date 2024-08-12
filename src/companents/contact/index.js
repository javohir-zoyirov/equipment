import { Footer } from "../footer";
import { Header } from "../header";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  

export const Contact = () => {
    const position = [41.311081, 69.240562];
  return (
    <>
      <Header />
      <div className="row container mx-auto my-5">
        <div className="col-lg-6 col-12">
          <p>
            <span style={{ color: "#B62D25" }}>F9</span> group agentligi
          </p>
          <div className="row">
            <div className="col-lg-6 mt-3  ">
              <p
                style={{ fontSize: "16px", color: "#000000CC 80%" }}
                className="p-0 m-0"
              >
                Ish vaqti
              </p>
              <p
                style={{ fontSize: "18px", color: "#000000" }}
                className="p-0 m-0"
              >
                Dushanbadan-shanbagacha 09:00 dan 18:00 gacha
              </p>
            </div>

            <div className="col-lg-6 mt-3">
              <p
                style={{ fontSize: "16px", color: "#000000CC 80%" }}
                className="p-0 m-0"
              >
                Transport:
              </p>
              <p
                style={{ fontSize: "18px", color: "#000000" }}
                className="p-0 m-0"
              >
                131-avtobus, 13-yo`nalishli taksi.
              </p>
            </div>

            <div className="col-lg-6 mt-3">
              <p
                style={{ fontSize: "16px", color: "#000000CC 80%" }}
                className="p-0 m-0"
              >
                Telefon:
              </p>
              <p
                style={{ fontSize: "18px", color: "#000000" }}
                className="p-0 m-0"
              >
                +998 71 230-12-91
              </p>
            </div>

            <div className="col-lg-6 mt-3">
              <p
                style={{ fontSize: "16px", color: "#000000CC 80%" }}
                className="p-0 m-0"
              >
                Manzil:
              </p>
              <p
                style={{ fontSize: "18px", color: "#000000" }}
                className="p-0 m-0"
              >
                Toshkent shahri, Kichik Xalqa Yo`li ko`chasi, G-9a mavzesi, 21-a
                uy.
              </p>
            </div>

            <div className="col-lg-6">
              <p
                style={{ fontSize: "16px", color: "#000000CC 80%" }}
                className="p-0 m-0"
              >
                E-mail:
              </p>
              <p
                style={{ fontSize: "18px", color: "#000000" }}
                className="p-0 m-0"
              >
                f9group@gmail.uz,
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
        <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%', borderRadius:"20px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
        </div>
      </div>
      <Footer/>
    </>
  );
};
