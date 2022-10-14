import Router from "./Router";
import Header from "./component/common/Header";
import DefaultLayout from "./styles/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Header />
      <Router />
    </DefaultLayout>
  );
}

export default App;

