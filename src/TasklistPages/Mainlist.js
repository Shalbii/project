import "./Mainlist.css";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
export default function Mainlist() {
  const [show, setShow] = useState(false);
  function HandleClick(){
    setShow(!show);
  }
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Status</li>
              <li>Created on </li>
              <li>Email</li>
              <li>Responses</li>
              <li>Owner</li>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
            <div className="Mainlist_list_row_top">
              <input className="Cb" type="checkbox" onClick={HandleClick}/>
              <label for="checkbox"></label>
              <div className="Mainlist_list_row">
                <label>John</label>
                <label>Smith</label>
                <label>Confirmed</label>
                <label>2022-02-01</label>
                <label>larrywilson@nomail.com</label>
                <label>10</label>
                <label>Larry wilson</label>
                <div className="Mainlist_icon">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <ListRow />
            <div>
              <button className="Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}
function ListRow() {
  return (
    <>
      <div className="Mainlist_list_row_top">
        <input className="Cb" type="checkbox"/>
              <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          <label>John</label>
          <label>Smith</label>
          <label>Confirmed</label>
          <label>2022-02-01</label>
          <label>larrywilson@nomail.com</label>
          <label>10</label>
          <label>Larry wilson</label>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}