import React from "react";
import { CreateNftMain, Top, Bottom } from "../Components";

export default function CreateNFT({ipfs}) {
  return (
    <div>
      <Top />
      <CreateNftMain ipfs={ipfs}/>
      <Bottom />
    </div>
  );
}
