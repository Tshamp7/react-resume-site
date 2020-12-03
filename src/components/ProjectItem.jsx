import React from "react";

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };

    this.projectItemRef = React.createRef();
  }

  setSpans = () => {
    const height = this.projectItemRef.current.clientHeight;
    console.log(this.projectItemRef.current.clientHeight);
    const spans = Math.ceil(height / 10 + 1);
    console.log(spans);
    this.setState({ spans });
  };

  componentDidMount() {
    this.setSpans();
  }

  render() {
    const { image, title, url, description } = this.props;

    return (
      <li style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div ref={this.projectItemRef} className="project-item-container">
          <h4>{title}</h4>
          <div className="image-container">
            <img src={image} alt="project" className="project-image" />
            <div className="overlay">
              <a href={url} className="icon">
                <i className="fas fa-external-link fa-sm"></i>
              </a>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </li>
    );
  }
}

export default ProjectItem;
