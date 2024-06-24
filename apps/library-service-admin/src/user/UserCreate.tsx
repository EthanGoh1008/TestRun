import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="hashedPwd" source="hashedPwd" />
        <TextInput label="Last Name" source="lastName" />
        <SelectInput
          source="memberRole"
          label="memberRole"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordHash" source="passwordHash" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
