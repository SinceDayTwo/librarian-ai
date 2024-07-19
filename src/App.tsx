import { DSProvider } from "@nypl/design-system-react-components";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <DSProvider>
      <div className="App">
        <header className="App-header" />
        <PageContainer />
      </div>
    </DSProvider>
  );
}

export default App;
