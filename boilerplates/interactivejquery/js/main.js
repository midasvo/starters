/*
 * Self-invoking javascript (JQuery). Bind to input, changes value, and alerts.
*/
$(function(){
  function helloWorld() {
    console.log("Interactive boilerplate says hello.");
  }

  /* Initializer function */
  function bindExamples() {
    bindExample1();
    bindExample2();
  }

  function bindExample1() {
    var example1 = $("#interactive1-alert-button").on("click", executeExample1);
  }

  function bindExample2() {
    $("#interactive1").on("keyup", executeExample2);
  }

  function executeExample1() {
    alert(getExample1Element());
  }

  function executeExample2() {
    console.log("Executing example 2...");
    document.getElementsByClassName("link1")[0].innerHTML = getExample1Element();
  }

  function getExample1Element() {
    return $("#interactive1").val();
  }

  helloWorld();
  bindExamples();
});
