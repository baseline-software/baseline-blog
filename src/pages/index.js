import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import colors from "../layouts/Colors";
import withMobileDialog from "@material-ui/core/withMobileDialog";

const styles = {
  card: {
    maxWidth: "400px"
  },
  media: {
    height: "100px"
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    padding: "0 0 8vh 8vh"
  }
};

class Index extends React.Component {
  render() {
    const { allMongodbBlog22Articles } = this.props.data;
    let { classes, fullScreen } = this.props;

    return (
      <Layout>
        <div
          className={classes.headerText}
          style={fullScreen ? { height: "19%", padding: "8vh 0 0 8vh" } : null}
        >
          <h2>See what Baseline is all about ⛄</h2>
        </div>
        <Grid
          container
          spacing={24}
          style={
            fullScreen ? { display: "flex", justifyContent: "center" } : null
          }
        >
          {allMongodbBlog22Articles.edges.map(({ node }) => {
            return (
              <Grid item xs={10} sm={6} md={4} lg={4}>
                <Card item className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      className={classes.media}
                      height="200"
                      image={node.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {node.title}
                      </Typography>
                      <Typography component="p">{node.subTitle}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      style={{ color: `${colors.cyan.hex}` }}
                    >
                      Share
                    </Button>
                    <Button
                      style={{ color: `${colors.purple.hex}` }}
                      size="small"
                      href={"http://www." + node.link}
                      target="_blank"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    );
  }
}

Index = withMobileDialog()(Index);
export default withStyles(styles)(Index);

export const pageQuery = graphql`
  query {
    allMongodbBlog22Articles {
      edges {
        node {
          id
          title
          subTitle
          link
          image
        }
      }
    }
  }
`;
