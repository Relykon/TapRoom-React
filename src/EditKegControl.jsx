// import React from 'react';
// import PropTypes from 'prop-types';
// import AdminAuthorization from './AdminAuthorization';
// import EditKegForm from './EditKegForm';

// class EditKegControl extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             tapListVisibleOnPage: false
//         };
//         this.handleAdminConfirmation = this.handleAdminConfirmation.bind(this);
//     }

//     handleAdminConfirmation() {
//         this.setState({tapListVisibleOnPage: true});
//     }

//     render() {
//         let currentlyVisibleContent = null;
//         if (this.state.tapListVisibleOnPage) {
//             currentlyVisibleContent = <EditKegForm />;
//         } else {
//             currentlyVisibleContent = <AdminAuthorization onAdminConfirmation={this.handleAdminConfirmation}/>;
//         }
//         return (
//             <div>
//                 {currentlyVisibleContent}
//             </div>
//         );
//     }
// }

// EditKegControl.propTypes = {
//     tapList: PropTypes.array,
//     currentRouterPath: string.isRequired,
//     onKegSelection: PropTypes.func.isRequired,
//     selectedKeg: PropTypes.object
//     // onFinishedEditingKeg: PropTypes.func
// };

// export default EditKegControl;