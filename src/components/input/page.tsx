"use client";
import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
type Props = {};

function InputView({}: Props) {
  const [url, seturl] = useState("");
  function getURL() {
    console.log(url);
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/api`, {
      long: url,
      short: "test",
    });
    seturl("");
  }
  return (
    <div className="InputView flex justify-center items-center flex-col	">
      <div className="logo">shortener</div>
      <form
        className="input flex justify-center items-center  rounded"
        action={getURL}
      >
        <input
          type="url"
          placeholder="Enter the link here"
          className="outline-none"
          required
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <button type="submit">get short</button>
      </form>
    </div>
  );
}

export default InputView;
