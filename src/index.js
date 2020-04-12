import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import styles from "./index.css";

class InstagramButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {
        user: null,
      },
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://www.instagram.com/${this.props.username}/?__a=1`,
    })
      .then((response) => {
        this.setState({ user: response.data.graphql.user });
      })
      .catch((error) => {});
  }

  render() {
    if (this.state.user && this.props.username) {
      return (
        <div>
          <a
            href={`https://www.instagram.com/${this.props.username}`}
            target="_blank"
            class="Container"
          >
            <button class="Button">
              <div class="IconContainer">
                <a class="Icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div class="UserName">
                <div>&nbsp;Follow @{this.props.username}</div>
              </div>
            </button>
            <div class="Bubble">
              {this.state.user.edge_follow.count} Followers
            </div>
          </a>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default InstagramButton;
