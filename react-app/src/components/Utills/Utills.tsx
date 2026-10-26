import Calculator from "./Calculator/Calculator"
import Randomizer from "./Randomizer/Randomizer"
import Date_Time from "./Date_Time/Date_Time"
import Weather from "./Weather/Weather"
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter"
import Prediction from "./Prediction/Prediction"

function Utils() {
  return (
    <section id="utils">
        <div data-aos="fade-up" data-aos-duration="2000" className="card mt-3 zoomInOut">
            <div className="card-header">
                <h5 className="m-0 p-0"><i className="fa-solid fa-sliders me-1"></i>JavaScript Mini Apps</h5>
            </div>
            <div className="card-body">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <Calculator />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <Randomizer />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <Date_Time />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <Weather />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <CurrencyConverter />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="d-flex justify-content-center px-2">
                                <Prediction />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev zoomInOut"></div>
                    <div className="swiper-button-next zoomInOut"></div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Utils