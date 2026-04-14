import { useState } from 'react';
import { Palette, Box, Layout, Grid, Zap, Play, MousePointer, Layers, Square, Circle, Type, Image, CheckCircle, ChevronRight, ChevronDown, Monitor } from 'lucide-react';
import InteractiveCodeEditor from '../components/InteractiveCodeEditor';
import VisualDemo from '../components/VisualDemo';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

interface Chapter3Props {
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

export default function Chapter3({ progress, updateProgress }: Chapter3Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('css-intro');

  const markComplete = (topicId: string) => {
    updateProgress('chapter3', topicId, true);
  };

  const topics: Record<string, Topic> = {
    'css-intro': {
      id: 'css-intro',
      title: 'Introduction to CSS',
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What is CSS?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>CSS (Cascading Style Sheets)</strong> is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
            </p>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-2">Why Learn CSS?</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Control the visual design of web pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Separate content from presentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Create responsive, mobile-friendly designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Enable animations and interactive effects</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">CSS Syntax</h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-blue-600 dark:text-blue-400">/* Selector */</p>
              <p className="text-purple-600 dark:text-purple-400">h1 <span className="text-gray-500">{'{'}</span></p>
              <p className="ml-4 text-green-600 dark:text-green-400">color: <span className="text-orange-500">blue</span>;</p>
              <p className="ml-4 text-green-600 dark:text-green-400">font-size: <span className="text-orange-500">24px</span>;</p>
              <p className="ml-4 text-green-600 dark:text-green-400">text-align: <span className="text-orange-500">center</span>;</p>
              <p className="text-gray-500">{'}'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { part: 'Selector', desc: 'Points to the HTML element you want to style', color: 'blue' },
                { part: 'Property', desc: 'The attribute you want to change', color: 'green' },
                { part: 'Value', desc: 'The new value for the property', color: 'orange' }
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
                  <p className="font-bold text-blue-800 dark:text-blue-200 mb-2">{item.part}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Your First CSS"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>CSS Basics</title>
    <style>
        /* Change the background color */
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        /* Style the heading */
        h1 {
            color: #333;
            text-align: center;
        }

        /* Style paragraphs */
        p {
            color: #666;
            line-height: 1.6;
            font-size: 18px;
        }

        /* Style with class */
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Welcome to CSS!</h1>
    <p>This is a normal paragraph.</p>
    <p class="highlight">This paragraph has a yellow highlight!</p>
</body>
</html>`}
          />

          <Exercise
            question="Create a CSS rule that styles all paragraph elements with red text color and a font size of 16px."
            hint="Use the p element selector and define properties for color and font-size"
            solution={`p {
    color: red;
    font-size: 16px;
}`}
          />

          <Quiz
            questions={[
              {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Style Software"],
                correctAnswer: 1,
                explanation: "CSS stands for Cascading Style Sheets - it's used to control the presentation and layout of HTML documents."
              },
              {
                question: "Which part of a CSS rule selects the element to style?",
                options: ["Property", "Value", "Selector", "Declaration"],
                correctAnswer: 2,
                explanation: "The selector is the part that points to the HTML element you want to style (e.g., p, .class, #id)."
              },
              {
                question: "How do you include CSS directly in an HTML file?",
                options: ["<css>", "<style>", "<script>", "<link>"],
                correctAnswer: 1,
                explanation: "The <style> tag is used to include CSS directly within an HTML document, typically in the <head> section."
              }
            ]}
          />
        </div>
      )
    },

    'css-selectors': {
      id: 'css-selectors',
      title: 'CSS Selectors',
      icon: <MousePointer className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CSS Selectors</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Selectors</strong> are patterns used to select the element(s) you want to style. CSS selectors can select elements based on their tag name, class, id, attributes, and more.
            </p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Basic Selectors</h4>
            <div className="space-y-3 mb-6">
              {[
                { selector: 'element', example: 'p { }', desc: 'Selects all paragraph elements' },
                { selector: '.class', example: '.highlight { }', desc: 'Selects elements with class="highlight"' },
                { selector: '#id', example: '#header { }', desc: 'Selects the element with id="header"' },
                { selector: '*', example: '* { }', desc: 'Selects all elements' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4">
                  <code className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono">{item.selector}</code>
                  <code className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono">{item.example}</code>
                  <span className="text-gray-600 dark:text-gray-400 flex-1">{item.desc}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Combinators</h4>
            <div className="space-y-3 mb-6">
              {[
                { selector: 'A B', example: 'div p { }', desc: 'Descendant selector - p inside div' },
                { selector: 'A > B', example: 'div > p { }', desc: 'Child selector - direct child of div' },
                { selector: 'A + B', example: 'h1 + p { }', desc: 'Adjacent sibling - p right after h1' },
                { selector: 'A ~ B', example: 'h1 ~ p { }', desc: 'General sibling - all p after h1' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4">
                  <code className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono">{item.selector}</code>
                  <code className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono">{item.example}</code>
                  <span className="text-gray-600 dark:text-gray-400 flex-1">{item.desc}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Pseudo-class Selectors</h4>
            <div className="space-y-3 mb-6">
              {[
                { selector: ':hover', desc: 'Mouse over element' },
                { selector: ':focus', desc: 'Element has focus' },
                { selector: ':first-child', desc: 'First child of parent' },
                { selector: ':last-child', desc: 'Last child of parent' },
                { selector: ':nth-child(n)', desc: 'Nth child of parent' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4">
                  <code className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-mono">{item.selector}</code>
                  <span className="text-gray-600 dark:text-gray-400 flex-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Practice CSS Selectors"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        /* Element selector */
        p { color: blue; }

        /* Class selector */
        .highlight { background: yellow; }

        /* ID selector */
        #special { border: 2px solid red; }

        /* Descendant selector */
        .container p { font-weight: bold; }

        /* Pseudo-class */
        a:hover { color: green; text-decoration: underline; }

        /* First child */
        li:first-child { color: purple; font-weight: bold; }
    </style>
</head>
<body>
    <h1 id="special">CSS Selectors Practice</h1>
    <div class="container">
        <p>I'm bold because I'm inside .container</p>
        <p>Me too!</p>
    </div>
    <p>I'm just a normal paragraph</p>
    <p class="highlight">I'm highlighted!</p>
    <a href="#">Hover over me!</a>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which selector targets an element with id='main'?",
                options: [".main", "#main", "element.main", "*main"],
                correctAnswer: 1,
                explanation: "The # symbol is used for ID selectors in CSS."
              },
              {
                question: "What does the descendant selector (A B) do?",
                options: [
                  "Selects B that is a direct child of A",
                  "Selects B that is anywhere inside A",
                  "Selects A and B",
                  "Selects A only if it has B"
                ],
                correctAnswer: 1,
                explanation: "The descendant selector (space) selects all B elements that are nested anywhere inside A."
              }
            ]}
          />

          <Exercise
            question="Write CSS selectors for the following: 1) All paragraphs inside a div, 2) All buttons with class 'primary', 3) The element with id='submit', 4) The first child of any list"
            hint="Use space for descendant, dot for class, hash for ID, and :first-child pseudo-class"
            solution={`/* 1) All paragraphs inside a div */
div p {
    color: blue;
}

/* 2) All buttons with class 'primary' */
button.primary {
    background-color: #007bff;
    color: white;
}

/* 3) The element with id='submit' */
#submit {
    font-weight: bold;
    padding: 10px 20px;
}

/* 4) The first child of any list */
li:first-child {
    font-weight: bold;
    color: red;
}`}
          />

          <Exercise
            question="Create CSS rules using pseudo-classes to: 1) Style links when hovered, 2) Style the first paragraph of an article, 3) Style every other row (zebra striping) in a table, 4) Style form inputs when focused"
            hint="Use :hover, :first-of-type, :nth-child(even), and :focus pseudo-classes"
            solution={`/* 1) Links on hover */
a:hover {
    color: #ff6600;
    text-decoration: underline;
}

/* 2) First paragraph of an article */
article p:first-of-type {
    font-size: 1.2em;
    font-weight: bold;
}

/* 3) Zebra striping in tables */
tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* 4) Form inputs when focused */
input:focus, textarea:focus, select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
}`}
          />
        </div>
      )
    },

    'css-box-model': {
      id: 'css-box-model',
      title: 'CSS Box Model',
      icon: <Box className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Understanding the Box Model</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Every element in HTML is treated as a box. The <strong>CSS Box Model</strong> consists of: content, padding, border, and margin. These properties control the space around and within an element.
            </p>

            <VisualDemo
              type="diagram"
              title="CSS Box Model Visualization"
              description="See how each part of the box model works"
              content={
                <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-8 max-w-md mx-auto">
                  <p className="text-center text-sm text-yellow-700 dark:text-yellow-300 mb-4">Margin (outside)</p>
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-1">
                    <p className="text-center text-sm text-orange-700 dark:text-orange-300">Border</p>
                    <div className="bg-green-100 dark:bg-green-900/30 rounded p-1">
                      <p className="text-center text-sm text-green-700 dark:text-green-300">Padding</p>
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded p-6 text-center">
                        <p className="font-bold text-blue-800 dark:text-blue-200">Content</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">width × height</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6">Box Model Properties</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { prop: 'content', desc: 'The actual content area', example: 'text, images, etc.' },
                { prop: 'padding', desc: 'Space inside the border', example: 'padding: 20px;' },
                { prop: 'border', desc: 'Line around padding', example: 'border: 2px solid black;' },
                { prop: 'margin', desc: 'Space outside the border', example: 'margin: 10px auto;' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <p className="font-bold text-purple-600 dark:text-purple-400 mb-1">{item.prop}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                  <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{item.example}</code>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Box-Sizing: Border-Box</h4>
              <p className="text-blue-700 dark:text-blue-300 mb-3">
                By default, width/height only applies to content. Use <code>box-sizing: border-box</code> to include padding and border in the total width/height!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold mb-2">Without border-box:</p>
                  <p className="text-sm text-gray-600">width: 100px + 20px padding + 4px border = 124px total</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-bold mb-2">With border-box:</p>
                  <p className="text-sm text-gray-600">width: 100px (includes padding + border) = 100px total</p>
                </div>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Box Model Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 200px;
            height: 100px;
            background-color: #3498db;
            color: white;
            padding: 20px;
            border: 5px solid #2c3e50;
            margin: 30px;
        }

        .box-content {
            box-sizing: border-box;
            width: 200px;
            height: 100px;
            background-color: #e74c3c;
            color: white;
            padding: 20px;
            border: 5px solid #c0392b;
            margin: 30px;
        }
    </style>
</head>
<body>
    <h3>Without box-sizing: border-box</h3>
    <div class="box">I'm a box with content + padding + border</div>

    <h3>With box-sizing: border-box</h3>
    <div class="box-content">I'm the same size but border-box!</div>

    <p>Notice: The red box (border-box) stays at exactly 200px wide,
    while the blue box is actually wider due to padding and border.</p>
</body>
</html>`}
          />

