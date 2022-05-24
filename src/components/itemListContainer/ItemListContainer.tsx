import React from "react";
import { Typography } from "@mui/material";
import { ItemCount } from "./ItemCount";

interface Properties {
  greeting: string;
}

export const ItemListContainer: React.FC<Properties> = ({ greeting }): JSX.Element => {
  return (
    <Typography variant="subtitle1" component="div">
      {greeting}
      <ItemCount stock={5} initial={1} />
    </Typography>
  );
};
