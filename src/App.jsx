import { Header } from "./components/Header";

/**
 * The first component React will render.
 * The rest of your components must be inserted from here
 * @returns App
 */
export const App = () => {
  return (
    <>
      <Header
        title="Welcome to React"
        subtitle="Setup with Parcel and MaterialUI"
      />
    </>
  );
};
