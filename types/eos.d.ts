/*!
 * Asteria Eos Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * MIT Licensed
 * This is a part of the Asteria Project: <https://github.com/asteria-project>
 */

declare module "asteria-eos" {

export interface HeliosCsvPreview {    stats: HeliosFileStats;    content: string;}export interface HeliosJob {    name: string;    id: string;    description: string;    status: HeliosJobStatus;    birthtime: number;}export enum HeliosJobStatus {    IN_PROGRESS = "IN_PROGRESS",    DONE = "DONE",    FAILED = "FAILED"}export interface HeliosProcessDescriptor {    type: string;    config: any;}export interface HeliosTemplate {    name: string;    id: string;    description: string;    processes: HeliosProcessDescriptor[];}export interface HeliosHttpError {    status: number;    code: HeliosHttpErrorCode;    message: string;}export enum HeliosHttpErrorCode {    ERR_INTERNAL_PROCESS_FAILURE = "INTERNAL_PROCESS_FAILURE",    ERR_ASTERIA_PROCESS_FAILURE = "ASTERIA_PROCESS_FAILURE",    ERR_DIRECTORY_LISTING_FAILED = "DIRECTORY_LISTING_FAILED",    ERR_RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",    ERR_RESOURCE_PATH_INVALID = "RESOURCE_PATH_INVALID",    ERR_RESOURCE_IS_A_DIRECTORY = "RESOURCE_IS_A_DIRECTORY",    ERR_MISSING_CONTENT_TYPE = "MISSING_CONTENT_TYPE",    ERR_UNSUPPORTED_CONTENT_TYPE = "UNSUPPORTED_CONTENT_TYPE",    ERR_MULTIPART_BOUNDARY_NOT_FOUND = "MULTIPART_BOUNDARY_NOT_FOUND"}export interface HeliosData<T> {    data: T;    birthtime: number;    serverId: string;}export interface HeliosFileStats {    path: string;    name: string;    extention: string;    size: number;    mode: number;    birthtime: number;    updatetime: number;    isFile: boolean;}}