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

    render() {
        return (
            <div>
                {   !this.state.fileURL ?
                        <div>
                            <div className="input_label">{this.props.tag}</div>
                            <Fileuploader
                                accept="image/*"
                                name="image"
                                randomizeFilename
                                storageRef={firebase.storage().ref(this.props.dir)}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                            />
                        </div>
                        : null}
            </div>
        );
    }
}

export default FileUploader;