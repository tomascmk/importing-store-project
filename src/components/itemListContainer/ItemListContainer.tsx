import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { ItemCount } from "./ItemCount";
import Stack from "@mui/material/Stack";

interface Properties {
  greeting: string;
}

export const ItemListContainer: React.FC<Properties> = ({ greeting }): JSX.Element => {
  return (
    <Grid container spacing={0} sx={{ marginTop: 13, marginLeft: 0, maxWidth: "100vw", width: "100vw" }}>
      {Array.from(Array(100)).map((_, index) => (
        <ItemCount stock={5} initial={1} />
      ))}
    </Grid>
  );
};
