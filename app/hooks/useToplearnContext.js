import {useContext} from "react";

import {ToplearnContext} from "../context";

export const useToplearnContext = () => {
    return useContext(ToplearnContext);
}