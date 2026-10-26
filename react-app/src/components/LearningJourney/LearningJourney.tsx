import { useEffect, useState } from 'react'

const startDate = new Date(2026, 1, 23)

type LearningTime = {
  date: string
  days: number
  hours: string
  minutes: string
  seconds: string
}

function getLearningTime(): LearningTime {
  const now = new Date()
  const difference = Math.max(0, now.getTime() - startDate.getTime())

  return {
    date: now.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    days: Math.floor(difference / 86400000),
    hours: String(Math.floor(difference / 3600000) % 24).padStart(2, '0'),
    minutes: String(Math.floor(difference / 60000) % 60).padStart(2, '0'),
    seconds: String(Math.floor(difference / 1000) % 60).padStart(2, '0'),
  }
}

function LearningJourney() {
  const [learningTime, setLearningTime] = useState(getLearningTime)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLearningTime(getLearningTime())
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <section id="learning-journey">
      <div data-aos="fade-up" data-aos-duration="1000" className="card zoomInOut mt-3">
        <div className="card-header">
          <h2 className="h5 m-0 p-0 fw-bold"><i className="fa-solid fa-stopwatch me-1"></i>My Learning Journey</h2>
        </div>
        <div className="card-body">
          <p className="mb-3"><i className="fa-solid fa-calendar-day me-1 text-primary"></i>Today: <span className="fw-bold">{learningTime.date}</span></p>
          <div className="row g-2 text-center mb-3">
            <div className="col-6 col-sm-3">
              <div className="h-100 p-2 p-md-3 border rounded-3 bg-body-tertiary">
                <p className="h3 mb-1 fw-bold text-primary">{learningTime.days}</p>
                <small className="text-body-secondary fw-semibold">DAYS</small>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="h-100 p-2 p-md-3 border rounded-3 bg-body-tertiary">
                <p className="h3 mb-1 fw-bold text-primary">{learningTime.hours}</p>
                <small className="text-body-secondary fw-semibold">HOURS</small>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="h-100 p-2 p-md-3 border rounded-3 bg-body-tertiary">
                <p className="h3 mb-1 fw-bold text-primary">{learningTime.minutes}</p>
                <small className="text-body-secondary fw-semibold">MINUTES</small>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="h-100 p-2 p-md-3 border rounded-3 bg-body-tertiary">
                <p className="h3 mb-1 fw-bold text-primary">{learningTime.seconds}</p>
                <small className="text-body-secondary fw-semibold">SECONDS</small>
              </div>
            </div>
          </div>
          <p className="mb-0"><i className="fa-solid fa-seedling me-1 text-success"></i>Learning since: <span className="fw-bold">23 February 2026</span></p>
        </div>
      </div>
    </section>
  )
}

export default LearningJourney
