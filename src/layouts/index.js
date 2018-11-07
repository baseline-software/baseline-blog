import React from "react"
import Helmet from "react-helmet"

import "./index.css"
import "./layout.css"
import image from "../static/images/logo.png"
import Media from "react-media"

const Header = () => (
  <div
    style={{
      background: "white",
      // marginBottom: "2rem",
      borderBottom: "2px solid #e6e6e6"
    }}
  >
    <div
      style={{
        marginTop: " auto",
        maxWidth: 980,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", fontSize: "24px" }}>
        {/* <img src={image} height={'20px'}/>  */}

        <a
          href="http://www.baselinesoftware.io"
          target="_blank"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          Blog | Baseline Software
        </a>
      </h1>
    </div>
  </div>
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
    return (
      <div>
        <Helmet
          title="Blog | Baseline"
          img={image}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 980,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%",
            paddingTop: "20px"
          }}
        >
          <div style={{ flex: 1 }}>{this.props.children}</div>

          <Media query={{ maxWidth: 848 }}>
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

export default TemplateWrapper
