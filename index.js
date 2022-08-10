const keys = document.getElementById("keys");
const results = document.getElementById("results");

function showResult(Class, Subject, Date) {
  keys.innerHTML = `<div> 
                <h5>class: ${Class}</h5>
                <h5>Subject: ${Subject}</h5>
                <h5>date: ${Date}</h5>`;
  return keys.innerHTML;
}

keys.setAttribute(
  "onload",
  showResult("Hopperlab", "Javascript", "10/08/2022")
);
date.addEventListener("click", () => {
  results.innerHTML = `<p>HopperLab</p>`;
});
