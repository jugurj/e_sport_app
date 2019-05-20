import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../utils/form_field';
import { validate } from '../../utils/misc';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccessMessage: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email...'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    updateForm({event, id}) {
        const newFormData = {...this.state.formData};
        const newElement = {...newFormData[id]};

        newElement.value = event.target.value;

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[id] = newElement;

        this.setState({
            formError: false,
            formData: newFormData
        });
    }

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for (let element in this.state.formData) {
            dataToSubmit[element] = this.state.formData[element].value;
            if (!this.state.formData[element].valid ) formIsValid = false;
        }

        if (formIsValid) {
            console.log(dataToSubmit);
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element) => this.updateForm(element)}
                            />
                            { this.state.formError ? 
                                <div className="error_label">
                                    Something is wrong, try again
                                </div> 
                                : null}
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;