import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // state is independent for each component
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No items found !</p> : null;
  const betterMessage = items.length === 0 && <p>No items found !</p>;

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Empty brackets are Fragments from jsx-runtime
    <>
      <h1>{heading}</h1>
      {betterMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