          <Exercise
            question="Create a div with: total width of exactly 200px (using border-box), 15px padding, 3px solid blue border, and 20px margin on all sides."
            hint="Use box-sizing: border-box, padding, border, and margin properties"
            solution={`.box {
    box-sizing: border-box;
    width: 200px;
    padding: 15px;
    border: 3px solid blue;
    margin: 20px;
}`}
          />

          <Quiz
            questions={[
              {
                question: "What does margin control?",
                options: [
                  "Space inside the element",
                  "Space between elements",
                  "The border width",
                  "The content size"
                ],
                correctAnswer: 1,
                explanation: "Margin controls the space OUTSIDE the border, between elements."
              },
              {
                question: "Which property includes padding and border in the element's total width?",
                options: ["margin: auto", "box-sizing: border-box", "display: flex", "overflow: hidden"],
                correctAnswer: 1,
                explanation: "box-sizing: border-box includes padding and border in the width/height calculation."
              }
            ]}
          />
        </div>
      )
    },

    'css-layout': {
      id: 'css-layout',
      title: 'CSS Layout (Display & Position)',
      icon: <Layout className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CSS Display Property</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The <strong>display</strong> property determines how an element is displayed. Common values include block, inline, inline-block, and flex.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { value: 'block', desc: 'Takes full width, starts on new line', example: 'div, p, h1' },
                { value: 'inline', desc: 'Takes only needed width, stays in line', example: 'span, a, strong' },
                { value: 'inline-block', desc: 'Like inline but can have width/height', example: 'button, input' },
                { value: 'none', desc: 'Element is hidden and removed from flow', example: 'display: none' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <code className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono">{item.value}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">e.g. {item.example}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">CSS Position Property</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The <strong>position</strong> property specifies the positioning method for an element.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { value: 'static', desc: 'Default. Normal document flow', note: 'Not affected by top, bottom, left, right' },
                { value: 'relative', desc: 'Positioned relative to normal position', note: 'Other elements ignore this element\'s space' },
                { value: 'absolute', desc: 'Positioned relative to nearest positioned ancestor', note: 'Removed from normal document flow' },
                { value: 'fixed', desc: 'Positioned relative to viewport', note: 'Stays in place when scrolling' },
                { value: 'sticky', desc: 'Switches between relative and fixed', note: 'Sticks when scrolling reaches threshold' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <code className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono">{item.value}</code>
                    <span className="font-medium text-gray-800 dark:text-white">{item.desc}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Display and Position Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            margin: 10px;
        }

        .static {
            background: #3498db;
            position: static;
        }

        .relative {
            background: #e74c3c;
            position: relative;
            left: 50px;
            top: 20px;
        }

        .absolute {
            background: #2ecc71;
            position: absolute;
            right: 10px;
            top: 10px;
        }

        .fixed {
            background: #9b59b6;
            position: fixed;
            bottom: 10px;
            right: 10px;
        }

        .container {
            position: relative;
            background: #f0f0f0;
            padding: 20px;
            min-height: 200px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box static">Static</div>
        <div class="box relative">Relative (moved)</div>
        <div class="box absolute">Absolute (in container)</div>
    </div>
    <div class="box fixed">Fixed (viewport)</div>
</body>
</html>`}
          />

          <Exercise
            question="Create a tooltip that appears above an element using position: absolute. The tooltip should be positioned 10px above its parent element."
            hint="Parent needs position: relative, tooltip needs position: absolute with top: -10px"
            solution={`.parent {
    position: relative;
}

.tooltip {
    position: absolute;
    bottom: 100%; /* Position above the element */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}`}
          />

          <Quiz
            questions={[
              {
                question: "What is the difference between display: inline and display: block?",
                options: [
                  "No difference",
                  "inline stays in same line, block takes full width",
                  "block is smaller than inline",
                  "inline cannot have padding"
                ],
                correctAnswer: 1,
                explanation: "Inline elements stay on the same line and only take needed width. Block elements start on a new line and take full width."
              },
              {
                question: "What happens when an element has position: absolute?",
                options: [
                  "It stays in normal document flow",
                  "It positions relative to the viewport",
                  "It positions relative to nearest positioned ancestor",
                  "It becomes fixed to the page"
                ],
                correctAnswer: 2,
                explanation: "position: absolute positions the element relative to the nearest positioned (not static) ancestor element."
              },
              {
                question: "What does z-index control?",
                options: [
                  "Horizontal position",
                  "Vertical position",
                  "Stack order of overlapping elements",
                  "Element size"
                ],
                correctAnswer: 2,
                explanation: "z-index controls the stacking order of elements. Higher values appear on top of lower values."
              }
            ]}
          />

          <Exercise
            question="Create a fixed navigation bar that stays at the top of the page when scrolling. The navbar should have a height of 60px, dark background, white text, and be positioned at the top with z-index to stay above other content."
            hint="Use position: fixed, top: 0, width: 100%, and z-index for layering"
            solution={`.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* Add padding to body to prevent content from hiding under navbar */
body {
    padding-top: 60px;
}`}
          />

          <Exercise
            question="Create a card overlay effect where a dark semi-transparent overlay appears over an image when hovering. Use position: absolute and opacity transitions."
            hint="Parent needs position: relative, overlay needs position: absolute with opacity 0, change to opacity 1 on hover"
            solution={`.card {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .overlay {
    opacity: 1;
}`}
          />
        </div>
      )
    },

    'css-flexbox': {
      id: 'css-flexbox',
      title: 'CSS Flexbox',
      icon: <Layers className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Flexbox Layout</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Flexbox</strong> is a one-dimensional layout method for arranging items in rows or columns. It makes complex layouts easy to implement with clean, maintainable code.
            </p>

            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Container Properties (Parent)</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'display: flex',
                  'flex-direction',
                  'justify-content',
                  'align-items',
                  'flex-wrap',
                  'gap'
                ].map((prop, i) => (
                  <code key={i} className="bg-white/20 px-2 py-1 rounded text-sm">{prop}</code>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">flex-direction Options</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['row', 'row-reverse', 'column', 'column-reverse'].map((dir, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-2 text-center">
                    <p className="font-mono text-sm text-purple-600">{dir}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">justify-content Options</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].map((jc, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-2 text-center">
                    <p className="font-mono text-xs text-blue-600">{jc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Item Properties (Children)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { prop: 'flex-grow', desc: 'How much to grow' },
                { prop: 'flex-shrink', desc: 'How much to shrink' },
                { prop: 'flex-basis', desc: 'Initial size' },
                { prop: 'align-self', desc: 'Override alignment' },
                { prop: 'order', desc: 'Display order' }
              ].map((item, i) => (
                <div key={i} className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                  <code className="text-orange-700 dark:text-orange-300">{item.prop}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Flexbox Gallery"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px;
            background: #f5f5f5;
        }

        .item {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            min-width: 100px;
        }

        .item:nth-child(2) {
            flex-grow: 2; /* Takes double space */
        }

        .item:nth-child(4) {
            flex-shrink: 0; /* Won't shrink */
        }
    </style>
</head>
<body>
    <h3>Flexbox Gallery</h3>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2 (grows)</div>
        <div class="item">3</div>
        <div class="item">4 (no shrink)</div>
        <div class="item">5</div>
    </div>

    <h3 style="margin-top: 30px;">Try changing flex-direction!</h3>
    <p>Add: flex-direction: column;</p>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which property creates a flex container?",
                options: ["position: flex", "display: flex", "flex: container", "layout: flexbox"],
                correctAnswer: 1,
                explanation: "display: flex creates a flex container."
              },
              {
                question: "What does justify-content control?",
                options: [
                  "Vertical alignment of items",
                  "Horizontal alignment of items",
                  "Item order",
                  "Item size"
                ],
                correctAnswer: 1,
                explanation: "justify-content controls alignment along the main axis (horizontal in row direction)."
              }
            ]}
          />

          <Exercise
            question="Create a horizontal navigation bar using flexbox. The navbar should have a logo on the left, navigation links in the center, and a login button on the right."
            hint="Use display: flex, justify-content: space-between, and align-items: center on the container"
            solution={`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 15px 30px;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #3498db;
}

.login-btn {
    background-color: #3498db;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.login-btn:hover {
    background-color: #2980b9;
}`}
          />

          <Exercise
            question="Create a responsive flexbox-based card layout where: cards are 300px wide, they wrap to new lines as needed, gaps between cards are 20px, and cards are vertically centered in the container."
            hint="Use flex-wrap: wrap, gap, and justify-content with center alignment"
            solution={`.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.card {
    width: 300px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}`}
          />
        </div>
      )
    },

    'css-grid': {
      id: 'css-grid',
      title: 'CSS Grid',
      icon: <Grid className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CSS Grid Layout</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>CSS Grid</strong> is a two-dimensional layout system that handles both columns and rows simultaneously. It's perfect for complex page layouts and gallery grids.
            </p>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Grid Container Properties</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'display: grid',
                  'grid-template-columns',
                  'grid-template-rows',
                  'grid-template-areas',
                  'gap',
                  'grid-column/row'
                ].map((prop, i) => (
                  <code key={i} className="bg-white/20 px-2 py-1 rounded text-sm">{prop}</code>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">Defining Grid Tracks</h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-purple-600">grid-template-columns: <span className="text-green-600">100px 100px 100px</span>;</p>
                <p className="text-purple-600">grid-template-columns: <span className="text-green-600">1fr 2fr 1fr</span>;</p>
                <p className="text-purple-600">grid-template-columns: <span className="text-green-600">repeat(3, 1fr)</span>;</p>
                <p className="text-purple-600">grid-template-columns: <span className="text-green-600">repeat(auto-fit, minmax(200px, 1fr))</span>;</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Grid Item Placement</h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-blue-600">.item {'{'}</p>
              <p className="ml-4 text-purple-600">grid-column: <span className="text-green-600">1 / 3</span>; <span className="text-gray-500">/* span columns 1 to 3 */</span></p>
              <p className="ml-4 text-purple-600">grid-row: <span className="text-green-600">2 / 4</span>; <span className="text-gray-500">/* span rows 2 to 4 */</span></p>
              <p className="text-blue-600">{'}'}</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="CSS Grid Layout"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            gap: 15px;
            padding: 20px;
            background: #f5f5f5;
        }

        .grid-item {
            background: linear-gradient(135deg, #11998e, #38ef7d);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }

        .wide {
            grid-column: span 2;
            background: linear-gradient(135deg, #fc4a1a, #f7b733);
        }

        .tall {
            grid-row: span 2;
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            padding: 50px;
        }
    </style>
</head>
<body>
    <h3>CSS Grid Layout</h3>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item wide">2 (wide)</div>
        <div class="grid-item">3</div>
        <div class="grid-item tall">4 (tall)</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Create a responsive grid layout with 4 equal columns that automatically wraps to new rows as needed."
            hint="Use display: grid with grid-template-columns and repeat function with auto-fit or auto-fill"
            solution={`.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* For responsive behavior that wraps automatically: */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}`}
          />

          <Quiz
            questions={[
              {
                question: "What does 'fr' unit mean in CSS Grid?",
                options: [
                  "Fixed ratio",
                  "Fraction of available space",
                  "Full row",
                  "Frame reference"
                ],
                correctAnswer: 1,
                explanation: "fr stands for 'fraction unit' and represents a fraction of the available space in the grid container."
              },
              {
                question: "How do you make a grid item span 2 columns?",
                options: [
                  "column-span: 2",
                  "grid-column: span 2",
                  "columns: 2",
                  "grid-span: 2"
                ],
                correctAnswer: 1,
                explanation: "grid-column: span 2 makes an item span across 2 columns in the grid."
              }
            ]}
          />

          <Exercise
            question="Create a 3-column grid layout where the first column takes 2fr space, the middle takes 1fr, and the last takes 1fr. Add a gap of 20px between all items."
            hint="Use grid-template-columns with fr units to create unequal column widths"
            solution={`.grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
}

/* Each grid item styling */
.grid-item {
    background: #3498db;
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
}

/* To make it responsive, use minmax: */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}`}
          />
        </div>
      )
    },

    'css-colors-backgrounds': {
      id: 'css-colors-backgrounds',
      title: 'Colors and Backgrounds',
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CSS Colors</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              CSS supports multiple ways to specify colors: color names, HEX codes, RGB, RGBA, HSL, and HSLA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <h4 className="font-bold mb-3">Color Formats</h4>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-red-500">color: red;</p>
                  <p className="text-purple-500">color: #ff00ff;</p>
                  <p className="text-blue-500">color: rgb(0, 0, 255);</p>
                  <p className="text-green-500">color: rgba(0, 255, 0, 0.5);</p>
                  <p className="text-teal-500">color: hsl(180, 100%, 50%);</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <h4 className="font-bold mb-3">Background Properties</h4>
                <div className="space-y-2 font-mono text-sm">
                  <p>background-color</p>
                  <p>background-image</p>
                  <p>background-size</p>
                  <p>background-position</p>
                  <p>background-repeat</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Gradient Syntax</h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-purple-600">background: <span className="text-green-600">linear-gradient(direction, color1, color2)</span>;</p>
                <p className="text-gray-500 mt-2">/* Examples: */</p>
                <p className="text-blue-500">linear-gradient(to right, red, yellow)</p>
                <p className="text-blue-500">linear-gradient(45deg, blue, pink)</p>
                <p className="text-blue-500">radial-gradient(circle, red, blue)</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Colors and Gradients"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            padding: 30px;
            margin: 10px;
            border-radius: 10px;
            color: white;
            text-align: center;
        }

        .solid { background-color: #3498db; }

        .gradient-h {
            background: linear-gradient(to right, #667eea, #764ba2);
        }

        .gradient-d {
            background: linear-gradient(135deg, #f093fb, #f5576c);
        }

        .radial {
            background: radial-gradient(circle, #4facfe, #00f2fe);
        }

        .transparent {
            background: rgba(231, 76, 60, 0.7);
            border: 3px solid rgba(231, 76, 60, 1);
        }
    </style>
</head>
<body>
    <div class="box solid">Solid Color</div>
    <div class="box gradient-h">Horizontal Gradient</div>
    <div class="box gradient-d">Diagonal Gradient</div>
    <div class="box radial">Radial Gradient</div>
    <div class="box transparent">Semi-Transparent</div>
</body>
</html>`}
          />

          <Exercise
            question="Create a button with a gradient background from purple to pink, white text, rounded corners, and a subtle shadow."
            hint="Use linear-gradient, text-shadow for text, border-radius for corners, and box-shadow"
            solution={`.gradient-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);
    cursor: pointer;
    transition: transform 0.2s;
}

.gradient-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(118, 75, 162, 0.6);
}`}
          />

          <Quiz
            questions={[
              {
                question: "What does rgba(255, 0, 0, 0.5) represent?",
                options: [
                  "Red with 50% opacity",
                  "Red with 50% brightness",
                  "Green with 50% opacity",
                  "Blue with 50% opacity"
                ],
                correctAnswer: 0,
                explanation: "rgba stands for Red, Green, Blue, Alpha. The last value (0.5) represents opacity/transparency."
              },
              {
                question: "What is the difference between linear-gradient and radial-gradient?",
                options: [
                  "No difference",
                  "linear goes in one direction, radial spreads from center",
                  "radial is faster",
                  "linear is deprecated"
                ],
                correctAnswer: 1,
                explanation: "linear-gradient creates a gradient in a specified direction (like left to right), while radial-gradient creates a circular gradient spreading from the center."
              }
            ]}
          />

          <Exercise
            question="Create a card with a background image that covers the entire card, with a dark overlay for text readability."
            hint="Use background-image, background-size: cover, and a pseudo-element or rgba overlay"
            solution={`.card {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.card-content {
    position: relative;
    z-index: 3;
    color: white;
    padding: 20px;
}`}
          />
        </div>
      )
    },

    'css-typography': {
      id: 'css-typography',
      title: 'CSS Typography',
      icon: <Type className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Text and Typography</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              CSS provides extensive control over text appearance including font families, sizes, weights, styles, and spacing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { prop: 'font-family', example: 'Arial, sans-serif' },
                { prop: 'font-size', example: '16px, 1.5em, 2rem' },
                { prop: 'font-weight', example: 'normal, bold, 100-900' },
                { prop: 'font-style', example: 'normal, italic, oblique' },
                { prop: 'text-align', example: 'left, center, right, justify' },
                { prop: 'text-decoration', example: 'none, underline, line-through' },
                { prop: 'line-height', example: '1.5, 24px' },
                { prop: 'letter-spacing', example: '2px, -1px' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
                  <code className="text-purple-600 dark:text-purple-400">{item.prop}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400">e.g. {item.example}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Google Fonts Example</h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-600">{/* In HTML <head> */}</p>
                <p className="text-blue-600">&lt;link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"&gt;</p>
                <p className="text-green-600 mt-3">/* In CSS */</p>
                <p className="text-purple-600">font-family: <span className="text-green-600">'Roboto', sans-serif</span>;</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Typography Showcase"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Open+Sans&display=swap" rel="stylesheet">
    <style>
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3em;
            font-weight: bold;
            text-align: center;
        }

        .uppercase {
            text-transform: uppercase;
            letter-spacing: 5px;
        }

        .shadow {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .fancy {
            font-style: italic;
            text-decoration: underline wavy red;
            line-height: 2;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2em;
            line-height: 1.8;
            text-align: justify;
        }
    </style>
</head>
<body>
    <h1 class="shadow">Typography Demo</h1>
    <p class="uppercase">This text is uppercase with letter spacing</p>
    <p class="fancy">This paragraph has italic text, wavy underline, and double line height.</p>
    <p>This is normal paragraph text with proper line height for readability.</p>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What is the difference between em and rem units?",
                options: [
                  "No difference",
                  "em is relative to parent, rem is relative to root",
                  "em is larger than rem",
                  "rem is deprecated"
                ],
                correctAnswer: 1,
                explanation: "em units are relative to the font-size of their parent element, while rem units are relative to the root (html) element's font-size."
              },
              {
                question: "Which property controls the space between lines of text?",
                options: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
                correctAnswer: 2,
                explanation: "line-height controls the space between lines of text, making paragraphs more readable."
              }
            ]}
          />

          <Exercise
            question="Create a styled heading with: Google Font 'Roboto', font-size of 3rem, bold weight, text-shadow effect, and uppercase text with letter-spacing of 4px."
            hint="Import Google Font in head, use font-family, font-size, font-weight, text-shadow, text-transform, and letter-spacing"
            solution={`/* In HTML head */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">

/* CSS */
.heading {
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #2c3e50;
    text-align: center;
}`}
          />

          <Exercise
            question="Create a readable article layout with proper typography: body font-size of 18px with 1.6 line-height, paragraph text-align justified, first letter of first paragraph styled as drop cap, and hanging indents for blockquotes."
            hint="Use line-height, text-align, ::first-letter pseudo-element, and padding/margin for blockquotes"
            solution={`article {
    max-width: 700px;
    margin: 0 auto;
    font-family: 'Georgia', serif;
    font-size: 18px;
    line-height: 1.6;
}

article p {
    text-align: justify;
    margin-bottom: 1em;
}

article p:first-of-type::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    padding-right: 8px;
    color: #e74c3c;
    font-weight: bold;
}

blockquote {
    margin: 1.5em 0;
    padding: 1em 1.5em;
    border-left: 4px solid #3498db;
    background: #f9f9f9;
    font-style: italic;
    text-align: left;
}`}
          />
        </div>
      )
    },

    'css-transitions-animations': {
      id: 'css-transitions-animations',
      title: 'Transitions and Animations',
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CSS Transitions</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Transitions</strong> allow you to smoothly animate changes to CSS properties over a specified duration.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Transition Properties</h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-purple-600">transition: <span className="text-green-600">property duration timing-function delay</span>;</p>
                <p className="text-gray-500 mt-2">/* Shorthand example: */</p>
                <p className="text-blue-500">transition: all 0.3s ease-in-out;</p>
                <p className="text-blue-500">transition: background-color 0.5s linear, transform 0.3s ease;</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">CSS Animations</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Animations</strong> allow you to create more complex effects with multiple keyframes.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Animation Syntax</h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-purple-600">animation: <span className="text-green-600">name duration timing-function delay iteration-count</span>;</p>
                <p className="mt-3 text-purple-600">@keyframes <span className="text-green-600">name</span> {'{'}</p>
                <p className="ml-4 text-blue-500">0% {'{'} /* starting state */ {'}'}</p>
                <p className="ml-4 text-blue-500">50% {'{'} /* middle state */ {'}'}</p>
                <p className="ml-4 text-blue-500">100% {'{'} /* ending state */ {'}'}</p>
                <p className="text-purple-600">{'}'}</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Transitions and Animations"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 20px;
            display: inline-block;
        }

        /* Transition on hover */
        .transition:hover {
            background: #e74c3c;
            transform: scale(1.2) rotate(10deg);
        }
        .transition {
            transition: all 0.3s ease;
        }

        /* Animation */
        .animated {
            animation: bounce 1s infinite alternate;
        }

        @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        }

        /* Pulsing animation */
        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        p { margin-top: 30px; font-style: italic; }
    </style>
