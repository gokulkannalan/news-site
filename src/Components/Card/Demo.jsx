import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  ButtonBase,
  Grid,
  styled,
  Link,
} from "@material-ui/core";

function Demo(data) {
  return (
    <div>
      <Paper
        style={{ marginBottom: "1rem" }}
        sx={{ p: 2, margin: "auto", maxWidth: 100, flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 60, height: 100 }}>
              <img src={data.data.urlToImage} width={400} height={300} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="div">
                  {data.data.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.data.description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Author:{data.data.author}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {data.data.publishedAt}
                </Typography>
                <Link href={data.data.url}>More Details...</Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Demo;
