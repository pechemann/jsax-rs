/**
 * Contains the values of status codes defined for the Hypertext Transfer Protocol (HTTP).
 * 
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
export enum HttpStatusCode {

  //--> 1xx Informational responses

  /**
   * Equivalent to HTTP status <code>100</code>. Indicates that the server has received the request headers and the 
   * client should proceed to send the request body.
   */
  CONTINUE = 100,

  /**
   * Equivalent to HTTP status <code>101</code>. Indicates that the requester has asked the server to switch protocols
   * and the server has agreed to do so.
   */
  SWITCHING_PROTOCOLS = 101,

  /**
   * Equivalent to HTTP status <code>102</code>. Indicates that the server has received and is processing the request,
   * but no response is available yet.
   */
  PROCESSING = 102,

  //--> 2xx Success

  /**
   * Equivalent to HTTP status <code>200</code>. Indicates that the request succeeded.
   */
  OK = 200,

  /**
   * Equivalent to HTTP status <code>201</code>. Indicates that the request has been fulfilled, resulting in the
   * creation of a new resource.
   */
  CREATED = 201,
  
  /**
   * Equivalent to HTTP status <code>202</code>. Indicates that the request has been accepted for processing, but the
   * processing has not been completed.
   */
  ACCEPTED = 202,

  /**
   * Equivalent to HTTP status <code>203</code>. Indicates that server is a transforming proxy that received a 200 OK
   * from its origin, but is returning a modified version of the origin response.
   */
  NON_AUTHORITATIVE_INFORMATION = 203,

  /**
   * Equivalent to HTTP status <code>204</code>. Indicates that the request has been fulfilled, but the response does
   * not include an entity.
   */
  NO_CONTENT = 204,

  /**
   * Equivalent to HTTP status <code>205</code>. Indicates that the server successfully processed the request, but is
   * not returning any content.
   */
  RESET_CONTENT = 205,

  /**
   * Equivalent to HTTP status <code>206</code>. Indicates that the server is delivering only part of the resource due
   * to a range header sent by the client.
   */
  PARTIAL_CONTENT = 206,
  
  /**
   * Equivalent to HTTP status <code>207</code>. Indicates that message body that follows is an XML message and can
   * contain a number of separate response codes, depending on how many sub-requests were made.
   */
  MULTI_STATUS = 207,

  /**
   * Equivalent to HTTP status <code>208</code>. Indicates that members of a DAV binding have already been enumerated in
   * a preceding part of the (multistatus) response, and are not being included again.
   */
  ALREADY_REPORTED = 208,

  /**
   * Equivalent to HTTP status <code>226</code>. Indicates that server has fulfilled a request for the resource, and the
   * response is a representation of the result of one or more instance-manipulations applied to the current instance.
   */
  IM_USED = 226,

  //--> 3xx Redirection

  /**
   * Equivalent to HTTP status <code>300</code>. Indicates that multiple options for the resource from which the client
   * may choose.
   */
  MULTIPLE_CHOICES = 300,

  /**
   * Equivalent to HTTP status <code>301</code>. Indicates that the current request and all future requests should be
   * directed to the given URI.
   */
  MOVED_PERMANENTLY = 301,

  /**
   * Equivalent to HTTP status <code>302</code>. Performs a redirection.
   */
  FOUND = 302,

  /**
   * Equivalent to HTTP status <code>303</code>. Indicates that the response to the request can be found under another
   * URI using a GET method.
   */
  SEE_OTHER = 303,

  /**
   * Equivalent to HTTP status <code>304</code>. Indicates that the resource has not been modified since the version
   * specified by the request headers <code>If-Modified-Since</code> or <code>If-None-Match</code>. 
   */
  NOT_MODIFIED = 304,

  /**
   * Equivalent to HTTP status <code>305</code>. Indicates that the requested resource is available only through a
   * proxy, the address for which is provided in the response.
   */
  USE_PROXY = 305,

  /**
   * Equivalent to HTTP status <code>307</code>. Indicates that the current request should be repeated with another URI.
   */
  TEMPORARY_REDIRECT = 307,
  
  /**
   * Equivalent to HTTP status <code>308</code>. Indicates that the request and all future requests should be repeated
   * using another URI. 
   */
  PERMANENT_REDIRECT = 308,

  //--> 4xx Client errors

  /**
   * Equivalent to HTTP status <code>400</code>. Indicates that improper syntax prevented the server from understanding
   * the request .
   */
  BAD_REQUEST = 400,
  
  /**
   * Equivalent to HTTP status <code>401</code>. Indicates that authentication has failed or has not been yet provided.
   */
  UNAUTHORIZED = 401,

  /**
   * Equivalent to HTTP status <code>402</code>. Reserved for future use.
   */
  PAYMENT_REQUIRED = 402,

  /**
   * Equivalent to HTTP status <code>403</code>. Indicates that the server understood but refuses to fulfill the
   * request.
   */
  FORBIDEN = 403,

  /**
   * Equivalent to HTTP status <code>404</code>. Indicates that the server did not find a resource that matches the
   * requested URI.
   */
  NOT_FOUND = 404,

  /**
   * Equivalent to HTTP status <code>405</code>. Indicates that a request method is not supported for the requested
   * resource.
   */
  METHOD_NOT_ALLOWED = 405,

  /**
   * Equivalent to HTTP status <code>406</code>. Indicates that the requested resource is capable of generating only
   * content not acceptable according to the <code>Accept</code> headers sent in the request.
   */
  NOT_ACCEPTABLE = 406,

  /**
   * Equivalent to HTTP status <code>407</code>. Indicates that the client must first authenticate itself with the
   * proxy.
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,

  /**
   * Equivalent to HTTP status <code>408</code>. Indicates that the server timed out waiting for the request.
   */
  REQUEST_TIMEOUT = 408,

  /**
   * Equivalent to HTTP status <code>409</code>. Indicates that the request could not be processed because of conflict
   * in the request, such as an edit conflict between multiple simultaneous updates.
   */
  CONFLICT = 409,

  /**
   * Equivalent to HTTP status <code>410</code>. Indicates that the resource requested is no longer available and will
   * not be available again. 
   */
  GONE = 410,

  /**
   * Equivalent to HTTP status <code>411</code>. Indicates that the request did not specify the length of its content,
   * which is required by the requested resource. 
   */
  LENGTH_REQUIRED = 411,

  /**
   * Equivalent to HTTP status <code>412</code>. Indicates that the server does not meet one of the preconditions that
   * the requester put on the request.
   */
  PRECONDITION_FAILED = 412,

  /**
   * Equivalent to HTTP status <code>413</code>. Indicates that the request is larger than the server is willing or able
   * to process.
   */
  PAYLOAD_TOO_LARGE = 413,

  /**
   * Equivalent to HTTP status <code>414</code>. Indicates that the URI provided was too long for the server to process.
   */
  URI_TOO_LONG = 414,

  /**
   * Equivalent to HTTP status <code>415</code>. Indicates that the request entity has a media type which the server or
   * resource does not support.
   */
  UNSUPPORTED_MEDIA_TYPE = 415,

  /**
   * Equivalent to HTTP status <code>416</code>. Indicates that the client has asked for a portion of the file
   * (byte serving), but the server cannot supply that portion.
   */
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,

  /**
   * Equivalent to HTTP status <code>417</code>. Indicates that the server cannot meet the requirements of the Expect
   * request-header field.
   */
  EXPECTATION_FAILED = 417,

  /**
   * Equivalent to HTTP status <code>418</code>. "<code>I'm a teapot</code>".
   */
  I_AM_A_TEAPOT = 418,

  /**
   * Equivalent to HTTP status <code>421</code>. Indicates that the request was directed at a server that is not able to
   * produce a response.
   */
  DESTINATION_LOCKED = 421,

  /**
   * Equivalent to HTTP status <code>422</code>. Indicates that the request was well-formed but was unable to be
   * 
   * followed due to semantic errors.
   */
  UNPROCESSABLE_ENTITY = 422,

  /**
   * Equivalent to HTTP status <code>423</code>. Indicates that the resource that is being accessed is locked.
   */
  LOCKED = 423,

  /**
   * Equivalent to HTTP status <code>424</code>. Indicates that the request failed due to failure of a previous request.
   */
  FAILED_DEPENDENCY = 424,

  /**
   * Equivalent to HTTP status <code>426</code>. Indicates that the client should switch to a different protocol, given
   * in the Upgrade header field.
   */
  UPGRADE_REQUIRED = 426,

  /**
   * Equivalent to HTTP status <code>428</code>. Indicates that the origin server requires the request to be
   * conditional.
   */
  PRECONDITION_REQUIRED = 428,

  /**
   * Equivalent to HTTP status <code>429</code>. Indicates that the user has sent too many requests in a given amount of
   * time.
   */
  TOO_MANY_REQUESTS = 429,

  /**
   * Equivalent to HTTP status <code>431</code>. Indicates that the server is unwilling to process the request because
   * either an individual header field, or all the header fields collectively, are too large.
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

  /**
   * Equivalent to HTTP status <code>451</code>. Indicates that the a server operator has received a legal demand to
   * deny access to a resource or to a set of resources that includes the requested resource.
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  //--> 5xx Server error

  /**
   * Equivalent to HTTP status <code>500</code>. Indicates that the request could not be fulfilled by the server due to
   * an unexpected condition.
   */
  INTERNAL_SERVER_ERROR = 500,
  
  /**
   * Equivalent to HTTP status <code>501</code>. Indicates that the server either does not recognize the request method,
   * or it lacks the ability to fulfil the request.
   */
  NOT_IMPLEMENTED = 501,
  
  /**
   * Equivalent to HTTP status <code>502</code>. Indicates that the server was acting as a gateway or proxy and received
   * an invalid response from the upstream server.
   */
  BAD_GATEWAY = 502,
  
  /**
   * Equivalent to HTTP status <code>503</code>. Indicates that the server is currently unavailable.
   */
  SERVICE_UNAVAILABLE = 503,
  
  /**
   * Equivalent to HTTP status <code>504</code>. Indicates that the server was acting as a gateway or proxy and did not
   * receive a timely response from the upstream server.
   */
  GATEWAY_TIMEOUT = 504,
  
  /**
   * Equivalent to HTTP status <code>505</code>. Indicates that the server does not support the HTTP protocol version
   * used in the request.
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  
  /**
   * Equivalent to HTTP status <code>506</code>. Indicates that transparent content negotiation for the request results
   * in a circular reference.
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  
  /**
   * Equivalent to HTTP status <code>507</code>. Indicates that the server is unable to store the representation needed
   * to complete the request.
   */
  INSUFFICIENT_STORAGE = 507,
  
  /**
   * Equivalent to HTTP status <code>508</code>. Indicates that the server detected an infinite loop while processing
   * the request
   */
  LOOP_DETECTED = 508,
  
  /**
   * Equivalent to HTTP status <code>510</code>. Indicates that further extensions to the request are required for the
   * server to fulfil it.
   */
  NOT_EXTENDED = 510,
  
  /**
   * Equivalent to HTTP status <code>511</code>. Indicates that the client needs to authenticate to gain network access.
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511
}