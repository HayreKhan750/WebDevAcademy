import { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, Code, Eye } from 'lucide-react';

interface ExerciseProps {
  question: string;
  hint?: string;
  solution?: string;
  validationCode?: string; // Custom JavaScript validation code
  acceptedAnswers?: string[]; // Multiple accepted answers (fuzzy matched)
  requiredKeywords?: string[]; // Important concepts that should be in the answer
  onComplete?: () => void;
}

export default function Exercise({
  question,
  hint,
  solution,
  validationCode,
  acceptedAnswers,
  requiredKeywords,
  onComplete
}: ExerciseProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  // Remove comments from code for validation
  const removeComments = (code: string): string => {
    // Remove single-line comments (// and #)
    let result = code.replace(/\/\/.*$/gm, '');
    result = result.replace(/#.*$/gm, '');
    // Remove multi-line comments (/* */)
    result = result.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove HTML comments
    result = result.replace(/<!--[\s\S]*?-->/g, '');
    return result;
  };

  // Normalize text for comparison - remove extra whitespace and punctuation
  const normalizeText = (text: string): string => {
    return text.trim()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[.,!?;:'"()[\]{}]/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/[']/g, '');
  };

  // Calculate Levenshtein distance for fuzzy matching
  const levenshteinDistance = (str1: string, str2: string): number => {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
    return dp[m][n];
  };

  // Calculate similarity percentage (0-100)
  const calculateSimilarity = (str1: string, str2: string): number => {
    if (str1 === str2) return 100;
    if (str1.length === 0 || str2.length === 0) return 0;

    const distance = levenshteinDistance(str1, str2);
    const maxLen = Math.max(str1.length, str2.length);
    return Math.round((1 - distance / maxLen) * 100);
  };

  // Check if answer contains required concepts (keyword-based with 75% match)
  const checkKeywordsPresent = (answer: string, keywords: string[]): boolean => {
    if (keywords.length === 0) return true;

    const normalizedAnswer = normalizeText(answer);
    const answerWords = normalizedAnswer.split(' ').filter(w => w.length > 0);

    let matchedKeywords = 0;

    for (const keyword of keywords) {
      const normalizedKeyword = normalizeText(keyword);
      let found = false;

      for (const word of answerWords) {
        if (word === normalizedKeyword ||
            word.includes(normalizedKeyword) ||
            normalizedKeyword.includes(word)) {
          found = true;
          break;
        }
      }

      if (found) {
        matchedKeywords++;
      }
    }

    const matchPercentage = (matchedKeywords / keywords.length) * 100;
    return matchPercentage >= 75;
  };

  // Check against multiple accepted answers (fuzzy match - 80% similarity)
  const checkAcceptedAnswers = (answer: string, accepted: string[]): boolean => {
    const normalizedAnswer = normalizeText(answer);

    for (const acceptedAnswer of accepted) {
      const normalizedAccepted = normalizeText(acceptedAnswer);

      if (normalizedAnswer === normalizedAccepted) {
        return true;
      }

      const similarity = calculateSimilarity(normalizedAnswer, normalizedAccepted);
      if (similarity >= 80) {
        return true;
      }
    }
    return false;
  };

  // Validate code structure - ignores comments
  const validateCode = (userCode: string, validationFn: string): boolean => {
    try {
      // Remove comments from user code
      const cleanCode = removeComments(userCode);
      const safeCode = cleanCode.replace(/"/g, '\\"').replace(/`/g, '\\`');
      const code = validationFn.replace('{answer}', `"${safeCode}"`);
      return new Function(code)();
    } catch {
      return false;
    }
  };

  // Check if code contains required elements (comments are ignored)
  const checkCodeStructure = (userCode: string, requiredElements: string[]): boolean => {
    // Remove comments first
    const cleanCode = removeComments(userCode).toLowerCase();

    for (const element of requiredElements) {
      if (!cleanCode.includes(element.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      setResult('incorrect');
      return;
    }

    let isCorrect = false;

    if (validationCode) {
      // Code validation - removes comments before checking
      isCorrect = validateCode(userAnswer, validationCode);
    } else if (acceptedAnswers && acceptedAnswers.length > 0) {
      isCorrect = checkAcceptedAnswers(userAnswer, acceptedAnswers);
    } else if (requiredKeywords && requiredKeywords.length > 0) {
      isCorrect = checkKeywordsPresent(userAnswer, requiredKeywords);
    } else if (solution) {
      // For code exercises without validationCode, check structural elements
      isCorrect = checkAcceptedAnswers(userAnswer, [solution]);
    } else {
      isCorrect = false;
    }

    setResult(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      onComplete?.();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Question Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Practice Exercise</h3>
            <p className="text-sm text-white/80">Test your understanding</p>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-6 space-y-6">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
          <p className="text-gray-800 dark:text-gray-200 font-medium">{question}</p>
        </div>

        {/* Answer Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Answer
          </label>
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
            placeholder="Write your code or answer here..."
          />
        </div>

        {/* Result Feedback */}
        {result && (
          <div className={`p-4 rounded-xl ${
            result === 'correct'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
          }`}>
            <div className="flex items-center gap-3">
              {result === 'correct' ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
              <div>
                <p className="font-bold">
                  {result === 'correct' ? 'Correct!' : 'Not quite right'}
                </p>
                <p className="text-sm opacity-80">
                  {result === 'correct'
                    ? 'Great job! Move on to the next topic.'
                    : 'Try again or check the hint for help.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={checkAnswer}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <CheckCircle className="w-5 h-5" />
            Check Answer
          </button>

          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 px-4 py-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-medium rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
            >
              <Lightbulb className="w-5 h-5" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}

          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Eye className="w-5 h-5" />
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
          )}
        </div>

        {/* Hint Content */}
        {showHint && hint && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Hint</p>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">{hint}</p>
              </div>
            </div>
          </div>
        )}

        {/* Solution Content */}
        {showSolution && solution && (
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
            <p className="font-medium text-purple-800 dark:text-purple-200 mb-2">Solution</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              {solution}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}