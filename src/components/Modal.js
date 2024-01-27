import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        // if (e.target.type === "checkbox") {
        //   value = e.target.checked;
        // }

        const activeItem = { value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Prompt </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                id="prompt"
                                name="prompt"
                                value={
                                    this.state.activeItem.value
                                        ? this.state.activeItem.value
                                        : this.props.activeItem
                                }
                                onChange={this.handleChange}
                                // placeholder={this.props.activeItem}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem.value)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
