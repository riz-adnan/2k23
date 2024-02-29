import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown() {
  return <DropdownButton id="dropdown-basic-button" title="Select Size">
      <Dropdown.Item href="#/action-1">SMALL</Dropdown.Item>
      <Dropdown.Item href="#/action-2">MEDIUM</Dropdown.Item>
      <Dropdown.Item href="#/action-3">LARGE</Dropdown.Item>
      <Dropdown.Item href="#/action-3">EXTRA LARGE</Dropdown.Item>
    </DropdownButton>
  
}

export default DropDown;