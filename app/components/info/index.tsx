import Grid from "@mui/material/Grid";
import type { ReactNode } from "react";

interface Item {
  children: ReactNode;
  colomn: number;
}

interface InfoProps {
  list: Item[];
}

const Info = ({ list }: InfoProps) => {
  return (
    <Grid container>
      {list.map((val, i) => (
        <Grid item key={String(i)} xs={val.colomn} md={val.colomn}>
          {val.children}
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
