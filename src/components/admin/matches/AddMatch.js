import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';

import FormField from '../../utils/form_field';
import { validate } from '../../utils/misc';
import { firebaseMatches, firebaseTeams, firebaseDB } from '../../../firebase';
import { firebaseLooper } from '../../utils/misc';

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
            },
            resultLocal: {
                element: 'input',
                value: '',
                config: {
                    label: 'Result Local',
                    name: 'result_local_input',
                    placeholder: '0',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: false
            },
            away: {
                element: 'select',
                value: '',
                config: {
                    label: 'Away',
                    name: 'away_select',
                    type: 'select',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: false
            },
            resultAway: {
                element: 'input',
                value: '',
                config: {
                    label: 'Result Away',
                    name: 'result_away_input',
                    placeholder: '0',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: false
            },
            referee: {
                element: 'input',
                value: '',
                config: {
                    label: 'Referee',
                    name: 'referee_input',
                    placeholder: 'Enter referee name...',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            stadium: {
                element: 'input',
                value: '',
                config: {
                    label: 'Stadium',
                    name: 'stadium_input',
                    placeholder: 'Enter stadium name...',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            result: {
                element: 'select',
                value: '',
                config: {
                    label: 'Team Result',
                    name: 'result_select',
                    type: 'select',
                    options: [
                        {key: 'W', value: 'W'},
                        {key: 'L', value: 'L'},
                        {key: 'D', value: 'D'},
                        {key: 'n/a', value: 'N/A'},
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            final: {
                element: 'select',
                value: '',
                config: {
                    label: 'Game Played',
                    name: 'final_select',
                    type: 'select',
                    options: [
                        {key: true, value: 'Yes'},
                        {key: false, value: 'No'}
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            }
        }
    }

    componentDidMount = () => {
        const matchId = this.props.match.params.id;
        const getTeams = (match, type) => {
            firebaseTeams.once('value').then((snapshot) => {
                const teams = firebaseLooper(snapshot);
                const teamOptions = [];

                snapshot.forEach((childSnapshot) => {
                    teamOptions.push({
                        key: childSnapshot.val().shortName,
                        value: childSnapshot.val().shortName
                    })
                });

                this.updateFields(match, teamOptions, teams, type, matchId);
            })
        }

        if (!matchId) {
            this.setState({formType: 'Add Match'})
            getTeams(false, 'Add Match');
        } else {
            this.setState({formType: 'Edit Match'});
            firebaseDB.ref(`matches/${matchId}`).once('value')
                .then((snapshot) => {
                    const match = snapshot.val();
                    getTeams(match, 'Edit Match');
                })
        }
    }

    updateFields = (match, teamOptions, teams, type, matchId) => {
        const newFormData = {...this.state.formData};

        for (let key in newFormData) {
            if (match) {
                newFormData[key].value = match[key];
                newFormData[key].valid = true;
            }
            if (key === 'local' || key==="away") {
                newFormData[key].config.options = teamOptions;
            }
        }

        this.setState({
            matchId,
            formType: type,
            formData: newFormData,
            teams
        })
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

        this.state.teams.forEach((team) => {
            if (team.shortName === dataToSubmit.local) {
                dataToSubmit['localThmb'] = team.thmb;
            }
            if (team.shortName === dataToSubmit.away) {
                dataToSubmit['awayThmb'] = team.thmb;
            }
        })

        if (formIsValid) {
            if (this.state.formType === 'Edit Match') {
                firebaseDB.ref(`matches/${this.state.matchId}`)
                    .update(dataToSubmit).then((res) => {
                        this.setState({formSuccessMessage: 'Successfully updated!'});
                        setTimeout(() => {this.setState({formSuccessMessage: ''})}, 2000);
                    }).catch((err) => {
                        this.setState({formError: true})
                    })
            } else {
                firebaseMatches.push(dataToSubmit).then((res) => {
                    this.props.history.push('/admin_matches');
                }).catch((err) => {
                    this.setState({formError: true})
                })
            }
        } else {
            this.setState({formError: true})
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
                                id={'date'}
                                formData={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                            />

                            <div className="select_team_layout">
                                <div className="input_label">Local</div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={'local'}
                                            formData={this.state.formData.local}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            id={'resultLocal'}
                                            formData={this.state.formData.resultLocal}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="select_team_layout">
                                <div className="input_label">Away</div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={'away'}
                                            formData={this.state.formData.away}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            id={'resultAway'}
                                            formData={this.state.formData.resultAway}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="split_fields">
                                <FormField
                                    id={'referee'}
                                    formData={this.state.formData.referee}
                                    change={(element) => this.updateForm(element)}
                                />
                                <FormField
                                    id={'stadium'}
                                    formData={this.state.formData.stadium}
                                    change={(element) => this.updateForm(element)}
                                />
                            </div>

                            <div className="split_fields last">
                                <FormField
                                    id={'result'}
                                    formData={this.state.formData.result}
                                    change={(element) => this.updateForm(element)}
                                />
                                <FormField
                                    id={'final'}
                                    formData={this.state.formData.final}
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

export default AddMatch;