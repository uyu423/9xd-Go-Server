module.exports = class HttpError extends Error {
  constructor(status, code, message) {
    super();
    this.status = status || 500;
    this.code = code || 'UNEXPECTED_ERROR';
    this.message = message || '알 수 없는 에러가 발생했습니다. ㅜㅜ';

    return this;
  }
};