</head>
<body>
    <div class="box transition">Hover Me!</div>
    <div class="box animated">Bouncing</div>
    <div class="box pulse">Pulsing</div>
    <p>Hover over the first box to see the transition effect!</p>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What does transition: all 0.5s ease do?",
                options: [
                  "Transitions all properties over 0.5 seconds with ease timing",
                  "Transitions only the color property",
                  "Transitions with no animation",
                  "Makes element invisible"
                ],
                correctAnswer: 0,
                explanation: "transition: all animates all animatable properties over 0.5 seconds with ease timing."
              },
              {
                question: "What is required to create a CSS animation?",
                options: [
                  "Only the animation property",
                  "@keyframes rule and animation property",
                  "JavaScript",
                  "No special requirements"
                ],
                correctAnswer: 1,
                explanation: "You need both @keyframes to define the animation stages AND the animation property to apply it."
              }
            ]}
          />

          <Exercise
            question="Create a CSS animation called 'fadeIn' that fades an element from opacity 0 to opacity 1 over 1 second. Apply it to a div with class 'animated'."
            hint="Define @keyframes with 0% and 100% states, then apply animation property"
            solution={`@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated {
    animation: fadeIn 1s ease-out forwards;
}

/* Apply to multiple elements with delay */
.animated.delay-1 {
    animation-delay: 0.2s;
}

.animated.delay-2 {
    animation-delay: 0.4s;
}

.animated.delay-3 {
    animation-delay: 0.6s;
}`}
          />

          <Exercise
            question="Create a loading spinner animation using CSS. The spinner should be a circle that rotates 360 degrees continuously. Include different timing functions (linear vs ease-in-out)."
            hint="Use border-radius: 50%, border styling for partial circle, and infinite animation"
            solution={`.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Alternative with ease-in-out */
.spinner-slow {
    animation: spin 2s ease-in-out infinite;
}`}
          />
        </div>
      )
    },

    'css-media-queries': {
      id: 'css-media-queries',
      title: 'Media Queries & Responsive Design',
      icon: <Monitor className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Responsive Design with Media Queries</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Media queries</strong> allow you to apply CSS styles based on device characteristics like screen width, height, and orientation. This is the foundation of responsive web design.
            </p>

            <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Basic Syntax</h4>
              <div className="bg-white/20 rounded-lg p-4 font-mono text-sm">
                <p>@media <span className="text-yellow-300">media-type</span> and <span className="text-yellow-300">(condition)</span> {'{'}</p>
                <p className="ml-4">/* CSS rules */</p>
                <p>{'}'}</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Common Breakpoints</h4>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
              <div className="space-y-2">
                {[
                  { size: '< 576px', desc: 'Extra small devices (phones)' },
                  { size: '576px - 768px', desc: 'Small devices (tablets)' },
                  { size: '768px - 992px', desc: 'Medium devices (small laptops)' },
                  { size: '992px - 1200px', desc: 'Large devices (desktops)' },
                  { size: '> 1200px', desc: 'Extra large devices (large desktops)' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <code className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono text-sm">{item.size}</code>
                    <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Mobile-First Approach</h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-600">/* Base styles (mobile) */</p>
                <p className="text-purple-600">.container {'{'} width: 100%; {'}'}</p>
                <p className="mt-3 text-green-600">/* Tablet and up */</p>
                <p className="text-purple-600">@media (min-width: 768px) {'{'} .container {'{'} width: 750px; {'}'} {'}'}</p>
                <p className="mt-3 text-green-600">/* Desktop and up */</p>
                <p className="text-purple-600">@media (min-width: 992px) {'{'} .container {'{'} width: 970px; {'}'} {'}'}</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Media Queries Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; padding: 20px; }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            text-align: center;
            flex: 1 1 100%;
        }

        h1 { margin-bottom: 20px; }

        /* Small devices (tablets) */
        @media (min-width: 576px) {
            .box { flex: 1 1 45%; }
        }

        /* Medium devices (laptops) */
        @media (min-width: 768px) {
            .box { flex: 1 1 30%; }
            h1 { color: blue; }
        }

        /* Large devices (desktops) */
        @media (min-width: 992px) {
            .box { flex: 1 1 20%; }
            h1 { color: green; font-size: 3em; }
        }
    </style>
</head>
<body>
    <h1>Resize the window!</h1>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
    </div>
</body>
</html>`}
          />

          <Exercise
            question="Create a responsive layout that shows 1 column on mobile, 2 columns on tablets, and 4 columns on desktop screens."
            hint="Use media queries with min-width breakpoints at 576px and 992px. Use flexbox with flex-wrap and the flex property."
            solution={`.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 100%; /* Mobile: full width */
}

/* Tablet */
@media (min-width: 576px) {
    .item { flex: 1 1 50%; }
}

/* Desktop */
@media (min-width: 992px) {
    .item { flex: 1 1 25%; }
}`}
          />

          <Quiz
            questions={[
              {
                question: "What does @media (max-width: 768px) target?",
                options: [
                  "All screens",
                  "Screens 768px or wider",
                  "Screens 768px or narrower",
                  "Print devices only"
                ],
                correctAnswer: 2,
                explanation: "max-width targets screens that are the specified width or narrower."
              },
              {
                question: "What is the mobile-first approach?",
                options: [
                  "Designing for mobile first, then adding styles for larger screens",
                  "Designing for desktop first, then mobile",
                  "Only supporting mobile devices",
                  "Using CSS frameworks"
                ],
                correctAnswer: 0,
                explanation: "Mobile-first means writing base styles for mobile, then using min-width media queries to add styles for larger screens."
              }
            ]}
          />

          <Exercise
            question="Create a complete responsive navigation that: shows a hamburger menu icon on mobile, displays full navigation on desktop (min-width: 768px), uses flexbox for layout, and includes smooth transitions for menu visibility."
            hint="Use media queries to toggle display between none and flex, use z-index for layering"
            solution={`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    padding: 15px;
}

