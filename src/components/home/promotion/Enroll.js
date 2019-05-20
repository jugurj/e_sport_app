import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../utils/form_field';

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
        newFormData[id] = newElement;

        this.setState({formData: newFormData});
    }

    submitForm() {
        
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
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;