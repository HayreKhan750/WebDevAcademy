import { useState } from 'react';
import { Code, Tag, Image, List, Table, FileInput, Link, Play, CheckCircle, ChevronRight, ChevronDown, FileCode, Type, Layout, FileText } from 'lucide-react';
import InteractiveCodeEditor from '../components/InteractiveCodeEditor';
import VisualDemo from '../components/VisualDemo';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

interface Chapter2Props {
  progress: Record<string, boolean>;
  updateProgress: (chapterId: string, topicId: string, completed: boolean) => void;
}

interface TopicSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  exercise?: React.ReactNode;
  quiz?: { questions: { question: string; options: string[]; correctAnswer: number; explanation?: string }[] };
}

export default function Chapter2({ progress, updateProgress }: Chapter2Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('html-basics');

  const markComplete = (topicId: string) => {
    updateProgress('chapter2', topicId, true);
  };

  const topics: Record<string, TopicSection> = {
    'html-basics': {
      id: 'html-basics',
      title: 'HTML Basics & Document Structure',
      icon: <FileCode className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What is HTML?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>HTML (HyperText Markup Language)</strong> is the standard markup language for creating web pages. It describes the structure of a web page using elements.
            </p>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-2">The Three Core Web Technologies</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold">HTML</p>
                  <p className="text-sm">Structure</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold">CSS</p>
                  <p className="text-sm">Presentation</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold">JavaScript</p>
                  <p className="text-sm">Behavior</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">HTML Tags</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tags are enclosed in angle brackets. Most tags have an opening and closing tag, but some are self-closing.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-4">
              <p className="text-gray-600 dark:text-gray-400">&lt;tagname&gt;content&lt;/tagname&gt;</p>
              <p className="text-green-600 dark:text-green-400 mt-2">// Opening tag</p>
              <p className="text-green-600 dark:text-green-400">content</p>
              <p className="text-red-600 dark:text-red-400">&lt;/tagname&gt; // Closing tag</p>
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Basic HTML Structure</h4>
          </div>

          <InteractiveCodeEditor
            title="Your First HTML Page"
            language="html"
            initialCode={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to Web Development!</h1>
    <p>This is my first paragraph.</p>
    <p>HTML uses tags to structure content.</p>
</body>
</html>`}
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
            <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Understanding the Structure</h5>
            <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
              <li><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">&lt;!DOCTYPE html&gt;</code> - Declares HTML5 document type</li>
              <li><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">&lt;html&gt;</code> - Root element of the page</li>
              <li><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">&lt;head&gt;</code> - Contains metadata (not visible)</li>
              <li><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">&lt;body&gt;</code> - Contains visible content</li>
            </ul>
          </div>

          <Exercise
            question="Write the HTML code to create a simple page with a heading 'Hello World' and a paragraph 'This is my first webpage.'"
            hint="Remember to include DOCTYPE, html, head, body tags"
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first webpage.</p>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correctAnswer: 0,
                explanation: "HTML stands for HyperText Markup Language - the standard language for creating web pages."
              },
              {
                question: "Which tag is used to define the main content visible to users?",
                options: ["<head>", "<meta>", "<body>", "<title>"],
                correctAnswer: 2,
                explanation: "The <body> tag contains all the visible content of the webpage including headings, paragraphs, images, etc."
              },
              {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<break>", "<lb>", "<br>", "<newline>"],
                correctAnswer: 2,
                explanation: "The <br> tag is a self-closing tag that inserts a single line break in HTML content."
              }
            ]}
          />
        </div>
      )
    },

    'text-formatting': {
      id: 'text-formatting',
      title: 'Text Formatting Tags',
      icon: <Type className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Formatting Text in HTML</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              HTML provides various tags to format text - making it bold, italic, underlined, and more.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { tag: '<h1> to <h6>', desc: 'Headings' },
                { tag: '<p>', desc: 'Paragraph' },
                { tag: '<br>', desc: 'Line break' },
                { tag: '<hr>', desc: 'Horizontal rule' },
                { tag: '<strong>', desc: 'Bold (important)' },
                { tag: '<em>', desc: 'Italic (emphasis)' },
                { tag: '<u>', desc: 'Underline' },
                { tag: '<mark>', desc: 'Highlighted' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <code className="text-sm text-blue-600 dark:text-blue-400">{item.tag}</code>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Text Formatting Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting</title>
</head>
<body>
    <!-- Headings -->
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>

    <!-- Text Formatting -->
    <p>
        This is a <strong>bold</strong> text.<br>
        This is an <em>italic</em> text.<br>
        This is <u>underlined</u> text.<br>
        This is <mark>highlighted</mark> text.<br>
        This is <small>small</small> text.
    </p>

    <hr>

    <!-- Blockquote -->
    <blockquote>
        "The only way to do great work is to love what you do."
        <cite>— Steve Jobs</cite>
    </blockquote>

    <!-- Preformatted text -->
    <pre>
function hello() {
    console.log("Hello!");
}
    </pre>
</body>
</html>`}
          />

          <VisualDemo
            type="diagram"
            title="Inline vs Block Elements"
            description="Understanding how elements display"
            content={
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Block Elements</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Start on a new line, take full width</p>
                  <div className="border-2 border-blue-300 p-2">
                    <div className="bg-blue-200 p-2 text-center text-sm">div</div>
                    <div className="bg-blue-200 p-2 text-center text-sm mt-1">p</div>
                    <div className="bg-blue-200 p-2 text-center text-sm mt-1">h1</div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Inline Elements</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Stay on same line, take only necessary width</p>
                  <div className="border-2 border-green-300 p-2">
                    <span className="bg-green-200 px-2 text-sm">span</span>
                    <strong className="bg-green-200 px-2 text-sm mx-1">strong</strong>
                    <em className="bg-green-200 px-2 text-sm">em</em>
                    <a className="bg-green-200 px-2 text-sm mx-1">a</a>
                  </div>
                </div>
              </div>
            }
          />

          <Quiz
            questions={[
              {
                question: "Which tag is used for the most important heading?",
                options: ["<heading>", "<h6>", "<h1>", "<head>"],
                correctAnswer: 2,
                explanation: "<h1> defines the most important heading, while <h6> defines the least important."
              },
              {
                question: "What's the difference between <strong> and <b>?",
                options: [
                  "There's no difference",
                  "<strong> indicates importance, <b> is just visual styling",
                  "<b> is for larger text",
                  "<strong> is deprecated"
                ],
                correctAnswer: 1,
                explanation: "<strong> has semantic meaning (important text), while <b> is purely visual. Use <strong> for accessibility."
              }
            ]}
          />

          <Exercise
            question="Create a webpage with an h1 heading 'My Portfolio', an h2 subheading 'About Me', and a paragraph that uses <strong> for important text, <em> for emphasis, <mark> to highlight 'web development', and <small> for copyright text."
            hint="Use heading tags h1 and h2, paragraph tags, and inline formatting tags"
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>
    <h1>My Portfolio</h1>
    <h2>About Me</h2>
    <p>
        Hello! I am a <strong>passionate developer</strong> who loves
        <em>creating amazing websites</em>. I specialize in
        <mark>web development</mark> and continuously learning new technologies.
        <br><br>
        <small>&copy; 2024 My Portfolio. All rights reserved.</small>
    </p>
</body>
</html>`}
          />

          <Exercise
            question="Create a blockquote that contains a famous quote with <cite> for the author name, and a <pre> tag with a simple code snippet showing a function declaration."
            hint="Blockquote requires <blockquote> and <cite> tags. Preformatted text uses <pre> tag to preserve whitespace."
            solution={`<blockquote>
    "The only way to do great work is to love what you do."
    <cite>— Steve Jobs</cite>
</blockquote>

<pre>
function greet(name) {
    console.log("Hello, " + name + "!");
    return true;
}
</pre>`}
          />
        </div>
      )
    },

    'links-images': {
      id: 'links-images',
      title: 'Links and Images',
      icon: <Image className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Creating Links & Adding Images</h3>

            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">HTML Links (Anchor Tags)</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Links are created using the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag with the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">href</code> attribute.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-blue-600">&lt;a href="url"&gt;Link Text&lt;/a&gt;</p>
              <p className="text-gray-500 mt-2">Target attributes:</p>
              <p className="text-green-600">_self (default) - Same window</p>
              <p className="text-green-600">_blank - New tab/window</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Links Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Links</title>
</head>
<body>
    <h1>Links in HTML</h1>

    <h2>External Links</h2>
    <p>
        Visit <a href="https://www.google.com" target="_blank">Google</a> in a new tab.<br>
        Or go to <a href="https://www.wikipedia.org">Wikipedia</a> in the same tab.
    </p>

    <h2>Internal Links</h2>
    <p>
        <a href="#section1">Go to Section 1</a><br>
        <a href="#section2">Go to Section 2</a>
    </p>

    <h2 id="section1">Section 1</h2>
    <p>This is section 1 content.</p>

    <h2 id="section2">Section 2</h2>
    <p>This is section 2 content.</p>

    <h2>Email Links</h2>
    <p>
        <a href="mailto:example@email.com">Send Email</a>
    </p>

    <p><a href="#top">Back to top</a></p>
</body>
</html>`}
          />

          <div className="prose dark:prose-invert max-w-none">
            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">HTML Images</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Images are added using the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag. It's a self-closing tag that requires the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">src</code> (source) and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">alt</code> (alternative text) attributes.
            </p>
          </div>

          <InteractiveCodeEditor
            title="Images Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Images</title>
</head>
<body>
    <h1>Images in HTML</h1>

    <!-- Basic Image -->
    <img src="https://picsum.photos/400/200" alt="Random beautiful image" width="400">

    <!-- Image with dimensions -->
    <img src="https://picsum.photos/200/200" alt="Square image" width="200" height="200">

    <!-- Image with styling -->
    <img src="https://picsum.photos/300/150" alt="Styled image"
         style="border-radius: 10px; border: 2px solid #333;">

    <!-- Image as link -->
    <a href="https://www.example.com">
        <img src="https://picsum.photos/200/100" alt="Clickable image">
    </a>

    <!-- Responsive image -->
    <img src="https://picsum.photos/800/300" alt="Responsive image"
         style="max-width: 100%; height: auto;">

    <!-- Figure with caption -->
    <figure>
        <img src="https://picsum.photos/300/200" alt="Caption example" width="300">
        <figcaption>This is a caption for the image</figcaption>
    </figure>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which attribute is required for the <img> tag?",
                options: ["width", "height", "alt", "title"],
                correctAnswer: 2,
                explanation: "The alt attribute is required for accessibility and provides text if the image can't load."
              },
              {
                question: "What does target='_blank' do?",
                options: [
                  "Opens link in same tab",
                  "Opens link in a new tab or window",
                  "Closes the current page",
                  "Downloads the file"
                ],
                correctAnswer: 1,
                explanation: "target='_blank' opens the linked page in a new browser tab or window."
              }
            ]}
          />

          <Exercise
            question="Create a webpage with two images: 1) One using a relative path (e.g., images/logo.png), 2) One using an absolute path (e.g., https://picsum.photos/300/200). Use alt, width, and height attributes for each image."
            hint="Relative paths are relative to the current file location. Absolute paths include the full URL starting with http:// or https://"
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Image Paths Practice</title>
</head>
<body>
    <h1>Image Paths Practice</h1>

    <h2>Relative Path Image</h2>
    <img src="images/logo.png" alt="Website Logo" width="200" height="100">

    <h2>Absolute Path Image</h2>
    <img src="https://picsum.photos/300/200" alt="Random Beautiful Image" width="300" height="200">

    <p>Note: The relative image won't load without the actual file, but the absolute URL will work!</p>