.menu-toggle {
    display: block;
    font-size: 24px;
    color: white;
    cursor: pointer;
}

.nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;
    padding: 20px;
}

.nav-links.active {
    display: flex;
}

.nav-links a {
    color: white;
    padding: 10px 0;
    border-bottom: 1px solid #444;
}

/* Desktop styles */
@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        position: static;
        width: auto;
        gap: 20px;
        padding: 0;
    }

    .nav-links a {
        border: none;
        padding: 0;
    }
}`}
          />
        </div>
      )
    },

    'css-practical-exercise': {
      id: 'css-practical-exercise',
      title: 'Practical Exercise: Build a Card Component',
      icon: <Square className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Challenge: Create a Responsive Card</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Now let's put everything together! Build a beautiful, responsive card component using all the CSS concepts you've learned.
            </p>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-3">Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Card with shadow and rounded corners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Image at the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Title and description</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Hover effect with transform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Responsive: stack on mobile, row on desktop</span>
                </li>
              </ul>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Build Your Card Component"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #f0f2f5;
            padding: 40px;
            min-height: 100vh;
        }

        /* Your task: Create the card container */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        /* Your task: Style the card */
        .card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            /* Add transition for hover effect */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            /* Make it responsive */
            flex: 1 1 300px;
            max-width: 300px;
        }

        /* Your task: Add hover effect */
        .card:hover {
            /* Scale up slightly */
            /* Add stronger shadow */
        }

        /* Your task: Style the image */
        .card-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        /* Your task: Style the content */
        .card-content {
            padding: 20px;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }

        .card-description {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* Your task: Style the button */
        .card-button {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: opacity 0.3s;
        }

        .card-button:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="card-container">
        <div class="card">
            <img src="https://picsum.photos/300/200?random=1" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Card Title</h3>
                <p class="card-description">This is a description. Add your hover effects to make it interactive!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>

        <div class="card">
            <img src="https://picsum.photos/300/200?random=2" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Another Card</h3>
                <p class="card-description">Try adding more cards and see how flexbox handles the layout!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>

        <div class="card">
            <img src="https://picsum.photos/300/200?random=3" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Third Card</h3>
                <p class="card-description">Resize the window to see the responsive behavior!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which CSS property creates the shadow around the card?",
                options: ["border", "outline", "box-shadow", "drop-shadow"],
                correctAnswer: 2,
                explanation: "box-shadow creates the shadow effect around an element."
              },
              {
                question: "What makes the card container responsive with flexbox?",
                options: [
                  "display: flex only",
                  "flex-wrap: wrap and flex: 1 1 300px",
                  "position: relative",
                  "margin: auto"
                ],
                correctAnswer: 1,
                explanation: "flex-wrap: wrap allows items to wrap, and flex: 1 1 300px makes cards grow/shrink but have a minimum width."
              }
            ]}
          />

          <Exercise
            question="Build a complete profile card component that includes: a circular avatar image with border, name and job title with proper typography, a brief bio, social media icons that change color on hover, and a 'Contact Me' button with gradient and hover effect."
            hint="Combine all CSS concepts: box-shadow, border-radius for circle, transitions for hover, flexbox for layout"
            solution={`.profile-card {
    width: 320px;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.profile-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #667eea;
    margin-bottom: 20px;
}

