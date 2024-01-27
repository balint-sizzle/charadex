
import Modal from "./components/Modal";
import { set } from "react-hook-form";


const [activeItem, setActiveItem] = React.useState(null);
const [prompts, setPrompts] = React.useState([]);
const [input, setInput] = React.useState("");
const [displayPrompts, setDisplayPrompts] = React.useState(false);
const [randomPrompt, setRandomPrompt] = React.useState("CHARADE5");
const [modal, setModal] = React.useState(false);

const renderPrompts = () => {
    return displayPrompts
        ? prompts.map((item) => (
              <ListItem
                  alignItems="center"
                  key={item}
                  className="list-group-item d-flex justify-content-between align-items-center"
              >
                  <span className="prompt-text">
                      {item
                          .split("")
                          .map((letter) =>
                              letter !== " " ? letter && "*" : letter
                          )
                          .join("")}
                  </span>
                  <span>
                      <Button
                          variant="contained"
                          onClick={() => editPrompt(item)}
                      >
                          Edit
                      </Button>
                  </span>
              </ListItem>
          ))
        : null;
};

const renderPromptLength = () => {
    return prompts.length;
};

const newRandomPrompt = () => {
    const item = prompts[Math.floor(Math.random() * prompts.length)];
    setRandomPrompt(item);
    setPrompts(prompts.filter((i) => i !== item));
};

const handleSubmit = (event) => {
    event.preventDefault();
    setPrompts([...prompts, event.target[0].value]);
    setInput("");
    console.log(prompts);
};

const toggle = () => {
    setModal(!modal);
};

const editPrompt = (prompt) => {
    setActiveItem(prompt);
    setModal(!modal);
};

const handleModalSave = (item) => {
    console.log(item, activeItem, prompts);
    setPrompts([...prompts.filter((i) => i !== activeItem), item]);
    // setPrompts([...prompts, item]);
    // console.log(prompts);
    toggle();
    console.log(prompts);
};

