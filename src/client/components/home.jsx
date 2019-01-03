/*
 * This is a demo component the Eletrode app generator included
 * to show using Milligram CSS lib and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import electrodePng from '../images/electrode.png';
import '../styles/custom.scss';
import { GlobalNav } from './nav';
import LazyHero from 'react-lazy-hero';
import { Badge, Container, Col, Row } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skills = [
      { id: 0, name: 'react' },
      { id: 1, name: 'redux' },
      { id: 2, name: 'ruby on rails' },
      { id: 3, name: 'javascript' },
      { id: 4, name: 'CSS3' },
      { id: 5, name: 'HTML5' }
    ];
    return (
      <div styleName={'custom.container'}>
        <GlobalNav {...this.props} />

        <LazyHero imageSrc="https://unsplash.it/2000/1000">
          <h1>Nick Prokesch</h1>
          <div className="text-center">
            <Row>
              <Col>
                {skills.map(skill => (
                  <Badge key={skill.id} children={skill.name} className='mr-1'/>
                ))}
              </Col>
            </Row>
          </div>
        </LazyHero>
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
