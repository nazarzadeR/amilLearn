import { Button } from "antd";
import { useState } from "react";
import UserModal from "../../layouts/user-modal";

import styles from "./add-user.module.scss";

export default function AddUserButton() {
  const [isModalActive, setModalActive] = useState(false);

  return (
    <div className={styles.add_user_button}>
      <Button size="large" onClick={() => setModalActive(() => true)}>Add user</Button>
      <UserModal
        isOpen={isModalActive}
        onCancel={() => setModalActive(false)}
      />
    </div>
  );
}
