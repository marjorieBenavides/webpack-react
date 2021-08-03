import React from 'react';
import { render } from 'react-dom';
import App from "./components/App"


render(<App/>, document.getElementById("root"));

render(
    <h1>Hello</h1>,
    document.getElementById('app')
);


function ListItem(props) {
    const value = props.value;
    return (
        <li key={value.toString()}>
            {value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
render(
    <NumberList numbers={numbers} />,
    document.getElementById('list')
);
