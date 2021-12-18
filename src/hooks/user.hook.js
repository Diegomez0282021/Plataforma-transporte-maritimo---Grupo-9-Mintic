import React from "react";
import { AuthContext } from "../providers/user.provider";

const useAuth = () => React.useContext(AuthContext);

export { useAuth };
