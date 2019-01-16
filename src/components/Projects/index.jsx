import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { fetchRepos } from "../../actions/projects.actions";

class Projects extends PureComponent {
  static propTypes = {
    fetchProjectRepos: PropTypes.func,
  };

  static defaultProps = {
    fetchProjectRepos: () => ()
  }

  componentDidMount() {
    const { fetchProjectRepos } = this.props;
    fetchProjectRepos();
  }

  render() {
    const projects = [];
    if (projects.length === 0) return <div />;
    return (
      <div>
        <h2>Projects</h2>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ fetchProjectRepos: () => dispatch(fetchRepos()) });

export default Projects;
