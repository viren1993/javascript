// useContext - is a hook that allows you to use the context in functional components
// Manages global state using the React Context API.

//Context provides a way to pass data through the component tree without having to pass props down manually at every level. 
// Context is designed to share data that can be considered “global” for a tree of React components, 
// such as the current authenticated user, theme, or preferred language. Using context, 
// we can avoid passing props through intermediate elements.

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {{ children }}
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
