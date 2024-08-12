import { useContext } from "react"
import { Footer } from "../footer"
import { Header } from "../header"
import door from "../image/eshik.png"
import { ApiContext } from "../context"
import { data } from "../data"
export const About = () => {
    const {id} = useContext(ApiContext);
    const filterData = data.filter(item => item.id === id);
    return <>
    <Header/>
        <div  className="row container mx-auto my-5">
        {filterData?.map(item => <>
            <div  className="col-lg-6">
            <img className="w-50 rounded-3 object-fit-cover" src={item?.image} />
         </div>

         <div className="col-lg-6 p-4">
         <h1>{item?.name}</h1>
         <p>Kategoriya: <span style={{color:"#B62D25"}} className="">{item?.category}</span></p>
         <p>Quyidagi formani to'ldiring. Tez orada siz bilan
         menejerlarimiz bog'lanib, batafsil ma'lumot berishadi ...</p>
         <div className="d-flex align-items-center gap-5">
            <input style={{backgroundColor:"#F7F7F7" , color:"#000000"}} placeholder="Ismingiz" className="rounded-3 border-0 p-2 text-black form-control" />
            <input style={{backgroundColor:"#F7F7F7"}} placeholder="+998" className="rounded-3 border-0 p-2 text-black form-control"/>
         </div>

         <div className="d-flex align-items-center gap-5 mt-4">
            <input style={{backgroundColor:"#F7F7F7" , color:"#000000"}} placeholder="Email" className="rounded-3 border-0 p-2 text-black form-control" />
            <input style={{backgroundColor:"#F7F7F7"}} placeholder='Manzil' className="rounded-3 border-0 p-2 text-black form-control"/>
         </div>
         <button style={{backgroundColor:"#B62D25"}} className="btn text-white mt-4 w-100">Jo'natish</button>
         </div>
        </>)}
        </div>
        <div className="text-center my-5">
            <p style={{fontSize:"32px"}}>Shourumimizga kelib, so'zlarimizga ishonch hosil qilish!</p>
            <p style={{fontSize:"20px"}}>Siz bilan ishlashdan minnatdor bo'lamiz.</p>
        </div>
        <Footer/>
    </>
}