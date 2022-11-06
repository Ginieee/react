import Custom from "./components/Custom";
import Default from "./components/Default";
import NavigationSlider from "./components/NavigationSlider";
import PaginationCustomSlider from "./components/PaginationCustomSlider";
import PaginationSlider from "./components/PaginationSlider";


function App() {


  return (
    <div className="App">
      <h1>Default</h1>
      <Default/>
      <h1>NavigationSlider</h1>
      <NavigationSlider/>
      <h1>PaginationSlider</h1>

      <PaginationSlider/>
      <h1>CustomPaginationSlider</h1>
      <PaginationCustomSlider/>
      <h1>Custom</h1>
      <Custom/>

    </div>
  );
}

export default App;
