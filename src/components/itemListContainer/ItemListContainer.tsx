import React from "react";
import { Typography } from "@mui/material";

interface Properties {
  greeting: string;
}

export const ItemListContainer: React.FC<Properties> = ({ greeting }): JSX.Element => {
  return (
    <Typography variant="subtitle1" component="div">
      {greeting}
    </Typography>
  );
};
