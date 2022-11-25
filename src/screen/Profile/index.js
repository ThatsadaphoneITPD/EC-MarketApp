import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../../containers";
import { getUserProfileAction } from "../../redux/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState(false);
  const profileMain = useSelector((state) => state.userProfile);
  const { userFile } = profileMain;
  const user = userFile?.user;
  const sunprofile = userFile?.profile;
  const roles = userFile?.roles;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch, userInfo, rerender]);

  return (
    <>
      <UserProfile
        user={user}
        file={sunprofile}
        roles={roles}
        render={rerender}
        setRender={setRerender}
      />
    </>
  );
}
