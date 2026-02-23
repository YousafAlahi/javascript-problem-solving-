
`dom into java script  give me real project related  best practice me 20  problem qusestion with answer`

`DOM Manipulation - 20 Real-World Practice Problems with Solutions`

Problem 1: Dynamic Form Validation
Question: Create a registration form that validates email, password strength (min 8 chars, 1 uppercase, 1 number), and shows real-time error messages.

Solution:

const form = document.getElementById('registrationForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validateEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
}

function validatePassword(value) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(value);
}

function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  input.classList.add('error');
}

function clearError(input) {
  const errorDiv = input.nextElementSibling;
  errorDiv.style.display = 'none';
  input.classList.remove('error');
}

email.addEventListener('blur', (e) => {
  if (!validateEmail(e.target.value)) {
    showError(email, 'Please enter a valid email');
  } else {
    clearError(email);
  }
});

password.addEventListener('input', (e) => {
  if (!validatePassword(e.target.value)) {
    showError(password, 'Password must be 8+ chars with 1 uppercase and 1 number');
  } else {
    clearError(password);
  }
});

`Problem 2: Todo List with LocalStorage`
`Question: Build a todo list that persists data in localStorage and allows add, delete, and mark as complete.`

Solution:


class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.todoList = document.getElementById('todoList');
    this.todoInput = document.getElementById('todoInput');
    this.addBtn = document.getElementById('addBtn');
    
    this.init();
  }
  
  init() {
    this.addBtn.addEventListener('click', () => this.addTodo());
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTodo();
    });
    this.render();
  }
  
  addTodo() {
    const text = this.todoInput.value.trim();
    if (!text) return;
    
    const todo = {
      id: Date.now(),
      text,
      completed: false
    };
    
    this.todos.push(todo);
    this.saveTodos();
    this.todoInput.value = '';
    this.render();
  }
  
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
    this.render();
  }
  
  toggleComplete(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
      this.render();
    }
  }
  
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  render() {
    this.todoList.innerHTML = '';
    
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = todo.completed ? 'completed' : '';
      li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} 
               onchange="app.toggleComplete(${todo.id})">
        <span>${todo.text}</span>
        <button onclick="app.deleteTodo(${todo.id})">Delete</button>
      `;
      this.todoList.appendChild(li);
    });
  }
}

const app = new TodoApp();

`Problem 3: Image Carousel/Slider`
`Question: Create an image carousel with previous/next buttons and auto-play functionality.`

Solution:

class ImageCarousel {
  constructor(images, interval = 3000) {
    this.images = images;
    this.currentIndex = 0;
    this.interval = interval;
    this.autoPlayTimer = null;
    
    this.carouselImg = document.getElementById('carouselImage');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.indicators = document.getElementById('indicators');
    
    this.init();
  }
  
  init() {
    this.createIndicators();
    this.showImage(0);
    
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    this.startAutoPlay();
    
    // Pause on hover
    this.carouselImg.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.carouselImg.addEventListener('mouseleave', () => this.startAutoPlay());
  }
  
  createIndicators() {
    this.images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'indicator';
      dot.addEventListener('click', () => this.showImage(index));
      this.indicators.appendChild(dot);
    });
  }
  
  showImage(index) {
    this.currentIndex = index;
    this.carouselImg.src = this.images[index];
    
    // Update indicators
    const dots = this.indicators.querySelectorAll('.indicator');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(this.currentIndex);
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage(this.currentIndex);
  }
  
  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => this.next(), this.interval);
  }
  
  stopAutoPlay() {
    clearInterval(this.autoPlayTimer);
  }
}

const carousel = new ImageCarousel([
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
]);

`Problem 4: Search Filter for a List`
`Question: Implement a real-time search that filters a list of items as the user types.`

Solution:

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = itemList.querySelectorAll('.item');

function filterItems(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const shouldShow = text.includes(term);
    
    item.style.display = shouldShow ? 'block' : 'none';
  });
  
  // Show "no results" message
  const visibleItems = Array.from(items).filter(item => 
    item.style.display !== 'none'
  );
  
  const noResults = document.getElementById('noResults');
  noResults.style.display = visibleItems.length === 0 ? 'block' : 'none';
}

// Debounce for performance
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

searchInput.addEventListener('input', debounce((e) => {
  filterItems(e.target.value);
}, 300));

`Problem 5: Modal/Popup Implementation`
`Question: Create a reusable modal component that can be opened, closed, and closed by clicking outside.`
`Solution:`

class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeBtn = this.modal.querySelector('.close-btn');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Close on outside click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
  
  open() {
    this.modal.style.display = 'flex';
    this.isOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
  
  close() {
    this.modal.style.display = 'none';
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }
  
  setContent(content) {
    const contentDiv = this.modal.querySelector('.modal-content');
    contentDiv.innerHTML = content;
  }
}

// Usage
const myModal = new Modal('myModal');
document.getElementById('openModalBtn').addEventListener('click', () => {
  myModal.open();
});
Problem 6: Tabs Component
Question: Create a tabs interface where clicking a tab shows its corresponding content panel.

Solution:

javascript
class Tabs {
  constructor(tabsContainer) {
    this.container = tabsContainer;
    this.tabs = this.container.querySelectorAll('.tab');
    this.panels = this.container.querySelectorAll('.tab-panel');
    
    this.init();
  }
  
  init() {
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.switchTab(index));
    });
    
    // Show first tab by default
    this.switchTab(0);
  }
  
  switchTab(index) {
    // Remove active class from all tabs and panels
    this.tabs.forEach(tab => tab.classList.remove('active'));
    this.panels.forEach(panel => panel.classList.remove('active'));
    
    // Add active class to selected tab and panel
    this.tabs[index].classList.add('active');
    this.panels[index].classList.add('active');
  }
}

const tabsComponent = new Tabs(document.getElementById('tabs'));
Problem 7: Accordion Component
Question: Build an accordion where clicking a header expands/collapses content, with only one section open at a time.

Solution:

javascript
class Accordion {
  constructor(accordionElement, allowMultiple = false) {
    this.accordion = accordionElement;
    this.allowMultiple = allowMultiple;
    this.items = this.accordion.querySelectorAll('.accordion-item');
    
    this.init();
  }
  
  init() {
    this.items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      
      header.addEventListener('click', () => {
        this.toggle(item);
      });
    });
  }
  
  toggle(selectedItem) {
    const isActive = selectedItem.classList.contains('active');
    
    // Close all items if allowMultiple is false
    if (!this.allowMultiple) {
      this.items.forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = null;
      });
    }
    
    // Toggle selected item
    if (!isActive) {
      selectedItem.classList.add('active');
      const content = selectedItem.querySelector('.accordion-content');
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      selectedItem.classList.remove('active');
      const content = selectedItem.querySelector('.accordion-content');
      content.style.maxHeight = null;
    }
  }
}

const accordion = new Accordion(document.getElementById('accordion'));
Problem 8: Infinite Scroll
Question: Implement infinite scroll that loads more content when user scrolls near the bottom of the page.

Solution:

javascript
class InfiniteScroll {
  constructor(container, loadMoreCallback) {
    this.container = container;
    this.loadMoreCallback = loadMoreCallback;
    this.loading = false;
    this.page = 1;
    
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  
  handleScroll() {
    if (this.loading) return;
    
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 200;
    
    if (scrollPosition >= threshold) {
      this.loadMore();
    }
  }
  
  async loadMore() {
    this.loading = true;
    this.showLoader();
    
    try {
      this.page++;
      await this.loadMoreCallback(this.page);
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      this.loading = false;
      this.hideLoader();
    }
  }
  
  showLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'block';
  }
  
  hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }
}

// Usage
const infiniteScroll = new InfiniteScroll(
  document.getElementById('content'),
  async (page) => {
    const response = await fetch(`/api/items?page=${page}`);
    const data = await response.json();
    
    const container = document.getElementById('content');
    data.items.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.title;
      container.appendChild(div);
    });
  }
);
Problem 9: Drag and Drop
Question: Implement drag and drop functionality to reorder list items.

Solution:

javascript
class DragDropList {
  constructor(listElement) {
    this.list = listElement;
    this.draggedElement = null;
    
    this.init();
  }
  
  init() {
    const items = this.list.querySelectorAll('.draggable');
    
    items.forEach(item => {
      item.draggable = true;
      
      item.addEventListener('dragstart', (e) => this.handleDragStart(e));
      item.addEventListener('dragover', (e) => this.handleDragOver(e));
      item.addEventListener('drop', (e) => this.handleDrop(e));
      item.addEventListener('dragend', (e) => this.handleDragEnd(e));
    });
  }
  
  handleDragStart(e) {
    this.draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  }
  
  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const targetElement = e.target.closest('.draggable');
    if (targetElement && targetElement !== this.draggedElement) {
      const rect = targetElement.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      
      if (e.clientY < midpoint) {
        targetElement.parentNode.insertBefore(this.draggedElement, targetElement);
      } else {
        targetElement.parentNode.insertBefore(this.draggedElement, targetElement.nextSibling);
      }
    }
  }
  
  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  handleDragEnd(e) {
    e.target.classList.remove('dragging');
    this.draggedElement = null;
  }
}

const dragDropList = new DragDropList(document.getElementById('sortableList'));
Problem 10: Dark Mode Toggle
Question: Create a dark mode toggle that persists user preference in localStorage.

Solution:

javascript
class DarkModeToggle {
  constructor() {
    this.toggleBtn = document.getElementById('darkModeToggle');
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    this.init();
  }
  
  init() {
    // Check for saved preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (this.prefersDark.matches ? 'dark' : 'light');
    
    this.setTheme(theme);
    
    this.toggleBtn.addEventListener('click', () => this.toggle());
    
    // Listen for system theme changes
    this.prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleButton(theme);
  }
  
  updateToggleButton(theme) {
    this.toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    this.toggleBtn.setAttribute('aria-label', 
      `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
    );
  }
}

