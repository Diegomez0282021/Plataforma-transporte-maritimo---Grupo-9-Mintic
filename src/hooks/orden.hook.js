import React from "react";
import { OrdenContext } from "../providers/orden.provider";

const useOrden = () => React.useContext(OrdenContext);

export { useOrden };
