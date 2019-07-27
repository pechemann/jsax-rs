/*!
 * JASX-RS Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * MIT Licensed
 */

declare module "jsax-rs" {

export enum HttpMethod {    GET = "GET",    POST = "POST",    PUT = "PUT",    DELETE = "DELETE",    HEAD = "HEAD",    OPTIONS = "OPTIONS",    TRACE = "TRACE",    CONNECT = "CONNECT"}export enum HttpStatusCode {    CONTINUE = 100,    SWITCHING_PROTOCOLS = 101,    PROCESSING = 102,    OK = 200,    CREATED = 201,    ACCEPTED = 202,    NON_AUTHORITATIVE_INFORMATION = 203,    NO_CONTENT = 204,    RESET_CONTENT = 205,    PARTIAL_CONTENT = 206,    MULTI_STATUS = 207,    ALREADY_REPORTED = 208,    IM_USED = 226,    MULTIPLE_CHOICES = 300,    MOVED_PERMANENTLY = 301,    FOUND = 302,    SEE_OTHER = 303,    NOT_MODIFIED = 304,    USE_PROXY = 305,    TEMPORARY_REDIRECT = 307,    PERMANENT_REDIRECT = 308,    BAD_REQUEST = 400,    UNAUTHORIZED = 401,    PAYMENT_REQUIRED = 402,    FORBIDEN = 403,    NOT_FOUND = 404,    METHOD_NOT_ALLOWED = 405,    NOT_ACCEPTABLE = 406,    PROXY_AUTHENTICATION_REQUIRED = 407,    REQUEST_TIMEOUT = 408,    CONFLICT = 409,    GONE = 410,    LENGTH_REQUIRED = 411,    PRECONDITION_FAILED = 412,    PAYLOAD_TOO_LARGE = 413,    URI_TOO_LONG = 414,    UNSUPPORTED_MEDIA_TYPE = 415,    REQUESTED_RANGE_NOT_SATISFIABLE = 416,    EXPECTATION_FAILED = 417,    I_AM_A_TEAPOT = 418,    DESTINATION_LOCKED = 421,    UNPROCESSABLE_ENTITY = 422,    LOCKED = 423,    FAILED_DEPENDENCY = 424,    UPGRADE_REQUIRED = 426,    PRECONDITION_REQUIRED = 428,    TOO_MANY_REQUESTS = 429,    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,    UNAVAILABLE_FOR_LEGAL_REASONS = 451,    INTERNAL_SERVER_ERROR = 500,    NOT_IMPLEMENTED = 501,    BAD_GATEWAY = 502,    SERVICE_UNAVAILABLE = 503,    GATEWAY_TIMEOUT = 504,    HTTP_VERSION_NOT_SUPPORTED = 505,    VARIANT_ALSO_NEGOTIATES = 506,    INSUFFICIENT_STORAGE = 507,    LOOP_DETECTED = 508,    NOT_EXTENDED = 510,    NETWORK_AUTHENTICATION_REQUIRED = 511}export class Galaad {    private _stateBuilder;    private _transitionBuilder;    private _context;    private _initStates;    private _initTransitionMap;    private _initTransitions;    private static _instance;    private constructor();    static getInstance(): Galaad;    createContext(config: ApplicationConfig): void;    registerStateConfig(config: StateConfig): void;    registerTransitionConfig(config: TransitionConfig): void;    addTransitionMappper(mapper: TransitionMapping): void;    getContext(): HateoasContext;    private setStatesTransitions;    private assignTransitionsToState;}export class ApplicationContextImpl implements ApplicationContext {    private readonly NAME;    private readonly DOMAIN;    private readonly API_PATH;    private readonly VERSION;    constructor(config: ApplicationConfig);    getName(): string;    getDomain(): string;    getApiPath(): string;    getApiVersion(): string;}export class ApplicationImpl implements Application {    state: State;    readonly name: string;    readonly domain?: string;    readonly apiPath?: string;    readonly version?: string;    constructor(name: string, domain: string, apiPath: string, version: string);}export class HateoasContextImpl implements HateoasContext {    private readonly CONTEXT;    private readonly STATES;    private readonly APP_BUILDER;    private readonly RESOURCE_PATH_UTIL;    private readonly STATE_UTIL;    private readonly APP_UTIL;    constructor(context: ApplicationContext, states: Array<State>);    getApplicationContext(): ApplicationContext;    getApplicationState(stateName: string): Application;    getApplicationStateRepresentation(stateName: string, parameters?: {        [name: string]: any;    }): any;    getGraph(): Array<State>;    private initStates;}export class StateImpl implements State {    name?: string;    type: StateType;    resource: string;    method: HttpMethod;    transitions?: Array<Transition>;    context?: any;}export class TransitionImpl implements Transition {    type: StateType;    resource: string;    method: HttpMethod;    context?: any;    rel?: LinkType;}export function RsApplication(config: ApplicationConfig): (constructorFunction: Function) => any;export function RsMapTransition(transitionRef: string): (target: any, methodName: string, descriptor: any) => any;export function RsState(config: StateConfig): (target: any, methodName: string, descriptor: any) => any;export function RsTransition(config: TransitionConfig): (...args: any) => any;export class ApplicationBuilder {    build(name: string, domain: string, apiPath?: string, version?: string, state?: State): Application;    buildFromContext(context: ApplicationContext, state?: State): Application;}export class ApplicationUtil {    createAppRepresentation(application: Application): any;    createAppRepresentationFromContext(context: ApplicationContext): any;}export class ResourcePathUtil {    private readonly MARK_CHAR;    private readonly AMP_CHAR;    private readonly EMPTY_STR;    setSegmentParams(resourcePath: string, parameters?: {        [name: string]: any;    }): string;}export class StateBuilder {    buildFromConfig(config: StateConfig, transitions?: Array<Transition>): State;}export class StateUtil {    createStateRepresentation(state: State): any;    createTransitionRepresentation(transition: Transition): any;}export class TransitionBuilder {    buildFromConfig(config: TransitionConfig): Transition;}export interface TransitionMapping {    stateRef: string;    transitionRef: string;}export interface Application {    name: string;    domain?: string;    apiPath?: string;    version?: string;    state: State;}export interface ApplicationContext {    getName(): string;    getDomain(): string;    getApiPath(): string;    getApiVersion(): string;}export interface ApplicationConfig {    name: string;    domain?: string;    apiPath?: string;    version?: string;}export interface StateConfig {    name?: string;    type: StateType;    resource: string;    method?: HttpMethod;}export interface TransitionConfig {    name?: string;    type: StateType;    resource: string;    method?: HttpMethod;    stateRef?: string;    rel?: LinkType;}export class HateoasContextError extends Error {    readonly code: HateoasContextErrorCode;    constructor(code: HateoasContextErrorCode, message: string);}export enum HateoasContextErrorCode {    ILLEGAL_CONTEXT_OVERRIDE = "ILLEGAL_CONTEXT_OVERRIDE",    ILLEGAL_STATE_OPERATION = "ILLEGAL_STATE_OPERATION",    ILLEGAL_TRANSITION_OPERATION = "ILLEGAL_TRANSITION_OPERATION",    INVALID_STATE_CONFIG = "INVALID_STATE_CONFIG",    INVALID_TRANSITION_CONFIG = "INVALID_TRANSITION_CONFIG",    INVALID_TRANSITION_MAPPING = "INVALID_TRANSITION_MAPPING"}export interface HateoasContext {    getApplicationContext(): ApplicationContext;    getApplicationState(stateName: string): Application;    getApplicationStateRepresentation(stateName: string, parameters?: {        [name: string]: any;    }): any;    getGraph(): Array<State>;}export enum LinkType {    ALTERNATE = "alternate",    AUTHOR = "author",    BOOKMARK = "bookmark",    HELP = "help",    LICENSE = "license",    NEXT = "next",    PREV = "prev",    SEARCH = "search",    TAG = "tag"}export interface State {    name?: string;    type: StateType;    resource: string;    method: HttpMethod | any;    transitions?: Array<Transition>;    context?: any;}export enum StateType {    DOCUMENT = "document",    COLLECTION = "collection",    CONTROLLER = "controller",    STORE = "store",    INVARIANT = "invariant"}export interface Transition {    type: StateType;    resource: string;    method: HttpMethod;    context?: any;    rel?: LinkType;}}