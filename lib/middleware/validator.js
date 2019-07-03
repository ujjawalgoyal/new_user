
const validateUserRegistration = (req, res, next) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const address=req.body.address;
    const mobile_no=req.body.mobile_no;
    if (_.isEmpty(email)) {
      return next(exceptions.validationError(appConst.MESSAGES.email_is_empty));
    }
    // validate email
    if (!appUtils.isValidEmail(email)) {
      return next(exceptions.validationError(appConst.MESSAGES.invalidEmail));
    }
    if (_.isEmpty(password)) {
      return next(exceptions.validationError(appConst.MESSAGES.password_is_empty));
    }
  
    if (_.isEmpty(name)) {
      return next(exceptions.validationError(appConst.MESSAGES.nameEmpty));
    }
    if (_.isEmpty(mobile_no)) {
        return next(exceptions.validationError(appConst.MESSAGES.mobilenoempty));
      }
      if (_.isEmpty(address)) {
        return next(exceptions.validationError(appConst.MESSAGES.addressEmpty));
      }
      
  
    return next();
  };
  module.exports=validateUserRegistration;