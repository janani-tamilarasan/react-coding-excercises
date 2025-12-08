# User Registion
-> Fields
   - firstName
   - lastName
   - email
   - password
   - passwordConfirmation
-> Validation
   - firstName, lastName
      => firstName/lastName is required
      => Invalid irstName/lastName(accepts only aphapets)
   - email
      => email is required
      => Invalid email
   - password
     -> Password must be at least 6 characters
   - passwordConfirmation
     -> Password is not same as passwordConfirmation