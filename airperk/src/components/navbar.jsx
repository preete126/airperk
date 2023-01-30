import "../assets/styles/navbar.css";
import { LoginOutlined } from "@ant-design/icons"
import { useRef, useState } from "react";
import { useEffect } from "react";




function Navbar() {
    const [bgChange, setBgChange] = useState(false)
    const changeBg = ()=>{
        const windowY = window.scrollY
        if (windowY < 100) {
           setBgChange(false)
        }else{
            setBgChange(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeBg)
        return ()=>{
            window.removeEventListener("scroll", changeBg)
        }
    },[])


    return (
        <>
            <nav style={{fontFamily:"'Montserrat', sans-serif"}}  className={`navbar navbar-expand-lg fixed-top navbar-light app_header ${bgChange ? "addStyle":""} `}>
                {/* <div className=" "> */}
                    <div className={`d-flex align-items-center gap-1 navbar-brand ${bgChange ? "text-primary":"text-light"}`}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-airplane-engines " viewBox="0 0 16 16">
                                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                            </svg>
                        </div>
                        <div className="logo_name">Airperk</div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <div className=" navbar-nav mx-auto d-flex align-items-center gap-4">
                            <a href="#" className={`${bgChange ? "text-primary":"text-light"}`}>Flights</a>
                            <a href="#" className={`${bgChange ? "text-primary":"text-light"}`}>Trips</a>
                            <a href="#" className={`${bgChange ? "text-primary":"text-light"}`}>Holiday</a>
                            <a href="#" className={`${bgChange ? "text-primary":"text-light"}`}>Contact</a>
                        </div>
                        <form className="d-flex justify-content-center align-items-center me-4 form-inline my-2 my-lg-0">

                            <button className={`btn fs-5 fw-bold d-flex gap-2 justify-content-center align-items-center ${bgChange ? "auth_btn":"text-light"} `}>
                                <div className={` p-1 d-flex justify-content-center align-items-center rounded-circle ${bgChange? "bg-primary":"bg-light"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-person-fill-add ${bgChange? "text-light":"text-primary"}`} viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                    </svg>
                                </div>
                                <span>Sign Up</span>
                            </button>
                        </form>
                        <form className="d-flex justify-content-center align-items-center form-inline my-2 my-lg-0 ">
                            <button className={`btn fs-5 fw-bold d-flex justify-content-center gap-2 align-items-center ${bgChange ? "auth_btn":"text-light"} `}>
                                <span>Log In</span>
                                <span className=" p-1 d-flex justify-content-center align-items-center  ">
                                    <LoginOutlined />
                                </span>
                            </button>


                        </form>
                    </div>
                {/* </div> */}
            </nav>
        </>
    );
}

export default Navbar;