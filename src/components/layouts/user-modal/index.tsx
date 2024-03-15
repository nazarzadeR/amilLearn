import { Modal, Form, ModalProps } from "antd";

import InputField from "../../ui/input";
import { TUserMeta } from "../../../type";
import { useDispatch } from "react-redux";
import { editUser, addUser } from "../../../redux/slices/user-slice";
import { nanoid } from "@reduxjs/toolkit";

type TUserModalProps = {
  isOpen: boolean;
  edit?: TUserMeta;
  onCancel(): void;
} & ModalProps;

export default function UserModal({
  isOpen,
  edit,
  onCancel,
  ...props
}: TUserModalProps) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isEditing = typeof edit !== "undefined";
  const title = isEditing ? "Edit user" : "Add user";

  const onOk = async () => form.submit();
  const onFinish = (values: Omit<TUserMeta, "key">) => {
    onCancel();
    
    if (isEditing) {
      return dispatch(editUser({ ...edit, ...values }));
    }

    dispatch(addUser({ key: nanoid(), ...values }));

  };

  return (
    <Modal title={title} open={isOpen} okText="Save" onOk={onOk} {...props}>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={isEditing ? edit : {}}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Name filed required" }]}
        >
          <InputField placeholder="Enter name" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Surname filed required" }]}
        >
          <InputField placeholder="Enter surname" />
        </Form.Item>
        <Form.Item
          name="patronymic"
          rules={[{ required: true, message: "Patronymic filed required" }]}
        >
          <InputField placeholder="Enter patronymic" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
