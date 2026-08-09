import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // ==========================================
  // GET REAL PROGRESS
  // ==========================================

  const getProgress = () => {
    const day12Done =
      localStorage.getItem("day12Completed") === "true";

    const day13Done =
      localStorage.getItem("day13Completed") === "true";

    // Your challenge starts with Days 1–11 completed
    let count = 11;

    if (day12Done) count = 12;
    if (day13Done) count = 13;

    return count;
  };

  const [completedCount, setCompletedCount] =
    useState(getProgress());

  // ==========================================
  // SYNC
  // ==========================================

  useEffect(() => {
    const sync = () => {
      setCompletedCount(getProgress());
    };

    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);

    const timer = setInterval(sync, 500);

    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
      clearInterval(timer);
    };
  }, []);

  // ==========================================
  // CALCULATIONS
  // ==========================================

  const currentDay =
    completedCount >= 60
      ? 60
      : completedCount + 1;

  const progress = Math.round(
    (completedCount / 60) * 100
  );

  // Since the challenge is sequential
  const streak = completedCount;

  const days = Array.from(
    { length: 60 },
    (_, i) => i + 1
  );

  // Last 7 completed days
  const weekStart = Math.max(
    1,
    completedCount - 6
  );

  const thisWeek = Math.min(
    7,
    Math.max(
      0,
      completedCount - weekStart + 1
    )
  );

  // ==========================================
  // CHALLENGE CONTENT
  // ==========================================

  const challengeTitle =
    currentDay === 12
      ? "Build a premium dashboard"
      : currentDay === 13
      ? "Build something even better"
      : currentDay === 60
      ? "Complete your 60-day journey"
      : `Challenge Day ${currentDay}`;

  const challengeDescription =
    currentDay === 12
      ? "Create a responsive developer dashboard with progress tracking, streaks and challenge history."
      : currentDay === 13
      ? "Take what you built yesterday and push it further with better interactions, feedback and polish."
      : currentDay === 60
      ? "Finish your final challenge and complete your 60-day public building journey."
      : "Keep building, keep shipping and turn your learning into visible proof.";

  const openChallenge = () => {
    if (currentDay <= 60) {
      navigate(`/day/${currentDay}`);
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="dashboard-page">

      {/* ======================================
          NAVBAR
      ====================================== */}

      <nav className="dashboard-nav">

        <div className="brand">

          <div className="brand-mark">
            A
          </div>

          <div>
            <strong>ABTalks</strong>
            <span>Build in public.</span>
          </div>

        </div>

        <div className="dashboard-nav-right">

          <div className="streak-pill">
            🔥 <strong>{streak}</strong> day streak
          </div>

          <div className="profile-avatar">
            H
          </div>

        </div>

      </nav>

      {/* ======================================
          MAIN
      ====================================== */}

      <main className="dashboard-main">

        {/* HEADER */}

        <section className="dashboard-header">

          <div>

            <div className="eyebrow">
              SATURDAY · AUGUST 8
            </div>

            <h1>
              Keep the streak
              <br />
              <span>alive.</span>
            </h1>

            <p>
              You're <strong>{completedCount}</strong>{" "}
              days into your 60-day journey.
              Don't break the chain now.
            </p>

          </div>

          {/* PROGRESS RING */}

          <div
            className="progress-ring"
            style={{
              "--progress": `${progress}%`,
            }}
          >

            <div className="ring-inner">

              <strong>
                {progress}%
              </strong>

              <small>
                complete
              </small>

            </div>

          </div>

        </section>

        {/* ======================================
            STATS
        ====================================== */}

        <section className="dashboard-stats">

          <div className="stat-card glass-card">

            <span className="stat-icon purple">
              🔥
            </span>

            <small>CURRENT STREAK</small>

            <strong>
              {streak}
            </strong>

            <p>days showing up</p>

          </div>

          <div className="stat-card glass-card">

            <span className="stat-icon blue">
              ✓
            </span>

            <small>COMPLETED</small>

            <strong>
              {completedCount}
              <span>/60</span>
            </strong>

            <p>challenges shipped</p>

          </div>

          <div className="stat-card glass-card">

            <span className="stat-icon pink">
              ⚡
            </span>

            <small>THIS WEEK</small>

            <strong>
              {thisWeek}
              <span>/7</span>
            </strong>

            <p>days completed</p>

          </div>

          <div className="stat-card glass-card">

            <span className="stat-icon orange">
              🏆
            </span>

            <small>RANK</small>

            <strong>#24</strong>

            <p>among challengers</p>

          </div>

        </section>

        {/* ======================================
            TODAY
        ====================================== */}

        <section className="today-section">

          <div className="section-heading">

            <div>

              <div className="eyebrow">
                YOUR NEXT BUILD
              </div>

              <h2>
                Today's challenge
              </h2>

            </div>

            <span className="day-counter">
              DAY {currentDay} / 60
            </span>

          </div>

          <div className="today-challenge glass-card">

            <div className="challenge-number">
              {currentDay}
            </div>

            <div className="challenge-info">

              <div className="challenge-tags">

                <span className="tag purple-tag">
                  REACT
                </span>

                <span className="tag">
                  ~60 MIN
                </span>

                <span className="tag green-tag">
                  EASY
                </span>

              </div>

              <h3>
                {challengeTitle}
              </h3>

              <p>
                {challengeDescription}
              </p>

              <div className="challenge-meta">

                <span>💻 Build</span>

                <span>↗ GitHub proof</span>

                <span>in LinkedIn post</span>

              </div>

            </div>

            <button
              className="challenge-button"
              onClick={openChallenge}
            >
              Continue
              <span>→</span>
            </button>

          </div>

        </section>

        {/* ======================================
            JOURNEY / HEATMAP
        ====================================== */}

        <section className="activity-section">

          <div className="section-heading">

            <div>

              <div className="eyebrow">
                CONSISTENCY
              </div>

              <h2>
                Your 60-day journey
              </h2>

            </div>

            <span className="activity-count">
              {completedCount} of 60 completed
            </span>

          </div>

          <div className="activity-card glass-card">

            <div className="activity-top">

              <div>

                <strong>
                  Keep going.
                </strong>

                <p>
                  Every square represents a day
                  you showed up.
                </p>

              </div>

              <div className="legend">

                <span>Less</span>

                <i></i>
                <i></i>
                <i></i>
                <i></i>

                <span>More</span>

              </div>

            </div>

            {/* GITHUB STYLE GRID */}

            <div className="day-grid">

              {days.map((day) => {

                const completed =
                  day <= completedCount;

                const today =
                  day === currentDay;

                return (
                  <div
                    key={day}
                    className={[
                      "day-square",
                      completed
                        ? "completed strong"
                        : "",
                      today
                        ? "today"
                        : "",
                    ].join(" ")}
                    title={
                      completed
                        ? `Day ${day} completed`
                        : today
                        ? `Day ${day} — current`
                        : `Day ${day}`
                    }
                  >
                    <span>{day}</span>
                  </div>
                );

              })}

            </div>

            <div className="activity-footer">

              <span>
                🔥 {streak} day streak
              </span>

              <span>
                Longest streak: {streak} days
              </span>

            </div>

          </div>

        </section>

        {/* ======================================
            PROOF
        ====================================== */}

        <section className="proof-section">

          <div className="section-heading">

            <div>

              <div className="eyebrow">
                BUILD IN PUBLIC
              </div>

              <h2>
                Your proof
              </h2>

            </div>

          </div>

          <div className="proof-grid">

            {/* GITHUB */}

            <div className="proof-card glass-card">

              <div className="proof-top">

                <span className="proof-icon github">
                  GH
                </span>

                <span className="connected">
                  CONNECTED
                </span>

              </div>

              <h3>
                GitHub
              </h3>

              <p>
                Your daily commits are automatically
                connected to your challenge progress.
              </p>

              <div className="proof-value">

                <strong>
                  {completedCount}
                </strong>

                <span>
                  contributions
                </span>

              </div>

            </div>

            {/* LINKEDIN */}

            <div className="proof-card glass-card">

              <div className="proof-top">

                <span className="proof-icon linkedin">
                  in
                </span>

                <span className="connected">
                  CONNECTED
                </span>

              </div>

              <h3>
                LinkedIn
              </h3>

              <p>
                Share your progress publicly and build
                a visible learning journey.
              </p>

              <div className="proof-value">

                <strong>
                  {Math.max(
                    0,
                    completedCount - 3
                  )}
                </strong>

                <span>
                  posts shared
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            BADGES
        ====================================== */}

        <section className="badges-section">

          <div className="section-heading">

            <div>

              <div className="eyebrow">
                ACHIEVEMENTS
              </div>

              <h2>
                Milestones
              </h2>

            </div>

          </div>

          <div className="badges">

            {/* FIRST WEEK */}

            <div
              className={`badge-card ${
                completedCount >= 7
                  ? "unlocked"
                  : ""
              }`}
            >

              <div>🔥</div>

              <strong>
                First Week
              </strong>

              <small>
                {completedCount >= 7
                  ? "7 days completed"
                  : `${7 - completedCount} days remaining`}
              </small>

            </div>

            {/* 10 DAY */}

            <div
              className={`badge-card ${
                streak >= 10
                  ? "unlocked"
                  : ""
              }`}
            >

              <div>⚡</div>

              <strong>
                10 Day Streak
              </strong>

              <small>
                {streak >= 10
                  ? "Consistency unlocked"
                  : `${10 - streak} days remaining`}
              </small>

            </div>

            {/* 30 DAY */}

            <div
              className={`badge-card ${
                completedCount >= 30
                  ? "unlocked"
                  : ""
              }`}
            >

              <div>🚀</div>

              <strong>
                30 Day Builder
              </strong>

              <small>
                {completedCount >= 30
                  ? "Milestone unlocked"
                  : `${30 - completedCount} days remaining`}
              </small>

            </div>

            {/* 60 DAY */}

            <div
              className={`badge-card ${
                completedCount >= 60
                  ? "unlocked"
                  : ""
              }`}
            >

              <div>🏆</div>

              <strong>
                60 Day Legend
              </strong>

              <small>
                {completedCount >= 60
                  ? "Challenge completed!"
                  : `${60 - completedCount} days remaining`}
              </small>

            </div>

          </div>

        </section>

      </main>

      {/* ======================================
          MOBILE NAV
      ====================================== */}

      <div className="mobile-bottom-nav">

        <button className="active">
          <span>⌂</span>
          Home
        </button>

        <button onClick={openChallenge}>
          <span>✦</span>
          Challenge
        </button>

        <button>
          <span>◉</span>
          Progress
        </button>

        <button>
          <span>◌</span>
          Profile
        </button>

      </div>

    </div>
  );
}

export default Dashboard;