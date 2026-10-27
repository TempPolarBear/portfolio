function Footer() {
  return (
    <footer data-aos="slide-up" data-aos-duration="3000" className="py-5 zoomInOut">
        <div className="container d-flex justify-content-center">
            <div className="card bg-dark text-light border border-light rounded-5 w-100">
                <div className="card-body px-4 px-md-5 py-5">
                {/* Logo */}
                <div className="text-center mb-4">
                    <div className="d-inline-block rounded-4 px-5 py-3 shadow-sm zoomInOut">
                        <h4 className="m-0 fw-bold text-primary">
                            <a className="text-decoration-none text-primary" href="#">&lt;Valeriia /&gt;</a>
                        </h4>
                    </div>
                    <p className="text-secondary small mt-3 mb-0">Junior Front-End/Full-Stack Developer • Interested in UI/UX</p>
                    <p className="small text-secondary mt-2">Open to opportunities • Remote / relocation</p>
                </div>
                <div className="row justify-content-center g-5 mb-4 text-center text-lg-start">
                    {/* General Info */}
                    <div className="col-auto text-center">
                        <div style={{ minWidth: '220px' }}>
                            <h3 className="fw-bold mb-4">General Info</h3>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 zoomInOut">
                                    <a href="#personal_info" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-user me-2"></i>Personal Info
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#availability" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-map-pin me-2"></i>Availability
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#contacts" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-address-book me-2"></i>Contacts
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#languages" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-language me-2"></i>Languages
                                    </a>
                                </li>
                                <li className="zoomInOut">
                                    <a href="#media" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-hashtag me-2"></i>Social Media
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Portfolio */}
                    <div className="col-auto text-center">
                        <div style={{ minWidth: '220px' }}>
                            <h3 className="fw-bold mb-4">Portfolio</h3>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 zoomInOut">
                                    <a href="#experience" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-code-fork me-2"></i>Experience
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#learning-journey" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-stopwatch me-1"></i>Learning Journey
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#projects" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-folder-open me-2"></i>Projects
                                    </a>
                                </li>
                                <li className="mb-2 zoomInOut">
                                    <a href="#certification" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-medal me-2"></i>Certification
                                    </a>
                                </li>
                                <li className="zoomInOut">
                                    <a href="#education" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-graduation-cap me-2"></i>Education
                                    </a>
                                </li>
                                <li className="zoomInOut">
                                    <a href="#utils" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-sliders me-1"></i>JavaScript Mini Apps
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Skills */}
                    <div className="col-auto text-center">
                        <div style={{ minWidth: '220px' }}>
                            <h3 className="fw-bold mb-4">Skills</h3>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 zoomInOut">
                                    <a href="#hard_skills" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-laptop-code me-2"></i>Hard Skills
                                    </a>
                                </li>
                                <li className="zoomInOut">
                                    <a href="#soft_skills" className="text-decoration-none text-white-50">
                                        <i className="fa-solid fa-heart me-2"></i>Soft Skills
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Social */}
                <div className="d-flex justify-content-center gap-5 mb-4">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:valeriia.kuznetsova@proton.me" aria-label="Email Valeriia" className="text-primary fs-2 zoomInOut">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valeriia-kuznetsova/" aria-label="LinkedIn profile" className="text-primary fs-2 zoomInOut">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/TempPolarBear" aria-label="GitHub profile" className="text-primary fs-2 zoomInOut">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                {/* Copyright */}
                <div className="text-center">
                    <p className="mb-0 small text-muted">© 2026 Valeriia Kuznetsova. All rights reserved</p>
                </div>
            </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
