import "./app.css";
import Hero from "./sections/hero";
import Nav from "./sections/nav";
import Software from "./sections/software";
import Footer from "./sections/footer";
import Flying from "./sections/flying";

function App() {
  return (
    <div className="bg-base-200" data-theme="retro">
      <Nav active={null}></Nav>
      <Hero></Hero>
      <Software></Software>
      <Flying></Flying>
      <Footer></Footer>
    </div>
  );
}

export default App;
