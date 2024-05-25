import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
console.log(user);
function App() {
  return (
    <div>
      {/* Pass down user data to Home component */}
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      {/* Pass down bio and social links to About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}
export default App;
