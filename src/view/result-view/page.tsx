import Logo from "@/components/logo/page";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import "./style.scss";
type Props = {
  params: { url: string };
};

function ResultView({ params }: Props) {
  const [url, seturl] = useState();
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URI + "/api?id=" + params.url)
      .then((res) => {
        seturl(res.data.long);
      });
    console.log(process.env.NEXT_PUBLIC_BASE_URI + "/api?id=" + params.url);
  }, []);
  return (
    <div className="ResultView  flex justify-center items-center flex-col">
      <Logo />
      <div className="info">
        <h1>You&apos;ll be redirected to</h1>
        <p>{url}</p>
      </div>
      <button
        className="flex gap-2 items-center justify-center rounded"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        proceed <FaChevronRight />
      </button>
    </div>
  );
}

export default ResultView;
