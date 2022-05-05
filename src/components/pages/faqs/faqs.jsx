// import "./privacy.css";
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SaveIcon from '@mui/icons-material/Save';

class Faqs extends Component {
    render() {
        return (
            <div className="App">
                <h1 id="heading">Frequently Asked Questions</h1>
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<p>Hello, I am Shravan </p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

                <div>
                    <button className="btn btn-primary" onClick={this.props.onClick}>Save</button>
                    <button className="btn btn-primary" onClick={this.props.onClick}>Update</button>
                </div>
            </div>

    
        );
    }
}

export default Faqs;
