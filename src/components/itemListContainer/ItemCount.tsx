import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup, CardActionArea, CardActions, Tooltip } from "@mui/material";
import { CandlestickChartOutlined } from "@mui/icons-material";

interface Properties {
  stock: number;
  initial: number;
  onAdd?(): void;
}

export const ItemCount: React.FC<Properties> = ({ stock, initial, onAdd }) => {
  const [itemCant, setItemCant] = useState(initial);

  const canChangeCant = (cant: number): boolean => {
    if (cant >= 1 && cant <= stock) {
      return true;
    }

    return false;
  };

  const handleCantChange = (cant: number): void => {
    if (canChangeCant(cant)) {
      setItemCant(cant);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, width: 345, textAlign: "left" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Sites-vari-master-catalog/default/dw57a7c897/images/large/FD-ESD6030/400803-reclaimed-wood/vari-electric-standing_400803_reclaimedwood_wfh_s.jpg?sw=800&sh=800g"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Standing Desk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Electric Standing Desk 60x30
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "right" }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Tooltip title="Remove Item" placement="top" arrow>
            <Button size="small" color="primary" onClick={() => handleCantChange(itemCant - 1)}>
              -
            </Button>
          </Tooltip>
          <Button>{itemCant}</Button>
          <Tooltip title="Add Item" placement="top" arrow>
            <Button size="small" color="primary" onClick={() => handleCantChange(itemCant + 1)}>
              +
            </Button>
          </Tooltip>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
