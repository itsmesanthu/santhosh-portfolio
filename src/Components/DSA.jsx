function DSA() {

  const topics = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Binary Search",
    "Trees",
    "Recursion",
    "Hash Maps",
    "Sliding Window",
    "Heaps",
    "Graphs"
  ];

  return (
    <section id="dsa" className="dsa-section section">

      <div className="dsa-content">

        <div>

          <p className="section-label">
            PROBLEM SOLVING
          </p>

          <h2>
            Data Structures &
            <span> Algorithms.</span>
          </h2>

          <p>
            I regularly practice Data Structures and Algorithms
            to improve my problem-solving skills and prepare
            for technical interviews.
          </p>

          <div className="dsa-buttons">

            <a
              href="https://leetcode.com/u/SANTHOSH_2118/"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              LeetCode ↗
            </a>

            <a
              href="https://www.hackerrank.com/profile/gpsanthoshsanthu"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              HackerRank ↗
            </a>

          </div>

        </div>


        <div className="dsa-topics">

          {topics.map((topic, index) => (

            <div className="dsa-topic" key={topic}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>
                {topic}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DSA;