import { Popover } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import { TUserMeta } from "../../../type";
import UserModal from "../../layouts/user-modal";
import styles from "./user-action-button.module.scss";
import { removeUser } from "../../../redux/slices/user-slice";

type TUserActionButton = {
  user: TUserMeta;
};

export default function UserActionButton({ user }: TUserActionButton) {
  const dispatch = useDispatch();
  const [isModalActive, setModalActive] = useState(false);

  const PopoverContent = (
    <div className={styles.user_popover_content}>
      <div
        className={styles.user_popover_content_item}
        onClick={() => setModalActive(() => true)}
      >
        <AiFillEdit /> <span>Edit user</span>
        {isModalActive && (
          <UserModal
            edit={user}
            isOpen={isModalActive}
            onCancel={() => setModalActive(false)}
          />
         )}
      </div>
      <div
        className={styles.user_popover_content_item}
        onClick={() => dispatch(removeUser(user.key))}
      >
        <MdDelete /> <span>Delete user</span>
      </div>
    </div>
  );

  return (
    <div className={styles.user_actions}>
      <Popover placement="bottom" content={PopoverContent}>
        <div className={styles.user_actions_container}>
          <BsThreeDotsVertical />
        </div>
      </Popover>
    </div>
  );
}
