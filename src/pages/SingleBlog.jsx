import React from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowLeft, 
 
  Bookmark 
} from 'lucide-react';
import blog1 from '../assets/images/blog1.jpg';

function SingleBlog() {
  // Sample blog post data
  const blog = {
    id: 1,
    title: 'Getting Started with React in 2025',
    content: `
      <p>The React ecosystem continues to evolve rapidly in 2025, bringing new innovations and best practices for developers. This guide will walk you through everything you need to know to build modern applications with React today.</p>
      
      <h2>Setting Up Your Development Environment</h2>
      <p>Before diving into React development, it's essential to set up an efficient development environment. Here are the tools you'll need:</p>
      <ul>
        <li><strong>Node.js and npm:</strong> The foundation of your React development environment</li>
        <li><strong>Modern code editor:</strong> VSCode with React extensions is highly recommended</li>
        <li><strong>React DevTools:</strong> Essential browser extension for debugging</li>
      </ul>
      
      <p>To create a new React application, you now have several excellent options:</p>
      
      <pre><code>
// Using Create React App (still relevant in 2025)
npx create-react-app my-app

// Using Vite (increasingly popular)
npm create vite@latest my-app -- --template react

// Using Next.js for full-stack applications
npx create-next-app@latest my-app
      </code></pre>
      
      <h2>Understanding Modern React Patterns</h2>
      <p>React has evolved significantly since its introduction. Here are some key patterns every React developer should understand in 2025:</p>
      
      <h3>1. Hooks and Function Components</h3>
      <p>Functional components with hooks have completely replaced class components as the standard way to write React. The core hooks you'll use regularly include:</p>
      
      <pre><code>
// State management
const [count, setCount] = useState(0);

// Side effects
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// Context consumption
const theme = useContext(ThemeContext);

// Performance optimization
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      </code></pre>
      
      <h3>2. Server Components</h3>
      <p>Introduced with React 18 and now mainstream in 2025, Server Components allow parts of your React tree to render on the server, reducing bundle size and improving performance:</p>
      
      <pre><code>
// This component renders on the server
// and its JS is never sent to the client
export default async function ServerComponent() {
  const data = await fetchData();
  return <div>{data.map(item => <p>{item.name}</p>)}</div>;
}
      </code></pre>
      
      <p>Server Components work best with frameworks like Next.js that have built-in support for this pattern.</p>
      
      <h2>State Management in 2025</h2>
      <p>The state management landscape has settled considerably, with several patterns emerging as standards:</p>
      
      <h3>1. React Context + useReducer</h3>
      <p>For many applications, React's built-in context API combined with useReducer provides sufficient state management capabilities:</p>
      
      <pre><code>
// Create a context
const TodoContext = createContext();

// Provider component
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Consumer component
function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button 
            onClick={() => dispatch({ 
              type: 'TOGGLE_TODO', 
              id: todo.id 
            })}
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
}
      </code></pre>
      
      <h3>2. External Libraries</h3>
      <p>For complex applications, external state management libraries still have their place. In 2025, the most popular options are:</p>
      <ul>
        <li><strong>Jotai:</strong> Atomic approach to React state management</li>
        <li><strong>Zustand:</strong> Simple yet powerful state management</li>
        <li><strong>Redux Toolkit:</strong> A much improved Redux experience</li>
      </ul>
      
      <h2>Building for Performance</h2>
      <p>Performance optimization remains crucial for React applications. Here are some best practices for 2025:</p>
      
      <h3>1. Code Splitting</h3>
      <p>Use dynamic imports to split your code into smaller chunks that load on demand:</p>
      
      <pre><code>
import { lazy, Suspense } from 'react';

// Lazy load a component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyApp() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
      </code></pre>
      
      <h3>2. Memoization</h3>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders:</p>
      
      <pre><code>
// Memoize a component
const MemoizedComponent = React.memo(MyComponent);

// Memoize a value
const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);

// Memoize a callback
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>React in 2025 offers a mature and powerful environment for building web applications. By embracing modern patterns like Server Components, effective state management strategies, and performance optimization techniques, you can create fast, responsive, and maintainable applications.</p>
      
      <p>The key is to stay focused on the fundamentals while thoughtfully adopting the innovations that best serve your project's needs. Happy coding!</p>
    `,
    author: 'Sarah Johnson',
    authorRole: 'Senior Frontend Developer',
    authorBio: 'Sarah has been working with React for over 8 years and specializes in building performant web applications. She frequently speaks at tech conferences and contributes to open-source projects.',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    date: 'May 10, 2025',
    readTime: '8 min read',
    category: 'Development',
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    likes: 237,
    comments: 42,
    image: blog1,
    relatedPosts: [
      {
        id: 2,
        title: 'Advanced React Hooks: Beyond the Basics',
        excerpt: 'Take your React skills to the next level with advanced hook patterns.',
        image: blog1,
        category: 'Development',
        date: 'May 5, 2025',
      },
      {
        id: 3,
        title: 'Building Accessible React Applications',
        excerpt: 'Learn how to make your React apps accessible to all users.',
        image: blog1,
        category: 'Design',
        date: 'May 2, 2025',
      },
      {
        id: 4,
        title: 'State Management Strategies for React',
        excerpt: 'Compare different approaches to managing state in React applications.',
        image: blog1,
        category: 'Development',
        date: 'April 28, 2025',
      }
    ]
  };

  // Parse HTML content
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Image */}
      <div className="w-full h-64 md:h-80 bg-gray-100 relative">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="max-w-5xl mx-auto">
            <button className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-xs mb-2 transition">
              {blog.category}
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-white">{blog.title}</h1>
         
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with Related Posts - Now on the left */}
          <div className="md:w-1/4 order-2 md:order-1">
            <div className="sticky top-4">
              {/* Related Posts Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 className="text-sm font-semibold border-b pb-2 mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blog.relatedPosts.map(post => (
                    <div key={post.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-24 object-cover rounded-md mb-2"
                      />
                      <div className="text-xs text-blue-600 mb-1">{post.category}</div>
                      <h4 className="text-sm font-medium hover:text-blue-600 transition">
                        <a href="#">{post.title}</a>
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
                      <div className="text-xs text-gray-500 mt-2">{post.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Section */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-semibold border-b pb-2 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Now Moved Right */}
          <div className="md:w-3/4 order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Post Meta */}
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div className="flex items-center">
                  <img 
                    src={blog.authorAvatar} 
                    alt={blog.author} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm font-medium">{blog.author}</div>
                    <div className="text-xs text-gray-500">{blog.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{blog.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-sm max-w-none mb-8">
                <div dangerouslySetInnerHTML={createMarkup(blog.content)} />
              </div>

              {/* Author Bio */}
              <div className="bg-gray-100 rounded-xl p-4 mb-8">
                <div className="flex items-start">
                  <img 
                    src={blog.authorAvatar} 
                    alt={blog.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">About {blog.author}</h3>
                    <p className="text-xs text-gray-600 mt-1">{blog.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Comments Section Header */}
              <div className="border-b pb-3 mb-6">
                <h3 className="text-base font-semibold">Comments ({blog.comments})</h3>
              </div>

              {/* Sample Comment */}
              <div className="mb-4 pb-4 border-b">
                <div className="flex items-start">
                  <img 
                    src="https://i.pravatar.cc/150?img=2" 
                    alt="Commenter" 
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium">Mike Williams</div>
                        <div className="text-xs text-gray-500">May 11, 2025</div>
                      </div>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Reply</button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Great article! I've been using Server Components for a few months now and they've significantly improved the performance of our app. Looking forward to your next post.
                    </p>
                    <div className="flex items-center mt-2">
                      <button className="flex items-center text-xs text-gray-500 hover:text-blue-600 mr-4">
                        <ThumbsUp size={12} className="mr-1" />
                        <span>14</span>
                      </button>
                      <button className="text-xs text-gray-500 hover:text-blue-600">
                        Show replies (3)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-3">Leave a Comment</h4>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3" 
                  rows={3}
                  placeholder="Write your comment..."
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 text-sm rounded-lg transition">
                  Post Comment
                </button>
              </div>

              {/* Back to All Articles */}
              <div className="mt-8 text-center">
                <a 
                  href="/blogs" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  <span>Back to all articles</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;