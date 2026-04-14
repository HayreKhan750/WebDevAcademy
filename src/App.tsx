import { useState, useEffect } from 'react';
import { Home, BookOpen, Code, Play, CheckCircle, ChevronRight, ChevronLeft, Terminal, Eye, Zap, Brain, Trophy, Menu, X, Moon, Sun, ArrowRight, Layers, Database, Globe, Server, Monitor, User, LogOut, Settings, Palette } from 'lucide-react';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import Chapter6 from './chapters/Chapter6';
import HomePage from './components/HomePage';
import ProgressTracker from './components/ProgressTracker';
import AuthPage from './components/AuthPage';

type ChapterKey = 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4' | 'chapter5' | 'chapter6';

interface ChapterInfo {
  id: ChapterKey;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  progress: number;
  description: string;
  topics: number;
  exercises: number;
}

interface User {
  id: string;
  email: string;
  name: string;
}

function App() {
  const [currentChapter, setCurrentChapter] = useState<ChapterKey | 'home'>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('chapterProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    // Load user from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const handleAuthChange = (event: CustomEvent) => {
      if (event.detail) {
        setUser(event.detail);
        localStorage.setItem('user', JSON.stringify(event.detail));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    };

    window.addEventListener('authStateChange' as any, handleAuthChange);
    return () => window.removeEventListener('authStateChange' as any, handleAuthChange);
  }, []);

  const updateProgress = (chapterId: string, topicId: string, completed: boolean) => {
    const newProgress = { ...progress, [`${chapterId}-${topicId}`]: completed };
    setProgress(newProgress);
    localStorage.setItem('chapterProgress', JSON.stringify(newProgress));

    // Also save to Supabase if user is logged in
    if (user) {
      saveProgressToServer(user.id, newProgress);
    }
  };

  const saveProgressToServer = async (userId: string, progressData: Record<string, boolean>) => {
    // This would be replaced with actual Supabase call
    // For now, we just save to localStorage
    localStorage.setItem(`progress_${userId}`, JSON.stringify(progressData));
  };

  const loadProgressFromServer = async (userId: string) => {
    // This would be replaced with actual Supabase call
    const savedProgress = localStorage.getItem(`progress_${userId}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
      localStorage.setItem('chapterProgress', savedProgress);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setShowUserMenu(false);
    window.dispatchEvent(new CustomEvent('authStateChange', { detail: null }));
  };

  const getChapterProgress = (chapterId: string, totalTopics: number): number => {
    const completed = Object.keys(progress).filter(
      key => key.startsWith(chapterId) && progress[key]
    ).length;
    return Math.round((completed / totalTopics) * 100);
  };

  const chapters: ChapterInfo[] = [
    {
      id: 'chapter1',
      title: 'Chapter 1',
      subtitle: 'Introduction to Internet Programming',
      icon: <Globe className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-500',
      progress: getChapterProgress('chapter1', 12),
      description: 'Learn the fundamentals of the Internet, WWW, HTTP protocol, TCP/IP, DNS, URLs, and client-server architecture.',
      topics: 12,
      exercises: 8
    },
    {
      id: 'chapter2',
      title: 'Chapter 2',
      subtitle: 'HTML Fundamentals',
      icon: <Code className="w-8 h-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-500',
      progress: getChapterProgress('chapter2', 20),
      description: 'Master HTML tags, elements, attributes, forms, tables, lists, images, and multimedia content.',
      topics: 20,
      exercises: 15
    },
    {
      id: 'chapter3',
      title: 'Chapter 3',
      subtitle: 'JavaScript Basics',
      icon: <Terminal className="w-8 h-8" />,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-500',
      progress: getChapterProgress('chapter3', 18),
      description: 'Learn JavaScript fundamentals: variables, operators, conditionals, loops, functions, and arrays.',
      topics: 18,
      exercises: 12
    },
    {
      id: 'chapter4',
      title: 'Chapter 4',
      subtitle: 'Advanced JavaScript & jQuery',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-500',
      progress: getChapterProgress('chapter4', 20),
      description: 'Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery.',
      topics: 20,
      exercises: 15
    },
    {
      id: 'chapter5',
      title: 'Chapter 5',
      subtitle: 'CSS - Styling the Web',
      icon: <Palette className="w-8 h-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      borderColor: 'border-pink-500',
      progress: getChapterProgress('chapter5', 26),
      description: 'Master CSS: selectors, box model, flexbox, grid, responsive design, animations, and modern CSS3 features.',
      topics: 26,
      exercises: 18
    },
    {
      id: 'chapter6',
      title: 'Chapter 6',
      subtitle: 'PHP & Server-Side Programming',
      icon: <Server className="w-8 h-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-500',
      progress: getChapterProgress('chapter6', 24),
      description: 'Learn PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity.',
      topics: 24,
      exercises: 16
    }
  ];

  const renderChapter = () => {
    switch (currentChapter) {
      case 'chapter1':
        return <Chapter1 progress={progress} updateProgress={updateProgress} />;
      case 'chapter2':
        return <Chapter2 progress={progress} updateProgress={updateProgress} />;
      case 'chapter3':
        return <Chapter3 progress={progress} updateProgress={updateProgress} />;
      case 'chapter4':
        return <Chapter4 progress={progress} updateProgress={updateProgress} />;
      case 'chapter5':
        return <Chapter5 progress={progress} updateProgress={updateProgress} />;
      case 'chapter6':
        return <Chapter6 progress={progress} updateProgress={updateProgress} />;
      default:
        return <HomePage chapters={chapters} setCurrentChapter={setCurrentChapter} />;
    }
  };

  const totalProgress = Math.round(
    chapters.reduce((acc, ch) => acc + ch.progress, 0) / chapters.length
  );

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setShowAuth(false);
    localStorage.setItem('user', JSON.stringify(userData));
    loadProgressFromServer(userData.id);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setCurrentChapter('home')}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">WebDev Academy</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Interactive Learning Platform</p>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <ProgressTracker progress={totalProgress} />

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="hidden md:block text-sm text-gray-700 dark:text-gray-300">{user.name}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-gray-800 dark:text-white">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { setShowUserMenu(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <User className="w-4 h-4" />
                        Profile
                      </button>
                      <button
                        onClick={() => { setShowUserMenu(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:block">Sign In</span>
                </button>
              )}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${sidebarOpen ? 'w-64' : 'w-20'}`}
        >
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              {sidebarOpen && <span className="text-sm">Collapse</span>}
            </button>
          </div>

          <nav className="px-2 space-y-1 overflow-y-auto max-h-[calc(100vh-12rem)]">
            <button
              onClick={() => { setCurrentChapter('home'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
                currentChapter === 'home'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Home className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium whitespace-nowrap">Home</span>}
            </button>

            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => { setCurrentChapter(chapter.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
                  currentChapter === chapter.id
                    ? `bg-gradient-to-r ${chapter.bgColor.replace('bg-', 'from-').replace('/20', '-500').replace('-50', '-400')} ${chapter.color} shadow-lg`
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className={sidebarOpen ? chapter.color : chapter.color}>{chapter.icon}</span>
                {sidebarOpen && (
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{chapter.title}</p>
                    <p className="text-xs opacity-75 truncate whitespace-nowrap overflow-hidden text-overflow-ellipsis">{chapter.subtitle}</p>
                  </div>
                )}
              </button>
            ))}
          </nav>

          {sidebarOpen && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 text-white">
                <Trophy className="w-8 h-8 mb-2" />
                <p className="font-bold">Keep Learning!</p>
                <p className="text-sm opacity-90">Complete all chapters to earn your certificate</p>
                <div className="mt-2 bg-white/30 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{ width: `${totalProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className={`pt-16 min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
          <div className="container mx-auto px-4 py-8">
            {showAuth ? (
              <AuthPage onAuthSuccess={handleAuthSuccess} onClose={() => setShowAuth(false)} />
            ) : (
              renderChapter()
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
