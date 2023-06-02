import { useContext } from "react";
import { filterContext } from "../contexts/filter-context";

export function UseFilter() {
    return useContext(filterContext)
}