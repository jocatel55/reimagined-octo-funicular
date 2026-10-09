const STORAGE_KEY = 'sportyHeroTodos';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const clearAllBtn = document.getElementById('clearAllBtn');
const dropsContainer = document.getElementById('dropsContainer');

const defaultTasks = [
  { id: crypto.randomUUID(), text: 'Check the football drop calendar', done: false },
  { id: crypto.randomUUID(), text: 'Review the next basketball athlete pack', done: true },
  { id: crypto.randomUUID(), text: 'Set reminders for this week’s sports drops', done: false },
];

const upcomingDrops = [
  {
    category: 'Football',
    title: 'Apex Matchday Capsule',
    date: 'Tue, 7:30 PM',
    status: 'Dropping soon',
    description: 'Limited jersey and training gear inspired by matchday energy.',
  },
  {
    category: 'Basketball',
    title: 'Velocity Street Pack',
    date: 'Wed, 8:00 PM',
    status: 'Pre-order',
    description: 'Performance sneakers and lifestyle essentials with an urban look.',
  },
  {
    category: 'Cricket',
    title: 'Powerplay Series',
    date: 'Thu, 6:15 PM',
    status: 'New arrival',
    description: 'A bold lineup built around dynamic motion and match performance.',
  },
  {
    category: 'Running',
    title: 'Sprint Lab Collection',
    date: 'Fri, 9:00 AM',
    status: 'Exclusive',
    description: 'Fresh running gear designed for speed, comfort, and daily training.',
  },
];

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : [...defaultTasks];
  } catch (error) {
    console.error('Failed to read localStorage tasks:', error);
    return [...defaultTasks];
  }
}

let tasks = loadTasks();

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  todoList.innerHTML = '';

  if (!tasks.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'No tasks yet. Add your next sports drop reminder.';
    todoList.appendChild(empty);
  } else {
    tasks.forEach((task) => {
      const item = document.createElement('li');
      item.className = `todo-item ${task.done ? 'completed' : ''}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.setAttribute('aria-label', `Mark task complete: ${task.text}`);
      checkbox.addEventListener('change', () => toggleTask(task.id));

      const label = document.createElement('span');
      label.className = 'todo-text';
      label.textContent = task.text;

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'task-delete';
      deleteBtn.setAttribute('aria-label', `Delete task: ${task.text}`);
      deleteBtn.textContent = '×';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));

      item.appendChild(checkbox);
      item.appendChild(label);
      item.appendChild(deleteBtn);
      todoList.appendChild(item);
    });
  }

  const completedCount = tasks.filter((task) => task.done).length;
  todoCount.textContent = `${tasks.length} task${tasks.length === 1 ? '' : 's'} • ${completedCount} done`;
}

function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    todoInput.focus();
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    text: trimmed,
    done: false,
  });

  saveTasks();
  renderTasks();
  todoInput.value = '';
  todoInput.focus();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function renderDrops() {
  dropsContainer.innerHTML = '';

  upcomingDrops.forEach((drop) => {
    const card = document.createElement('article');
    card.className = 'drop-card';

    const meta = document.createElement('div');
    meta.className = 'drop-meta';

    const category = document.createElement('span');
    category.className = 'drop-category';
    category.textContent = drop.category;

    const status = document.createElement('span');
    status.className = 'drop-status';
    status.textContent = drop.status;

    const title = document.createElement('h3');
    title.textContent = drop.title;

    const date = document.createElement('div');
    date.className = 'drop-date';
    date.textContent = drop.date;

    const desc = document.createElement('p');
    desc.textContent = drop.description;

    const footer = document.createElement('div');
    footer.className = 'drop-footer';

    const footnote = document.createElement('span');
    footnote.className = 'drop-footnote';
    footnote.textContent = 'Watch list';

    const icon = document.createElement('span');
    icon.textContent = '→';
    icon.style.opacity = '0.8';

    footer.appendChild(footnote);
    footer.appendChild(icon);

    meta.appendChild(category);
    meta.appendChild(status);

    card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(desc);
    card.appendChild(footer);

    dropsContainer.appendChild(card);
  });
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(todoInput.value);
});

clearAllBtn.addEventListener('click', () => {
  tasks = [];
  saveTasks();
  renderTasks();
});

renderTasks();
renderDrops();
