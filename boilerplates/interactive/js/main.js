/*
 * Self-invoking javascript. Bind to input, changes value, and alerts.
*/

(function(){
  /* Startup */
  function helloWorld() {
    console.log("Interactive boilerplate says hello.");
  }

  /* Initializer function */
  function bindExamples() {
    console.log("Binding examples...");
    bindExample1();
    bindExample2();
  }

  function bindExample1() {
    console.log("Binding example 1...");
    var example1 = document.getElementById("interactive1-alert-button");
    example1.addEventListener("click", executeExample1);
  }

  function executeExample1() {
    console.log("Executing example 1...");
    alert(getExample1Element());
  }

  function bindExample2() {
    console.log("Binding example 2...");
    console.log("Getting example1 element");
    var example1Element = document.getElementById("interactive1");

    /* Bind to keyup event. */
    example1Element.addEventListener("keyup", function() {
      console.log("Setting value of exampel1 to link element");
      executeExample2(example1Element.value);
    })
  }

  function executeExample2(value) {
    console.log("Executing example 2...");
    document.getElementsByClassName("link1")[0].innerHTML = value;
  }


  function getExample1Element() {
    return document.getElementById("interactive1").value;
  }

  helloWorld();
  bindExamples();
})();
