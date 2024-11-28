// Inputs & InnerHtml

// .innerHTML command:
// 1 gets the conetant of an html element. E.g <p>Click <a>here</a></p>
// The innerhtml of the Paragraph is Click <a>here</a>
// The inner HTML of the anchor <a> is: here
// 2. sets the connet of an HTML element

// Vaule command: retrieves the connet of an <input>element
// *IMPORTANT * value command should always be used within a function
document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  // input: Retrieve the users data
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;

  // Processing: Make output statement
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;

  // Output: display output in the your order section of the website
  document.getElementById("order-output").innerHTML = output;
}
