import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import "./index.css";
import "./layout.css";
import image from "../static/images/logo.png";
import Media from "react-media";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import colors from "../layouts/Colors";
import withMobileDialog from "@material-ui/core/withMobileDialog";

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
  },
  logoButton: {
    textDecoration: "none",
    color: "black"
  }
};

const Header = props => (
  <AppBar position="fixed" className={props.classes.navBarColor}>
    <Toolbar className={props.classes.toolBarStyling}>
      <Typography
        variant="title"
        color="textPrimary"
        className={props.classes.navHeaderTitle}
      >
        <a className={props.classes.logoButton} href=".">
          HRStudio | Blog
        </a>
      </Typography>

      <Button
        className={props.classes.button}
        href={"http://www.hrstudio.me"}
        target="_blank"
      >
        HRStudio
      </Button>
    </Toolbar>
  </AppBar>
);

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
);

class TemplateWrapper extends React.Component {
  render() {
    const { classes, fullScreen } = this.props;

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
            paddingTop: `${fullScreen ? "0" : "8vh"}`
          }}
        >
          <Media query={{ maxWidth: 1600 }}>
            <div>{this.props.children}</div>
          </Media>
        </div>
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

TemplateWrapper = withMobileDialog()(TemplateWrapper);
export default withStyles(styles)(TemplateWrapper);
