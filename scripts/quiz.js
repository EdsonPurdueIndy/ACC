document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Step 1: score object
  let scores = {
    animation: 0,
    it: 0,
    network: 0,
    cyber: 0,
    data: 0,
    game: 0,
    ux: 0,
    web: 0
  };

  // Step 2: map answers to categories
  let map = {
    code: ["web", "it", "game"],
    design: ["ux", "animation"],
    data: ["data"],
    systems: ["it", "network"],
    creative: ["animation", "game", "ux"],
    team: ["ux", "it"],
    solo: ["data", "cyber", "web"],
    fast: ["game", "web"],
    structured: ["it", "cyber", "network"],

    web: ["web"],
    game: ["game"],
    cyber: ["cyber"],
    ux: ["ux"],
    network: ["network"],
    logic: ["it", "data", "cyber"],
    visual: ["animation", "ux"],
    problem: ["it", "data"],
    communication: ["ux", "it"],
    apps: ["web"],
    games: ["game"],
    media: ["animation"],
    security: ["cyber"],
    build: ["web", "it"],
    analyze: ["data"],
    protect: ["cyber"],
    animation: ["animation"],
    it: ["it"],
    secure: ["cyber"],

    technical: ["it", "network", "cyber"],
    social: ["ux", "it"]
  };

  // Step 3: collect answers
  let answers = [];

  for (let i = 1; i <= 10; i++) {
    answers.push(document.getElementById("q" + i).value);
  }

  // Step 4: calculate scores
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];

    if (map[answer]) {
      for (let j = 0; j < map[answer].length; j++) {
        let category = map[answer][j];
        scores[category]++;
      }
    }
  }

  // Step 5: find best match
  let bestMatch = "";
  let highestScore = 0;

  for (let category in scores) {
    if (scores[category] > highestScore) {
      highestScore = scores[category];
      bestMatch = category;
    }
  }

  // Step 6: convert to real program names
  let names = {
    web: "Web Programming",
    cyber: "Cybersecurity",
    it: "Computer and Information Technology",
    network: "Network Engineering",
    data: "Data Analytics",
    game: "Game Development",
    ux: "UX Design",
    animation: "Animation and Visual Effects"
  };

  // Step 7: output result
  document.getElementById("resultBox").innerHTML =
    "<div class='alert alert-success shadow'>" +
    "<h5>Your Best Match:</h5>" +
    "<h2>" + names[bestMatch] + "</h2>" +
    "<p>Based on your interests and preferences</p>" +
    "</div>";
});