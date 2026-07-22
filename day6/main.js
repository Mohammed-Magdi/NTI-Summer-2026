const form = document.getElementById('userForm');
const tableBody = document.getElementById('userTableBody');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
let editingRow = null;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const isGraduated = document.getElementById('isGraduated').checked ? 'Yes' : 'No';

  if (editingRow) {
    editingRow.cells[0].textContent = firstName;
    editingRow.cells[1].textContent = lastName;
    editingRow.cells[2].textContent = age;
    editingRow.cells[3].textContent = isGraduated;

    resetFormState();
  } else {
    const emptyRow = document.getElementById('emptyRow');
    if (emptyRow) {
      emptyRow.remove();
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td>${isGraduated}</td>
      <td>
        <button type="button" class="edit-btn">Update</button>
        <button type="button" class="delete-btn">Delete</button>
      </td>
    `;

    row.querySelector('.delete-btn').addEventListener('click', function() {
      deleteRow(row);
    });

    row.querySelector('.edit-btn').addEventListener('click', function() {
      startEditRow(row);
    });

    tableBody.appendChild(row);
    form.reset();
  }
}
);


function startEditRow(row) {
  editingRow = row;
  document.getElementById('firstName').value = row.cells[0].textContent;
  document.getElementById('lastName').value = row.cells[1].textContent;
  document.getElementById('age').value = row.cells[2].textContent;
  document.getElementById('isGraduated').checked = (row.cells[3].textContent === 'Yes');

  submitBtn.textContent = 'Save Changes';
  cancelBtn.style.display = 'inline';
}

function deleteRow(row) {
  if (editingRow === row) {
    resetFormState();
  }

  row.remove();

  if (tableBody.children.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.id = 'emptyRow';
    emptyRow.innerHTML = `<td colspan="5">No users added yet.</td>`;
    tableBody.appendChild(emptyRow);
  }
}

cancelBtn.addEventListener('click', resetFormState);

function resetFormState() {
  editingRow = null;
  form.reset();
  submitBtn.textContent = 'Add Entry';
  cancelBtn.style.display = 'none';
}