function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName; // return displayName function along its lexical evnvironment.
  }
  
  const myFunc = makeFunc();
  myFunc();
  