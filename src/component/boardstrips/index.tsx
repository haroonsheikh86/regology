import React from "react";
import { Grid } from "@mui/material";
import BoardCard from "../card";
import type { CardType, StatusType } from "../../types/Store";

interface Props {
    cards: CardType[],
    status: StatusType
}

const BoardStrips: React.FC<Props> = ({ cards, status }) => {
  return (
    <label style={{ marginTop: "2rem" }}>
      {status.label}
      <Grid
        height="550px"
        minWidth="300px"
        margin="0 1rem 0 0"
        xs="auto"
        style={{ background: "rgb(244, 245, 247)" }}
        container
      >
        {cards.map((card: CardType, index) =>
          card.status.id === status.id ? (
            <BoardCard key={index} {...card} />
          ) : null
        )}
      </Grid>
    </label>
  );
};

export default BoardStrips;
