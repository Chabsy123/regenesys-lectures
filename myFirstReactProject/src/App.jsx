import "./App.css";
// how to import a css file

import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const name = "Abu";
  const iceCreamData = [
    {
      title: "Grasslands in the Southwest",
      img: "https://content.pexels.com/aigc-bundle/images/b2c8a7c9-6a67-416f-8da9-076820e53c0e.jpg",
      para: "The grasslands of the southwestern United States are among the most diverse ecosystems on the planet.",
    },
    {
      title: "Grasslands in the Southwest",
      img: "https://content.pexels.com/aigc-bundle/images/b2c8a7c9-6a67-416f-8da9-076820e53c0e.jpg",
      para: "The grasslands of the southwestern United States are among the most diverse ecosystems on the planet.",
    },
    {
      title: "Grasslands in the Southwest",
      img: "https://content.pexels.com/aigc-bundle/images/b2c8a7c9-6a67-416f-8da9-076820e53c0e.jpg",
      para: "The grasslands of the southwestern United States are among the most diverse ecosystems on the planet.",
    },
    {
      title: "Grasslands in the Southwest",
      img: "https://content.pexels.com/aigc-bundle/images/b2c8a7c9-6a67-416f-8da9-076820e53c0e.jpg",
      para: "The grasslands of the southwestern United States are among the most diverse ecosystems on the planet.",
    },
  ];

  return (
    <>
      <Navbar />
      <h2>This is {name}</h2>
      {
        // the reason why foreach didn't work in the code below is that map() works in JSX because it creates and returns a brand-new array containing your <Card/> components, which React requires to render elements onto the screen, whereas forEach() only runs a loop for side effects and explicitly returns undefined, leaving React with nothing to display.
        iceCreamData.map((iceCreamData, idx) => (
          <Card
            key = {idx}
            // in order to give a unique key to each picture
            title={iceCreamData.title}
            img={iceCreamData.img}
            para={iceCreamData.para}
          />
        ))
      }
    </>
  )
}
// adding a second line to the return statement will result in an error because a return statement only returns one value.unless there is a <> tag in the return statement



export default App;