.name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
}

.job-title {
    color: #667eea;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.bio {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, color 0.3s;
}

.social-icon:hover {
    background: #667eea;
    color: white;
}

.contact-btn {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.contact-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}`}
          />

          <Exercise
            question="Create a complete dashboard layout using CSS Grid with: a sidebar navigation (250px wide), main content area (flexible), and a top header (60px height). The layout should be responsive - sidebar becomes a top navigation on mobile."
            hint="Use grid-template-columns, grid-template-rows, and media queries for responsiveness"
            solution={`.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.sidebar {
    background: #34495e;
    color: white;
    padding: 20px;
}

.main-content {
    background: #ecf0f1;
    padding: 30px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto 1fr;
    }

    .sidebar {
        display: none;
    }

    .mobile-nav {
        display: flex;
        background: #34495e;
        padding: 10px 20px;
        gap: 20px;
    }

    .mobile-nav a {
        color: white;
        text-decoration: none;
    }
}`}
          />
        </div>
      )
    }
  };

  const topicList = Object.values(topics);

  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Palette className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Chapter 3: CSS - Styling the Web</h1>
            <p className="text-white/80">Master CSS: selectors, box model, flexbox, grid, animations, and responsive design</p>
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
          const isCompleted = progress[`chapter3-${topic.id}`];

          return (
            <div
              key={topic.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                isExpanded ? 'border-pink-500' : 'border-transparent hover:border-gray-200 dark:border-gray-700'
              }`}
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-pink-100 dark:bg-pink-900/30 text-pink-600'
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
