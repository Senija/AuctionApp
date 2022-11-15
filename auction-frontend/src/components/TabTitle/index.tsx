import React from "react";
import "./tabTitle.css";
type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  return (
    <li className="liTabTitle">
      <button className="tabButton" onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  )
}

export default TabTitle
