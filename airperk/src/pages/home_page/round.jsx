import { SwapOutlined } from "@ant-design/icons";

function RoundTrip() {
    return (
        <>
            <section style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <div className="m-3 mb-1  border-bottom border-primary border-2" style={{ width: "fit-content" }}>Flights</div>
                <form action="" className="p-3 input-group  " >

                    <div className="form-control p-0 mb-3 position-relative ">

                        <div className="form-floating">
                            <input type="text" className="form-control px-4 border border-0" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="px-4">From</label>
                        </div>
                        <button type="button" className="btn btn-light border border-primary p-2 rounded-circle position-absolute d-flex align-items-center justify-content-center " style={{ width: "30px", height: "30px", right: "-15px", top: "25%" }}>
                            <SwapOutlined className="fs-5 text-primary" />
                        </button>
                    </div>
                    <div className="form-control p-0 mb-3 ">
                        <div className="form-floating">
                            <input type="text" className="form-control px-4 border border-0" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="px-4">To</label>
                        </div>
                    </div>
                    <div className="form-control p-0 mb-3 ">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control px-4 border border-0" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="px-4">Departure</label>
                        </div>
                    </div>
                    <div className="form-control p-0 mb-3 ">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control px-4 border border-0" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="px-4">Return</label>
                        </div>
                    </div>
                    <div className="form-control p-0 mb-3 ">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control px-4 border border-0" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="px-4">Traveller/Class</label>
                        </div>
                    </div>


                </form>

                <div className="pe-3  ">
                    <button className="text-white rounded-3 d-flex gap-2 align-items-center justify-content-center ms-auto" style={{ width: "200px", height: "50px", border: "none", backgroundColor: "rgb(173,132,146)", borderBottom: "2px outset rgb(96,81,126)" }} >
                        <span style={{ fontSize: "18px" }}>Search Flight</span>
                        <div style={{ transform: "rotate(45deg)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-airplane-engines " viewBox="0 0 16 16">
                                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                            </svg>
                        </div>
                    </button>
                </div>

            </section>
        </>
    );
}

export default RoundTrip;