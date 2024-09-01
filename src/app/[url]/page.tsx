"use client";

import ResultView from "@/view/result-view/page";

type Props = {
  params: any;
};

function Url({ params }: Props) {
  return <ResultView params={params} />;
}

export default Url;
