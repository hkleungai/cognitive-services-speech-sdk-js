
/** Declaration file generated by dts-gen */

import * as http from "http";
import { DetailedPeerCertificate, Certificate, TlsOptions } from "tls";
import { HttpsProxyAgentOptions } from "https-proxy-agent";

export class Agent extends http.Agent {
    public constructor(options: any);
    public fetchIssuer(peerCert: DetailedPeerCertificate, stapling: Certificate, cb: (error: string, result: DetailedPeerCertificate) => void): void;
}

export function check(options: any, cb: (error: Error, res: any) => void): any;
export function verify(options: VerifyOptions, cb: (error: string, res: any) => void): void;

export interface Response {
    start: any;
    end: any;
    value: any;
    certs: any;
    certsTbs: any;
}

export interface Request {
    id: Buffer;
    certID: any;
    data: any;

    // Just to avoid re-parsing DER
    cert: any;
    issuer: any;
}

export interface VerifyOptions {
    request: Request;
    response: Buffer;
}

export class utils {
    public static parseResponse(response: any): Response;
    public static getAuthorityInfo(cert: DetailedPeerCertificate, ocspMethod: string, cb: (err: string, uri: string) => void): void;
    public static getResponse(httpOptions: http.RequestOptions | string, data: any, cb: (err: string, raw: Buffer) => void): void;
}

export class request {
    public static generate(rawCert: Buffer, rawIssuer: Buffer): Request;
}