import * as React from "react";
import { useRouter } from "next/router";

const Tile = () => {
  const router = useRouter();
  const { tileId } = router.query;

  return <div>Tile: {tileId}</div>;
};

export default Tile;
