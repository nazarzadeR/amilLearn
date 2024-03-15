import { Table } from "antd";
import { useSelector } from "react-redux";

import { TUserMeta } from "../../../type";
import styles from "./display-users.module.scss"
import { getUsers } from "../../../redux/slices/user-slice";
import UserActionButton from "../../ui/user-action-button";

export default function DisplayUsers() {
  const users = useSelector(getUsers);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Surname", dataIndex: "surname", key: "surname" },
    { title: "Patronymic", dataIndex: "patronymic", key: "patronymic" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    {
      title: "",
      dataIndex: "",
      key: "actions",
      render: (user: TUserMeta) => <UserActionButton user={user} />,
    },
  ];

  return <Table className={styles.display_users} dataSource={users} columns={columns} />;
}
