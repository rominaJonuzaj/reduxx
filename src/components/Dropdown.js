// import { useState } from 'react';
// import React from 'react';


//  const Dropdown(props) {

//   const [displayUserCard, setDisplayUserCard] = useState(false);
//   const [selectedUser, setselectedUser] = useState({});
 
//   return <div className="dropdown">
//     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       List of Users
//     </button>
//     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//       <a className="dropdown-item" href="#">Action</a>

//     </div>
//   </div>;
// }

// export default Dropdown;

// return <div className="dropdown">
//         <Dropdown>
//         <Dropdown.Toggle 
//         variant="secondary btn-sm" 
//         id="dropdown-basic">
//             Language
//         </Dropdown.Toggle>

//         <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
//             <Dropdown.Item href="#" >Arabic</Dropdown.Item>
//             <Dropdown.Item href="#">English</Dropdown.Item>
//         </Dropdown.Menu>
//         </Dropdown>
// </div>
import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
