import React from "react";

type Props = {
  params: { url: string };
};

function ResultView({ params }: Props) {
  return (
    <div>
      <h1>Dynamic ID: {params.url}</h1>
    </div>
  );
}

export default ResultView;
