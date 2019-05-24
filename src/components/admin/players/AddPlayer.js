import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import FormField from '../../utils/form_field';
import { validate } from '../../utils/misc';
import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';
import FileUploader from '../../utils/file_uploader';

class AddPlayer extends Component {

    state = {
        playerId: '',
        formType: '',
        formError: false,
        formSuccessMessage: '',
        defaultImg: '',
        players: [],
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'First Name',
                    name: 'name_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    label: 'Last Name',
                    name: 'lastname_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            nickname: {
                element: 'input',
                value: '',
                config: {
                    label: 'Nickname',
                    name: 'nickname_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            age: {
                element: 'input',
                value: '',
                config: {
                    label: 'Age',
                    name: 'age_input',
                    type: 'number'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            game: {
                element: 'select',
                value: '',
                config: {
                    label: 'Game',
                    name: 'game_select',
                    type: 'select',
                    options: [
                        {key:"CS:GO", value: "CS:GO"},
                        {key:"Dota2", value: "Dota2"},
                        {key:"Fortnite", value: "Fortnite"},
                        {key:"Paladins", value: "Paladins"},
                        {key:"Artifact", value: "Artifact"}
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            country: {
                element: 'input',
                value: '',
                config: {
                    label: 'Country',
                    name: 'country_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            image: {
                element: 'image',
                value: '',
                validation: {
                    required: true
                },
                valid: true
            }
        }
    }

    componentDidMount = () => {
        const playerId = this.props.match.params.id;

        if (!playerId) {
            this.setState({formType: 'Add Player'})
        } else {
            this.setState({formType: 'Edit Player'});
            // ...
        }
    }

    updateForm = ({event, id}) => {
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

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for (let element in this.state.formData) {
            dataToSubmit[element] = this.state.formData[element].value;
            if (!this.state.formData[element].valid) formIsValid = false;
        }

        if (formIsValid) {
            // ...
        } else {
            this.setState({formError: true})
        }
    }

    resetImage = () => {
        // ...
    }

    getFileName = () => {
        // ...
    }

    render() {
        return (
            <AdminLayout>
                <div className="editplayer_dialog_wrapper">
                    <h2>{this.state.formType}</h2>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>

                            <FileUploader
                                dir="players"
                                tag={"Thumbnail"}
                                defaultImg={this.state.defaultImg}
                                defaultImgName={this.state.formData.image.value}
                                resetImage={() => this.resetImage()}
                                filename={(filename) => this.getFileName(filename)}
                            />

                            <FormField
                                id={'name'}
                                formData={this.state.formData.name}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'nickname'}
                                formData={this.state.formData.nickname}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'lastname'}
                                formData={this.state.formData.lastname}
                                change={(element) => this.updateForm(element)}
                            />

                            <div className="split_fields last">
                                <FormField
                                    id={'age'}
                                    formData={this.state.formData.age}
                                    change={(element) => this.updateForm(element)}
                                />

                                <FormField
                                    id={'game'}
                                    formData={this.state.formData.game}
                                    change={(element) => this.updateForm(element)}
                                />

                                <FormField
                                    id={'country'}
                                    formData={this.state.formData.country}
                                    change={(element) => this.updateForm(element)}
                                />
                            </div>

                            <div className="success_label">{this.state.formSuccessMessage}</div>

                            {   this.state.formError ?
                                    <div className="error_label">
                                        Somethin is wrong
                                    </div>
                                    : null
                            }

                            <div className="admin_submit">
                                <button onClick={(event) => this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddPlayer;