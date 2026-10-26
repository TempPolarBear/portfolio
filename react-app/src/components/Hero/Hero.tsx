import { useState } from 'react'

function Hero() {

    const [isDownloading, setIsDownloading] = useState(false)

        const handleDownload = () => {
        setIsDownloading(true)

        setTimeout(() => {
            setIsDownloading(false)
            }, 5000)
        }

    return (
        <header data-aos="fade-up" data-aos-duration="1500" className="mt-5 mb-5" id="welcome" style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-4 justify-content-center align-items-center">
                    <div className="col">
                        <div className="rounded-2 d-flex align-items-center p-5">
                            <div>
                                <h1 className="fw-bold mb-4">Hello, I’m Valeriia Kuznetsova</h1>
                                <p>
                                    <i className="fa-solid fa-graduation-cap me-1 mb-3"></i>Junior Front-End/Full-Stack Developer<br />
                                    <i className="fa-solid fa-desktop me-1 mb-3"></i>HTML, CSS, JavaScript & Bootstrap<br />
                                    <i className="fa-solid fa-book-bookmark me-1 mb-3"></i>Learning TypeScript, React & modern Front-End/Full-Stack tools<br />
                                    <i className="fa-solid fa-palette me-1 mb-3"></i>Building responsive, user-friendly interfaces<br />
                                    <i className="fa-solid fa-laptop-code me-1 mb-3"></i>Open to Junior Front-End/Full-Stack opportunities
                                </p>
                                <div className="d-flex gap-2 mt-3">
                                    <a className="btn btn-primary shadow-sm zoomInOut" href="/assets/docs/Valeriia_Kuznetsova_CV.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
                                    <a className="btn btn-outline-primary shadow-sm zoomInOut" href="/assets/docs/Valeriia_Kuznetsova_CV.pdf" onClick={handleDownload} download="Valeriia_Kuznetsova_CV.pdf">
                                        <i className={`fa-solid ${isDownloading ? 'fa-hourglass-half' : 'fa-download'} me-2`} aria-hidden="true"></i>
                                            {isDownloading ? 'Please wait...' : 'Download CV'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col align-self-center text-center p-5">
                        <img src="/assets/img/photo/my_photo.webp" className="rounded-circle img-fluid zoomInOut" width="300" alt="Valeriia Kuznetsova" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero