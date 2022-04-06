import React from "react";

type Props = {
  children?: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <main className="flex-grow bg-slate-200">
      <p>Hla</p>
      {children}
    </main>
  );
}

export default Layout;
