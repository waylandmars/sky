import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 
import { Modal, Button, Form } from  "react-bootstrap";


const Actions = (props) => {
  const {
    selectedItems,
    isFolder,
    icons,
    nameFilter,

    canCreateFolder,
    onCreateFolder,

    canRenameFile,
    onRenameFile,

    canRenameFolder,
    onRenameFolder,

    canDeleteFile,
    onDeleteFile,

    canDeleteFolder,
    onDeleteFolder,

    canShareFile,
    onShareFile,

    canDownloadFile,
    onDownloadFile,

    canDownloadFolder,
    onDownloadFolder,

  } = props

  /** @type any */
  let actions = []

  if (selectedItems.length) {
    // Something is selected. Build custom actions depending on what it is.
    const selectedItemsAction = selectedItems.filter(item => item.action)
    if (selectedItemsAction.length === selectedItems.length && [...new Set(selectedItemsAction)].length === 1) {
      // Selected item has an active action against it. Disable all other actions.
      let actionText
      switch (selectedItemsAction[0].action) {
        case 'delete':
          actionText = 'Удаление ...'
          break

        case 'rename':
          actionText = 'Переименование ...'
          break

        

        default:
          actionText = 'Перемещение ...'
          break
      }

      actions = (
        // TODO: Enable plugging in custom spinner.
        <div className="item-actions">
          {icons.Loading} {actionText}
        </div>
      )
    } else {
      if (isFolder && canCreateFolder && !nameFilter) {
        actions.push(
          <li key="action-add-folder">
            <a
              onClick={onCreateFolder}
              href="#"
              role="button"
            >
              {icons.Folder}
              &nbsp;Добавить подпапку
            </a>
          </li>
        )
      }

      const itemsWithoutKeyDerived = selectedItems.find(item => !item.keyDerived)
      if (!itemsWithoutKeyDerived && !isFolder && canRenameFile && selectedItems.length === 1) {
        actions.push(
          <li key="action-rename">
            <a
              onClick={onRenameFile}
              href="#"
              role="button"
            >
              {icons.Rename}
              &nbsp;Переименовать
            </a>
          </li>
        )
      } else if (!itemsWithoutKeyDerived && isFolder && canRenameFolder) {
        actions.push(
          <li key="action-rename">
            <a
              onClick={onRenameFolder}
              href="#"
              role="button"
            >
              {icons.Rename}
              Переименовать
            </a>
          </li>
        )
      }

      if (!itemsWithoutKeyDerived && !isFolder && canDeleteFile) {
        actions.push(
          <li key="action-delete">
            <a
              onClick={onDeleteFile}
              href="#"
              role="button"
            >
              {icons.Delete}
              Удалить
            </a>
          </li>
        )
      } else if (!itemsWithoutKeyDerived && isFolder && canDeleteFolder) {
        actions.push(
          <li key="action-delete">
            <a
              onClick={onDeleteFolder}
              href="#"
              role="button"
            >
              {icons.Delete}
              Удалить
            </a>
          </li>
        )
      }

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      if (canShareFile) {
        actions.push(
    <>
          <li key="action-share">
          <a
            onClick={handleShow}
            href="#"
            role="button"
          >
            {icons.Delete}
            Отменить доступ к файлу
          </a>
        </li>
        <Modal className="fileUploader" show={show} onClick={(event)=>{event.stopPropagation();}}  backdrop="static" keyboard={false}>  
        <Modal.Header>
          {/* <Modal.Title>Введите email</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <p className="confirmationActionTitle">Вы действительно хотите отменить доступ к файлу/папке?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Отменить доступ к файлу
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    
        )
      }

      if (actions.length) {
        actions = (<ul className="item-actions">{actions}</ul>)
      } else {
        actions = (<div className="item-actions">&nbsp;</div>)
      }
    }
  } else {
    // Nothing selected: We're in the 'root' folder. Only allowed action is adding a folder.
    if (canCreateFolder && !nameFilter) {
      actions.push(
        <li key="action-add-folder">
          <a
            onClick={onCreateFolder}
            href="#"
            role="button"
          >
            {icons.Folder}
            Добавить папку
          </a>
        </li>
      )
    }

    if (actions.length) {
      actions = (<ul className="item-actions">{actions}</ul>)
    } else {
      actions = (<div className="item-actions">&nbsp;</div>)
    }
  }

  return actions
}




Actions.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  isFolder: PropTypes.bool,
  icons: PropTypes.object,
  nameFilter: PropTypes.string,

  canCreateFolder: PropTypes.bool,
  onCreateFolder: PropTypes.func,

  canRenameFile: PropTypes.bool,
  onRenameFile: PropTypes.func,

  canRenameFolder: PropTypes.bool,
  onRenameFolder: PropTypes.func,

  canDeleteFile: PropTypes.bool,
  onDeleteFile: PropTypes.func,

  canDeleteFolder: PropTypes.bool,
  onDeleteFolder: PropTypes.func,

  canShareFile: PropTypes.bool,
  onShareFile: PropTypes.func,

  canDownloadFile: PropTypes.bool,
  onDownloadFile: PropTypes.func,

  canDownloadFolder: PropTypes.bool,
  onDownloadFolder: PropTypes.func,
}

Actions.defaultProps = {
  selectedItems: [],
  isFolder: false,
  icons: {},
  nameFilter: '',

  canCreateFolder: false,
  onCreateFolder: null,

  canRenameFile: false,
  onRenameFile: null,

  canRenameFolder: false,
  onRenameFolder: null,

  canDeleteFile: false,
  onDeleteFile: null,

  canShareFile: true,
  onShareFile: null,

  canDeleteFolder: false,
  onDeleteFolder: null,

  canDownloadFile: false,
  onDownloadFile: null,

  canDownloadFolder: false,
  onDownloadFolder: null,
}

export default Actions;