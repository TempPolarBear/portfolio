const rows = [
  [
    ['HTML', 'fa-brands fa-html5'],
    ['CSS', 'fa-brands fa-css3-alt'],
    ['JavaScript', 'fa-brands fa-js'],
    ['Bootstrap', 'fa-brands fa-bootstrap'],
    ['TypeScript', 'fa-solid fa-code'],
    ['React', 'fa-brands fa-react'],
  ],
  [
    ['REST API', 'fa-solid fa-cloud'],
    ['Axios', 'fa-solid fa-arrow-right-arrow-left'],
    ['TanStack Query', 'fa-solid fa-database'],
    ['Vite', 'fa-solid fa-bolt'],
    ['Git', 'fa-brands fa-git-alt'],
    ['GitHub', 'fa-brands fa-github'],
  ],
  [
    ['Responsive Design', 'fa-solid fa-mobile-screen-button'],
    ['Accessibility', 'fa-solid fa-universal-access'],
    ['UI', 'fa-solid fa-palette'],
    ['Front-End', 'fa-solid fa-laptop-code'],
    ['Netlify', 'fa-solid fa-cloud-arrow-up'],
    ['Vercel', 'fa-solid fa-rocket'],
  ],
]

function KeywordsMarquee() {
  return (
    <section data-aos="fade-up" data-aos-duration="1500" className="container mb-4 keywords-section" aria-labelledby="keywords-heading">
      <div className="card">
        <div className="card-header">
          <h5 id="keywords-heading" className="m-0">
            <i className="fa-solid fa-tags me-2" aria-hidden="true"></i>
            Keywords
          </h5>
        </div>

        <div className="card-body">
          {rows.map((keywords, rowIndex) => (
            <div
              key={rowIndex}
              className={`keyword-window overflow-hidden ${rowIndex > 0 ? 'mt-2' : ''}`}
            >
              <div className={`keyword-track d-flex ${rowIndex === 1 ? 'keyword-reverse' : ''}`}>
                {[false, true].map((duplicate) => (
                  <div
                    key={String(duplicate)}
                    className="keyword-set d-flex gap-3 text-nowrap"
                    aria-hidden={duplicate ? true : undefined}
                  >
                    {keywords.map(([name, icon]) => (
                      <span
                        key={name}
                        className="d-inline-flex align-items-center gap-2 px-3 py-2 border rounded-pill bg-body-tertiary text-body"
                      >
                        <i className={`${icon} text-primary`} aria-hidden="true"></i>
                        {name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeywordsMarquee
