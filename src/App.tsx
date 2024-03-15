import styles from "./app.module.scss";
import DisplayUsers from "./components/layouts/display-users";
import AddUserButton from "./components/ui/add-button";

function App() {
  return (
    <div className={styles.app}>
      <AddUserButton />
      <DisplayUsers />
    </div>
  );
}

export default App;
