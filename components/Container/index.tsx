import { ReactNode } from "react";
import Navbar from "../Navbar";

const Container: React.FC = ({ children }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
