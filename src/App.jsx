import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Bank } from "./components/Bank";
/**
 * The first component React will render.
 * The rest of your components must be inserted from here
 * @returns App
 */
export const App = () => {
  function handleClick() {
    console.log("hello!");
  }

  return (
    <>
      <Typography variant="h2">Welcome to our Bank</Typography>
      <Button variant="contained" onClick={() => handleClick()}>
        Contained
      </Button>
      <Bank name="Bank of America" amount={0} />
    </>
  );
};
