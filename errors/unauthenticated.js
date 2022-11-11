import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.js";

class UnAuthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
