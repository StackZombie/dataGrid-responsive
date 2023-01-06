import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Row,
  Col,
  Input,
  Label,
} from 'reactstrap';

import { Column } from '../utils';

import { useState } from 'react';

interface Props {
  modal: boolean;
  toggleModal(): void;
  Cols: Column[];
  deleteColumn(colName: string): void;
  addColumn(column: Column): void;
}

interface ColumnState {
  label: string;
  key: string;
  type: string;
}

const ConfigurationModal = ({
  modal,
  toggleModal,
  Cols,
  deleteColumn,
  addColumn,
}: Props) => {
  const [Column, setColumn] = useState<ColumnState>({
    label: '',
    key: '',
    type: '',
  });

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumn({ ...Column, [e.target.name]: e.target.value });
  };

  const addData = () => {
    addColumn(Column);
    setColumn({ label: '', key: '', type: '' });
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Row>
                <Col lg={4}>
                  <Label>Label</Label>
                  <Input
                    type="text"
                    name="label"
                    value={Column.label}
                    onChange={textChange}
                  />
                </Col>
                <Col lg={4}>
                  <Label>type</Label>
                  <Input
                    type="text"
                    name="type"
                    value={Column.type}
                    onChange={textChange}
                  />
                </Col>
                <Col lg={4}>
                  <Label>Key</Label>
                  <Input
                    type="text"
                    name="key"
                    value={Column.key}
                    onChange={textChange}
                  />
                </Col>
              </Row>
              <Col lg={12}>
                <Button
                  onClick={addData}
                  className="btn btn-sm btn-success mt-2 "
                >
                  Add Column
                </Button>
              </Col>
            </FormGroup>
            {Cols.map(({ label, key, type }) => {
              if (key !== '#') {
                return (
                  <>
                    {' '}
                    <FormGroup row key={key}>
                      <Row>
                        <Col lg={3}>
                          <Label>Label</Label>
                          <Input value={label} disabled={true} />
                        </Col>
                        <Col lg={3}>
                          <Label>type</Label>
                          <Input value={type} disabled={true} />
                        </Col>
                        <Col lg={3}>
                          <Label>Key</Label>
                          <Input value={key} disabled={true} />
                        </Col>
                        <Col lg={3}>
                          <Label>Action</Label>
                          <Button
                            onClick={() => deleteColumn(key)}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </>
                );
              }
            })}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ConfigurationModal;
