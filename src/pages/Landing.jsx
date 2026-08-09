import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* Ambient lights */}
      <div className="landing-orb orb-one"></div>
      <div className="landing-orb orb-two"></div>

      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-mark">A</div>
          <div>
            <strong>ABTalks</strong>
            <span>Build in public.</span>
          </div>
        </div>

        <div className="nav-pill">
          <span className="live-dot"></span>
          60 DAY CHALLENGE
        </div>
      </nav>

      {/* HERO */}
      <main className="landing-main">

        <div className="hero-badge">
          <span>✦</span>
          The challenge that makes consistency visible
        </div>

        <h1 className="hero-title">
          60 days.
          <br />
          <span>One habit.</span>
          <br />
          <em>A portfolio that speaks for you.</em>
        </h1>

        <p className="hero-description">
          Stop watching tutorials. Start building.
          Ship something every day, prove it on GitHub,
          and turn your learning into a public track record.
        </p>

        <div className="hero-actions">
          <button
            className="hero-button"
            onClick={() => navigate("/dashboard")}
          >
            Start the challenge
            <span>→</span>
          </button>

          <div className="hero-note">
            <span>✓</span>
            No experience required
          </div>
        </div>

        {/* SOCIAL PROOF */}
        <div className="trust-row">
          <div className="avatars">
            <span>H</span>
            <span>A</span>
            <span>R</span>
            <span>+</span>
          </div>

          <div>
            <strong>Students building every day</strong>
            <small>GitHub commits · LinkedIn proof · Real progress</small>
          </div>
        </div>

        {/* PRODUCT PREVIEW */}
        <section className="preview-wrap">

          <div className="preview-glow"></div>

          <div className="dashboard-preview">

            {/* fake browser bar */}
            <div className="preview-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="preview-url">
                abtalks.in/dashboard
              </div>

              <div></div>
            </div>

            <div className="preview-content">

              <div className="preview-sidebar">
                <div className="mini-logo">A</div>
                <div className="side-line active"></div>
                <div className="side-line"></div>
                <div className="side-line"></div>
                <div className="side-line"></div>
              </div>

              <div className="preview-dashboard">

                <div className="mini-header">
                  <div>
                    <small>GOOD MORNING, HARSHIT</small>
                    <h3>Keep the streak alive.</h3>
                  </div>

                  <div className="mini-avatar">H</div>
                </div>

                <div className="preview-grid">

                  <div className="streak-card">
                    <small>CURRENT STREAK</small>

                    <div className="streak-number">
                      11
                      <span>🔥</span>
                    </div>

                    <div className="streak-line">
                      <span></span>
                    </div>

                    <small>11 days of showing up</small>
                  </div>

                  <div className="progress-card">
                    <small>CHALLENGE PROGRESS</small>

                    <div className="progress-number">
                      12<span>/60</span>
                    </div>

                    <div className="progress-bar">
                      <span></span>
                    </div>

                    <small>20% completed</small>
                  </div>

                </div>

                <div className="today-card">
                  <div>
                    <small>DAY 12 · TODAY'S BUILD</small>
                    <h4>Redesign ABTalks</h4>
                    <p>
                      Build something worth shipping.
                    </p>
                  </div>

                  <div className="today-arrow">→</div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-section">

          <div className="section-label">HOW IT WORKS</div>

          <h2>
            Four steps.
            <br />
            <span>One transformed developer.</span>
          </h2>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>
              <h3>Pick a track</h3>
              <p>
                Choose what you want to learn and commit
                to showing up for 60 days.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <h3>Build daily</h3>
              <p>
                Complete one focused challenge every day.
                Small wins compound.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <h3>Prove the work</h3>
              <p>
                Push your code to GitHub and share your
                progress publicly.
              </p>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <h3>Become visible</h3>
              <p>
                Finish with a public body of work recruiters
                can actually see.
              </p>
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">

          <div className="cta-orb"></div>

          <div className="section-label">YOUR NEXT 60 DAYS</div>

          <h2>
            You don't need
            <br />
            <span>more motivation.</span>
          </h2>

          <p>
            You need a system that makes showing up easier.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/dashboard")}
          >
            Start Day 1 →
          </button>

        </section>

      </main>

      <footer className="landing-footer">
        <span>ABTalks</span>
        <span>60-Day Coding Challenge</span>
        <span>Build · Ship · Become visible</span>
      </footer>

    </div>
  );
}

export default Landing;