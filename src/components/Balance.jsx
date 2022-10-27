export const Balance = ({ amount }) => {
  if (amount <= 0) {
    return <h2> You need to get some more money </h2>;
  }
  return <h2> This is your balance: {amount} </h2>;
};

export const Header = ({ text }) => {
  return <h1>{text}</h1>;
};
