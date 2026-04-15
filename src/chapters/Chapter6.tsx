import { useState } from 'react';
import { Server, Terminal, Database, FileCode, Clock, Calculator, FunctionSquare, CheckCircle, ChevronRight, ChevronDown, Code2, BookOpen, Variable, GitBranch, Repeat, Grid3X3, FileUp, Cookie, Network, HardDrive, Calendar } from 'lucide-react';
import InteractiveCodeEditor from '../components/InteractiveCodeEditor';
import VisualDemo from '../components/VisualDemo';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

interface Chapter6Props {
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

export default function Chapter6({ progress, updateProgress }: Chapter6Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('php-intro');

  const markComplete = (topicId: string) => {
    updateProgress('chapter6', topicId, true);
  };

  const topics: Record<string, Topic> = {
    'php-intro': {
      id: 'php-intro',
      title: 'Introduction to PHP',
      icon: <Server className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What is PHP?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>PHP (PHP: Hypertext Preprocessor)</strong> is a server-side scripting language designed specifically for web development. Unlike JavaScript which runs in the browser, PHP executes on the server and sends the result to the client.
            </p>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Why Learn PHP?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Powerful server-side capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Seamless database integration (MySQL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>60% of all websites use PHP (WordPress, Facebook, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Easy to learn and deploy</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">How PHP Works</h4>
            <VisualDemo
              type="diagram"
              title="Client-Server Architecture"
              description="See how PHP processes requests on the server"
              content={
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 text-center flex-1">
                      <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">💻</span>
                      </div>
                      <p className="font-bold text-blue-800 dark:text-blue-200">Client Browser</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">HTML/CSS/JavaScript</p>
                    </div>
                    <div className="text-3xl text-gray-400">→</div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4 text-center flex-1">
                      <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">🌐</span>
                      </div>
                      <p className="font-bold text-purple-800 dark:text-purple-200">Web Server</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400">Apache/Nginx</p>
                    </div>
                    <div className="text-3xl text-gray-400">→</div>
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center flex-1">
                      <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">🐘</span>
                      </div>
                      <p className="font-bold text-green-800 dark:text-green-200">PHP Engine</p>
                      <p className="text-xs text-green-600 dark:text-green-400">Server-side Code</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-orange-100 dark:bg-orange-900/30 rounded-xl p-4 text-center">
                      <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-2xl">🗄️</span>
                      </div>
                      <p className="font-bold text-orange-800 dark:text-orange-200">MySQL Database</p>
                    </div>
                  </div>
                </div>
              }
            />

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6">Basic PHP Syntax</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <p className="text-purple-600">{'<?php'}</p>
              <p className="text-green-600">// PHP code goes here</p>
              <p className="text-purple-600">echo <span className="text-orange-500">"Hello World!"</span>;</p>
              <p className="text-purple-600">{'?>'}</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Your First PHP Script"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .code-block {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
        }
        .output {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2196f3;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>PHP Basics</h1>

    <div class="code-block">
        <strong>PHP Code:</strong>
        <pre>&lt;?php
echo "Hello, World!";
$name = "Student";
echo "Welcome, " . $name;
?&gt;</pre>
    </div>

    <div class="output">
        <strong>Output:</strong>
        <p>Note: PHP runs on the server. In a real server environment, this would output the result.</p>
        <p>Hello, World! Welcome, Student</p>
    </div>

    <h3>Key PHP Concepts</h3>
    <ul>
        <li>PHP code is enclosed in &lt;?php and ?&gt; tags</li>
        <li>Statements end with semicolon (;)</li>
        <li>Variables start with $ sign</li>
        <li>Strings can be joined with . operator</li>
    </ul>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What is the correct PHP opening tag?",
                options: ["<php>", "<?php", "<script php>", "PHP"],
                correctAnswer: 1,
                explanation: "The correct PHP opening tag is <?php. PHP code is enclosed between <?php and ?> tags."
              },
              {
                question: "What symbol is used to define variables in PHP?",
                options: ["@", "$", "#", "VAR"],
                correctAnswer: 1,
                explanation: "Variables in PHP are prefixed with a dollar sign ($), like $variableName."
              },
              {
                question: "Where does PHP code execute?",
                options: ["In the user's browser", "On the web server", "On the client computer", "In the database"],
                correctAnswer: 1,
                explanation: "PHP is a server-side language, meaning the code executes on the web server before sending results to the browser."
              }
            ]}
          />

          <Exercise
            question="Create a PHP script that declares variables of different data types (string, integer, float, boolean) and displays each one. Use echo to output the values."
            hint="Use $ to declare variables, and remember PHP is loosely typed - you don't need to specify types"
            solution={`<?php
$name = "Web Developer";
echo "Name: " . $name . "<br>";

$age = 25;
echo "Age: " . $age . "<br>";

$price = 19.99;
echo "Price: $" . $price . "<br>";

$is_student = true;
echo "Is Student: " . ($is_student ? "Yes" : "No") . "<br>";

echo "<br>Type checking:<br>";
echo gettype($name) . "<br>";
echo gettype($age) . "<br>";
echo gettype($price) . "<br>";
echo gettype($is_student) . "<br>";
?>`}
            validationCode={`const code = {answer}.toLowerCase();
const hasPhpTag = code.includes('<?php') || code.includes('php');
const hasDollar = code.includes('$');
const hasEcho = code.includes('echo');
const hasString = code.includes('"') || code.includes("'");
const hasInteger = /\d+/.test({answer}) && !code.includes('.');
const hasFloat = code.includes('.') && /\d/.test({answer});
const hasBoolean = code.includes('true') || code.includes('false');
return hasPhpTag && hasDollar && hasEcho && hasString && hasInteger && hasFloat && hasBoolean;`}
          />
        </div>
      )
    },

