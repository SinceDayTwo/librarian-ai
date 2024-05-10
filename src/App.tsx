import { DSProvider } from "@nypl/design-system-react-components";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <DSProvider>
      <div className="App">
        <header className="App-header" />
        <SearchForm />
      </div>
    </DSProvider>
  );
}

export default App;
