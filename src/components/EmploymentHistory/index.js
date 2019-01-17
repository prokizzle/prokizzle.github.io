import React, { PureComponent } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Card, Badge } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const workHistory = [
  {
    id: 0,
    company: "Apple",
    location: "Austin, TX",
    title: "Sr. Front-End Developer",
    dates: "Jan 2019 - Present",
    icon: "apple",
    contract: true,
    skills: ["react", "javascript", "ES6"],
    gapExplanation:
      "Contract ended following conclusion of previos projects. Two months of interviewing for positions",
  },
  {
    id: 1,
    company: "Bright Health",
    location: "Austin, TX",
    title: "Front-end Developer",
    dates: "Aug 2018 - Nov 2018",
    contract: true,
    icon: "react",
    skills: ["react", "redux", "SSR", "bootstrap", "sass", "webpack"],
    gapExplanation:
      "Contract ended when previous employer decided to change from remote model to colocated",
  },
  {
    id: 2,
    company: "Elliot",
    location: "New York, NY",
    title: "Fullstack Web Developer",
    dates: "April 2018 - June 2018",
    contract: true,
    remote: true,
    skills: ["react", "hapi.js", "ramda", "mongodb", "redux"],
    gapExplanation:
      "Following layoffs when previous company downsized, took time off for personal and family reasons",
  },
  {
    id: 3,
    company: "Tanga",
    location: "Chandler, AZ",
    title: "Software Engineer",
    dates: "April 2016 - Sep 2017",
    contract: false,
    remote: false,
    skills: [
      "ruby-on-rails",
      "php",
      "react",
      "angular",
      "aws",
      "lambda",
      "serverless",
      "python",
      "postgresql",
      "memcached",
      "redis",
      "que-jobs",
      "sidekiq",
      "chef",
      "opsworks",
      "agile",
    ],
  },
  {
    id: 4,
    company: "Datafiniti",
    location: "Austin, TX",
    title: "Full Stack Software Engineer",
    dates: "April 2014 - April 2016",
    contract: false,
    remote: false,
    skills: [
      "ruby-on-rails",
      "react",
      "sidekiq",
      "salesforce",
      "marketing automation",
      "redis",
      "crawlers/scrapers",
    ],
  },
];

const skillsObject = skills =>
  skills.map((skill, idx) => Object.assign({}, { name: skill, id: idx }));

const GapExplanation = styled.p`
  margin-top: 2rem;
  margin-left: 1rem;
`;

class EmploymentHistory extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2 className="mt-5">Work Experience</h2>
        <Timeline>
          {workHistory.map(gig => (
            <TimelineItem
              className="vertical-timeline-element--work"
              dateText={gig.dates}
              key={gig.id}
              icon={<img src="https://via.placeholder.com/50" />}
            >
              <Card className="p-5 ">
                <h5>{gig.title}</h5>
                <span>
                  <strong className="">{gig.company}</strong>
                  {gig.contract ? <Badge className="mx-1">Independent Contractor</Badge> : null}
                  {gig.remote ? <Badge className="mx-1">Remote</Badge> : null}
                </span>
                <small className="vertical-timeline-element-subtitle">{gig.location}</small>
                <p>
                  {skillsObject(gig.skills).map(skill => (
                    <Badge key={skill.id} className="mr-1">
                      {skill.name}
                    </Badge>
                  ))}
                </p>
              </Card>
              {gig.gapExplanation ? (
                <GapExplanation>
                  Reason for Gap in Employment:
                  <br />
                  <small>{gig.gapExplanation}</small>
                </GapExplanation>
              ) : null}
            </TimelineItem>
          ))}
        </Timeline>
      </React.Fragment>
    );
  }
}

export default EmploymentHistory;
