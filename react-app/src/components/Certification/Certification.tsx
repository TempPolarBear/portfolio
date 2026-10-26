
function Certification() {
  return (
    <section id="certification">
      <div data-aos="fade-up" data-aos-duration="2000" className="card mt-3 zoomInOut">
        <div className="card-header">
          <h5 className="m-0 p-0"><i className="fa-solid fa-medal me-1"></i>Certification</h5>
        </div>

        <div className="card-body">
          {/* Slider main container */}
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* Czech Certificate */}
              <div className="swiper-slide">
                <div className="text-center">
                  <h4 className="p-0 m-2">Czech Certificate</h4>
                  <p className="small mb-2">Certificate in Czech language.</p>
                  <a className="m-2" href="/assets/img/certificate/Czech_certificate.webp" data-lightbox="roadtrip" data-title="Czech certificate">
                    <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/Czech_certificate.webp" alt="Czech certificate" loading="lazy" />
                  </a>
                </div>
              </div>

              {/* English Certificate */}
              <div className="swiper-slide">
                <div className="text-center">
                  <h4 className="p-0 m-2">English Certificate</h4>
                  <p className="small mb-2">Certificate in English language.</p>
                  <a className="m-2" href="/assets/img/certificate/English_certificate.webp" data-lightbox="roadtrip" data-title="English certificate">
                    <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/English_certificate.webp" alt="English certificate" loading="lazy" />
                  </a>
                </div>
              </div>

              {/* Diploma Bachelor's */}
              <div className="swiper-slide">
                <div className="text-center">
                  <h4 className="p-0 m-2">Diploma Bachelor's</h4>
                  <p className="small mb-2">Bachelor's degree diploma.</p>
                  <a className="m-2" href="/assets/img/certificate/Diploma_bachelor's.webp" data-lightbox="roadtrip" data-title="Diploma Bachelor's">
                    <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/Diploma_bachelor's.webp" alt="Diploma Bachelor's" loading="lazy" />
                  </a>
                </div>
              </div>

              {/* IT Skills Certificate */}
              <div className="swiper-slide">
                <div className="text-center">
                  <h4 className="p-0 m-2">IT Skills Certificate</h4>
                  <p className="small mb-2">Certificate of an IT skills test.</p>
                  <a className="m-2" href="/assets/img/certificate/IT_skills_test.webp" data-lightbox="roadtrip" data-title="IT skills test">
                    <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/IT_skills_test.webp" alt="IT skills test" loading="lazy" />
                  </a>
                </div>
              </div>

              {/* IT English Certificate */}
              <div className="swiper-slide">
                <div className="text-center">
                  <h4 className="p-0 m-2">IT English Certificate</h4>
                  <p className="small mb-2">Certificate in IT English.</p>
                  <a className="m-2" href="/assets/img/certificate/IT_English.webp" data-lightbox="roadtrip" data-title="IT English">
                    <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/IT_English.webp" alt="IT English" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>

            {/* Swiper controls */}
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

export default Certification
