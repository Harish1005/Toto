function data() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var course = document.getElementById("course").value;
  var email = document.getElementById("email").value;

  var gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

  if (name && age && email) {
    var table = document.getElementById("student-data").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${course}</td>
      <td>${email}</td>
      <td><button class="delete-btn" onclick="deleteItem(this)">Delete</button></td>
    `;

    document.querySelector("form").reset(); // Clear form fields after submission
  } else {
    alert("Please fill all fields!");
  }
}

function deleteItem(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}