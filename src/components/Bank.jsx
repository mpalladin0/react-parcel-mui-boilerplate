import { Balance } from "./Balance";

export const Bank = ({ name, amount }) => {
  return (
    <>
      <h4> The name of the bank is {name}</h4>
      <Balance amount={amount} />
    </>
  );
};
