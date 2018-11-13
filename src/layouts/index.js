import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import "./index.css"
import "./layout.css"
import image from "../static/images/logo.png"
import Media from "react-media"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import colors from "../layouts/Colors"
import withMobileDialog from "@material-ui/core/withMobileDialog"

const styles = {
  navHeaderTitle: {
    flexGrow: "1"
  },
  toolBarStyling: {
    padding: "0 10%"
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    width: "30%",
    justifyContent: "space-between"
  },
  navBarColor: {
    backgroundColor: "white"
  },
  button: {
    border: `1px solid ${colors.purple.hex}`,
    "&:hover": {
      backgroundColor: `${colors.purple.rgba}`
    },
    "& span": {
      color: `${colors.purple.hex}`
    }
  }
}

const Header = props => (
  <AppBar position="fixed" className={props.classes.navBarColor}>
    <Toolbar className={props.classes.toolBarStyling}>
      <Typography
        variant="title"
        color="textPrimary"
        className={props.classes.navHeaderTitle}
      >
        HRStudio | Blog
      </Typography>
      {/* <div className={props.classes.navItems}>
        {!props.fullScreen && (
          <a
            href="#features"
            name="featureItem"
            className={props.classes.navItemStyling}
            // onClick={this.handleClick}
          >
            Features
          </a>
        )}
        {!props.fullScreen && (
          <a
            href="#pricing"
            name="pricingItem"
            className={props.classes.navItemStyling}
            // onClick={this.handleClick}
          >
            Pricing
          </a>
        )}
        <Button
          className={props.classes.button}
          // onClick={() => this.props.history.push("/login")}
        >
          Login
        </Button>
      </div> */}
      <Button
        className={props.classes.button}
        // onClick={() => this.props.history.push("/login")}
      >
        HRStudio
      </Button>
    </Toolbar>
  </AppBar>
  // <div
  //   style={{
  //     background: "white",
  //     // marginBottom: "2rem",
  //     borderBottom: "2px solid #e6e6e6"
  //   }}
  // >
  //   <div
  //     style={{
  //       marginTop: " auto",
  //       maxWidth: 980,
  //       padding: "1.45rem 1.0875rem"
  //     }}
  //   >
  //     <h1 style={{ margin: 0, textAlign: "center", fontSize: "24px" }}>
  //       {/* <img src={image} height={'20px'}/>  */}

  //       <a
  //         href="http://www.baselinesoftware.io"
  //         target="_blank"
  //         style={{
  //           color: "black",
  //           textDecoration: "none"
  //         }}
  //       >
  //         Blog | Baseline Software
  //       </a>
  //     </h1>
  //   </div>
  // </div>
)

const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      maxWidth: 960,
      padding: "0.5rem",
      marginBottom: "25px"
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
)

class TemplateWrapper extends React.Component {
  render() {
    const { classes, fullScreen } = this.props

    return (
      <div>
        <Helmet
          title="HRStudio | Blog"
          img={image}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header classes={classes} fullScreen={fullScreen} />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 980,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%",
            paddingTop: "20vh"
          }}
        >
          {/* <div style={{ flex: 1 }}>{this.props.children}</div> */}

          <Media query={{ maxWidth: 1600 }}>
            <div
            // style={{
            //   margin: "0 auto",
            //   maxWidth: 980,
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            //   height: "100%",
            //   padding: "25px"
            // }}
            >
              {/* <div style={{ flex: 2.5, paddingRight: "30px" }}> */}
              {this.props.children}
              {/* </div> */}

              {/* <div style={{ flex: 1 }}>
                    <Sidebar
                      title="Baseline Software"
                      description="Articles on React and Node.js. All articles are written by Emmanuel Yusufu, Fullstack Web Development."
                    />
                    <Sidebar
                      title="About Us"
                      description="Emmanuel Yusufu is a Full-stack Web Developer specializing in React and Node.js based in Nigeria."
                    />
                  </div> */}
            </div>
          </Media>
        </div>
      </div>
    )
  }
}
TemplateWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

TemplateWrapper = withMobileDialog()(TemplateWrapper)
export default withStyles(styles)(TemplateWrapper)
