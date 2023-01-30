import "../../assets/styles/home.css"
import explore from "../../assets/images/tour.jpg"
import holiday from "../../assets/images/holiday.jpg"
import trip from "../../assets/images/trip.jpg"
import friends from "../../assets/images/friends.jpg"
import Controller from "./flight_controller";
import Navbar from "../../components/navbar";
import { ArrowRightOutlined } from "@ant-design/icons"



function App() {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } else {
                entry.target.classList.remove("show")
            }
        })
    })
    const slide_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show2")
            } else {
                entry.target.classList.remove("show2")
            }
        })
    })

    const hiddenElement = document.querySelectorAll('.hidden')
    hiddenElement.forEach((el) => observer.observe(el))
    const slideElement = document.querySelectorAll('.slide')
    slideElement.forEach((el) => slide_observer.observe(el))

    return (
        <>
            <section>
                <Navbar />
                <section className="home_bg" style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <main className="content ms-auto">
                        <div style={{ marginTop: "100px" }}>
                            <h1>IT'S TIME TO TRAVEL AGAIN</h1>
                            <p>Fly away from Home, Explore the world and celebrate great spirit</p>
                            <h3>Big Offer <button className="btn fs-5 text-white" style={{ height: "50px", borderBottom: "2px outset rgb(96,81,126)", backgroundColor: "rgb(173,132,146)" }}>Book now</button></h3>
                        </div>
                    </main>
                </section>
                <Controller />
                <section className="wrapper mt-5">
                    <main>
                        <h2 className="pb-2" style={{ fontWeight: "300" }}>Discover the world. Tour and travel the world with friends</h2>
                        <div style={{ fontSize: "16px", color: "gray" }}>
                            Thinking of travelling somewhere soon? Here are some options to help you get started.
                        </div>
                    </main>
                    <main className=" m-0 mt-4 row ">
                        <div className=" col-12 col-lg-6 d-flex px-0 slide" style={{ borderRadius: "15px", border: "0.5px solid rgb(238,239,243)", height: "420px", backgroundImage: `url(${explore})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="mt-auto w-100 ">
                                <div className="p-3 text-white " style={{ fontSize: "17px" }}>
                                    Explore your destinations
                                </div>
                                <div className=" bg-light w-100 p-2 px-3 text-primary d-flex align-items-start gap-3" style={{ backgroundBlendMode: "overlay", minHeight: "50px", borderBottomLeftRadius: "13px", borderBottomRightRadius: "15px" }}>
                                    <span>Find flights and fares </span><span><ArrowRightOutlined /></span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6 hidden">
                            <div className="row ps-lg-4 pt-4 pt-lg-0">
                                <div className="col-6 d-flex px-0" style={{ borderRadius: "15px", height: "420px", border: "0.5px solid rgb(238,239,243)", backgroundImage: `url(${holiday})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                    <div className="mt-auto w-100 ">
                                        <div className="p-3 text-white " style={{ fontSize: "17px" }}>
                                           Your perfect holiday awaits
                                        </div>
                                        <div className=" bg-light w-100 p-2 px-3 text-primary d-flex align-items-start gap-3" style={{ backgroundBlendMode: "overlay", minHeight: "50px", borderBottomLeftRadius: "13px", borderBottomRightRadius: "15px" }}>
                                            <span>Book a package </span><span ><ArrowRightOutlined  /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row mb-3 ms-2 d-flex " style={{ borderRadius: "15px", border: "0.5px solid rgb(238,239,243)", height: "202px", backgroundImage: `url(${trip})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                        <div className="mt-auto bg-light w-100 p-2 px-3" style={{ backgroundBlendMode: "overlay", minHeight: "50px", borderBottomLeftRadius: "13px", borderBottomRightRadius: "13px" }}>
                                            heyyyyy  heyyyyy explore your 
                                        </div>
                                    </div>
                                    <div className="row mt-3 ms-2 d-flex" style={{ borderRadius: "15px", border: "0.5px solid rgb(238,239,243)", height: "202px", backgroundImage: `url(${friends})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                        <div className="mt-auto bg-light w-100 p-2 px-3" style={{ backgroundBlendMode: "overlay", minHeight: "50px", borderBottomLeftRadius: "13px", borderBottomRightRadius: "13px" }}>
                                            heyyyyy  heyyyyy explore your
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </section>
        </>
    );
}

export default App;