    'php-variables': {
      id: 'php-variables',
      title: 'Variables and Data Types',
      icon: <Variable className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Variables</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              In PHP, variables are represented by a dollar sign <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">$</code> followed by the variable name. PHP is a loosely typed language - you don't need to declare variable types.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Data Types in PHP</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { type: 'String', example: '"Hello"', color: 'green' },
                { type: 'Integer', example: '42', color: 'blue' },
                { type: 'Float', example: '3.14', color: 'purple' },
                { type: 'Boolean', example: 'true / false', color: 'orange' },
                { type: 'Array', example: '[1, 2, 3]', color: 'red' },
                { type: 'NULL', example: 'null', color: 'gray' }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800 rounded-xl p-4`}>
                  <p className={`font-bold text-${item.color}-800 dark:text-${item.color}-200 mb-1`}>{item.type}</p>
                  <code className="text-sm">{item.example}</code>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Variable Naming Rules</h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Variables must start with <code>$</code> followed by letter or underscore</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Can only contain alphanumeric characters and underscores (A-z, 0-9, _)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Variable names are case-sensitive (<code>$name</code> ≠ <code>$Name</code>)</span>
                </li>
              </ul>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Variables Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Variables</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 10px 0; }
        .output { background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 10px; }
        h2 { color: #2e7d32; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Variables Examples</h2>

    <div class="demo">
        <h3>String Variables</h3>
        <p><code>&lt;?php $name = "WebDev"; $greeting = "Hello"; ?&gt;</code></p>
        <p><strong>Result:</strong> Variables store text values</p>
    </div>

    <div class="demo">
        <h3>Number Variables</h3>
        <p><code>&lt;?php $age = 25; $price = 99.99; ?&gt;</code></p>
        <p><strong>Result:</strong> Can store integers (25) and floats (99.99)</p>
    </div>

    <div class="demo">
        <h3>Boolean Variables</h3>
        <p><code>&lt;?php $isActive = true; $isComplete = false; ?&gt;</code></p>
        <p><strong>Result:</strong> true = 1, false = "" (empty)</p>
    </div>

    <div class="demo">
        <h3>Variable Concatenation</h3>
        <p><code>&lt;?php echo "Hello " . "World"; ?&gt;</code></p>
        <p><strong>Result:</strong> Use . to join strings together</p>
    </div>

    <div class="demo">
        <h3>Variable Interpolation</h3>
        <p><code>&lt;?php $item = "PHP"; echo "I love $item"; ?&gt;</code></p>
        <p><strong>Result:</strong> Variables inside " " are replaced</p>
    </div>

    <div class="output">
        <strong>Summary:</strong>
        <ul>
            <li>Variables start with $</li>
            <li>No need to declare types</li>
            <li>Use . for string concatenation</li>
            <li>Use " " for variable interpolation</li>
        </ul>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which is the correct way to declare a variable in PHP?",
                options: ["var name = 'John'", "let name = 'John'", "$name = 'John'", "int name = 5"],
                correctAnswer: 2,
                explanation: "PHP variables start with the $ symbol, followed by the variable name."
              },
              {
                question: "How do you concatenate two strings in PHP?",
                options: ["'Hello' + 'World'", "'Hello' . 'World'", "'Hello' & 'World'", "'Hello' :: 'World'"],
                correctAnswer: 1,
                explanation: "PHP uses the dot (.) operator for string concatenation."
              }
            ]}
          />

          <Exercise
            question="Create a PHP script that demonstrates variable usage with all basic data types. Include:\n1. A string variable with your name\n2. An integer variable with your age\n3. A float variable with a product price\n4. A boolean variable indicating if you're a student\n5. Output all variables using echo, showing both the value and its type using gettype()"
            hint="Use gettype() function to check and display the data type of each variable"
            solution={`<?php
// String variable
$name = "Ahmed Khan";
echo "Name: " . $name . " (Type: " . gettype($name) . ")<br>";

// Integer variable
$age = 28;
echo "Age: " . $age . " (Type: " . gettype($age) . ")<br>";

// Float variable
$price = 49.99;
echo "Price: $" . $price . " (Type: " . gettype($price) . ")<br>";

// Boolean variable
$is_student = true;
echo "Student Status: " . ($is_student ? "Yes" : "No") . " (Type: " . gettype($is_student) . ")<br>";

// Using variable interpolation
echo "<br>Using interpolation: I am $name and I am $age years old.<br>";

// Changing variable type (PHP is loosely typed)
$price = "Fifty dollars";
echo "Price changed to: " . $price . " (Type: " . gettype($price) . ")<br>";
?>`}
          />
        </div>
      )
    },

    'php-operators': {
      id: 'php-operators',
      title: 'Operators in PHP',
      icon: <Calculator className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Operators</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Operators are used to perform operations on variables and values. PHP supports various types of operators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Arithmetic Operators */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">Arithmetic Operators</h4>
                <div className="space-y-2 font-mono text-sm">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Addition</span>
                    <code className="text-green-600">$a + $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Subtraction</span>
                    <code className="text-green-600">$a - $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Multiplication</span>
                    <code className="text-green-600">$a * $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Division</span>
                    <code className="text-green-600">$a / $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Modulus</span>
                    <code className="text-green-600">$a % $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Exponentiation</span>
                    <code className="text-green-600">$a ** $b</code>
                  </div>
                </div>
              </div>

              {/* Comparison Operators */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">Comparison Operators</h4>
                <div className="space-y-2 font-mono text-sm">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Equal</span>
                    <code className="text-green-600">$a == $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Identical</span>
                    <code className="text-green-600">$a === $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Not Equal</span>
                    <code className="text-green-600">$a != $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Greater Than</span>
                    <code className="text-green-600">$a {'>'} $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Less Than</span>
                    <code className="text-green-600">$a {'<'} $b</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between">
                    <span>Spaceship</span>
                    <code className="text-green-600">$a {'<=>'} $b</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Logical Operators */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Logical Operators</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { op: 'AND', symbol: '&&' },
                  { op: 'OR', symbol: '||' },
                  { op: 'XOR', symbol: 'xor' },
                  { op: 'NOT', symbol: '!' }
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
                    <p className="font-bold text-green-600">{item.op}</p>
                    <code className="text-sm text-gray-600 dark:text-gray-400">{item.symbol}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Operators Practice"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Operators</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 10px 0; }
        .result { background: #e3f2fd; border-left: 4px solid #2196f3; padding: 10px; margin: 5px 0; }
        code { background: #fff3e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Operators Examples</h2>

    <div class="box">
        <h3>Arithmetic Operators</h3>
        <p><code>$a = 10; $b = 3;</code></p>
        <div class="result">
            <strong>Addition:</strong> $a + $b = 13<br>
            <strong>Subtraction:</strong> $a - $b = 7<br>
            <strong>Multiplication:</strong> $a * $b = 30<br>
            <strong>Division:</strong> $a / $b = 3.33<br>
            <strong>Modulus:</strong> $a % $b = 1<br>
            <strong>Power:</strong> $a ** $b = 1000
        </div>
    </div>

    <div class="box">
        <h3>Comparison Operators</h3>
        <p><code>$x = 5; $y = "5"; $z = 10;</code></p>
        <div class="result">
            <strong>== vs ===:</strong><br>
            $x == $y is TRUE (same value)<br>
            $x === $y is FALSE (different types)<br>
            <br>
            <strong>Spaceship Operator:</strong><br>
            $x <=> $z = -1 (left is smaller)<br>
            $z <=> $x = 1 (left is larger)
        </div>
    </div>

    <div class="box">
        <h3>Logical Operators</h3>
        <p><code>$a = true; $b = false;</code></p>
        <div class="result">
            <strong>$a && $b =</strong> false (AND)<br>
            <strong>$a || $b =</strong> true (OR)<br>
            <strong>$a xor $b =</strong> true (XOR - one true)<br>
            <strong>!$a =</strong> false (NOT)
        </div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Create a PHP calculator using operators. Take two numbers ($a = 15, $b = 4) and perform all arithmetic operations (addition, subtraction, multiplication, division, modulus, and power). Display the results clearly."
            hint="Use arithmetic operators: +, -, *, /, %, and ** for power"
            solution={`<?php
$a = 15;
$b = 4;

echo "Calculator Demo:<br>";
echo "================<br><br>";
echo "Numbers: $a and $b<br><br>";

echo "Addition: $a + $b = " . ($a + $b) . "<br>";
echo "Subtraction: $a - $b = " . ($a - $b) . "<br>";
echo "Multiplication: $a * $b = " . ($a * $b) . "<br>";
echo "Division: $a / $b = " . ($a / $b) . "<br>";
echo "Modulus: $a % $b = " . ($a % $b) . "<br>";
echo "Power: $a ** $b = " . ($a ** $b) . "<br><br>";

// Comparison example
echo "Comparison:<br>";
echo "15 == '15': " . (15 == '15' ? 'true' : 'false') . "<br>";
echo "15 === '15': " . (15 === '15' ? 'true' : 'false') . "<br>";
echo "15 > 4: " . (15 > 4 ? 'true' : 'false') . "<br>";
echo "Spaceship (15 <=> 4): " . (15 <=> 4) . "<br>";
?>`}
          />
        </div>
      )
    },

    'php-conditionals': {
      id: 'php-conditionals',
      title: 'Conditional Statements',
      icon: <GitBranch className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Conditionals</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conditional statements allow you to execute code based on certain conditions. PHP provides several conditional structures.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// if statement</p>
              <p className="text-green-600">if ($score {'>='} 90) {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"Excellent!"</span>;</p>
              <p className="text-green-600">{'}'}</p>
              <br />
              <p className="text-purple-600">// if...else statement</p>
              <p className="text-green-600">if ($age {'>='} 18) {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"Adult"</span>;</p>
              <p className="text-green-600">{'}'} else {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"Minor"</span>;</p>
              <p className="text-green-600">{'}'}</p>
              <br />
              <p className="text-purple-600">// elseif</p>
              <p className="text-green-600">if ($grade {'>='} 90) {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"A"</span>;</p>
              <p className="text-green-600">{'}'} elseif ($grade {'>='} 80) {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"B"</span>;</p>
              <p className="text-green-600">{'}'} else {'{'}</p>
              <p className="ml-4 text-blue-600">echo <span className="text-orange-500">"C"</span>;</p>
              <p className="text-green-600">{'}'}</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Switch Statement</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <p className="text-green-600">switch ($day) {'{'}</p>
              <p className="ml-4 text-purple-600">case <span className="text-orange-500">"Monday"</span>:</p>
              <p className="ml-8 text-blue-600">echo <span className="text-orange-500">"Start of work week"</span>;</p>
              <p className="ml-8 text-green-600">break;</p>
              <p className="ml-4 text-purple-600">case <span className="text-orange-500">"Friday"</span>:</p>
              <p className="ml-8 text-blue-600">echo <span className="text-orange-500">"End of work week"</span>;</p>
              <p className="ml-8 text-green-600">break;</p>
              <p className="ml-4 text-purple-600">default:</p>
              <p className="ml-8 text-blue-600">echo <span className="text-orange-500">"Regular day"</span>;</p>
              <p className="text-green-600">{'}'}</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Conditional Statements Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Conditionals</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e8f5e9; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Conditional Statements</h2>

    <div class="demo">
        <h3>Grade Calculator Example</h3>
        <p><code>$score = 85;</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            $score = 85<br>
            if ($score >= 90): "A" ✗<br>
            elseif ($score >= 80): "B" ✓ → You got a B!
        </div>
    </div>

    <div class="demo">
        <h3>Age Checker</h3>
        <p><code>$age = 17;</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            if ($age >= 18): "You can vote" ✗<br>
            else: "You are too young to vote" ✓
        </div>
    </div>

    <div class="demo">
        <h3>Switch Statement - Day Type</h3>
        <p><code>$day = "Saturday";</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            switch ($day) checks each case...<br>
            case "Saturday": → Weekend! 🎉
        </div>
    </div>

    <div class="demo">
        <h3>Ternary Operator</h3>
        <p><code>$status = ($age >= 18) ? "Adult" : "Minor";</code></p>
        <div class="output">
            <strong>Shorthand syntax:</strong><br>
            Shorthand for if...else on one line!<br>
            $status = (condition) ? value_if_true : value_if_false;
        </div>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which operator is used for strict equality (checks value AND type)?",
                options: ["=", "==", "===", "!=="],
                correctAnswer: 2,
                explanation: "=== is the identical operator that checks both value and type."
              },
              {
                question: "What is the ternary operator in PHP?",
                options: ["&&", "?:", "??", "||"],
                correctAnswer: 1,
                explanation: "The ternary operator is ?: which acts as a shorthand if-else statement."
              }
            ]}
          />
        </div>
      )
    },

    'php-loops': {
      id: 'php-loops',
      title: 'Loop Statements',
      icon: <Repeat className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Loops</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Loops allow you to execute a block of code multiple times. PHP supports several types of loops.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { name: 'while', desc: 'Loops while condition is true', icon: '🔄' },
                { name: 'do...while', desc: 'Executes once, then loops', icon: '⚡' },
                { name: 'for', desc: 'Known number of iterations', icon: '🔢' },
                { name: 'foreach', desc: 'Iterates over arrays', icon: '📦' }
              ].map((loop, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-2xl">{loop.icon}</span>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{loop.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{loop.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Loop Syntax</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-purple-600">// while loop</p>
                <p className="text-green-600">$i = 1;</p>
                <p className="text-green-600">while ($i {'<='} 5) {'{'}</p>
                <p className="ml-4 text-blue-600">echo $i;</p>
                <p className="ml-4 text-green-600">$i++;</p>
                <p className="text-green-600">{'}'}</p>
              </div>
              <div>
                <p className="text-purple-600">// for loop</p>
                <p className="text-green-600">for ($i = 0; $i {'<'} 5; $i++) {'{'}</p>
                <p className="ml-4 text-blue-600">echo $i;</p>
                <p className="text-green-600">{'}'}</p>
              </div>
              <div>
                <p className="text-purple-600">// foreach loop</p>
                <p className="text-green-600">$colors = [<span className="text-orange-500">"red"</span>, <span className="text-orange-500">"green"</span>, <span className="text-orange-500">"blue"</span>];</p>
                <p className="text-green-600">foreach ($colors as $color) {'{'}</p>
                <p className="ml-4 text-blue-600">echo $color;</p>
                <p className="text-green-600">{'}'}</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Loops Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Loops</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Loop Examples</h2>

    <div class="demo">
        <h3>For Loop - Counting</h3>
        <p>Code: for ($i = 1; $i <= 5; $i++) {'{ echo $i; }'}</p>
        <div class="output">
            <strong>Output:</strong> 1 2 3 4 5
        </div>
    </div>

    <div class="demo">
        <h3>While Loop - Multiplication Table</h3>
        <p>Code: $i = 1; while ($i <= 5) {'{ echo $i * 2; $i++; }'}</p>
        <div class="output">
            <strong>Output:</strong> 2 4 6 8 10 (2 times table)
        </div>
    </div>

    <div class="demo">
        <h3>Foreach Loop - Arrays</h3>
        <p>Code: $fruits = ["apple", "banana", "orange"];</p>
        <p>foreach ($fruits as $fruit) {'{ echo $fruit; }'}</p>
        <div class="output">
            <strong>Output:</strong> apple, banana, orange
        </div>
    </div>

    <div class="demo">
        <h3>Foreach with Key-Value</h3>
        <p>Code: $person = ["name" => "John", "age" => 25];</p>
        <p>foreach ($person as $key => $value) {'{ echo "$key: $value"; }'}</p>
        <div class="output">
            <strong>Output:</strong> name: John, age: 25
        </div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Create a PHP script that prints the first 10 numbers of the Fibonacci sequence using a for loop."
            hint="The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two. Use a for loop with variables to track the sequence."
            solution="Use two variables to track the previous two numbers, and a for loop to iterate 10 times, printing each number and updating the variables."
          />
        </div>
      )
    },

    'php-arrays': {
      id: 'php-arrays',
      title: 'Arrays in PHP',
      icon: <Grid3X3 className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Arrays</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Arrays are special variables that can hold multiple values at once. PHP supports both indexed and associative arrays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Indexed Arrays</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <p className="text-green-600">$colors = [<span className="text-orange-500">"red"</span>, <span className="text-orange-500">"green"</span>, <span className="text-orange-500">"blue"</span>];</p>
                  <p className="text-gray-500 mt-2">// Index: 0, 1, 2</p>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Associative Arrays</h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                  <p className="text-green-600">$person = [</p>
                  <p className="ml-4 text-purple-600">"name" {'=>'} <span className="text-orange-500">"John"</span>,</p>
                  <p className="ml-4 text-purple-600">"age" {'=>'} <span className="text-blue-500">25</span></p>
                  <p className="text-green-600">];</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Common Array Functions</h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['count()', 'array_push()', 'array_pop()', 'sort()', 'array_search()', 'in_array()', 'array_merge()', 'array_slice()'].map((fn, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-2 text-center">
                    <code className="text-sm text-green-600">{fn}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Arrays Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Arrays</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Arrays Examples</h2>

    <div class="demo">
        <h3>Indexed Array</h3>
        <p><code>$fruits = ["apple", "banana", "orange"];</code></p>
        <div class="output">
            <strong>Access elements:</strong><br>
            $fruits[0] = apple<br>
            $fruits[1] = banana<br>
            $fruits[2] = orange
        </div>
    </div>

    <div class="demo">
        <h3>Associative Array</h3>
        <p><code>$student = ["name" => "Alice", "grade" => "A", "year" => 3];</code></p>
        <div class="output">
            <strong>Access elements:</strong><br>
            $student["name"] = Alice<br>
            $student["grade"] = A<br>
            $student["year"] = 3
        </div>
    </div>

    <div class="demo">
        <h3>Array Functions</h3>
        <p><code>$nums = [3, 1, 4, 1, 5];</code></p>
        <div class="output">
            <strong>count($nums)</strong> = 5 elements<br>
            <strong>sort($nums)</strong> = [1, 1, 3, 4, 5]<br>
            <strong>array_sum($nums)</strong> = 14<br>
            <strong>max($nums)</strong> = 5
        </div>
    </div>

    <div class="demo">
        <h3>Multidimensional Array</h3>
        <p><code>$students = [["name" => "A", "score" => 90], ["name" => "B", "score" => 85]];</code></p>
        <div class="output">
            <strong>Access:</strong><br>
            $students[0]["name"] = A<br>
            $students[1]["score"] = 85
        </div>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "How do you access the second element of an indexed array?",
                options: ["$arr(1)", "$arr{1}", "$arr[1]", "$arr->1"],
                correctAnswer: 2,
                explanation: "Arrays in PHP use square brackets [] for indexing, starting from 0."
              },
              {
                question: "Which creates an associative array?",
                options: ['$arr = [1, 2, 3]', '$arr = ["a", "b"]', '$arr = ["name" => "John", "age" => 25]', '$arr = {1: "a"}'],
                correctAnswer: 2,
                explanation: "Associative arrays use key => value pairs."
              }
            ]}
          />
        </div>
      )
    },

    'php-functions': {
      id: 'php-functions',
      title: 'PHP Functions',
      icon: <FunctionSquare className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Functions in PHP</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Functions are reusable blocks of code that perform a specific task. PHP has built-in functions and allows you to create custom functions.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Creating Functions</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// User-defined function</p>
              <p className="text-green-600">function <span className="text-blue-600">greet</span>($name) {'{'}</p>
              <p className="ml-4 text-blue-600">return <span className="text-orange-500">"Hello, " . $name;</span></p>
              <p className="text-green-600">{'}'}</p>
              <br />
              <p className="text-purple-600">// Function with default parameter</p>
              <p className="text-green-600">function <span className="text-blue-600">add</span>($a, $b = 10) {'{'}</p>
              <p className="ml-4 text-blue-600">return $a + $b;</p>
              <p className="text-green-600">{'}'}</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Built-in PHP Functions</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">String Functions</h5>
                <code className="text-sm text-orange-600">strlen()</code><br />
                <code className="text-sm text-orange-600">str_replace()</code><br />
                <code className="text-sm text-orange-600">strtoupper()</code>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Array Functions</h5>
                <code className="text-sm text-blue-600">count()</code><br />
                <code className="text-sm text-blue-600">sort()</code><br />
                <code className="text-sm text-blue-600">array_sum()</code>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Math Functions</h5>
                <code className="text-sm text-green-600">abs()</code><br />
                <code className="text-sm text-green-600">round()</code><br />
                <code className="text-sm text-green-600">max()</code>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Functions Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Functions</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Functions Examples</h2>

    <div class="demo">
        <h3>Simple Function</h3>
        <p><code>function greet($name) {'{ return "Hello $name!"; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> greet("World")<br>
            <strong>Result:</strong> Hello World!
        </div>
    </div>

    <div class="demo">
        <h3>Function with Return</h3>
        <p><code>function add($a, $b) {'{ return $a + $b; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> add(5, 3)<br>
            <strong>Result:</strong> 8
        </div>
    </div>

    <div class="demo">
        <h3>Built-in String Functions</h3>
        <p><code>$text = "Hello World";</code></p>
        <div class="output">
            <strong>strlen($text)</strong> = 11 characters<br>
            <strong>strtoupper($text)</strong> = HELLO WORLD<br>
            <strong>str_replace("World", "PHP", $text)</strong> = Hello PHP
        </div>
    </div>

    <div class="demo">
        <h3>Default Parameters</h3>
        <p><code>function greet($name, $greeting = "Hello") {'{ return "$greeting $name"; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> greet("John")<br>
            <strong>Result:</strong> Hello John<br><br>
            <strong>Call:</strong> greet("John", "Hi")<br>
            <strong>Result:</strong> Hi John
        </div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Write a PHP function that takes a number as a parameter and returns 'positive', 'negative', or 'zero' based on the number."
            hint="Use conditional statements inside the function. Check if the number is greater than, less than, or equal to zero."
            solution="Create a function with a number parameter and use if-elseif-else to return the appropriate string."
          />
        </div>
      )
    },

    'php-forms': {
      id: 'php-forms',
      title: 'Form Processing',
      icon: <FileCode className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Form Processing</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              PHP is commonly used to process HTML forms. You can use <code>$_GET</code> and <code>$_POST</code> superglobals to access form data.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">GET vs POST</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold text-green-600 mb-2">$_GET</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Data in URL (visible)</li>
                    <li>Bookmarkable</li>
                    <li>Limited data size</li>
                    <li>Use for: Search, filters</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold text-purple-600 mb-2">$_POST</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Data in request body</li>
                    <li>Not visible in URL</li>
                    <li>Larger data capacity</li>
                    <li>Use for: Forms, sensitive data</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Processing Form Data</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <p className="text-purple-600">{'<'}form method="POST" action="process.php"{'>'}</p>
              <p className="text-purple-600">{'<'}input type="text" name="username"{'>'}</p>
              <p className="text-purple-600">{'<'}input type="password" name="password"{'>'}</p>
              <p className="text-purple-600">{'<'}button type="submit"{'>'}Login{'<'}/button{'>'}</p>
              <p className="text-purple-600">{'<'}/form{'>'}</p>
              <br />
              <p className="text-green-600">// In process.php:</p>
              <p className="text-blue-600">$username = $_POST[<span className="text-orange-500">"username"</span>];</p>
              <p className="text-blue-600">$password = $_POST[<span className="text-orange-500">"password"</span>];</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Form Processing Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Form Handling</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-box { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        input { padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px; width: 200px; }
        button { padding: 10px 20px; background: #2196f3; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 15px; }
    </style>
</head>
<body>
    <h2>PHP Form Processing</h2>

    <div class="form-box">
        <h3>Login Form Example</h3>
        <pre>HTML Form:
&lt;form method="POST" action="login.php"&gt;
  &lt;input name="email"&gt;
  &lt;input type="password" name="pass"&gt;
  &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;

PHP (login.php):
$email = $_POST["email"];
$pass = $_POST["pass"];</pre>
    </div>

    <div class="output">
        <strong>Key Concepts:</strong>
        <ul>
            <li>Use method="POST" for sensitive data</li>
            <li>Always sanitize user input</li>
            <li>Use htmlspecialchars() to prevent XSS</li>
            <li>Use password_hash() for passwords</li>
            <li>Validate data server-side too!</li>
        </ul>
    </div>

    <div class="form-box">
        <h3>Form Validation Example</h3>
        <pre>if (empty($_POST["email"])) {'{'}
    $error = "Email is required";
} elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {'{'}
    $error = "Invalid email format";
} else {'{'}
    $success = "Valid email!";
}</pre>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Create a simple contact form in HTML with name, email, and message fields. Then write PHP code to process the form and display the submitted data (with basic validation)."
            hint="Create an HTML form with POST method and a corresponding PHP section that retrieves the data using $_POST and validates that fields are not empty."
            solution="Use htmlspecialchars() to sanitize output, check !empty() for required fields, and filter_var() for email validation."
          />
        </div>
      )
    },

    'php-files': {
      id: 'php-files',
      title: 'File Handling',
      icon: <FileUp className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP File Handling</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              PHP can read from and write to files on the server. This is useful for storing data persistently without a database.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">File Operations</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// Reading a file</p>
              <p className="text-green-600">$content = file_get_contents(<span className="text-orange-500">"data.txt"</span>);</p>
              <br />
              <p className="text-purple-600">// Writing to a file</p>
              <p className="text-green-600">file_put_contents(<span className="text-orange-500">"data.txt"</span>, $data);</p>
              <br />
              <p className="text-purple-600">// Opening a file</p>
              <p className="text-green-600">$file = fopen(<span className="text-orange-500">"data.txt"</span>, <span className="text-orange-500">"r"</span>);</p>
              <p className="text-blue-600">$line = fgets($file);</p>
              <p className="text-green-600">fclose($file);</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">File Modes</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { mode: 'r', desc: 'Read only' },
                { mode: 'w', desc: 'Write (overwrite)' },
                { mode: 'a', desc: 'Append' },
                { mode: 'r+', desc: 'Read & Write' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                  <code className="text-lg text-green-600">{item.mode}</code>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP File Handling Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP File Handling</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP File Operations</h2>

    <div class="demo">
        <h3>Read Entire File</h3>
        <p><code>$content = file_get_contents("file.txt");</code></p>
        <div class="output">
            <strong>Reads:</strong> Entire file contents into a string
        </div>
    </div>

    <div class="demo">
        <h3>Write to File</h3>
        <p><code>file_put_contents("log.txt", $data);</code></p>
        <div class="output">
            <strong>Creates/overwrites:</strong> file with $data content
        </div>
    </div>

    <div class="demo">
        <h3>Append to File</h3>
        <p><code>file_put_contents("log.txt", $data, FILE_APPEND);</code></p>
        <div class="output">
            <strong>Adds:</strong> data to end of existing file
        </div>
    </div>

    <div class="demo">
        <h3>Line-by-Line Reading</h3>
        <pre>$file = fopen("data.txt", "r");
while (($line = fgets($file)) !== false) {'{'}
    echo $line;
{'}'}
fclose($file);</pre>
        <div class="output">
            <strong>Reads:</strong> file line by line in a loop
        </div>
    </div>

    <div class="demo">
        <h3>File Upload Handling</h3>
        <pre>// HTML: &lt;input type="file" name="document"&gt;
// PHP:
if (isset($_FILES["document"])) {'{'}
    $name = $_FILES["document"]["name"];
    move_uploaded_file($_FILES["document"]["tmp_name"], "uploads/$name");
{'}'}</pre>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which function reads entire file contents?",
                options: ["fread()", "file_get_contents()", "read_file()", "get_contents()"],
                correctAnswer: 1,
                explanation: "file_get_contents() reads an entire file into a string."
              },
              {
                question: "What does the 'a' file mode do?",
                options: ["Reads the file", "Overwrites the file", "Appends to the file", "Creates a new file only"],
                correctAnswer: 2,
                explanation: "The 'a' mode opens the file for writing and appends to the end."
              }
            ]}
          />
        </div>
      )
    },

    'php-sessions-cookies': {
      id: 'php-sessions-cookies',
      title: 'Sessions and Cookies',
      icon: <Cookie className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sessions and Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sessions and cookies allow you to store user data across multiple pages. They're essential for user authentication and maintaining state.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Cookies vs Sessions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold text-purple-600 mb-2">Cookies</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Stored in user's browser</li>
                    <li>Smaller data (4KB max)</li>
                    <li>Persists until expiry</li>
                    <li>Less secure (client-side)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold text-green-600 mb-2">Sessions</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Stored on server</li>
                    <li>Larger data capacity</li>
                    <li>Ends when browser closes</li>
                    <li>More secure (server-side)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Syntax</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-purple-600">// Setting a cookie</p>
                <p className="text-green-600">setcookie(</p>
                <p className="ml-4 text-blue-600">"username", <span className="text-orange-500">"John"</span>,</p>
                <p className="ml-4 text-blue-600">time() + 3600  <span className="text-gray-500">// expires in 1 hour</span></p>
                <p className="text-green-600">);</p>
              </div>
              <div>
                <p className="text-purple-600">// Starting a session</p>
                <p className="text-green-600">session_start();</p>
                <p className="text-blue-600">$_SESSION[<span className="text-orange-500">"user"</span>] = <span className="text-orange-500">"John"</span>;</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Sessions and Cookies Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Sessions & Cookies</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Sessions & Cookies</h2>

    <div class="demo">
        <h3>Creating a Cookie</h3>
        <pre>setcookie("theme", "dark", time() + 86400);</pre>
        <div class="output">
            <strong>Creates:</strong> Cookie named "theme" with value "dark"<br>
            <strong>Expires:</strong> 24 hours from now
        </div>
    </div>

    <div class="demo">
        <h3>Reading a Cookie</h3>
        <pre>$theme = $_COOKIE["theme"] ?? "light";</pre>
        <div class="output">
            <strong>Reads:</strong> The "theme" cookie or defaults to "light"
        </div>
    </div>

    <div class="demo">
        <h3>Creating a Session</h3>
        <pre>session_start();
$_SESSION["user_id"] = 123;
$_SESSION["username"] = "student";</pre>
        <div class="output">
            <strong>Creates:</strong> Session variables<br>
            <strong>Access across pages:</strong> until browser closes
        </div>
    </div>

    <div class="demo">
        <h3>Login Example</h3>
        <pre>// login.php
session_start();
if ($valid_user) {'{'}
    $_SESSION["user_id"] = $user_id;
    header("Location: dashboard.php");
{'}'}

// dashboard.php
session_start();
if (!isset($_SESSION["user_id"])) {'{'}
    header("Location: login.php");
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>Logging Out</h3>
        <pre>session_start();
session_destroy();  // Destroys all session data</pre>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Where are session variables stored?",
                options: ["In the user's browser", "On the server", "In a text file", "In a database"],
                correctAnswer: 1,
                explanation: "Sessions are stored on the server, while cookies are stored in the user's browser."
              },
              {
                question: "What function starts a session in PHP?",
                options: ["start_session()", "session_start()", "begin_session()", "init_session()"],
                correctAnswer: 1,
                explanation: "session_start() must be called before using $_SESSION variables."
              }
            ]}
          />
        </div>
      )
    },

    'php-database': {
      id: 'php-database',
      title: 'Database Programming',
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP & MySQL Database</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              PHP can connect to MySQL databases to store and retrieve dynamic data. This is fundamental for building web applications.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Database Connection Steps</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// 1. Create connection</p>
              <p className="text-green-600">$conn = new mysqli($servername, $username, $password, $dbname);</p>
              <br />
              <p className="text-purple-600">// 2. Execute query</p>
              <p className="text-green-600">$result = $conn-&gt;query(<span className="text-orange-500">"SELECT * FROM users"</span>);</p>
              <br />
              <p className="text-purple-600">// 3. Fetch results</p>
              <p className="text-green-600">while ($row = $result-&gt;fetch_assoc()) {'{'}</p>
              <p className="ml-4 text-blue-600">echo $row[<span className="text-orange-500">"name"</span>];</p>
              <p className="text-green-600">{'}'}</p>
              <br />
              <p className="text-purple-600">// 4. Close connection</p>
              <p className="text-green-600">$conn-&gt;close();</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">CRUD Operations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { op: 'CREATE', sql: 'INSERT INTO', color: 'green' },
                { op: 'READ', sql: 'SELECT', color: 'blue' },
                { op: 'UPDATE', sql: 'UPDATE', color: 'orange' },
                { op: 'DELETE', sql: 'DELETE', color: 'red' }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800 rounded-xl p-3`}>
                  <p className={`font-bold text-${item.color}-800 dark:text-${item.color}-200`}>{item.op}</p>
                  <code className="text-xs">{item.sql}</code>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Database Operations"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Database</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP MySQL Operations</h2>

