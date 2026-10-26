function Projects() {
  return (
    <section id="projects">
      <div data-aos="fade-up" data-aos-duration="1500" className="card mt-3 zoomInOut">
        <div className="card-header">
          <h5 className="m-0 p-0 fw-bold"><i className="fa-solid fa-folder-open me-1"></i>Projects</h5>
        </div>

        <div className="card-body p-4">
          <h6 className="text-primary fw-bold mb-3"><i className="fa-solid fa-code me-1"></i>JavaScript Projects</h6>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <article className="text-center px-2">
                  <h4 className="text-center p-0 m-2">Movie Search with React Query</h4>
                  <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                  <a className="m-2" href="/assets/img/projects/movie-search-with-react-query.webp" data-lightbox="roadtrip" data-title="Movie Search with React Query">
                    <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/movie-search-with-react-query.webp" alt="Movie Search with React Query" loading="lazy" />
                  </a>
                  <p className="mb-2"><strong>Summary:</strong> Search movies with cached queries and pagination.</p>
                  <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                  <ul className="skill-tags project-tags"><li><span className="skill-tag">React</span></li><li><span className="skill-tag">TypeScript</span></li><li><span className="skill-tag">TanStack Query</span></li><li><span className="skill-tag">Axios</span></li><li><span className="skill-tag">React Paginate</span></li><li><span className="skill-tag">Vite</span></li></ul>
                  <p className="mb-1"><strong>Key features:</strong></p>
                  <ul className="list-unstyled small mb-3 d-inline-block text-start">
                    <li>Search with controlled pagination</li>
                    <li>Loading, error, and cached query states</li>
                    <li>Movie modal and toast notifications</li>
                  </ul>
                  <div className="d-flex flex-column align-items-center gap-2 m-2">
                    <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://04-react-query-two-ruby.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                    <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/04-react-query" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                  </div>
                </article>
              </div>

              <div className="swiper-slide">
                <article className="text-center px-2">
                  <h4 className="text-center p-0 m-2">Movie Search</h4>
                  <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                  <a className="m-2" href="/assets/img/projects/movie-search.webp" data-lightbox="roadtrip" data-title="Movie Search">
                    <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/movie-search.webp" alt="Movie Search" loading="lazy" />
                  </a>
                  <p className="mb-2"><strong>Summary:</strong> Search for movies using the TMDB API.</p>
                  <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                  <ul className="skill-tags project-tags"><li><span className="skill-tag">React</span></li><li><span className="skill-tag">TypeScript</span></li><li><span className="skill-tag">Axios</span></li><li><span className="skill-tag">TMDB API</span></li><li><span className="skill-tag">Vite</span></li></ul>
                  <p className="mb-1"><strong>Key features:</strong></p>
                  <ul className="list-unstyled small mb-3 d-inline-block text-start">
                    <li>Movie search through the TMDB API</li>
                    <li>Loading and error states</li>
                    <li>Movie modal and toast notifications</li>
                  </ul>
                  <div className="d-flex flex-column align-items-center gap-2 m-2">
                    <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://03-react-movies-sigma-kohl.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                    <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/03_react_movies" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                  </div>
                </article>
              </div>

              <div className="swiper-slide">
                <article className="text-center px-2">
                  <h4 className="text-center p-0 m-2">Café Feedback</h4>
                  <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                  <a className="m-2" href="/assets/img/projects/cafe-feedback.webp" data-lightbox="roadtrip" data-title="Café Feedback">
                    <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/cafe-feedback.webp" alt="Café Feedback" loading="lazy" />
                  </a>
                  <p className="mb-2"><strong>Summary:</strong> Record café feedback and view vote totals.</p>
                  <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                  <ul className="skill-tags project-tags"><li><span className="skill-tag">React</span></li><li><span className="skill-tag">TypeScript</span></li><li><span className="skill-tag">Vite</span></li><li><span className="skill-tag">CSS Modules</span></li></ul>
                  <p className="mb-1"><strong>Key features:</strong></p>
                  <ul className="list-unstyled small mb-3 d-inline-block text-start">
                    <li>Good, neutral, and bad vote state</li>
                    <li>Total vote and positive feedback calculations</li>
                    <li>Reset action and conditional feedback display</li>
                  </ul>
                  <div className="d-flex flex-column align-items-center gap-2 m-2">
                    <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://02-react-cafe-nu-three.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                    <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/02_react_cafe" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                  </div>
                </article>
              </div>

              <div className="swiper-slide">
                <article className="text-center px-2">
                  <h4 className="text-center p-0 m-2">The Sweet Workshop</h4>
                  <p>
                    <span className="badge rounded-pill border border-primary text-primary fw-normal me-1">Team Project</span>
                    <span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span>
                  </p>
                  <a className="m-2" href="/assets/img/projects/the-sweet-workshop.webp" data-lightbox="roadtrip" data-title="The Sweet Workshop">
                    <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/the-sweet-workshop.webp" alt="The Sweet Workshop team project preview" loading="lazy" />
                  </a>
                  <p className="mb-2"><strong>Summary:</strong> A team-built dessert shop with product browsing, ordering, API integration and a responsive interface.</p>
                  <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                  <ul className="skill-tags project-tags"><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li><li><span className="skill-tag">JavaScript</span></li><li><span className="skill-tag">Vite</span></li><li><span className="skill-tag">Axios</span></li><li><span className="skill-tag">Toastify</span></li></ul>
                  <p className="mb-2"><strong>My contribution:</strong> Built the responsive Order Modal with form validation, API submission, loading states, toast feedback and multiple closing interactions.</p>
                  <p className="mb-1"><strong>Key features:</strong></p>
                  <ul className="list-unstyled small mb-3 d-inline-block text-start">
                    <li>Responsive interface</li>
                    <li>Product browsing &amp; ordering</li>
                    <li>API integration</li>
                  </ul>
                  <div className="d-flex flex-column align-items-center gap-2 m-2">
                    <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://taisiiiaaa.github.io/the-sweet-workshop/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                    <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/taisiiiaaa/the-sweet-workshop" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                  </div>
                </article>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev zoomInOut"></div>
            <div className="swiper-button-next zoomInOut"></div>
            <div className="swiper-scrollbar"></div>
          </div>

          <div className="mt-4">
            <h6 className="text-primary fw-bold mb-3"><i className="fa-solid fa-gem me-1"></i>Main Project</h6>
            <article className="text-center px-2">
              <h4 className="p-0 m-2">Elation</h4>
              <p className="text-center text-body mb-2">Fantasy RPG Character Creator</p>
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                <span className="badge rounded-pill border border-primary text-primary fw-normal">Personal Project</span>
                <span className="badge rounded-pill border border-primary text-primary fw-normal">In Development</span>
                <span className="badge rounded-pill border border-primary text-primary fw-normal">Beta 0.1</span>
              </div>
              <a className="m-2" href="/assets/img/projects/elation.webp" data-lightbox="roadtrip" data-title="Elation Character Creator">
                <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/elation.webp" alt="Elation Character Creator" loading="lazy" />
              </a>
              <p className="text-body small mb-3">The project is actively evolving and will continue to be improved and expanded.</p>
              <p className="mb-2"><strong>Summary:</strong> A personal fantasy RPG character creator with saved characters.</p>
              <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
              <ul className="skill-tags project-tags"><li><span className="skill-tag">JavaScript</span></li><li><span className="skill-tag">Vite</span></li><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li><li><span className="skill-tag">Bootstrap</span></li></ul>
              <p className="mb-1"><strong>Key features:</strong></p>
              <ul className="list-unstyled small mb-3 d-inline-block text-start">
                <li>Step-by-step character creation</li>
                <li>Randomized character and equipment stats</li>
                <li>Saved characters with localStorage</li>
              </ul>
              <div className="d-flex flex-column align-items-center gap-2 m-2">
                <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://character-creator-app.netlify.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/Elation" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
              </div>
            </article>
          </div>

          <div className="mt-4">
            <h6 className="text-primary fw-bold mb-3"><i className="fa-solid fa-clock-rotate-left me-1"></i>Earlier Work</h6>
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="text-center">
                    <h4 className="p-0 m-2">NFT for Music</h4>
                    <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                    <a className="m-2" href="/assets/img/projects/nft-platform.webp" data-lightbox="roadtrip" data-title="NFT for Music">
                      <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/nft-platform.webp" alt="NFT for Music" loading="lazy" />
                    </a>
                    <p className="mb-2"><strong>Summary:</strong> A layout for a music NFT platform concept.</p>
                    <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                    <ul className="skill-tags project-tags"><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li><li><span className="skill-tag">Bootstrap</span></li></ul>
                    <p className="mb-1"><strong>Key features:</strong></p>
                    <ul className="list-unstyled small mb-3 d-inline-block text-start">
                      <li>Music NFT platform concept</li>
                      <li>Bootstrap layout</li>
                    </ul>
                    <div className="d-flex flex-column align-items-center gap-2 m-2">
                      <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://temppolarbear.github.io/nft_for_music_creators/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                      <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/nft_for_music_creators" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="text-center">
                    <h4 className="p-0 m-2">Appello</h4>
                    <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                    <a className="m-2" href="/assets/img/projects/appello-website.webp" data-lightbox="roadtrip" data-title="Appello">
                      <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/appello-website.webp" alt="Appello" loading="lazy" />
                    </a>
                    <p className="mb-2"><strong>Summary:</strong> A company website layout with services, portfolio and team sections.</p>
                    <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                    <ul className="skill-tags project-tags"><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li><li><span className="skill-tag">Bootstrap</span></li></ul>
                    <p className="mb-1"><strong>Key features:</strong></p>
                    <ul className="list-unstyled small mb-3 d-inline-block text-start">
                      <li>Company services website</li>
                      <li>Portfolio and team sections</li>
                    </ul>
                    <div className="d-flex flex-column align-items-center gap-2 m-2">
                      <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://temppolarbear.github.io/appello/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                      <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/appello" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="text-center">
                    <h4 className="p-0 m-2">Barbershop</h4>
                    <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                    <a className="m-2" href="/assets/img/projects/barbershop.webp" data-lightbox="roadtrip" data-title="Barbershop">
                      <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/barbershop.webp" alt="Barbershop" loading="lazy" />
                    </a>
                    <p className="mb-2"><strong>Summary:</strong> A barbershop layout with services, prices and a gallery.</p>
                    <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                    <ul className="skill-tags project-tags"><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li><li><span className="skill-tag">Bootstrap</span></li></ul>
                    <p className="mb-1"><strong>Key features:</strong></p>
                    <ul className="list-unstyled small mb-3 d-inline-block text-start">
                      <li>Services and pricing sections</li>
                      <li>Gallery and booking layout</li>
                    </ul>
                    <div className="d-flex flex-column align-items-center gap-2 m-2">
                      <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://temppolarbear.github.io/barbershop/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                      <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/barbershop" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="text-center">
                    <h4 className="p-0 m-2">Covid</h4>
                    <p><span className="badge rounded-pill border border-primary text-primary fw-normal">Learning Project</span></p>
                    <a className="m-2" href="/assets/img/projects/covid-dashboard.webp" data-lightbox="roadtrip" data-title="Covid">
                      <img className="img-fluid thumb rounded mb-2" width="150" height="150" src="/assets/img/projects/covid-dashboard.webp" alt="Covid" loading="lazy" />
                    </a>
                    <p className="mb-2"><strong>Summary:</strong> An informational COVID-19 resource layout.</p>
                    <p className="mb-2"><i className="fa-solid fa-code me-1"></i><strong>Technologies:</strong></p>
                    <ul className="skill-tags project-tags"><li><span className="skill-tag">HTML</span></li><li><span className="skill-tag">CSS</span></li></ul>
                    <p className="mb-1"><strong>Key features:</strong></p>
                    <ul className="list-unstyled small mb-3 d-inline-block text-start">
                      <li>COVID-19 information concept</li>
                      <li>Information resource layout</li>
                    </ul>
                    <div className="d-flex flex-column align-items-center gap-2 m-2">
                      <a className="btn btn-primary w-50 shadow-sm zoomInOut" href="https://temppolarbear.github.io/covid/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code me-1"></i>Live Demo</a>
                      <a className="btn btn-outline-primary w-50 shadow-sm zoomInOut" href="https://github.com/TempPolarBear/covid" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code me-1"></i>Source Code</a>
                    </div>
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
      </div>
    </section>
  )
}

export default Projects
