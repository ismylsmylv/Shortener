import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div>
      <h1>Dynamic ID: {params.url}</h1>
      <p>result {url}</p>
    </div>
  );
}

export default ResultView;
