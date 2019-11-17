import React from "react";

const AboutusPage = () => (
  <div class="jumbotron">
    <div class="container">
      <div class="query-window">
        <h1>Find affordable work spaces for daily rental</h1>
        <div class="input-group">
          <label>Where</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>When</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>Type Of Space</label>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div class="input-group">
          <div class="button search-button">Search</div>
        </div>
      </div>
    </div>
  </div>
);