const darkMode = new DarkModeToggle();
Problem 11: Countdown Timer
Question: Build a countdown timer that shows days, hours, minutes, and seconds until a target date.

Solution:

javascript
class CountdownTimer {
  constructor(targetDate, displayElement) {
    this.targetDate = new Date(targetDate).getTime();
    this.displayElement = displayElement;
    this.timerInterval = null;
    
    this.init();
  }
  
  init() {
    this.updateDisplay();
    this.timerInterval = setInterval(() => this.updateDisplay(), 1000);
  }
  
  updateDisplay() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;
    
    if (distance < 0) {
      this.stop();
      this.displayElement.innerHTML = '<span class="expired">Event has started!</span>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.displayElement.innerHTML = `
      <div class="time-unit">
        <span class="number">${this.pad(days)}</span>
        <span class="label">Days</span>
      </div>
      <div class="time-unit">
        <span class="number">${this.pad(hours)}</span>
        <span class="label">Hours</span>
      </div>
      <div class="time-unit">
        <span class="number">${this.pad(minutes)}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="time-unit">
        <span class="number">${this.pad(seconds)}</span>
        <span class="label">Seconds</span>
      </div>
    `;
  }
  
  pad(num) {
    return num.toString().padStart(2, '0');
  }
  
  stop() {
    clearInterval(this.timerInterval);
  }
}

const countdown = new CountdownTimer(
  '2026-12-31 23:59:59',
  document.getElementById('countdown')
);
Problem 12: Star Rating Component
Question: Create an interactive 5-star rating system that highlights stars on hover and saves rating on click.

Solution:

javascript
class StarRating {
  constructor(container, callback) {
    this.container = container;
    this.callback = callback;
    this.rating = 0;
    this.stars = [];
    
    this.init();
  }
  
  init() {
    this.container.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      star.innerHTML = '★';
      star.dataset.rating = i;
      
      star.addEventListener('click', () => this.setRating(i));
      star.addEventListener('mouseenter', () => this.highlightStars(i));
      star.addEventListener('mouseleave', () => this.highlightStars(this.rating));
      
      this.stars.push(star);
      this.container.appendChild(star);
    }
  }
  
  highlightStars(count) {
    this.stars.forEach((star, index) => {
      if (index < count) {
        star.classList.add('filled');
      } else {
        star.classList.remove('filled');
      }
    });
  }
  
  setRating(rating) {
    this.rating = rating;
    this.highlightStars(rating);
    
    if (this.callback) {
      this.callback(rating);
    }
  }
  
  getRating() {
    return this.rating;
  }
}

// Usage
const starRating = new StarRating(
  document.getElementById('starRating'),
  (rating) => {
    console.log('Rating selected:', rating);
    // Send to server
  }
);

Problem 13: Progress Bar
Question: Create a dynamic progress bar that can be updated programmatically.

Solution:

class ProgressBar {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      min: options.min || 0,
      max: options.max || 100,
      value: options.value || 0,
      showLabel: options.showLabel !== false,
      animated: options.animated !== false
    };
    
    this.init();
  }
  
  init() {
    this.element.classList.add('progress-bar-container');
    
    this.bar = document.createElement('div');
    this.bar.className = 'progress-bar';
    
    if (this.options.showLabel) {
      this.label = document.createElement('span');
      this.label.className = 'progress-label';
      this.bar.appendChild(this.label);
    }
    
    this.element.appendChild(this.bar);
    this.setValue(this.options.value);
  }
  
  setValue(value) {
    const clampedValue = Math.max(this.options.min, Math.min(this.options.max, value));
    const percentage = ((clampedValue - this.options.min) / (this.options.max - this.options.min)) * 100;
    
    if (this.options.anim




Claude is AI and can make mistakes. Please double-check responses.
