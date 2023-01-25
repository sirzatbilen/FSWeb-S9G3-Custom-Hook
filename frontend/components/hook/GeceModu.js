import { useState } from "react";
import localStorageKullan from "./localStorageKullan";

const { setItem, getItem } = localStorageKullan();

export default function GeceModu() {
  const [geceModu, setGeceModu] = useState(getItem("geceModu"));

  const toggleMode = () => {
    setItem("geceModu", !geceModu);
    setGeceModu(getItem("geceModu"));
  };
  return { geceModu, toggleMode };
}
