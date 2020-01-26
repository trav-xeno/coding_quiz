$(function() {
  const form = $("#form");
  const scoreList = $("#scoreList");
  const scoreSection = $("#scores");
  const result = $("#results");
  var list = null;
  var name = "";
  var finalscore = "";
  const score = localStorage.getItem("score");
  scoreSection.hide();
  result.text(`your final score was: ${score}`);

  // on loadd check localstorage for list
  if (localStorage.getItem("scoreList")) {
    list = JSON.parse(localStorage.getItem("scoreList"));
  } else {
    list = [];
  }

  //  <li><span class="score-badge">1</span> ab : 55</li>
  function createList() {
    if (list.list > 0) {
      for (let i = 0; i < scores.length; i++) {
        let id = i + 1;
        scoreList.append(
          `<li> <span class="score-badge">${id}</span> ${score[i]}</li>`
        );
      }
    } else {
      scoreList.append(
        `<li> <span class="score-badge">${1}</span> ${finalscore}</li>`
      );
    }
  }

  form.submit(function(e) {
    e.preventDefault();

    name = $("input").val();
    console.log(name);
    finalscore += name + " : " + localStorage.getItem("score");
    console.log(finalscore);
    console.log(list);
    list.push(finalscore);
    console.log(list);
    localStorage.setItem("scoreList", JSON.stringify(list));
    createList();
    console.log(finalscore);
    $("#addname").hide();
    scoreSection.show();
  });
  $("button").on("click", function() {
    if (this.value == "clear") {
      scoreList.remove();
      localStorage.clear();
    } else if (this.value == "back") {
      window.location = "./index.html";
    }
  });
});
