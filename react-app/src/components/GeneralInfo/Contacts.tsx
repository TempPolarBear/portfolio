function Contacts() {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="card mt-3 zoomInOut">
            <div id="contacts" className="card-header">
                <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-address-book me-1"></i>Contacts</h5>
            </div>
            <div className="card-body">
                <p className="zoomInOut"><a className="text-primary" href="mailto:valeriia.kuznetsova@proton.me"><i className="fa-regular fa-envelope me-1"></i>Email</a></p>
            </div>
        </div>
    )
}

export default Contacts