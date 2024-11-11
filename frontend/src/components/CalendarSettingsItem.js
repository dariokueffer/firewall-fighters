import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Form, Badge } from 'react-bootstrap';
import { getErrorMessage } from '../utils/errors';
import styles from '../styles/CalendarSettingsItem.module.css';

const CalendarSettingsItem = ({
  id,
  userId,
  inputType,
  settingType,
  label,
  placeholder,
  calendar,
  createAction,
  updateAction,
  deleteAction,
  shareCalendar,
  validation,
  fixedEditMode,
  usernames
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(calendar ? calendar[settingType] : '');
  const [labelValue, setLabelValue] = useState(label || '');
  const [editMode, setEditMode] = useState(fixedEditMode ?? false);
  const [inputError, setInputError] = useState('');
  const [validateOnChange, setValidateOnChange] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const userList = usernames;

  const isEditable = calendar?.user_id === userId;
  const isDeleteable = isEditable && calendar.userDefault === false;
  const isBadged = calendar && (calendar.userDefault === true || calendar.user_id === 'system' || (calendar.user_id !== userId && calendar.userDefault !== true));

  const handleChange = (e) => {
    const targetValue = e.target.value;

    if (validateOnChange) {
      setInputError(validation(targetValue));
    }
    setInputValue(targetValue);
  };

  const handleSave = () => {
    // check for input errors
    const inputErrorFound = validation(inputValue);

    if (inputErrorFound) {
      setInputError(inputErrorFound);
      setValidateOnChange(true);
      return;
    }

    if (calendar && calendar[settingType] === inputValue) {
      // no change in input
      alert('No change detected. Please try again.');
      return;
    }

    // no input errors, dispatch action
    const data = {
      [settingType]: inputValue
    };

    if (id === 'new-calendar') {
      // create calendar
      dispatch(createAction(data))
        .then(() => {
          alert(`Created calendar: ${data[settingType]}`);
          setInputValue('');
          setInputError('');
          setValidateOnChange(false);
        })
        .catch((e) => {
          const msg = getErrorMessage(e);
          alert(`Error creating calendar: ${msg}`);
          setInputError(msg);
        });
    } else {
      // update calendar

      // insert calendar id
      data.id = calendar.id;

      dispatch(updateAction(data))
        .then(() => {
          alert(`Updated calendar: ${data[settingType]}`);

          if (fixedEditMode == null) {
            setEditMode(false);
          }
          setInputError('');
          setValidateOnChange(false);
        })
        .catch((e) => {
          const msg = getErrorMessage(e);
          alert(`Error updating calendar: ${msg}`);
          setInputError(msg);
        });
    }
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete ${calendar.name}?`) == false) {
      return;
    }

    dispatch(deleteAction(calendar.id))
      .then(() => {
        alert(`Deleted calendar: ${calendar.name}`);
      })
      .catch((e) => {
        const msg = getErrorMessage(e);
        alert(`Error deleting calendar: ${calendar?.name}: ${msg}`);
        setInputError(msg);
      });
  };

  const handleBlur = (e) => {
    const targetName = e.target.name;

    if (!validateOnChange) {
      setInputError(validation(inputValue));
      setValidateOnChange(true);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setInputValue(calendar ? calendar[settingType] : '');
    setInputError('');
    setValidateOnChange(false);
  };

  const handleShare = () => {
    if (!selectedUser) {
      alert('Please select a user to share the calendar with.');
      return;
    }

    if (selectedUser === userId) {
      alert("You can't share with yourself.");
      return;
    }

    const selectedUserData = userList.find(user => user.id === selectedUser);
    if (!selectedUserData) {
      alert("Selected user not found.");
      return;
    }

    // Prepare the data
    const sharedUserId = selectedUser; // assuming the user object has an `id` field

    const data = {
      calendarId: calendar.id,
      userId: sharedUserId,
      visibility: calendar.visibility, // or set to a specific value
      userDefault: false, // or set to a specific value
      color: calendar.color,
      shared: true // set color as per your logic
    };

    // Call a Redux action to update the calendar and user models
    dispatch(shareCalendar(data))
      .then(() => {
        alert(`Calendar shared with ${selectedUserData.username}`);
      })
      .catch((e) => {
        const msg = getErrorMessage(e);
        alert(`Error sharing calendar: ${msg}`);
      });
  };



  const renderButtons = () => {
    if (fixedEditMode === true) {
      return (
        <Col lg={4}>
          <Button className={styles.button} type="button" variant="success" onClick={handleSave}>
            Save
          </Button>
        </Col>
      );
    }

    if (isEditable) {
      return (
        <Col lg={4}>
          {editMode === true && (
            <>
              <Button className={styles.button} type="button" variant="success" onClick={handleSave}>
                Save
              </Button>
              {isDeleteable && (
                <Button className={styles.button} type="button" variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              )}
              <Button className={styles.button} type="button" variant="secondary" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </>
          )}
          {editMode === false && (
            <>
              <Row>
                <Col xs="auto">
                  <Button className={styles.button} type="button" variant="primary" disabled={editMode} onClick={handleEdit}>
                    Edit
                  </Button>
                </Col>
                <Col xs="auto">
                  <select
                    className={styles.select}
                    disabled={editMode}
                    value={selectedUser} // Bind value to state
                    onChange={(e) => setSelectedUser(e.target.value)} // Update selectedUser on change
                  >
                    <option value="" disabled>Select a user</option>
                    {userList?.map((user) => (
                      <option key={user.id} value={user.id}> {/* Set the ID as the value */}
                        {user.username} {/* Display only the username */}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col xs="auto">
                  <Button className={styles.button} type="button" variant="warning" disabled={editMode} onClick={handleShare}>
                    Share
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Col>
      );
    }

    return <Col lg={4}></Col>;
  };

  const renderBadges = () => {
    if (isBadged) {
      return (
        <Col lg={4}>
          <div className={styles.badgesContainer}>
            {calendar.userDefault === true && (
              <Badge style={{ width: '70px', padding: '0.5rem' }} pill variant="primary">
                Default
              </Badge>
            )}
            {calendar.user_id === 'system' && (
              <Badge style={{ width: '70px', padding: '0.5rem' }} pill variant="secondary">
                System
              </Badge>
            )}
            {calendar?.user_id !== 'system' && calendar?.userDefault !== true && calendar?.user_id !== userId && (
              <Badge  bg='secondary'style={{ width: '70px', padding: '0.5rem', backgroundColor: '#ffc107', color: '#ffc107' }} pill variant="secondary">
                Shared
              </Badge>
            )}
          </div>
        </Col>
      );
    } else {
      return <Col lg={4}></Col>;
    }
  };

  const renderLabel = () => {
    if (label) {
      return (
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <label className={styles.label} htmlFor={settingType}>
              {labelValue}
            </label>
          </Col>
        </Row>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {renderLabel()}
      <Row>
        {renderBadges()}
        <Col lg={4}>
          <Form.Control
            className={styles.input}
            name={settingType}
            type={inputType}
            value={inputValue}
            readOnly={!editMode}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          />
        </Col>
        {renderButtons()}
      </Row>

      {inputError && (
        <Row>
          <Col lg={4}></Col>
          <Col lg={8}>
            <div className="input-error text-danger mt-2 mb-2">
              <small>{inputError}</small>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CalendarSettingsItem;