    <div class="demo">
        <h3>Connection</h3>
        <pre>$conn = new mysqli("localhost", "root", "password", "mydb");</pre>
        <div class="output">
            <strong>Establishes:</strong> Connection to MySQL server
        </div>
    </div>

    <div class="demo">
        <h3>INSERT Data</h3>
        <pre>$sql = "INSERT INTO users (name, email) VALUES ('John', 'john@email.com')";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>SELECT Data</h3>
        <pre>$result = $conn->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {'{'}
    echo $row["name"];
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>UPDATE Data</h3>
        <pre>$sql = "UPDATE users SET name='Jane' WHERE id=1";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>DELETE Data</h3>
        <pre>$sql = "DELETE FROM users WHERE id=1";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>Prepared Statements (Secure)</h3>
        <pre>$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();</pre>
        <div class="output">
            <strong>Use prepared statements to prevent SQL injection!</strong>
        </div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Write PHP code to create a connection to a MySQL database, insert a new student record with name and age, then retrieve and display all students."
            hint="Use mysqli_connect() for connection, INSERT INTO and SELECT queries, and fetch_assoc() to retrieve results."
            solution="Create connection, use INSERT INTO to add data, use SELECT * to fetch all records, and loop through results with fetch_assoc()."
          />
        </div>
      )
    },

    'php-date-time': {
      id: 'php-date-time',
      title: 'Date and Time Functions',
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP Date and Time</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              PHP has powerful date and time functions for formatting timestamps, calculating dates, and more.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Common Date Functions</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// Current date/time</p>
              <p className="text-green-600">date(<span className="text-orange-500">"Y-m-d H:i:s"</span>);  <span className="text-gray-500">// 2024-01-15 14:30:00</span></p>
              <br />
              <p className="text-purple-600">// Format options</p>
              <p className="text-blue-600">Y</p>  <span className="text-gray-500">// 2024 (4-digit year)</span>
              <p className="text-blue-600">m</p>  <span className="text-gray-500">// 01-12 (month)</span>
              <p className="text-blue-600">d</p>  <span className="text-gray-500">// 01-31 (day)</span>
              <p className="text-blue-600">H</p>  <span className="text-gray-500">// 00-23 (hour)</span>
              <p className="text-blue-600">i</p>  <span className="text-gray-500">// 00-59 (minutes)</span>
              <p className="text-blue-600">s</p>  <span className="text-gray-500">// 00-59 (seconds)</span>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Date Calculations</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm">
              <p className="text-purple-600">// Adding days</p>
              <p className="text-green-600">$future = date(<span className="text-orange-500">"Y-m-d"</span>, strtotime(<span className="text-orange-500">"+7 days"</span>));</p>
              <br />
              <p className="text-purple-600">// Date difference</p>
              <p className="text-green-600">$diff = date_diff(date_create(<span className="text-orange-500">"2024-01-01"</span>), date_create(<span className="text-orange-500">"2024-01-15"</span>));</p>
              <p className="text-blue-600">echo $diff-&gt;format(<span className="text-orange-500">"%a days"</span>);</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP Date & Time Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Date and Time</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Date Functions</h2>

    <div class="demo">
        <h3>Current Date/Time</h3>
        <p><code>date("Y-m-d H:i:s")</code></p>
        <div class="output">
            <strong>Output:</strong> 2024-01-15 14:30:00<br>
            <strong>Format:</strong> Year-Month-Day Hour:Minute:Second
        </div>
    </div>

    <div class="demo">
        <h3>Custom Formats</h3>
        <p><code>date("l, F j, Y")</code></p>
        <div class="output">
            <strong>Output:</strong> Monday, January 15, 2024<br>
            <strong>Format:</strong> Day, Month Day, Year
        </div>
    </div>

    <div class="demo">
        <h3>Date Arithmetic</h3>
        <pre>// Next week
date("Y-m-d", strtotime("+1 week"));

// Last month
date("Y-m-d", strtotime("-1 month"));

// Specific date
date("Y-m-d", strtotime("2024-12-25"));</pre>
    </div>

    <div class="demo">
        <h3>Timestamp</h3>
        <pre>// Current timestamp
time();  // Returns seconds since 1970

// Convert to timestamp
strtotime("January 15, 2024");</pre>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What does date('Y-m-d') return?",
                options: ["15-01-2024", "2024-01-15", "January 15, 2024", "01/15/2024"],
                correctAnswer: 1,
                explanation: "The format 'Y-m-d' returns year-month-day in that order."
              },
              {
                question: "What function adds time to a date string?",
                options: ["date_add()", "strtotime()", "date_modify()", "strtotime() with +/-"],
                correctAnswer: 3,
                explanation: "strtotime() with expressions like '+7 days' or '-1 month' is commonly used for date arithmetic."
              }
            ]}
          />
        </div>
      )
    },

    'php-oop': {
      id: 'php-oop',
      title: 'PHP Object-Oriented Programming',
      icon: <Network className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">PHP OOP</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              PHP supports Object-Oriented Programming (OOP) with classes, objects, inheritance, and more. OOP helps organize code into reusable components.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Classes and Objects</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-purple-600">// Define a class</p>
              <p className="text-green-600">class <span className="text-blue-600">Student</span> {'{'}</p>
              <p className="ml-4 text-purple-600">public $name;</p>
              <p className="ml-4 text-purple-600">public $grade;</p>
              <br />
              <p className="ml-4 text-purple-600">public function <span className="text-blue-600">__construct</span>($name, $grade) {'{'}</p>
              <p className="ml-8 text-blue-600">$this-&gt;name = $name;</p>
              <p className="ml-8 text-blue-600">$this-&gt;grade = $grade;</p>
              <p className="ml-4 text-purple-600">{'}'}</p>
              <br />
              <p className="ml-4 text-purple-600">public function <span className="text-blue-600">getInfo</span>() {'{'}</p>
              <p className="ml-8 text-blue-600">return <span className="text-orange-500">"$this-&gt;name - Grade: $this-&gt;grade"</span>;</p>
              <p className="ml-4 text-purple-600">{'}'}</p>
              <p className="text-green-600">{'}'}</p>
              <br />
              <p className="text-purple-600">// Create object</p>
              <p className="text-green-600">$student = new <span className="text-blue-600">Student</span>(<span className="text-orange-500">"Alice"</span>, <span className="text-orange-500">"A"</span>);</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">OOP Concepts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { concept: 'Encapsulation', desc: 'Bundling data and methods together' },
                { concept: 'Inheritance', desc: 'Child class inherits from parent' },
                { concept: 'Polymorphism', desc: 'Same method, different behavior' },
                { concept: 'Abstraction', desc: 'Hiding complex implementation' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <p className="font-bold text-purple-600 mb-1">{item.concept}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="PHP OOP Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP OOP</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Object-Oriented Programming</h2>

    <div class="demo">
        <h3>Class Definition</h3>
        <pre>class Student {'{'}
    public $name;
    public $grade;

    function __construct($name, $grade) {'{'}
        $this->name = $name;
        $this->grade = $grade;
    {'}'}
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>Creating Objects</h3>
        <pre>$student1 = new Student("Alice", "A");
$student2 = new Student("Bob", "B");

echo $student1->name;  // Alice</pre>
    </div>

    <div class="demo">
        <h3>Methods in Classes</h3>
        <pre>class Calculator {'{'}
    function add($a, $b) {'{'}
        return $a + $b;
    {'}'}
{'}'}

$calc = new Calculator();
echo $calc->add(5, 3);  // 8</pre>
    </div>

    <div class="demo">
        <h3>Inheritance</h3>
        <pre>class Person {'{'}
    protected $name;
{'}'}

class Student extends Person {'{'}
    public $studentId;

    function getName() {'{'}
        return $this->name;
    {'}'}
{'}'}</pre>
        <div class="output">
            <strong>Student inherits:</strong> $name from Person
        </div>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What is the correct way to create an object of a class named 'Car'?",
                options: ["car = new Car()", "$car = new Car()", "create Car()", "$car = Car->new()"],
                correctAnswer: 1,
                explanation: "In PHP, objects are created using the 'new' keyword followed by the class name, and variables start with $."
              },
              {
                question: "What magic method is called when an object is created?",
                options: ["__init__", "__construct", "__create", "__new"],
                correctAnswer: 1,
                explanation: "__construct is the PHP magic method called when an object is instantiated."
              }
            ]}
          />
        </div>
      )
    },

    'php-exercises': {
      id: 'php-exercises',
      title: 'Practical Exercises',
      icon: <HardDrive className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Chapter 6 Practice</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Let's put everything together! Complete these exercises to practice PHP server-side programming.
            </p>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Exercise Challenges</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Create a student registration form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Implement a login system with sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Build a simple CRUD application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Create a file-based guestbook</span>
                </li>
              </ul>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Build a Simple Counter App"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>PHP Counter Exercise</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
        .counter-box {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
        }
        .count { font-size: 72px; font-weight: bold; }
        button {
            padding: 15px 30px;
            margin: 5px;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover { transform: scale(1.1); }
        .reset { background: #e74c3c; color: white; }
        .increment { background: #2ecc71; color: white; }
        .decrement { background: #3498db; color: white; }
    </style>
</head>
<body>
    <h2 style="text-align: center;">PHP Counter Exercise</h2>

    <div class="counter-box">
        <h3>Visit Counter</h3>
        <p class="count">The count value</p>
        <p>would be stored in</p>
        <p>a file or database</p>
        <div style="margin-top: 20px;">
            <button class="decrement">- 1</button>
            <button class="reset">Reset</button>
            <button class="increment">+ 1</button>
        </div>
    </div>

    <h3 style="margin-top: 30px;">Your Task:</h3>
    <ol>
        <li>Create a PHP script that reads the count from a file</li>
        <li>Add increment/decrement functionality</li>
        <li>Save the updated count back to the file</li>
        <li>Add session tracking to prevent multiple votes</li>
    </ol>
</body>
</html>`}
          />
        </div>
      )
    }
  };

  const topicList = Object.values(topics);

  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Server className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Chapter 6: PHP & Server-Side Programming</h1>
            <p className="text-white/80">Master PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity</p>
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
          const isCompleted = progress[`chapter6-${topic.id}`];

          return (
            <div
              key={topic.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                isExpanded ? 'border-green-500' : 'border-transparent hover:border-gray-200 dark:border-gray-700'
              }`}
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-green-100 dark:bg-green-900/30 text-green-600'
                  }`}>
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : <span className="font-bold">{index + 1}</span>}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800 dark:text-white">{topic.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Click to {isExpanded ? 'collapse' : 'expand'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {topic.exercise && (
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg">
                      Exercise
                    </span>
                  )}
                  {topic.quiz && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg">
                      Quiz
                    </span>
                  )}
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700">
                  {topic.content}

                  {topic.exercise && (
                    <div className="mt-6">
                      {topic.exercise}
                    </div>
                  )}

                  {topic.quiz && (
                    <div className="mt-6">
                      <Quiz questions={topic.quiz.questions} />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    {!isCompleted && (
                      <button
                        onClick={() => markComplete(topic.id)}
                        className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Mark as Complete
                      </button>
                    )}
                    {isCompleted && (
                      <span className="flex items-center gap-2 text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        Completed
                      </span>
                    )}
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
