import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    maxWidth: "400px"
  },
  media: {
    height: "100px"
  }
}

class Index extends React.Component {
  render() {
    const { allMongodbBlog22Articles } = this.props.data
    let { classes } = this.props
    console.log("hello", allMongodbBlog22Articles)
    return (
      <Layout>
        <h1>Check us out!</h1>
        <h2>See what Baseline is all about ⛄</h2>
        <Grid container spacing={24}>
          {allMongodbBlog22Articles.edges.map(({ node }) => {
            return (
              // <div style={{ marginBottom: "25px", display: "inherit" }}>
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
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={"http://www." + node.link}
                      target="_blank"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>

                {/* <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image}
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
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      <Link to={node.link}>Continue Reading...</Link>
                    </Button>
                  </CardActions>
                </Card> */}
              </Grid>
              // </div>
            )
          })}
        </Grid>
      </Layout>
    )
  }
}
{
  /* <h1
                    style={{ fontSize: "1.2rem", textDecorationLine: "none" }}
                  >
                    <Link to={node.id}>{node.title}</Link>
                  </h1>
                  <h2
                    style={{
                      fontSize: "0.8rem !important",
                      fontWeight: "100 !important"
                    }}
                  >
                    {node.link}
                  </h2>
                  <p>{node.subTitle}</p> */
}

export default withStyles(styles)(Index)

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
`
