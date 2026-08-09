import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ChallengeDay() {
  const navigate = useNavigate();
  const { day } = useParams();

  const currentDay = Number(day) || 12;
  const isDay13 = currentDay === 13;

  const [completed, setCompleted] = useState(
    localStorage.getItem(`day${currentDay}Completed`) === "true"
  );

  const [github, setGithub] = useState(
    localStorage.getItem(`day${currentDay}Github`) || ""
  );

  const [linkedin, setLinkedin] = useState(
    localStorage.getItem(`day${currentDay}Linkedin`) || ""
  );

  const [checks, setChecks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const day13Unlocked =
    localStorage.getItem("day12Completed") === "true";

  const toggleCheck = (index) => {
    setChecks((previous) =>
      previous.map((item, i) =>
        i === index ? !item : item
      )
    );
  };

  const handleGithub = (e) => {
    const value = e.target.value;

    setGithub(value);

    localStorage.setItem(
      `day${currentDay}Github`,
      value
    );
  };

  const handleLinkedin = (e) => {
    const value = e.target.value;

    setLinkedin(value);

    localStorage.setItem(
      `day${currentDay}Linkedin`,
      value
    );
  };

  const canSubmit =
    github.trim() !== "" &&
    linkedin.trim() !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;

    localStorage.setItem(
      `day${currentDay}Completed`,
      "true"
    );

    const oldDays = JSON.parse(
      localStorage.getItem("completedDays") || "[]"
    );

    if (!oldDays.includes(currentDay)) {
      oldDays.push(currentDay);
    }

    localStorage.setItem(
      "completedDays",
      JSON.stringify(
        oldDays.sort((a, b) => a - b)
      )
    );

    setCompleted(true);
  };

  const checklist = isDay13
    ? [
        "New interaction works correctly",
        "User feedback is clearly visible",
        "Dashboard feels polished",
        "Mobile layout works properly",
        "Code has been pushed to GitHub",
      ]
    : [
        "Dashboard has a clear visual hierarchy",
        "Progress and streak are visible",
        "Today's challenge is actionable",
        "Mobile layout works properly",
        "Code has been pushed to GitHub",
      ];

  return (
    <div className="challenge-page">

      {/* ================= NAV ================= */}

      <nav className="challenge-nav">

        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← <span>Dashboard</span>
        </button>

        <div className="challenge-brand">

          <div className="brand-mark">
            A
          </div>

          <strong>
            ABTalks
          </strong>

        </div>

        <div className="challenge-progress">

          <span>DAY</span>

          <strong>
            {currentDay}
          </strong>

          <span>/ 60</span>

        </div>

      </nav>

      {/* ================= MAIN ================= */}

      <main className="challenge-main">

        {/* ================= HERO ================= */}

        <section className="challenge-hero">

          <div className="challenge-eyebrow">

            <span className="status-dot"></span>

            DAY {currentDay} · SATURDAY

          </div>

          <h1>

            {isDay13 ? (
              <>
                Build something
                <br />
                <span>even better.</span>
              </>
            ) : (
              <>
                Build a dashboard
                <br />
                <span>worth shipping.</span>
              </>
            )}

          </h1>

          <p>

            {isDay13
              ? "Take what you built yesterday and push it further. Improve the experience, add meaningful functionality, and ship something you're proud of."
              : "Today you're turning everything you've learned into a polished developer dashboard. Build it, ship it, and prove you did the work."}

          </p>

          <div className="challenge-info-row">

            <span>
              ⚡ Easy
            </span>

            <span>
              ◷ ~60 minutes
            </span>

            <span>
              ▣ React
            </span>

          </div>

        </section>

        {/* ================= CONTENT GRID ================= */}

        <section className="challenge-layout">

          {/* ================= LEFT ================= */}

          <div className="challenge-content">

            {/* OBJECTIVE */}

            <div className="content-card">

              <div className="content-label">
                01 · OBJECTIVE
              </div>

              <h2>
                What are you building?
              </h2>

              <p>

                {isDay13
                  ? "Upgrade your developer dashboard with meaningful interactions, better feedback, and a polished user experience. Focus on making the product feel real."
                  : "Create a responsive developer dashboard that shows a user's coding challenge progress. The interface should feel polished, focused and easy to understand."}

              </p>

              <div className="objective-list">

                <div>
                  <span>01</span>
                  <p>
                    {isDay13
                      ? "Add meaningful interactions to the interface."
                      : "Show a user's current streak."}
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    {isDay13
                      ? "Improve the visual feedback of user actions."
                      : "Display progress through the 60-day challenge."}
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    {isDay13
                      ? "Make the experience feel production-ready."
                      : "Show today's challenge and completion state."}
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Keep the interface responsive on mobile.
                  </p>
                </div>

              </div>

            </div>

            {/* CHECKLIST */}

            <div className="content-card">

              <div className="content-label">
                02 · ACCEPTANCE CHECKLIST
              </div>

              <h2>
                Before you submit
              </h2>

              <div className="checklist">

                {checklist.map((text, index) => (

                  <label key={index}>

                    <input
                      type="checkbox"
                      checked={checks[index]}
                      onChange={() =>
                        toggleCheck(index)
                      }
                    />

                    <span>
                      {text}
                    </span>

                  </label>

                ))}

              </div>

            </div>

            {/* HINT */}

            <div className="hint-card">

              <div className="hint-icon">
                ✦
              </div>

              <div>

                <strong>
                  Builder tip
                </strong>

                <p>
                  {isDay13
                    ? "Good products don't just work. They make every interaction feel intentional."
                    : "Don't try to make everything impressive. Make the important things obvious."}
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SUBMISSION ================= */}

          <aside
            className="submission-card"
            style={{
              display: "block",
              visibility: "visible",
              opacity: 1,
            }}
          >

            {/* HEADER */}

            <div className="submission-header">

              <div>

                <div className="content-label">
                  03 · SUBMIT PROOF
                </div>

                <h2>
                  Show your work.
                </h2>

              </div>

              <div className="proof-health">

                <span></span>

                Proof health

              </div>

            </div>

            {/* GITHUB */}

            <div className="input-group">

              <label>

                <span className="input-icon github-icon">
                  GH
                </span>

                GitHub repository

              </label>

              <input
                type="url"
                placeholder="https://github.com/you/project"
                value={github}
                onChange={handleGithub}
              />

              <small>
                Link to the repository containing
                today's work.
              </small>

            </div>

            {/* LINKEDIN */}

            <div className="input-group">

              <label>

                <span className="input-icon linkedin-icon">
                  in
                </span>

                LinkedIn post

              </label>

              <input
                type="url"
                placeholder="https://linkedin.com/posts/..."
                value={linkedin}
                onChange={handleLinkedin}
              />

              <small>
                Share what you built and what
                you learned.
              </small>

            </div>

            {/* PROOF STATUS */}

            <div className="proof-status">

              <div
                className={
                  github.trim()
                    ? "proof-check active"
                    : "proof-check"
                }
              >

                <span>
                  {github.trim() ? "✓" : "1"}
                </span>

                GitHub proof

              </div>

              <div
                className={
                  linkedin.trim()
                    ? "proof-check active"
                    : "proof-check"
                }
              >

                <span>
                  {linkedin.trim() ? "✓" : "2"}
                </span>

                LinkedIn proof

              </div>

            </div>

            {/* ================= BIG SUBMIT BUTTON ================= */}

            <button
              type="button"
              className="submit-button"
              onClick={handleSubmit}
              disabled={!canSubmit || completed}
              style={{
                display: "flex",
                width: "100%",
                minHeight: "58px",
                alignItems: "center",
                justifyContent: "center",
                cursor: canSubmit
                  ? "pointer"
                  : "not-allowed",
              }}
            >

              {completed
                ? `✓ Day ${currentDay} completed`
                : `Submit Day ${currentDay}'s proof →`}

            </button>

            {/* COMPLETION */}

            {completed && (

              <div className="completion-message">

                <span>
                  🔥
                </span>

                <div>

                  <strong>
                    Streak protected.
                  </strong>

                  <p>
                    Day {currentDay} is officially
                    on your record.
                  </p>

                </div>

              </div>

            )}

            {/* RETURN */}

            <button
              type="button"
              className="save-button"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              Save & return later
            </button>

          </aside>

        </section>

        {/* ================= NEXT DAY ================= */}

        <section className="next-day">

          <div>

            <span>
              NEXT UP
            </span>

            <strong>
              Day {currentDay + 1}
            </strong>

            <p>
              {currentDay === 12
                ? "Build something even better."
                : "Keep building. Keep shipping."}
            </p>

          </div>

          {currentDay === 12 ? (

            <button
              type="button"
              className="locked-next"
              onClick={() => {

                if (
                  localStorage.getItem(
                    "day12Completed"
                  ) === "true"
                ) {
                  navigate("/day/13");
                }

              }}
            >

              {day13Unlocked
                ? "🔓 Start Day 13 →"
                : "🔒 Complete Day 12 to unlock"}

            </button>

          ) : (

            <div className="locked-next">
              🚀 Keep the streak alive
            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default ChallengeDay;