</body>
</html>`}
          />

          <Exercise
            question="Create a world map image with an image map that has 3 clickable regions (North America, Europe, Asia). When clicked, each region should open a different webpage using target='_blank' for a new tab."
            hint="Use the &lt;map&gt; and &lt;area&gt; tags. The area tag needs shape, coords, href, alt, and target attributes."
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Image Map Practice</title>
</head>
<body>
    <h1>World Map with Clickable Regions</h1>

    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
         alt="World Map"
         usemap="#worldmap"
         width="800" height="400"
         style="border: 2px solid #333;">

    <map name="worldmap">
        <!-- North America -->
        <area shape="rect"
              coords="50,50,250,200"
              href="https://en.wikipedia.org/wiki/North_America"
              alt="North America"
              target="_blank">

        <!-- Europe -->
        <area shape="rect"
              coords="350,50,500,180"
              href="https://en.wikipedia.org/wiki/Europe"
              alt="Europe"
              target="_blank">

        <!-- Asia -->
        <area shape="rect"
              coords="500,50,750,250"
              href="https://en.wikipedia.org/wiki/Asia"
              alt="Asia"
              target="_blank">
    </map>

    <p><em>Click on different regions of the map to learn more!</em></p>
</body>
</html>`}
          />

          <Exercise
            question="Create two pages: page1.html and page2.html. In page1.html, create a link to page2.html using a relative path, and also create a link to a specific section (id='section2') on the same page."
            hint="Internal links use # followed by the id. External file links use the filename directly for files in the same folder."
            solution={`<!-- page1.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Page 1</title>
</head>
<body>
    <h1 id="top">Welcome to Page 1</h1>

    <nav>
        <a href="#section2">Go to Section 2 on this page</a> |
        <a href="page2.html">Go to Page 2</a>
    </nav>

    <section id="section1">
        <h2>Section 1</h2>
        <p>This is section 1 content.</p>
    </section>

    <section id="section2">
        <h2>Section 2</h2>
        <p>This is section 2 content.</p>
        <a href="#top">Back to top</a>
    </section>
</body>
</html>

<!-- page2.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Page 2</title>
</head>
<body>
    <h1>Welcome to Page 2</h1>
    <p>This is a separate page linked from page1.html</p>
    <a href="page1.html">Back to Page 1</a>
</body>
</html>`}
          />
        </div>
      )
    },

    'lists': {
      id: 'lists',
      title: 'HTML Lists',
      icon: <List className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Creating Lists</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              HTML supports three types of lists: <strong>ordered</strong>, <strong>unordered</strong>, and <strong>description</strong> lists.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Unordered List</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">&lt;ul&gt; with &lt;li&gt;</p>
                <p className="text-xs text-gray-500">Bulleted points</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Ordered List</h5>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">&lt;ol&gt; with &lt;li&gt;</p>
                <p className="text-xs text-gray-500">Numbered points</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Description List</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</p>
                <p className="text-xs text-gray-500">Term-definition pairs</p>
              </div>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Lists Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Lists</title>
</head>
<body>
    <h1>Types of Lists</h1>

    <h2>Unordered List (Bullets)</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>

    <h2>Ordered List (Numbers)</h2>
    <ol>
        <li>Plan the project</li>
        <li>Write the code</li>
        <li>Test thoroughly</li>
        <li>Deploy to production</li>
    </ol>

    <h2>Nested Lists</h2>
    <ul>
        <li>Frontend Development
            <ul>
                <li>HTML</li>
                <li>CSS
                    <ul>
                        <li>Flexbox</li>
                        <li>Grid</li>
                    </ul>
                </li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend Development
            <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        </li>
    </ul>

    <h2>Description List</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language - the standard markup language for web pages</dd>

        <dt>CSS</dt>
        <dd>Cascading Style Sheets - used for styling HTML elements</dd>

        <dt>JavaScript</dt>
        <dd>A programming language that adds interactivity to web pages</dd>
    </dl>
</body>
</html>`}
          />

          <Exercise
            question="Create an ordered list of steps to make a cup of tea: 1) Boil water, 2) Add tea leaves, 3) Pour hot water, 4) Wait 3 minutes, 5) Enjoy!"
            hint="Use <ol> for ordered list and <li> for each item"
            solution={`<ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Pour hot water</li>
    <li>Wait 3 minutes</li>
    <li>Enjoy!</li>
</ol>`}
          />

          <Quiz
            questions={[
              {
                question: "Which tag is used to create an unordered (bulleted) list?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                correctAnswer: 1,
                explanation: "The <ul> tag creates an unordered list with bullet points, while <ol> creates an ordered/numbered list."
              },
              {
                question: "What is the correct way to create a nested list in HTML?",
                options: [
                  "Put one <ul> inside another <ul>",
                  "Use the <nested> tag",
                  "Use the <list> tag with type='nested'",
                  "Simply use more <li> elements"
                ],
                correctAnswer: 0,
                explanation: "Nested lists are created by placing a <ul> or <ol> inside an <li> element of the parent list."
              },
              {
                question: "Which HTML tag pair is used to create description list terms?",
                options: ["<dd> and </dd>", "<dt> and </dt>", "<dl> and </dl>", "<li> and </li>"],
                correctAnswer: 1,
                explanation: "<dt> (description term) is used to define terms in a description list, while <dd> is used for the descriptions themselves."
              }
            ]}
          />
        </div>
      )
    },

    'tables': {
      id: 'tables',
      title: 'HTML Tables',
      icon: <Table className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Creating Tables</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tables are used to display data in rows and columns. The main table elements are:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6">
              <p className="text-orange-600">&lt;table&gt;</p>
              <p className="text-blue-600 ml-4">&lt;thead&gt;</p>
              <p className="text-green-600 ml-8">&lt;tr&gt;</p>
              <p className="text-purple-600 ml-12">&lt;th&gt;Header&lt;/th&gt;</p>
              <p className="text-green-600 ml-8">&lt;/tr&gt;</p>
              <p className="text-blue-600 ml-4">&lt;/thead&gt;</p>
              <p className="text-blue-600 ml-4">&lt;tbody&gt;</p>
              <p className="text-green-600 ml-8">&lt;tr&gt;</p>
              <p className="text-purple-600 ml-12">&lt;td&gt;Data&lt;/td&gt;</p>
              <p className="text-green-600 ml-8">&lt;/tr&gt;</p>
              <p className="text-blue-600 ml-4">&lt;/tbody&gt;</p>
              <p className="text-orange-600">&lt;/table&gt;</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Tables Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML Tables</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #333; padding: 12px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Student Grades Table</h1>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Math</th>
                <th>Science</th>
                <th>English</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice Johnson</td>
                <td>95</td>
                <td>88</td>
                <td>92</td>
                <td>275</td>
            </tr>
            <tr>
                <td>Bob Smith</td>
                <td>78</td>
                <td>85</td>
                <td>80</td>
                <td>243</td>
            </tr>
            <tr>
                <td>Carol Davis</td>
                <td>92</td>
                <td>90</td>
                <td>95</td>
                <td>277</td>
            </tr>
        </tbody>
    </table>

    <h2>Course Schedule</h2>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 AM</td>
                <td>Math</td>
                <td>Science</td>
                <td>Math</td>
            </tr>
            <tr>
                <td>11:00 AM</td>
                <td>English</td>
                <td>Art</td>
                <td>English</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "What tag is used for table header cells?",
                options: ["<td>", "<th>", "<tr>", "<thead>"],
                correctAnswer: 1,
                explanation: "<th> defines header cells which are typically bold and centered by default."
              },
              {
                question: "What attribute merges cells horizontally?",
                options: ["rowspan", "colspan", "cellspacing", "cellpadding"],
                correctAnswer: 1,
                explanation: "colspan merges cells horizontally, while rowspan merges them vertically."
              }
            ]}
          />

          <Exercise
            question="Create an HTML table for a product catalog with columns: Product Name, Price, Stock Status. Include at least 4 products with realistic data. Use proper semantic table structure with thead and tbody."
            hint="Use table, thead, tbody, tr, th, and td tags. Add styling with CSS for better presentation."
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Product Catalog</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        tr:hover { background-color: #ddd; }
        .in-stock { color: green; font-weight: bold; }
        .out-of-stock { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Product Catalog</h1>
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wireless Mouse</td>
                <td>$29.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>Mechanical Keyboard</td>
                <td>$89.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>USB-C Hub</td>
                <td>$45.00</td>
                <td class="out-of-stock">Out of Stock</td>
            </tr>
            <tr>
                <td>Webcam HD</td>
                <td>$79.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>Monitor Stand</td>
                <td>$35.50</td>
                <td class="out-of-stock">Out of Stock</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}
          />

          <Exercise
            question="Create a class timetable using HTML tables with colspan and rowspan. The table should have time slots as rows and days of the week as columns. Merge cells where a class spans multiple periods."
            hint="Use colspan to merge horizontal cells and rowspan to merge vertical cells"
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Class Timetable</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #333; padding: 15px; text-align: center; }
        th { background-color: #2196F3; color: white; }
        td { background-color: #f9f9f9; }
        .math { background-color: #FFECB3; }
        .science { background-color: #C8E6C9; }
        .english { background-color: #BBDEFB; }
        .break { background-color: #E1BEE7; }
        .lunch { background-color: #FFCDD2; }
    </style>
</head>
<body>
    <h1>Weekly Class Timetable</h1>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8:00 - 9:00</td>
                <td class="math" colspan="2">Mathematics</td>
                <td class="english" colspan="2">English</td>
                <td class="science">Science</td>
            </tr>
            <tr>
                <td>9:00 - 10:00</td>
                <td class="break" colspan="5">Short Break</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td class="science">Science</td>
                <td class="english">English</td>
                <td class="math">Mathematics</td>
                <td class="science">Science</td>
                <td class="english">English</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td class="english">English</td>
                <td class="science" colspan="2">Science Lab</td>
                <td class="math">Mathematics</td>
                <td class="math">Mathematics</td>
            </tr>
            <tr>
                <td>12:00 - 1:00</td>
                <td class="lunch" colspan="5">Lunch Break</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}
          />
        </div>
      )
    },

    'forms': {
      id: 'forms',
      title: 'HTML Forms',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">HTML Forms</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Forms are used to collect user input. They contain various form elements like text fields, checkboxes, radio buttons, and submit buttons.
            </p>

            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Form Elements</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { tag: '<input type="text">', desc: 'Text input' },
                { tag: '<input type="password">', desc: 'Password' },
                { tag: '<input type="email">', desc: 'Email input' },
                { tag: '<input type="checkbox">', desc: 'Checkbox' },
                { tag: '<input type="radio">', desc: 'Radio button' },
                { tag: '<select>', desc: 'Dropdown' },
                { tag: '<textarea>', desc: 'Multi-line text' },
                { tag: '<button>', desc: 'Clickable button' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <code className="text-xs text-blue-600 dark:text-blue-400">{item.tag}</code>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Complete Form Example"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    <style>
        form { max-width: 400px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover { background: #45a049; }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Registration Form</h1>

    <form action="/submit" method="POST">
        <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name">
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="example@email.com">
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="8">
        </div>

        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
            </select>
        </div>

        <div class="form-group">
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male" style="display: inline;">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female" style="display: inline;">Female</label>
        </div>

        <div class="form-group">
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms" style="display: inline;">I agree to the terms</label>
        </div>

        <div class="form-group">
            <label for="bio">Bio:</label>
            <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself"></textarea>
        </div>

        <button type="submit">Register</button>
        <button type="reset">Reset</button>
    </form>
</body>
</html>`}
          />

          <Exercise
            question="Create a simple login form with fields for username, password, and a submit button"
            hint="Use input types 'text' and 'password', and don't forget the form tags!"
            solution={`<form action="/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Login</button>
</form>`}
          />

          <Quiz
            questions={[
              {
                question: "Which input type is used for single-select options where only one can be chosen?",
                options: ["checkbox", "text", "radio", "select"],
                correctAnswer: 2,
                explanation: "Radio buttons (<input type='radio'>) are used when only one option can be selected from a group. Checkboxes allow multiple selections."
              },
              {
                question: "What does the 'required' attribute do in a form input?",
                options: [
                  "Pre-fills the field with default data",
                  "Makes the field mandatory before form submission",
                  "Encrypts the input data",
                  "Validates that the input contains only numbers"
                ],
                correctAnswer: 1,
                explanation: "The 'required' attribute prevents form submission if the field is empty, ensuring users provide necessary information."
              },
              {
                question: "Which element creates a multi-line text input area?",
                options: ["<input type='textarea'>", "<textarea>", "<textbox>", "<input type='multiline'>"],
                correctAnswer: 1,
                explanation: "The <textarea> element creates a multi-line text input area that users can type multiple lines of text into."
              }
            ]}
          />
        </div>
      )
    },

    'multimedia': {
      id: 'multimedia',
      title: 'HTML5 Multimedia',
      icon: <Play className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Audio & Video in HTML5</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              HTML5 introduced native support for audio and video without needing plugins like Flash.
            </p>

            <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-2">Video Element</h4>
              <p className="text-sm">Supports MP4, WebM, and Ogg formats</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white mb-6">
              <h4 className="font-bold mb-2">Audio Element</h4>
              <p className="text-sm">Supports MP3, WAV, and Ogg formats</p>
            </div>
          </div>

          <InteractiveCodeEditor
            title="Multimedia Demo"
            language="html"
            initialCode={`<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Multimedia</title>
    <style>
        .media-container {
            margin: 20px 0;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>HTML5 Multimedia</h1>

    <!-- Video Element -->
    <div class="media-container">
        <h2>Video Player</h2>
        <video width="400" controls poster="https://picsum.photos/400/200">
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><em>Video controls: Play, Pause, Volume, Fullscreen</em></p>
    </div>

    <!-- Audio Element -->
    <div class="media-container">
        <h2>Audio Player</h2>
        <audio controls>
            <source src="music.mp3" type="audio/mpeg">
            <source src="music.ogg" type="audio/ogg">
            Your browser does not support the audio element.
        </audio>
        <p><em>Audio controls: Play, Pause, Volume, Seek</em></p>
    </div>

    <!-- YouTube Embed -->
    <div class="media-container">
        <h2>Embedded YouTube Video</h2>
        <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>

    <!-- IFrame for Maps -->
    <div class="media-container">
        <h2>Embedded Google Maps</h2>
        <iframe
            width="400"
            height="300"
            src="https://www.google.com/maps/embed?pb=..."
            style="border:0;"
            allowfullscreen>
        </iframe>
    </div>
</body>
</html>`}
          />

          <Quiz
            questions={[
              {
                question: "Which attribute enables video controls like play/pause?",
                options: ["controls", "autoplay", "muted", "loop"],
                correctAnswer: 0,
                explanation: "The controls attribute adds video controls (play, pause, volume, etc.) to the video player."
              },
              {
                question: "What element is used to embed external web content?",
                options: ["<video>", "<audio>", "<iframe>", "<embed>"],
                correctAnswer: 2,
                explanation: "<iframe> is used to embed external content like YouTube videos, Google Maps, or other web pages."
              }
            ]}
          />

          <Exercise
            question="Create an HTML page with an embedded YouTube video using iframe. The video should have a width of 560px and height of 315px. Also add a fallback message for browsers that don't support iframes."
            hint="Use iframe with src pointing to a YouTube embed URL, and include width, height, and frameborder attributes"
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Embedded YouTube Video</title>
</head>
<body>
    <h1>Learning Web Development</h1>

    <h2>Introduction to HTML5</h2>

    <div class="video-container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qz0aGYrrwhU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            Your browser does not support iframe.
        </iframe>
    </div>

    <p><em>Watch this video to learn the basics of HTML5!</em></p>
</body>
</html>`}
          />

          <Exercise
            question="Create an audio player page that uses the HTML5 audio element. Include multiple source formats for browser compatibility (mp3, ogg, wav). Add attributes like controls, autoplay (commented out), loop, and muted."
            hint="Use the audio tag with multiple source elements inside it. The browser will use the first format it supports."
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Audio Player</title>
</head>
<body>
    <h1>Music Player</h1>

    <h2>Relaxing Music</h2>

    <audio controls loop muted>
        <source src="music.mp3" type="audio/mpeg">
        <source src="music.ogg" type="audio/ogg">
        <source src="music.wav" type="audio/wav">
        Your browser does not support the audio element.
    </audio>

    <h2>Audio Features</h2>
    <ul>
        <li><strong>controls</strong> - Shows play, pause, volume buttons</li>
        <li><strong>loop</strong> - Repeats the audio continuously</li>
        <li><strong>autoplay</strong> - Starts playing automatically (currently disabled)</li>
        <li><strong>muted</strong> - Starts muted (remove for sound)</li>
    </ul>

    <p><em>Note: You need actual audio files for this to work!</em></p>
</body>
</html>`}
          />

          <Exercise
            question="Create a video gallery page with two video elements. First video should autoplay and be muted. Second video should have a poster image and play controls. Include width and height for both."
            hint="Use video tag with autoplay, muted, controls attributes. Poster attribute shows an image before the video loads."
            solution={`<!DOCTYPE html>
<html>
<head>
    <title>Video Gallery</title>
    <style>
        .video-wrapper {
            display: inline-block;
            margin: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 10px;
        }
        h1 { text-align: center; }
        h3 { text-align: center; margin-bottom: 10px; }
    </style>
</head>
<body>
    <h1>Video Gallery</h1>

    <div class="video-wrapper">
        <h3>Autoplay Video (Muted)</h3>
        <video width="400" autoplay muted loop>
            <source src="background.mp4" type="video/mp4">
            <source src="background.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><small>This video autoplays with sound muted</small></p>
    </div>

    <div class="video-wrapper">
        <h3>Interactive Video</h3>
        <video width="400" controls poster="https://picsum.photos/400/225">
            <source src="presentation.mp4" type="video/mp4">
            <source src="presentation.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><small>Click play to start the video</small></p>
    </div>
</body>
</html>`}
          />
        </div>
      )
    },

    'semantic': {
      id: 'semantic',
      title: 'Semantic HTML',
      icon: <Layout className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Semantic HTML Elements</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Semantic HTML elements clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Why Semantic HTML?</h4>
              <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                <li>✅ Better accessibility for screen readers</li>
                <li>✅ Improved SEO (Search Engine Optimization)</li>
                <li>✅ Easier to maintain and understand code</li>
                <li>✅ Standardized structure across websites</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { tag: '<header>', desc: 'Introductory content or navigation links' },
                { tag: '<nav>', desc: 'Navigation links section' },
                { tag: '<main>', desc: 'Main content of the document' },
                { tag: '<article>', desc: 'Self-contained content' },
                { tag: '<section>', desc: 'Thematic grouping of content' },
                { tag: '<aside>', desc: 'Content aside from main content' },
                { tag: '<footer>', desc: 'Footer for a section or page' },
                { tag: '<figure>', desc: 'Self-contained content (images, diagrams)' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <code className="text-sm text-blue-600 dark:text-blue-400">{item.tag}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InteractiveCodeEditor
            title="Semantic HTML Structure"
            language="html"
            initialCode={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Page Layout</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; }
        header, nav, main, article, aside, footer {
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
        }
        header { background: #333; color: white; }
        nav { background: #666; }
        nav a { color: white; margin-right: 15px; }
        main { background: #f4f4f4; }
        article { background: white; }
        aside { background: #ddd; }
        footer { background: #333; color: white; }
    </style>
</head>
<body>
    <header>
        <h1>My Personal Blog</h1>
        <p>Sharing thoughts on web development</p>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
    </nav>

    <main>
        <article>
            <header>
                <h2>Understanding Semantic HTML</h2>
                <p>Published on January 15, 2024</p>
            </header>
            <p>Semantic HTML elements clearly describe their meaning...</p>
            <footer>
                <p>Author: John Doe | 5 min read</p>
            </footer>
        </article>

        <article>
            <header>
                <h2>CSS Grid vs Flexbox</h2>
                <p>Published on January 10, 2024</p>
            </header>
            <p>Both CSS Grid and Flexbox are powerful layout tools...</p>
            <footer>
                <p>Author: John Doe | 7 min read</p>
            </footer>
        </article>
    </main>

    <aside>
        <h3>About Me</h3>
        <p>Web developer passionate about accessibility.</p>
        <h3>Categories</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 My Personal Blog. All rights reserved.</p>
    </footer>
</body>
</html>`}
          />

          <Exercise
            question="Convert this non-semantic HTML to semantic HTML using appropriate semantic tags: A div with id='header' containing navigation links, a div with id='main' containing articles, and a div with id='footer' containing copyright info."
            hint="Think about which semantic tags describe the purpose of each section"
            solution={`<header>
    <nav>
        <!-- navigation links here -->
    </nav>
</header>

<main>
    <article>
        <!-- article content here -->
    </article>
</main>

<footer>
    <p>&copy; 2024 Your Company</p>
</footer>`}
          />

          <Quiz
            questions={[
              {
                question: "Which semantic element should be used for the main navigation links of a website?",
                options: ["<div class='nav'>", "<navigation>", "<nav>", "<menu>"],
                correctAnswer: 2,
                explanation: "The <nav> element is specifically designed for navigation links and helps screen readers and search engines understand the site's navigation structure."
              },
              {
                question: "What is the primary purpose of using semantic HTML elements?",
                options: [
                  "To make the page load faster",
                  "To improve code readability for developers only",
                  "To provide meaning and structure that browsers and assistive technologies can understand",
                  "To reduce the number of HTML tags needed"
                ],
                correctAnswer: 2,
                explanation: "Semantic HTML provides meaning to both browsers and developers, improving accessibility, SEO, and code maintainability."
              },
              {
                question: "Which element is most appropriate for a blog post that could stand alone as independent content?",
                options: ["<div class='post'>", "<section>", "<article>", "<main>"],
                correctAnswer: 2,
                explanation: "The <article> element is designed for self-contained content that could be independently distributed or reused, like blog posts, news articles, or forum posts."
              }
            ]}
          />
        </div>
      )
    }
  };

  const topicList = Object.values(topics);

  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Code className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Chapter 2: HTML Fundamentals</h1>
            <p className="text-white/80">Master HTML tags, elements, forms, tables, lists, images, and multimedia content</p>
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
          const isCompleted = progress[`chapter2-${topic.id}`];

          return (
            <div
              key={topic.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                isExpanded ? 'border-orange-500' : 'border-transparent hover:border-gray-200 dark:border-gray-700'
              }`}
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
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
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg">Exercise</span>
                  )}
                  {topic.quiz && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg">Quiz</span>
                  )}
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
