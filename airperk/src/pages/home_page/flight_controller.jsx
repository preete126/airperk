import { CheckCircleOutlined, ContainerOutlined, SwapOutlined } from "@ant-design/icons";
import { useState } from "react";
import Multi_city from "./multi-city";
import One_way from "./one_way";
import RoundTrip from "./round";

function Controller() {
   const [bgColor, setBgColor] = useState("one")


   const changeContent = function (name, content) {
      setBgColor(name)
   }


   return (
      <>
         <section className="position-relative system_sec" style={{ padding: "15px 50px 20px 50px", fontFamily: "'Montserrat', sans-serif" }}>
            <main className="system">
               <main className="row m-0">
                  <div className="title col" style={{ borderTopLeftRadius: "15px", backgroundColor: bgColor == "one" ? "white" : "rgb(96,81,126)", color: bgColor == "one" ? "rgb(96,81,126)" : "white" }} onClick={() => changeContent("one", "oneContent")}>
                     <div style={{ transform: "rotate(90deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-airplane-engines " viewBox="0 0 16 16">
                           <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                        </svg>
                     </div>
                     <div style={{ fontSize: "18px" }}>One-way</div>
                  </div>
                  <div className="title col" style={{ backgroundColor: bgColor == "round" ? "white" : "rgb(96,81,126)", color: bgColor == "round" ? "rgb(96,81,126)" : "white" }} onClick={() => changeContent("round", "roundContent")}>

                     <SwapOutlined className="fs-5" />
                     <div style={{ fontSize: "18px" }}>Roundtrip</div>
                  </div>
                  <div className="title col" style={{ backgroundColor: bgColor == "multi" ? "white" : "rgb(96,81,126)", color: bgColor == "multi" ? "rgb(96,81,126)" : "white" }} onClick={() => changeContent("multi", "multiContent")}>

                     <ContainerOutlined className="fs-5" />
                     <div style={{ fontSize: "18px" }}>Multi-city</div>
                  </div>
                  <div className="title col d-none d-md-flex" style={{borderTopRightRadius: "15px", backgroundColor: bgColor == "check" ? "white" : "rgb(96,81,126)", color: bgColor == "check" ? "rgb(96,81,126)" : "white" }} onClick={() => changeContent("check", "checkContent")}>
                     <CheckCircleOutlined className="fs-5" />
                     <div style={{ fontSize: "18px" }}>Check-In</div>
                  </div>

               </main>
               <div>
                  {bgColor == "one" && <One_way/>}
                  {bgColor == "round" && <RoundTrip/>}
                  {bgColor == "multi" && <Multi_city/>}
                  {/* {bgColor == "round" && <RoundTrip/>} */}
                </div>

            </main>
         </section>

      </>
   );
}

export default Controller;