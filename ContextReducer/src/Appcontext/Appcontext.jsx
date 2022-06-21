import React from "react";
import { useState } from "react";

export const Appcontext = React.createContext();

function AppcontextProvider ({children}) {
    const [state , Setstate]= useState("light");
}