import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserSettings from '../components/UserSettings';
import CalendarSettings from '../components/CalendarSettings';
import ContentWrapper from '../components/ContentWrapper';

const SettingsPage = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col lg={12}>
          <ContentWrapper>
            <div className="heading text-primary text-center mt-4 mb-5">
              <h4>User Settings</h4>
            </div>
            <UserSettings />
            <div className="heading text-primary text-center mt-4  mb-5">
              <h4>Calendar Settings</h4>
            </div>
            <CalendarSettings />
          </ContentWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
