/*class Question extends HTMLElement {
  constructor() {
    super();
  }
  set question(question) {
    this.innerHTML = `< section id = "${question.id}" class="container" > <div class="row">
    <div class="col s12 center-align">${question.query}</div>
          <div class="col s12">
              <div class="collection question-link ">
                  <a data-choice="a" href="#!" class=" collection-item">${question.a}</a>
                  <a data-choice="b" idhref="#!" class=" collection-item ">${question.b}</a>
                  <a data-choice="c" href="#!" class=" collection-item">${question.c}</a>
                  <a data-choice="d" href="#!" class="collection-item">${question.d}</a>
              </div>
          </div>
      </div>
  </section >  `;
  }
}
customElements.define("code-question", Question);
*/

$(function() {
  const minusTime = $("#minus");
  const quiz = $("#quiz");
  const startbtn = $("#start");
  const landing = $("#landing");
  const h3 = $("#query");
  const a = $("#a");
  const b = $("#b");
  const c = $("#c");
  const d = $("#d");
  const ans = $("#ans");
  const clock = $("#clock");
  var sec = 60;
  var score = 0;
  M.AutoInit();
  quiz.hide();

  //$("tn-question").attr("class", "teal");
  var currentQuery = 0;
  var time = 60;

  const questions = [
    {
      id: 0,
      query: "question 1 ",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      answer: "b"
    },
    {
      id: 1,
      query: "question 2",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      answer: "d"
    },
    {
      id: 2,
      query: "question 3",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      answer: "c"
    },
    {
      id: 3,
      query: "question 4",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      answer: "a"
    },
    {
      id: 4,
      query: "question 5",
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      answer: "a"
    }
  ];

  function endQuiz() {
    $("#scoreList").hide();
    score = sec;
    localStorage.setItem("score", score);
    window.location = "./endQuiz.html";
  }

  function setTime() {
    let timerInterval = setInterval(function() {
      sec--;
      clock.text(`Time left: ${sec}s`);

      if (sec === 0) {
        clearInterval(timerInterval);
        console.log("time is up");
        endQuiz();
      }
    }, 1000);
  }

  function decrementTime() {
    if (sec <= 5) {
      endQuiz();
      sec = 0;
      clearInterval();
    } else {
      console.log(`time before: ${sec} `);
      sec = sec - 10;
      clearInterval();
      //minusTime
      console.log(`time after: ${sec} `);
    }
  }
  function getQuestion(count) {
    for (let i = 0; i < questions.length; i++) {
      if (i === count) {
        return questions[i];
      }
      continue;
    }
  }

  function startQuiz() {
    landing.hide();
    //gets current question
    let cur = getQuestion(currentQuery);
    h3.text(cur.query);
    a.text(cur.a);
    b.text(cur.b);
    c.text(cur.c);
    d.text(cur.d);
    quiz.show();
  }

  function nextQuestion() {
    if (currentQuery + 1 > questions.length) {
      endQuiz();
      console.log("end of quiz");
    }
    let next = getQuestion(currentQuery);
    h3.text(next.query);
    a.text(next.a);
    b.text(next.b);
    c.text(next.c);
    d.text(next.d);
  }

  $(".ans").on("click", function() {
    if (this.value == questions[currentQuery].answer) {
      currentQuery++;

      ans.text("Correct").attr("class", "correct");

      fading();
      console.log("correct");
      nextQuestion();
    } else {
      currentQuery++;
      console.log("wrong");
      decrementTime();
      ans.text("incorrect").attr("class", "incorrect");
      fading();
      nextQuestion();
    }
  });

  function fading() {
    let fade = setTimeout(function() {
      ans.hide();
    }, 2000);
    clearInterval(fade);
  }

  startbtn.on("click", function() {
    setTime();
    startQuiz();
  });
}); //END OF READY function
// Define a new component called button-counter
/* started with vuejs but really need to learn more before diving into 
Vue.component("code-question", {
  template: `<section id="1" class="container" > <div class="row">
    <div class="col s12 center-align"><h3>This is a question</h3></div>
          <div class="col s12">
              <div class="collection question-link ">
                  <a data-choice="a" href="#!"  @click="submit" class=" collection-item">testA</a>
                  <a data-choice="b" idhref="#!" @click="submit" class=" collection-item ">test B</a>
                  <a data-choice="c" href="#!"  @click="submit" class=" collection-item">test C</a>
                  <a data-choice="d" href="#!"  @click="submit" class="collection-item">test D</a>
              </div>
          </div>
      </div>
  </section >  `,
  props: ["question", "questoin-id"],
  data: function() {
    return {
      answer: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("answer", this.answer);
      console.log(this.answer);
      this.answer = null;
    }
  }
});
var app = new Vue({
  el: "#app",
  data: {
    landing: true,
    started: false,
    ended: false,
    questions: [],
    currentQuery: 0,
    answers: [],
    correct: 0
  },
  methods: {
    startQuiz: function() {
      this.landing = false;
      this.started = true;
    },
    answered: function() {}
  },
  computed: {


  }
});
*/
