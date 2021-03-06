// import React from 'react';
// import { useFormContext, Controller } from 'react-hook-form';
// import { TextField, Grid } from '@material-ui/core';

// function FormInput({ name, label, required }) {
//   const { control } = useFormContext();
//   // const isError = false;

//   return (
//     <Grid item xs={12} sm={6}>
//       <Controller
//         as={TextField}
//         control={control}
//         fullWidth 
//         name={name}
//         label={label}
//         required={required}
//         />
//     </Grid>
//   );
// }

// export default FormInput;

import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label, required }) => {
   const { control } = useFormContext();
   const isError = false;

   return (
      <>
         <Grid item xs={12} sm={6}>
            <Controller
               defaultValue=""
               control={control}
               name={name}
               render={({ field }) => (
                  <TextField
                     fullWidth
                     name={name}
                     label={label}
                     required
                  />
               )}
            />
         </Grid>
      </>
   );
}

export default FormInput;