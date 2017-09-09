const HttpError = require('./super/HttpError');

module.exports = class ParameterNotAllowNullException extends HttpError {
  constructor(message) {
    super(
      400,
      'PARAMETER_NOT_ALLOW_NULL_EXCEPTION',
      message || '필수 파라미터가 NULL이거나 undefined 입니다',
    );

    return this;
  }
};
