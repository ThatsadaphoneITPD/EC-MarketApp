import React from "react";
import { AntSpinload, ProfileCard } from "../../components";

export default function Profile({ user, file, roles, render, setRender }) {
  return (
    <>
      {user ? (
        <ProfileCard
          data={user}
          file={file}
          roles={roles}
          render={render}
          setRender={setRender}
        />
      ) : (
        <AntSpinload />
      )}
    </>
  );
}
