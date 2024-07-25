import "./App.css";
import { useState } from "react";
function Header({ title }) {
  return <h1>{title}</h1>;
}
function Component({ title, onClick, link, index, isSelected }) {
  return (
    <div className="component">
      <p>
        <a href={link} target="_blank" rel="nonopener noreferrer">
          {title}
        </a>
      </p>
      <button onClick={() => onClick(title)}></button>
    </div>
  );
}
function Form({ onSubmit, onChange }) {
  return (
    <>
      <form onSubmit={onSubmit} className="FormAction">
        <input
          type="text"
          onChange={onChange}
          name="title"
          placeholder="title"
        />
        <input type="text" onChange={onChange} name="link" placeholder="link" />
        <button id="btn" type="submit">
          add
        </button>
      </form>
      <br />
    </>
  );
}
function App() {
  const Libraries = [
    { title: "React", link: "https://reactjs.org" },
    { title: "Angular", link: "https://angular.io" },
    { title: "Vue", link: "https://vuejs.org" },
    { title: "Bootstrap", link: "https://getbootstrap.com/" },
  ];
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("React");
  const Handleclick = (value, index) => {
    setTitle(value);
    setIndex(index);
  };
  const [items, setItems] = useState(Libraries);
  const [input, setInput] = useState(null);
  const HandleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!input?.title || !input?.link) {
      return false;
    }
    setItems([...items, input]);
    setInput(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} />
        {items.map((lib, i) => {
          return (
            <Component
              isSelected={index === i}
              key={lib.link}
              title={lib.title}
              index={i}
              link={lib.link}
              onClick={Handleclick}
            />
          );
        })}
        <Form onChange={HandleChange} onSubmit={HandleSubmit} />
      </header>
    </div>
  );
}
export default App;
