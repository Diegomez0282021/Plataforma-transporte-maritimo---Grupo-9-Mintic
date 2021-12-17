import React from "react";
import { UserContext } from "../providers/user.provider";

const useAuth = () => React.useContext(UserContext);

export { useAuth };