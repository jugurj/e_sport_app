import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import FormField from '../../utils/form_field';
import { validate } from '../../utils/misc';

class AddMatch extends Component {

    state = {
        matchId: '',
        formType: '',
        formError: false,
        formSuccessMessage: '',
        teams: [],
        formData: {
            date: {
                element: 'input',
                value: '',
                config: {
                    label: 'Event Date',
                    name: 'date_input',
                    type: 'date'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            local: {
                element: 'select',
                value: '',
                config: {
                    label: 'Local',
                    name: 'local_select',
                    type: 'select',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: false
            }
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <FormField
                                id={'date_input'}
                                formData={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'local_select'}
                                formData={this.state.formData.local}
                                change={(element) => this.updateForm(element)}
                            />
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddMatch;