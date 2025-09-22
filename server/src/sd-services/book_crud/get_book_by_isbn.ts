// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class get_book_by_isbn {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'get_book_by_isbn';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new get_book_by_isbn(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_get_book_by_isbn_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_book_by_isbn');
    //appendnew_flow_get_book_by_isbn_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_book_by_isbn');

    this.app['get'](
      `${this.serviceBasePath}/books/:isbn`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.userInfo(bh, parentSpanInst);
          //appendnew_next_sd_aSYjxBKjqgKlWYc4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aSYjxBKjqgKlWYc4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_book_by_isbn_HttpIn
  }
  //   service flows_get_book_by_isbn

  //appendnew_flow_get_book_by_isbn_start

  async userInfo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('userInfo', parentSpanInst);
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.userInfo = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateIsbn(bh, parentSpanInst);
      //appendnew_next_userInfo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8rOhelcmroYMqs75',
        spanInst,
        'userInfo'
      );
    }
  }

  async validateIsbn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateIsbn',
      parentSpanInst
    );
    try {
      // old api
      // bh.local.openLibraryUrl =`https://openlibrary.org/isbn/${bh.input.params.isbn}`;

      // new api
      bh.local.openLibraryUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${bh.input.params.isbn}&jscmd=data&format=json`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.openLibraryFetchUsingIsbn(bh, parentSpanInst);
      //appendnew_next_validateIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nFbAaKqoiXmJXXuA',
        spanInst,
        'validateIsbn'
      );
    }
  }

  async openLibraryFetchUsingIsbn(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.openLibraryUrl,
        timeout: 10000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.openApiLibraryData = responseMsg;
      bh = await this.sd_4q6aRayMUo3zSwOq(bh, parentSpanInst);
      //appendnew_next_openLibraryFetchUsingIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iuyvkNwCqeEyZj3e');
    }
  }

  async sd_4q6aRayMUo3zSwOq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4q6aRayMUo3zSwOq',
      parentSpanInst
    );
    try {
      const isbnKey = Object.keys(bh.local.openApiLibraryData.payload)[0];
      const bookDetails = bh.local.openApiLibraryData.payload[isbnKey];

      bh.local.response = {
        openApiLibraryData: bookDetails,
        status: 200,
      };

      console.log('response', bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ok70Pa7mTnHqYrGr(bh, parentSpanInst);
      bh = await this.auditLogs(bh, parentSpanInst);
      //appendnew_next_sd_4q6aRayMUo3zSwOq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4q6aRayMUo3zSwOq',
        spanInst,
        'sd_4q6aRayMUo3zSwOq'
      );
    }
  }

  async sd_Ok70Pa7mTnHqYrGr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ok70Pa7mTnHqYrGr');
    }
  }

  async auditLogs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLogs', parentSpanInst);
    try {
      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'READ_BOOK',
        resourceId: bh.input.params.isbn,
        userId: bh.local.userInfo?.data?.userInfo?.username || 'N/A',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditHttpReq(bh, parentSpanInst);
      //appendnew_next_auditLogs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VulpIMmfgcHUdZam',
        spanInst,
        'auditLogs'
      );
    }
  }

  async auditHttpReq(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.insertAuditURL,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.auditDocument,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.audit_save_response = responseMsg;
      this.auditLog(bh, parentSpanInst);
      //appendnew_next_auditHttpReq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jYjSNgr2GgByhGW4');
    }
  }

  async auditLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLog', parentSpanInst);
    try {
      let logobj: any = bh.local.audit_save_response;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_auditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OEMAzSL1cTtsRgzA',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_OgENpNPx7Rbg1lAe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OgENpNPx7Rbg1lAe',
      parentSpanInst
    );
    try {
      console.log('error ===> ', bh.error.message);

      bh.local.message = 'Failed to fetch Book Details';
      if (bh.error.message.includes('404')) {
        bh.local.message = 'isbn is not exists in OpenAPI Library';
      }

      bh.local.response = {
        message: bh.local.message,
        status: 500,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NpJyeu1vbImRFTCL(bh, parentSpanInst);
      //appendnew_next_sd_OgENpNPx7Rbg1lAe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OgENpNPx7Rbg1lAe',
        spanInst,
        'sd_OgENpNPx7Rbg1lAe'
      );
    }
  }

  async sd_NpJyeu1vbImRFTCL(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NpJyeu1vbImRFTCL');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.catchNode(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async catchNode(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_OgENpNPx7Rbg1lAe', 'sd_NpJyeu1vbImRFTCL'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_OgENpNPx7Rbg1lAe(bh, parentSpanInst);
    //appendnew_next_catchNode
    return true;
  }
  //appendnew_flow_get_book_by_isbn_Catch
}
