import "./styles.css";
import UserDetail from "./UserDetail";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <UserDetail userId={2} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
