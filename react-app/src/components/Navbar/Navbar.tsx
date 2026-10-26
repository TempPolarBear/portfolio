import { useState, useEffect } from 'react'

function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])

    return (
        <nav data-aos="fade-down" data-aos-duration="1500" className="navbar navbar-expand-lg navbar-light fixed-top site-navbar">
        <div className="container">
            <a className="navbar-brand text-primary zoomInOut" href="#"><i className="fas fa-user me-1"></i>&lt;Valeriia /&gt;</a>
            <button className="navbar-toggler zoomInOut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon zoomInOut"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active zoomInOut">
                        <a className="nav-link" href="#welcome"><i className="fa-solid fa-door-open me-1"></i>Welcome</a>
                    </li>
                    <li className="nav-item dropdown zoomInOut">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownGeneral" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-info me-1"></i>
                            General Info
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownGeneral">
                            <li><a className="dropdown-item zoomInOut" href="#personal_info"><i className="fa-solid fa-user fw-bold me-1"></i>Personal Info</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#availability"><i className="fa-solid fa-map-pin fw-bold me-1"></i>Availability</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#contacts"><i className="fa-solid fa-address-book me-1"></i>Contacts</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#languages"><i className="fa-solid fa-language me-1"></i>Languages</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#media"><i className="fa-solid fa-hashtag me-1"></i>Social Media</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown zoomInOut">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-info me-1"></i>Portfolio</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                            <li><a className="dropdown-item zoomInOut" href="#experience"><i className="fa-solid fa-code-fork me-1"></i>Experience</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#learning-journey"><i className="fa-solid fa-stopwatch me-1"></i>Learning Journey</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#projects"><i className="fa-solid fa-folder-open me-1"></i>Projects</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#certification"><i className="fa-solid fa-medal me-1"></i>Certification</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#education"><i className="fa-solid fa-graduation-cap me-1"></i>Education</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#utils"><i className="fa-solid fa-sliders me-1"></i>JavaScript Mini Apps</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown zoomInOut">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSkills" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-book me-1"></i>
                            Skills
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownSkills">
                            <li><a className="dropdown-item zoomInOut" href="#hard_skills"><i className="fa-solid fa-laptop-code me-1"></i>Hard Skills</a></li>
                            <li><a className="dropdown-item zoomInOut" href="#soft_skills"><i className="fa-solid fa-heart me-1"></i>Soft Skills</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="d-flex align-items-center ms-3">
                    <i className="fa-solid fa-sun text-primary zoomInOut"></i>
                    <div className="form-check form-switch m-0 mx-2 zoomInOut">
                        <input className="form-check-input" type="checkbox" role="switch" id="themeToggle" aria-label="Toggle dark theme" checked={isDark} onChange={(event) => setIsDark(event.target.checked)} />
                    </div>
                    <i className="fa-solid fa-moon text-primary zoomInOut"></i>
                </div>
            </div>
        </div>
    </nav>
    )
}
export default Navbar
