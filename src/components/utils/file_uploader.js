import React, { Component } from 'react';
import { firebase } from '../../firebase';
import Fileuploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress';

class FileUploader extends Component {

    state = {
        name: '',
        isUploading: false,
        fileURL: ''
    }

    static getDerivedStateFromProps(props, state) {
        if (props.defaultImg) {
            return state = {
                name: props.defaultImgName,
                fileURL: props.defaultImg
            }
        }

        return null;
    }

    handleUploadStart = () => {
        this.setState({isUploading: true})
    }

    handleUploadError = () => {
        this.setState({isUploading: false})
    }

    handleUploadSuccess = (filename) => {
        this.setState({
            name: filename,
            isUploading: false,
        });

        firebase.storage().ref(this.props.dir)
            .child(filename).getDownloadURL()
            .then((url) => { this.setState({fileURL: url}) })
    }

    render() {
        return (
            <div>
                {   !this.state.fileURL ?
                        <div>
                            <div className="input_label">{this.props.tag}</div>
                            <Fileuploader
                                accept="images/*"
                                name="image"
                                randomizeFilename
                                storageRef={firebase.storage().ref(this.props.dir)}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                            />
                        </div>
                        : <div className="image_upload_container">
                            <img
                                style={{width: '100%'}}
                                src={this.state.fileURL}
                                alt={this.state.name}
                            />
                            <div className="remove" onClick={() => this.clearUpload()}>
                                Remove
                            </div>
                        </div>
                }
                {   this.state.isUploading ?
                        <div className="progress">
                            <CircularProgress style={{color: 'inherit'}}/>
                        </div>
                        : null
                }
            </div>
        );
    }
}

export default FileUploader;