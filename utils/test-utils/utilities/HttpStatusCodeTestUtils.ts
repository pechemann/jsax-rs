/*!
 * This module constains utilities used by the HttpStatusCodeTest test  suite.
 */

// Utilities:
// We store constants that should be defined by the HttpStatusCode class:
export const CONTINUE: number = 100;
export const SWITCHING_PROTOCOLS: number = 101;
export const PROCESSING: number = 102;
export const OK: number = 200;
export const CREATED: number = 201;
export const ACCEPTED: number = 202;
export const NON_AUTHORITATIVE_INFORMATION: number = 203;
export const NO_CONTENT: number = 204;
export const RESET_CONTENT: number = 205;
export const PARTIAL_CONTENT: number = 206;
export const MULTI_STATUS: number = 207;
export const ALREADY_REPORTED: number = 208;
export const IM_USED: number = 226;
export const MULTIPLE_CHOICES: number = 300;
export const MOVED_PERMANENTLY: number = 301;
export const FOUND: number = 302;
export const SEE_OTHER: number = 303;
export const NOT_MODIFIED: number = 304;
export const USE_PROXY: number = 305;
export const TEMPORARY_REDIRECT: number = 307;
export const PERMANENT_REDIRECT: number = 308;
export const BAD_REQUEST: number = 400;
export const UNAUTHORIZED: number = 401;
export const PAYMENT_REQUIRED: number = 402;
export const FORBIDEN: number = 403;
export const NOT_FOUND: number = 404;
export const METHOD_NOT_ALLOWED: number = 405;
export const NOT_ACCEPTABLE: number = 406;
export const PROXY_AUTHENTICATION_REQUIRED: number = 407;
export const REQUEST_TIMEOUT: number = 408;
export const CONFLICT: number = 409;
export const GONE: number = 410;
export const LENGTH_REQUIRED: number = 411;
export const PRECONDITION_FAILED: number = 412;
export const PAYLOAD_TOO_LARGE: number = 413;
export const URI_TOO_LONG: number = 414;
export const UNSUPPORTED_MEDIA_TYPE: number = 415;
export const REQUESTED_RANGE_NOT_SATISFIABLE: number = 416;
export const EXPECTATION_FAILED: number = 417;
export const I_AM_A_TEAPOT: number = 418;
export const DESTINATION_LOCKED: number = 421;
export const UNPROCESSABLE_ENTITY: number = 422;
export const LOCKED: number = 423;
export const FAILED_DEPENDENCY: number = 424;
export const UPGRADE_REQUIRED: number = 426;
export const PRECONDITION_REQUIRED: number = 428;
export const TOO_MANY_REQUESTS: number = 429;
export const REQUEST_HEADER_FIELDS_TOO_LARGE: number = 431;
export const UNAVAILABLE_FOR_LEGAL_REASONS: number = 451;
export const INTERNAL_SERVER_ERROR: number = 500;
export const NOT_IMPLEMENTED: number = 501;
export const BAD_GATEWAY: number = 502;
export const SERVICE_UNAVAILABLE: number = 503;
export const GATEWAY_TIMEOUT: number = 504;
export const HTTP_VERSION_NOT_SUPPORTED: number = 505;
export const VARIANT_ALSO_NEGOTIATES: number = 506;
export const INSUFFICIENT_STORAGE: number = 507;
export const LOOP_DETECTED: number = 508;
export const NOT_EXTENDED: number = 510;
export const NETWORK_AUTHENTICATION_REQUIRED: number = 511;