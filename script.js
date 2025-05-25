function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const li = document.createElement('li');
      li.className = 'task';

      li.innerHTML = `
            <div class="task-text-wrapper">
            <i class="bi bi-circle task-icon" onclick="toggleComplete(this)"></i>
            <input type="text" class="form-control-plaintext" value="${taskText}" readonly onclick="toggleCompleteByInput(this)">
            </div>
            <div class="btn-group">
            <button class="btn btn-sm btn-outline-secondary" onclick="editTask(this)">Edit</button>
            <button class="btn btn-sm btn-outline-danger" onclick="removeTask(this)">Delete</button>
            </div>
      `;

      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
    }

        
    document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addTask();
    }
    });


    function removeTask(btn) {
      btn.closest('li').remove();
    }

    function editTask(btn) {
      const input = btn.closest('li').querySelector('input');
      if (btn.textContent === 'Edit') {
        input.removeAttribute('readonly');
        input.focus();
        btn.textContent = 'Save';
      } else {
        input.setAttribute('readonly', true);
        btn.textContent = 'Edit';
      }
    }

    function toggleComplete(icon) {
      const input = icon.nextElementSibling;
      input.classList.toggle('completed');
      icon.classList.toggle('bi-circle');
      icon.classList.toggle('bi-check-circle-fill');
      icon.classList.toggle('completed');
    }

    function toggleCompleteByInput(input) {
      const icon = input.previousElementSibling;
      toggleComplete(icon);
    }