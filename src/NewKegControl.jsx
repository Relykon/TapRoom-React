import React from 'react';
import PropTypes from 'prop-types';
import AdminAuthorization from './AdminAuthorization';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleAdminConfirmation = this.handleAdminConfirmation.bind(this);
    }

    handleAdminConfirmation() {
        this.setState({formVisibleOnPage: true});
    }

    render() {
        let currentlyVisibleContent = null;
        if(this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
        } else {
            currentlyVisibleContent = <AdminAuthorization onAdminConfirmation={this.handleAdminConfirmation}/>;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewKegControl.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegControl;