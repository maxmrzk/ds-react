import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["NY", "SF", "LA"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Alert !</Alert>
      )}
    </div>
  );
}

export default App;
