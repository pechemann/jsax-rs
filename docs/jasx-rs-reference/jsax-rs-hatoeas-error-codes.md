:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md) > REST API > HATOEAS API > Error Codes

# JSAX-RS: Error Codes

The JSAX-RS API uses the `HateoasContextError` class to throw exceptions that occur when HATOEAS process fails.

All error codes are defined by the `HateoasContextErrorCode` enum. Below is a complete list of all HATOEAS error codes.


| Error Code | Description |
| --- | --- |
| ILLEGAL_CONTEXT_OVERRIDE | Indicates that an operation tries to override an existing context. |
| whetherILLEGAL_STATE_OPERATION | Specifies an illegal state operation. |
| whetherILLEGAL_TRANSITION_OPERATION | Specifies an illegal transition operation. |
| whetherINVALID_STATE_CONFIG | Specifies that the current state config is not valid. |
| whetherINVALID_TRANSITION_CONFIG | Specifies that the current transition config is not valid. |
| whetherINVALID_TRANSITION_MAPPING | Specifies that the current transition mapping is not valid. |
| whetherINVALID_STATE_REFERENCE | Specifies that the current state reference is not valid. |