import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Row, Col } from 'react-bootstrap';
import { getUserEvents } from '../store/eventsSlice';
import ContentWrapper from '../components/ContentWrapper';
import RbcWrapper from '../components/RbcWrapper';
import CalendarToggleMenu from '../components/CalendarToggleMenu';
import CalendarEventForm from '../components/CalendarEventForm';

const CalendarPage = () => {
  const dispatch = useDispatch();

  // check for init data
  const shouldInitData = useRef(true);

  useEffect(() => {
    if (shouldInitData.current) {
      dispatch(getUserEvents());
      shouldInitData.current = false;
    }
  });

  // app state
  const calendars = useSelector((state) => state.calendars.byId);
  const calendarIds = useSelector((state) => state.calendars.allIds);
  const rbcSelection = useSelector((state) => state.app.rbcSelection);
  const timeZone = useSelector((state) => state.app.timeZone);
  const view = useSelector((state) => state.app.rbcView);

  // derived state
  const isRbcSelectionSet = rbcSelection.slot || rbcSelection.event;
  const isDefaultCalLoaded = _.some(calendars, ['userDefault', true]);
  const defaultCalendarId = calendarIds.find((id) => calendars[id].userDefault === true);

  const renderJsx = () => {
    if (isRbcSelectionSet && isDefaultCalLoaded) {
      return (
        <Row>
          <Col xs={12} lg={2}>
            <CalendarToggleMenu calendars={calendars} />
          </Col>
          <Col xs={12} lg={7}>
            <RbcWrapper calendars={calendars} rbcSelection={rbcSelection} view={view} />
          </Col>
          <Col xs={12} lg={3}>
            <CalendarEventForm
              calendars={calendars}
              calendarIds={calendarIds}
              defaultCalendarId={defaultCalendarId}
              rbcSelection={rbcSelection}
              timeZone={timeZone}
              view={view}
            />
          </Col>
        </Row>
      );
    } else {
      return <h4>loading calendar...</h4>;
    }
  };

  return <ContentWrapper>{renderJsx()}</ContentWrapper>;
};

export default CalendarPage;
