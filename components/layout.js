import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <div className="my-6 mx-4">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
