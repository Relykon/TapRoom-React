// import React from 'react';
// import keg from './assets/images/keg.jpg';
// import PropTypes from 'prop-types';

// function EditKegForm() {

//     let _beerName = null; //selectedKeg.beerName.value?
//     let _brewery = null; //selectedKeg.brewery.value?
//     let _cost = null; //selectedKeg.cost.value?
//     let _abv = null; //selectedKeg.abv.value?

//     // function handleEditKegFormSubmission(event) {
//     //     event.preventDefault();
//     //     props.onFinishedEditingKeg({ beerName: _beerName.value, brewery: _brewery.value, cost: _cost.value, abv: _abv.value});
//     // }
//     // onSubmit = { handleEditKegFormSubmission }
//     return (
//         <div>
//             <style jsx>{`
//             .alignCenter {
//                 text-align: center;
//             }
//             `}</style>
//             <form className='alignCenter'> 
//                 <input
//                     type='text'
//                     id='beerName'
//                     placeholder='Beer Name'
//                     ref={(input) => { _beerName = input; }} />
//                 <input
//                     type='text'
//                     id='breweryName'
//                     placeholder='Brewery Name'
//                     ref={(input) => { _brewery = input; }} />
//                 <input
//                     type='text'
//                     id='cost'
//                     placeholder='Cost per Pint'
//                     ref={(input) => { _cost = input; }} />
//                 <input
//                     type='text'
//                     id='abv'
//                     placeholder='% Alcohol by Volume'
//                     ref={(input) => { _abv = input; }} />
//                 <button type='submit'>Edit Keg</button>
//             </form>
//             <img src={keg} />
//         </div>
//     );
// }

// EditKegForm.propTypes = {
//     onFinishedEditingKeg: PropTypes.func
// };

// export default EditKegForm;