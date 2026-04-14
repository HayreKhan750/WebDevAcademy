import { useState } from 'react';
import { Zap, MousePointer, Code2, FileText, CalendarClock, Regex, Cookie, CheckCircle, ChevronRight, ChevronDown, Braces, Globe, Box, Smartphone } from 'lucide-react';
import InteractiveCodeEditor from '../components/InteractiveCodeEditor';
import VisualDemo from '../components/VisualDemo';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

interface Chapter5Props {
  progress: Record<string, boolean>;
  updateProgress: (chapterId: string, topicId: string, completed: boolean) => void;
}

interface Topic {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  exercise?: React.ReactNode;
  quiz?: { questions: { question: string; options: string[]; correctAnswer: number; explanation?: string }[] };
}

export default function Chapter5({ progress, updateProgress }: Chapter5Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('advjs-dom');

  const markComplete = (topicId: string) => {
    updateProgress('chapter5', topicId, true);
  };

  const topics: Record<string, Topic> = {
    'advjs-dom': {
      id: 'advjs-dom',
      title: 'DOM Manipulation',
      icon: <Box className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">The Document Object Model (DOM)</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript can manipulate the DOM to create dynamic, interactive web pages.
            </p>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">DOM Tree Structure</h4>
              <div className="bg-white/20 rounded-lg p-4 font-mono text-sm">
                <p>document</p>
                <p className="ml-4">└── html</p>
                <p className="ml-8">├── head</p>
                <p className="ml-8">│   ├── title</p>
                <p className="ml-8">│   └── meta</p>
                <p className="ml-8">└── body</p>
                <p className="ml-12">├── header</p>
                <p className="ml-12">├── main</p>
                <p className="ml-12">└── footer</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Selecting Elements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { method: 'getElementById()', desc: 'Select by ID', icon: '#' },
                { method: 'getElementsByClassName()', desc: 'Select by class', icon: '.' },
                { method: 'getElementsByTagName()', desc: 'Select by tag', icon: '<>' },
                { method: 'querySelector()', desc: 'First match CSS selector', icon: '⚡' },
                { method: 'querySelectorAll()', desc: 'All matches CSS selector', icon: '⚡⚡' }
              ].map((item, i) => (
                <div key={i} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-2xl font-mono text-purple-600">{item.icon}</span>
                  <div>
                    <code className="font-mono text-purple-600 text-sm">{item.method}</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="DOM Manipulation Demo"
            language="javascript"
            initialCode={`// Selecting Elements
const title = document.getElementById("title");
const items = document.getElementsByClassName("item");
const paragraphs = document.getElementsByTagName("p");
const firstButton = document.querySelector("button");
const allButtons = document.querySelectorAll("button");

// Changing Content
title.textContent = "New Title";
title.innerHTML = "<span>HTML Content</span>";

// Changing Styles
title.style.color = "blue";
title.style.fontSize = "24px";
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("highlight");

// Creating Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";
newDiv.className = "container";
document.body.appendChild(newDiv);

// Removing Elements
const toRemove = document.querySelector(".obsolete");
toRemove.remove();

// Event Handling
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "red";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "blue";
});`}
          />

          <Quiz
            questions={[
              {
                question: "Which method selects all elements matching a CSS selector?",
                options: ["getElementById()", "getElementsByClassName()", "querySelector()", "querySelectorAll()"],
                correctAnswer: 3,
                explanation: "querySelectorAll() returns a NodeList of all elements matching the specified CSS selector."
              },
              {
                question: "What is the correct way to add a class to an element?",
                options: ["element.class = 'active'", "element.className = 'active'", "element.classList.add('active')", "element.addClass('active')"],
                correctAnswer: 2,
                explanation: "classList.add() is the modern way to add classes. className is a string that would overwrite all classes."
              }
            ]}
          />

          <Exercise
            question="Create a JavaScript program that: 1) Selects a div with id 'container', 2) Changes its background color to blue, 3) Creates a new paragraph element with text 'Hello DOM!', 4) Appends the paragraph to the container, 5) Adds a click event listener to the paragraph that removes it when clicked."
            hint="Use document.createElement() to create elements, appendChild() to add them, and addEventListener() for events"
            solution={`// Select the container
const container = document.getElementById('container');

// Change background color
container.style.backgroundColor = 'blue';

// Create a new paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello DOM!';

// Append to container
container.appendChild(paragraph);

// Add click event to remove the paragraph
paragraph.addEventListener('click', function() {
    this.remove(); // or container.removeChild(this)
    console.log('Paragraph removed!');
});

// Alternative: using textContent vs innerHTML
// paragraph.innerHTML = '<strong>Bold Text</strong>';`}
          />
        </div>
      )
    },

    'advjs-events': {
      id: 'advjs-events',
      title: 'Events and Event Handling',
      icon: <MousePointer className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">JavaScript Events</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Events are actions or occurrences that happen in the system you are programming. JavaScript can detect and respond to these events to create interactive experiences.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Common Events</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { type: 'Click', event: 'click' },
                  { type: 'Double Click', event: 'dblclick' },
                  { type: 'Mouse Over', event: 'mouseover' },
                  { type: 'Mouse Out', event: 'mouseout' },
                  { type: 'Key Press', event: 'keypress' },
                  { type: 'Key Down', event: 'keydown' },
                  { type: 'Key Up', event: 'keyup' },
                  { type: 'Focus', event: 'focus' },
                  { type: 'Blur', event: 'blur' },
                  { type: 'Change', event: 'change' },
                  { type: 'Submit', event: 'submit' },
                  { type: 'Load', event: 'load' }
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-2 text-center">
                    <p className="font-bold text-blue-600 text-sm">{item.type}</p>
                    <code className="text-xs text-gray-500">{item.event}</code>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Event Handling Methods</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <div className="space-y-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <p className="text-green-800 dark:text-green-200">HTML Inline (not recommended)</p>
                  <code className="text-xs text-green-600">{'<button onclick="alert(\'Hi!\')">Click me</button>'}</code>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200">DOM Level 0 (older)</p>
                  <code className="text-xs text-blue-600">element.onclick = function() {'{'}...{'}'}</code>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200">addEventListener (recommended)</p>
                  <code className="text-xs text-purple-600">element.addEventListener('click', function() {'{'}...{'}'})</code>
                </div>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Event Handling Demo"
            language="javascript"
            initialCode={`// Basic Click Event
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Event with Parameter
function handleClick(event) {
    console.log("Clicked:", event.target.textContent);
}
button.addEventListener("click", handleClick);

// Multiple Events
const box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "purple";
});
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "gray";
});

// Keyboard Events
const input = document.getElementById("textInput");
input.addEventListener("keyup", (e) => {
    console.log("Key pressed:", e.key);
    console.log("Key code:", e.keyCode);
});

// Form Submit Event
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted!");
    const formData = new FormData(form);
    console.log("Email:", formData.get("email"));
});

// Event Delegation (for dynamic elements)
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked via delegation!");
    }
});

// Removing Events
function oneTimeClick() {
    console.log("This will only fire once!");
    button.removeEventListener("click", oneTimeClick);
}
button.addEventListener("click", oneTimeClick);`}
          />

          <Exercise
            question="Create an event listener that listens for a click on a button, and when clicked, changes the text content of a paragraph element from 'Waiting...' to 'Clicked!' and changes the paragraph color to green."
            hint="First select both the button and paragraph using getElementById or querySelector, then use addEventListener for the click event, and inside the handler use textContent and style.color to update the paragraph."
            solution={`const button = document.getElementById("myButton");
const paragraph = document.getElementById("status");

button.addEventListener("click", function() {
    paragraph.textContent = "Clicked!";
    paragraph.style.color = "green";
});`}
          />

          <Quiz
            questions={[
              {
                question: "Which method is recommended for attaching event handlers?",
                options: ["HTML onclick attribute", "element.onclick", "addEventListener()", "attachEvent()"],
                correctAnswer: 2,
                explanation: "addEventListener() allows multiple handlers, better separation of concerns, and works with event delegation."
              },
              {
                question: "What does event.preventDefault() do?",
                options: ["Stops event propagation", "Prevents the default browser action", "Removes the event listener", "Cancels the event completely"],
                correctAnswer: 1,
                explanation: "preventDefault() stops the browser's default action (like form submission or link navigation)."
              },
              {
                question: "What is event delegation?",
                options: ["Attaching events to each child individually", "Attaching one event to parent to handle children", "Removing events from elements", "Creating new events"],
                correctAnswer: 1,
                explanation: "Event delegation uses the bubbling principle to handle events on multiple children with one parent listener."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-objects': {
      id: 'advjs-objects',
      title: 'Advanced Objects',
      icon: <Braces className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Advanced Object Concepts</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              JavaScript objects are versatile. Let's explore advanced features like prototypes, getters/setters, and property descriptors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Getters and Setters</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <p className="text-purple-600">get propertyName() {'{'}...{'}'}</p>
                  <p className="text-purple-600">set propertyName() {'{'}...{'}'}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Object Methods</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <p className="text-blue-600">Object.freeze()</p>
                  <p className="text-blue-600">Object.seal()</p>
                  <p className="text-blue-600">Object.keys()</p>
                </div>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Advanced Objects Demo"
            language="javascript"
            initialCode={`// Getter and Setter
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);  // "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName);  // "Jane"

// Prototype Chain
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return this.name + " makes a sound";
};

const dog = new Animal("Dog");
console.log(dog.speak());  // "Dog makes a sound"
console.log(dog instanceof Animal);  // true

// Object.defineProperty
const obj = {};
Object.defineProperty(obj, "secret", {
    value: 42,
    writable: false,  // Cannot be changed
    enumerable: true,
    configurable: false
});

// Object.freeze (immutable)
const frozen = { x: 1, y: 2 };
Object.freeze(frozen);
// frozen.x = 5;  // Error in strict mode!

// Object.seal (can modify, cannot add/remove)
const sealed = { a: 1 };
Object.seal(sealed);
sealed.a = 5;  // OK
// sealed.b = 2;  // Error!

// Symbol (unique property keys)
const id = Symbol("id");
const user = {
    name: "John",
    [id]: 123
};
console.log(user[id]);  // 123

// WeakMap (private data)
const privateData = new WeakMap();
function Counter() {
    privateData.set(this, { count: 0 });
}
Counter.prototype.increment = function() {
    let data = privateData.get(this);
    data.count++;
    return data.count;
};`}
          />

          <Quiz
            questions={[
              {
                question: "What does Object.freeze() do to an object?",
                options: ["Prevents adding new properties only", "Prevents modifying existing properties only", "Prevents adding, removing, or modifying properties", "Creates a backup copy"],
                correctAnswer: 2,
                explanation: "Object.freeze() makes an object completely immutable - no additions, removals, or modifications are allowed."
              },
              {
                question: "What is a Symbol used for in JavaScript?",
                options: ["Creating unique identifiers for objects", "Encrypting data", "Creating special characters", "Defining data types"],
                correctAnswer: 0,
                explanation: "Symbols create unique, immutable identifiers that can be used as property keys to avoid naming conflicts."
              }
            ]}
          />

          <Exercise
            question="Create a bank account object using a constructor function with: owner name, account number, and balance. Add methods for deposit(), withdraw(), and getBalance(). Use Object.seal() to prevent adding new properties, then test the methods."
            hint="Use 'this' keyword to reference object properties, and implement validation for withdrawals"
            solution={`function BankAccount(owner, accountNumber, initialBalance) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactionHistory = [];

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactionHistory.push({ type: 'deposit', amount: amount, date: new Date() });
            return \`Deposited: $\${amount}. New balance: $\${this.balance}\`;
        }
        return 'Invalid deposit amount';
    };

    this.withdraw = function(amount) {
        if (amount > this.balance) {
            return 'Insufficient funds';
        }
        if (amount > 0) {
            this.balance -= amount;
            this.transactionHistory.push({ type: 'withdrawal', amount: amount, date: new Date() });
            return \`Withdrew: $\${amount}. New balance: $\${this.balance}\`;
        }
        return 'Invalid withdrawal amount';
    };

    this.getBalance = function() {
        return \`Account \${this.accountNumber} - Balance: $\${this.balance}\`;
    };

    Object.seal(this);
}

const account = new BankAccount('John Doe', 'ACC-12345', 1000);
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());

// Try to add new property (will fail with seal)
account.email = 'john@email.com'; // Silently fails in non-strict mode
console.log('Email property added?', account.hasOwnProperty('email'));`}
          />
        </div>
      )
    },

    'advjs-strings': {
      id: 'advjs-strings',
      title: 'String Methods',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">JavaScript String Methods</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Strings are fundamental in JavaScript. Mastering string methods is essential for text processing and manipulation.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">Essential String Methods</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {['charAt()', 'concat()', 'includes()', 'indexOf()', 'lastIndexOf()', 'match()', 'replace()', 'search()', 'slice()', 'split()', 'substring()', 'toLowerCase()', 'toUpperCase()', 'trim()', 'startsWith()', 'endsWith()'].map((method, i) => (
                  <code key={i} className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 text-center">{method}</code>
                ))}
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="String Methods Demo"
            language="javascript"
            initialCode={`const text = "  Hello, World!  ";

// Basic Methods
console.log(text.length);           // 18 (with spaces)
console.log(text.toUpperCase());   // "  HELLO, WORLD!  "
console.log(text.toLowerCase());   // "  hello, world!  "
console.log(text.trim());           // "Hello, World!"
console.log(text.trimStart());     // "Hello, World!  "
console.log(text.trimEnd());       // "  Hello, World!"

// Finding
console.log(text.indexOf("World"));      // 10
console.log(text.lastIndexOf("o"));       // 13
console.log(text.includes("Hello"));      // true
console.log(text.startsWith("  Hello"));   // true
console.log(text.endsWith("!  "));       // true
console.log(text.search(/world/i));       // 10 (regex)

// Extracting
console.log(text.slice(2, 7));     // "Hello"
console.log(text.substring(2, 7)); // "Hello"
console.log(text.slice(-7, -1));   // "World"
console.log(text.charAt(0));       // " "

// Modifying
console.log(text.replace("World", "Universe"));
console.log(text.replace(/world/i, "Universe")); // regex
console.log(text.replaceAll("o", "0"));  // ES2021

// Splitting
const csv = "apple,banana,orange";
console.log(csv.split(","));    // ["apple", "banana", "orange"]
console.log(csv.split(""));    // ["a","p","p","l","e",",",...]

// Template Literals (Review)
const name = "Alice";
const greeting = \`Hello, \${name}!
Welcome to \${text.trim()}.\`;
console.log(greeting);

// String Padding (ES2017)
console.log("5".padStart(3, "0"));     // "005"
console.log("5".padEnd(3, "0"));       // "500"

// Template Tag Functions
function highlight(strings, value) {
    return strings[0] + "**" + value + "**" + strings[1];
}
const result = highlight\`Hello \${name}!\`;
console.log(result);  // "Hello **Alice**!"`}
          />

          <Exercise
            question="Write a function that takes a full name (e.g., 'john doe') and returns the name in title case (e.g., 'John Doe'). Title case means the first letter of each word is capitalized."
            hint="Use split() to break the string into words, use toUpperCase() on the first character, and slice() or substring() for the rest of each word."
            solution={`function toTitleCase(name) {
    return name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

console.log(toTitleCase("john doe"));  // "John Doe"
console.log(toTitleCase("JANE SMITH"));  // "Jane Smith"`}
          />

          <Quiz
            questions={[
              {
                question: "Which method splits a string into an array?",
                options: ["join()", "split()", "slice()", "concat()"],
                correctAnswer: 1,
                explanation: "split() divides a string into an array of substrings based on a separator."
              },
              {
                question: "What does 'Hello'.includes('ell') return?",
                options: ["true", "false", "undefined", "Error"],
                correctAnswer: 0,
                explanation: "includes() returns true if the string contains the specified substring."
              },
              {
                question: "What is the difference between slice() and substring()?",
                options: ["No difference", "slice() handles negative indices differently", "substring() can swap arguments", "slice() is faster"],
                correctAnswer: 1,
                explanation: "slice() allows negative indices (counting from end), while substring() treats negative as 0."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-dates': {
      id: 'advjs-dates',
      title: 'Date Objects',
      icon: <CalendarClock className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">JavaScript Date Objects</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              JavaScript's Date object provides methods for working with dates and times. It stores dates as the number of milliseconds since January 1, 1970.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Creating Dates</h4>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                <p className="text-blue-600">new Date()</p>
                <p className="text-blue-600">new Date(milliseconds)</p>
                <p className="text-blue-600">new Date(dateString)</p>
                <p className="text-blue-600">new Date(year, month, day, hours, minutes, seconds, ms)</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Date Methods</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['getFullYear()', 'getMonth()', 'getDate()', 'getDay()', 'getHours()', 'getMinutes()', 'getSeconds()', 'getMilliseconds()', 'getTime()', 'setFullYear()', 'setMonth()', 'setDate()'].map((method, i) => (
                <code key={i} className="bg-white dark:bg-gray-800 px-2 py-2 rounded text-blue-600 dark:text-blue-400 text-sm text-center">{method}</code>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Date Objects Demo"
            language="javascript"
            initialCode={`// Current Date
const now = new Date();
console.log(now);
console.log(now.toString());

// Creating Specific Dates
const date1 = new Date("2024-01-15");
const date2 = new Date(2024, 0, 15);  // Note: month is 0-indexed
const date3 = new Date(2024, 0, 15, 14, 30, 0);

// Getting Components
console.log(now.getFullYear());     // 2024
console.log(now.getMonth());        // 0-11 (January = 0)
console.log(now.getDate());        // 1-31
console.log(now.getDay());         // 0-6 (Sunday = 0)
console.log(now.getHours());       // 0-23
console.log(now.getMinutes());     // 0-59
console.log(now.getSeconds());     // 0-59
console.log(now.getMilliseconds());
console.log(now.getTime());         // Timestamp

// Setting Components
now.setFullYear(2025);
now.setMonth(5);  // June
now.setDate(20);

// Date Formatting
console.log(now.toDateString());       // "Fri Jun 20 2025"
console.log(now.toTimeString());        // "HH:MM:SS GMT..."
console.log(now.toISOString());         // "2025-06-20T..."
console.log(now.toLocaleDateString());  // Local format
console.log(now.toLocaleTimeString());

// Date Arithmetic
const start = new Date("2024-01-01");
const end = new Date("2024-01-15");
const diff = end - start;  // Milliseconds
console.log(diff / (1000 * 60 * 60 * 24));  // 14 days

// More Calculations
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log(addDays(new Date(), 7));  // Date 7 days from now

// Relative Time
function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 }
    ];
    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return \`\${count} \${interval.label}\${count > 1 ? 's' : ''} ago\`;
        }
    }
    return "just now";
}
console.log(timeAgo(new Date(Date.now() - 3600000)));  // "1 hour ago"`}
          />

          <Quiz
            questions={[
              {
                question: "What month does getMonth() return for March?",
                options: ["1", "2", "3", "0"],
                correctAnswer: 1,
                explanation: "JavaScript's getMonth() is zero-indexed, so January is 0 and March is 2."
              },
              {
                question: "How do you calculate the number of days between two dates?",
                options: ["date1 - date2", "(date1 - date2) / 86400000", "date1.daysTo(date2)", "date1.getDays() - date2.getDays()"],
                correctAnswer: 1,
                explanation: "Subtract the timestamps and divide by the number of milliseconds in a day (1000 * 60 * 60 * 24 = 86400000)."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-regex': {
      id: 'advjs-regex',
      title: 'Regular Expressions',
      icon: <Regex className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Regular Expressions (Regex)</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Regular expressions are patterns used to match character combinations in text. They're powerful for validation, search, and text replacement.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Regex Syntax</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                  <p className="font-bold text-purple-600 mb-2">Character Classes</p>
                  <code className="text-xs">. - any character</code><br />
                  <code className="text-xs">\d - digit [0-9]</code><br />
                  <code className="text-xs">\w - word [a-zA-Z0-9_]</code><br />
                  <code className="text-xs">\s - whitespace</code>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                  <p className="font-bold text-purple-600 mb-2">Quantifiers</p>
                  <code className="text-xs">* - 0 or more</code><br />
                  <code className="text-xs">+ - 1 or more</code><br />
                  <code className="text-xs">? - 0 or 1</code><br />
                  <code className="text-xs">{'{'}n{'}'} - exactly n</code>
                </div>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Regular Expressions Demo"
            language="javascript"
            initialCode={`// Creating Regular Expressions
const regex1 = /pattern/flags;
const regex2 = new RegExp("pattern", "flags");

// Flags: g (global), i (case-insensitive), m (multiline)

// Basic Matching
const text = "Hello World! 123";
console.log(/hello/.test(text));           // false (case-sensitive)
console.log(/hello/i.test(text));          // true (case-insensitive)
console.log(/\\d+/.test(text));            // true (digits)
console.log(/\\w+/.test(text));            // true (word characters)

// Metacharacters
console.log(/^Hello/.test(text));           // true (starts with Hello)
console.log(/World$/.test(text));           // true (ends with World)
console.log(/\\d{3}/.test(text));          // true (3 digits)
console.log(/[aeiou]/i.test(text));        // true (any vowel)

// Searching
const sentence = "The quick brown fox jumps";
console.log(sentence.match(/\\w+ox/));     // ["fox"]
console.log(sentence.search(/brown/));      // 10
console.log("abc123def".replace(/\\d+/, "XYZ"));  // "abcXYZdef"
console.log("cat bat hat".replace(/at/g, "ond"));  // "cond bond hend"

// More Patterns
const email = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
console.log(email.test("user@example.com"));  // true
console.log(email.test("invalid"));          // false

const phone = /^\\d{3}-\\d{3}-\\d{4}$/;
console.log(phone.test("123-456-7890"));    // true

const url = /^https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]*$/;
console.log(url.test("https://example.com"));  // true

// replace with function
console.log("John Doe".replace(/(\\w+) (\\w+)/, "$2, $1"));  // "Doe, John"

// Split with regex
console.log("a,b;c:d".split(/[,;:]/));  // ["a","b","c","d"]`}
          />

          <Exercise
            question="Write a regular expression that validates a password. The password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)."
            hint="Use lookahead assertions (?=...) to check for multiple conditions without consuming characters."
            solution={`const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

console.log(passwordRegex.test("Pass123@"));     // true
console.log(passwordRegex.test("password"));     // false (no uppercase, no digit, no special)
console.log(passwordRegex.test("PASS123@"));     // false (no lowercase)
console.log(passwordRegex.test("Pass@"));        // false (too short)`}
          />

          <Quiz
            questions={[
              {
                question: "What does the regex pattern /^\\d+$/ match?",
                options: ["Any text with digits", "One or more digits only", "A single digit", "Text starting with a digit"],
                correctAnswer: 1,
                explanation: "^\\d+$ matches strings that consist entirely of one or more digits (\\d+) from start (^) to end ($)."
              },
              {
                question: "What is a lookahead assertion in regex?",
                options: ["Looking ahead to the next character", "Checking a pattern without consuming characters", "Matching multiple patterns", "Skipping characters in the match"],
                correctAnswer: 1,
                explanation: "Lookahead (?=...) checks if a pattern exists ahead without including it in the match."
              },
              {
                question: "Which flag makes a regex case-insensitive?",
                options: ["g", "m", "i", "s"],
                correctAnswer: 2,
                explanation: "The 'i' flag makes the regex match regardless of case."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-cookies': {
      id: 'advjs-cookies',
      title: 'Cookies and Storage',
      icon: <Cookie className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Browser Storage</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Modern browsers provide several ways to store data on the client side. Understanding when to use each is crucial for building effective web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { type: 'localStorage', size: '~5MB', lifetime: 'Permanent', color: 'blue' },
                { type: 'sessionStorage', size: '~5MB', lifetime: 'Tab session', color: 'green' },
                { type: 'cookies', size: '~4KB', lifetime: 'Customizable', color: 'orange' }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800 rounded-xl p-4`}>
                  <p className={`font-bold text-${item.color}-800 dark:text-${item.color}-200`}>{item.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Size: {item.size}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lifetime: {item.lifetime}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Browser Storage Demo"
            language="javascript"
            initialCode={`// localStorage (persists until cleared)
localStorage.setItem("name", "John");
localStorage.setItem("theme", "dark");
localStorage.setItem("preferences", JSON.stringify({ fontSize: 16 }));

const name = localStorage.getItem("name");
const prefs = JSON.parse(localStorage.getItem("preferences"));
localStorage.removeItem("name");
localStorage.clear();  // Clear all

// sessionStorage (cleared when tab closes)
sessionStorage.setItem("currentPage", "1");
const page = sessionStorage.getItem("currentPage");

// Storing objects (must serialize)
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));

// Cookies
document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie = "theme=dark; max-age=8640000";  // 100 days
document.cookie = "secure=true; samesite=strict";

// Reading cookies
console.log(document.cookie);  // "username=John; theme=dark; secure=true"

// Better cookie handling
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = \`\${name}=\${value};expires=\${expires.toUTCString()};path=/\`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// Check for feature support
if (typeof(Storage) !== "undefined") {
    console.log("localStorage supported!");
} else {
    console.log("No localStorage support - fallback to cookies");
}

// Storage event (for cross-tab sync)
window.addEventListener('storage', (e) => {
    console.log('Storage changed:', e.key);
    console.log('Old value:', e.oldValue);
    console.log('New value:', e.newValue);
});`}
          />

          <Quiz
            questions={[
              {
                question: "How much data can typically be stored in localStorage?",
                options: ["About 5KB", "About 5MB", "About 50MB", "Unlimited"],
                correctAnswer: 1,
                explanation: "localStorage typically allows about 5MB of storage, which is shared across all pages from the same origin."
              },
              {
                question: "What happens to sessionStorage when the browser is closed?",
                options: ["Data is preserved", "Data is cleared", "Data is encrypted", "Data is moved to localStorage"],
                correctAnswer: 1,
                explanation: "sessionStorage is cleared when the browser tab or window is closed. It only persists within the current session."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-jquery': {
      id: 'advjs-jquery',
      title: 'jQuery Introduction',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">jQuery Fundamentals</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal, event handling, and animation much simpler.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Why jQuery?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Simple and concise syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Powerful DOM manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Built-in AJAX support</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">jQuery vs Vanilla JS</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                  <p className="font-bold text-blue-600 mb-2">Vanilla JavaScript</p>
                  <code className="text-xs">document.querySelector('.box')</code><br />
                  <code className="text-xs">element.style.color = 'red'</code><br />
                  <code className="text-xs">element.addEventListener()</code>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3">
                  <p className="font-bold text-purple-600 mb-2">jQuery</p>
                  <code className="text-xs">$('.box')</code><br />
                  <code className="text-xs">$element.css('color', 'red')</code><br />
                  <code className="text-xs">$element.on('click', fn)</code>
                </div>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="jQuery Demo"
            language="javascript"
            initialCode={`// Wait for DOM ready
$(document).ready(function() {
    // Code here runs after DOM loads
});

// Shorthand
$(function() {
    // Shorthand syntax
});

// Selecting Elements
$('#myId');           // ID selector
$('.myClass');        // Class selector
$('div');             // Tag selector
$('div.myClass');     // Combined
$('ul li:first');     // Pseudo-selectors

// Traversing
$('#list').find('li');        // All descendants
$('#list').children('li');    // Direct children
$('#item').parent();          // Parent
$('#item').siblings();        // Siblings
$('#item').next();            // Next sibling
$('#item').prev();            // Previous sibling

// DOM Manipulation
$('#box').text('New text');
$('#box').html('<strong>HTML</strong>');
$('#box').val();                    // Form value
$('#box').attr('class', 'active'); // Attributes
$('#box').css('color', 'red');
$('#box').addClass('highlight');
$('#box').removeClass('highlight');
$('#box').toggleClass('highlight');

// Creating Elements
const $newDiv = $('<div>').text('Hello').addClass('box');
$('body').append($newDiv);

// Animation
$('#box').show();
$('#box').hide();
$('#box').toggle();
$('#box').fadeIn(300);
$('#box').fadeOut(300);
$('#box').slideUp(300);
$('#box').slideDown(300);

// Event Handling
$('#btn').click(function() {
    alert('Clicked!');
});

$('#btn').on('click', function() {
    console.log('Handler 1');
});

$('#btn').on('click', function() {
    console.log('Handler 2');
});

// Event Delegation
$('ul').on('click', 'li', function() {
    $(this).toggleClass('active');
});

// AJAX
$.ajax({
    url: '/api/data',
    method: 'GET',
    success: function(response) {
        console.log(response);
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
});

// Shorthand AJAX
$.get('/api/data', function(response) {
    console.log(response);
});

$.post('/api/submit', { name: 'John' }, function(response) {
    console.log(response);
});`}
          />

          <Quiz
            questions={[
              {
                question: "Which is the correct jQuery syntax to hide all elements with the class 'demo'?",
                options: ["$('.demo').hide()", "$('#demo').hide()", "$('demo').hide()", "hide('.demo')"],
                correctAnswer: 0,
                explanation: "In jQuery, $() is used to select elements. $('.demo') selects all elements with class 'demo'."
              },
              {
                question: "What does $(document).ready() do?",
                options: ["Loads external scripts", "Ensures DOM is fully loaded before running code", "Creates a new document", "Saves the document state"],
                correctAnswer: 1,
                explanation: "$(document).ready() waits until the DOM is fully loaded before executing the code inside, preventing errors from missing elements."
              }
            ]}
          />
        </div>
      )
    },

    'advjs-ajax': {
      id: 'advjs-ajax',
      title: 'AJAX and Fetch API',
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Asynchronous JavaScript</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AJAX (Asynchronous JavaScript and XML) allows web pages to communicate with servers without reloading. The Fetch API is the modern way to make HTTP requests.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Modern Fetch API</h4>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                <p className="text-green-600">fetch(url)</p>
                <p className="text-green-600">.then(response {'=>'} response.json())</p>
                <p className="text-green-600">.then(data {'=>'} console.log(data))</p>
                <p className="text-green-600">.catch(error {'=>'} console.error(error));</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Async/Await</h4>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6">
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                async/await makes asynchronous code look and behave like synchronous code. It's built on top of Promises.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                <p className="text-purple-600">async function fetchData() {'{'}</p>
                <p className="ml-4 text-blue-600">const response = await fetch(url);</p>
                <p className="ml-4 text-blue-600">const data = await response.json();</p>
                <p className="ml-4 text-purple-600">return data;</p>
                <p className="text-purple-600">{'}'}</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Fetch API Demo"
            language="javascript"
            initialCode={`// Basic GET Request
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST Request with JSON
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token123'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        const newUser = await response.json();
        console.log('Created:', newUser);
        return newUser;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Using the function
createUser({ name: 'John', email: 'john@example.com' });

// Working with Headers
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer token123');

// Request Object
const request = new Request('https://api.example.com/data', {
    method: 'GET',
    headers: headers,
    cache: 'no-cache'
});

// Handle different response types
async function handleResponse(response) {
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
        return await response.json();
    } else if (contentType.includes('text/html')) {
        return await response.text();
    } else if (contentType.includes('image/')) {
        return await response.blob();
    }

    throw new Error('Unknown content type');
}

// Multiple simultaneous requests
Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
});

// Upload File
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });

    return await response.json();
}

// Retry logic
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return response;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
}`}
          />

          <Exercise
            question="Create an async function that fetches data from a JSON placeholder API (https://jsonplaceholder.typicode.com/posts/1) and returns the post title."
            hint="Use fetch() to get the data, then .json() to parse it. Use async/await for cleaner syntax. Access the title property from the response."
            solution={`async function getPostTitle() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const post = await response.json();
        return post.title;
    } catch (error) {
        console.error('Failed to fetch post:', error);
        return null;
    }
}

// Or with .then()
function getPostTitle() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post => post.title)
        .catch(error => {
            console.error('Failed to fetch post:', error);
            return null;
        });
}`}
          />
        </div>
      )
    },

    'advjs-exercises': {
      id: 'advjs-exercises',
      title: 'Practical Project',
      icon: <Code2 className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Build an Interactive To-Do App</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Let's put everything together! Build a fully functional to-do application using DOM manipulation, events, and localStorage.
            </p>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Features to Implement</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Add new todos with input field</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Mark todos as complete/incomplete</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Delete todos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Filter by all/active/completed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Persist data to localStorage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Show count of remaining items</span>
                </li>
              </ul>
            </div>
          </div>

          <InteractiveCodeEditor
            title="To-Do App Project"
            language="javascript"
            initialCode={`// HTML Structure
// <div id="app">
//   <h1>My To-Do List</h1>
//   <input type="text" id="todoInput" placeholder="Add a new todo...">
//   <button id="addBtn">Add</button>
//   <ul id="todoList"></ul>
//   <div id="filters">
//     <button data-filter="all">All</button>
//     <button data-filter="active">Active</button>
//     <button data-filter="completed">Completed</button>
//   </div>
//   <p id="count">0 items left</p>
// </div>

// State
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// DOM Elements
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
const count = document.getElementById('count');

// Save to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos
function render() {
    const filtered = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });

    list.innerHTML = filtered.map(todo => \`
        <li class="\${todo.completed ? 'completed' : ''}">
            <input type="checkbox"
                   \${todo.completed ? 'checked' : ''}
                   data-id="\${todo.id}">
            <span>\${todo.text}</span>
            <button data-delete="\${todo.id}">X</button>
        </li>
    \`).join('');

    updateCount();
}

// Update count
function updateCount() {
    const remaining = todos.filter(t => !t.completed).length;
    count.textContent = \`\${remaining} \${remaining === 1 ? 'item' : 'items'} left\`;
}

// Add todo
function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    input.value = '';
    saveTodos();
    render();
}

// Toggle todo
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo();
});

list.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id || e.target.dataset.delete);
    if (e.target.type === 'checkbox') toggleTodo(id);
    if (e.target.dataset.delete !== undefined) deleteTodo(id);
});

document.querySelectorAll('#filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        document.querySelectorAll('#filters button')
            .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    });
});

// Initial render
render();`}
          />
        </div>
      )
    }
  };

  const topicList = Object.values(topics);

  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Chapter 5: Advanced JavaScript & jQuery</h1>
            <p className="text-white/80">Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm opacity-80">Topics</p>
            <p className="font-bold">{topicList.length}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm opacity-80">Exercises</p>
            <p className="font-bold">{topicList.filter(t => t.exercise).length}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-sm opacity-80">Quizzes</p>
            <p className="font-bold">{topicList.filter(t => t.quiz).length}</p>
          </div>
        </div>
      </div>

      {/* Topics Accordion */}
      <div className="space-y-4">
        {topicList.map((topic, index) => {
          const isExpanded = expandedTopic === topic.id;
          const isCompleted = progress[`chapter5-${topic.id}`];

          return (
            <div
              key={topic.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                isExpanded ? 'border-purple-500' : 'border-transparent hover:border-gray-200 dark:border-gray-700'
              }`}
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
                  }`}>
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : <span className="font-bold">{index + 1}</span>}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800 dark:text-white">{topic.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Click to {isExpanded ? 'collapse' : 'expand'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {topic.exercise && <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-xs rounded-lg">Exercise</span>}
                  {topic.quiz && <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg">Quiz</span>}
                  {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700">
                  {topic.content}
                  {topic.exercise && <div className="mt-6">{topic.exercise}</div>}
                  {topic.quiz && <div className="mt-6"><Quiz questions={topic.quiz.questions} /></div>}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    {!isCompleted && (
                      <button onClick={() => markComplete(topic.id)} className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors">
                        <CheckCircle className="w-5 h-5" /> Mark as Complete
                      </button>
                    )}
                    {isCompleted && <span className="flex items-center gap-2 text-green-600 font-medium"><CheckCircle className="w-5 h-5" /> Completed</span>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
