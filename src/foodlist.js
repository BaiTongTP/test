import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

class FoodList extends Component {
  render() {
    return (
         <div class="col-12">
			<div class="col-4">
			  <img src="/kb.png" alt="food1" style="width:100%"/>
			  <h3>หลน</h3>
			</div>
			<div class="col-4">
			  <img src="/hp.png" alt="food2" style="width:100%"/>
			  <h3>แกงเห็ดเผาะ</h3>
			</div>
			<div class="col-4">
			  <img src="/pt.png" alt="food3" style="width:100%"/>
			  <h3>ผัดไท</h3>
			</div>			
		  </div>
    )
  }
}

export default FoodList;