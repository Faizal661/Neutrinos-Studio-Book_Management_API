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
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class delete_book {
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
    this.serviceName = 'delete_book';
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
      instance = new delete_book(
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
    //appendnew_flow_delete_book_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: delete_book');
    //appendnew_flow_delete_book_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: delete_book');

    this.app['delete'](
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
          bh = await this.sd_Pv22QHEFIA8usO5b(bh, parentSpanInst);
          //appendnew_next_sd_0BZtispv1y1i3njz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0BZtispv1y1i3njz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_delete_book_HttpIn
  }
  //   service flows_delete_book

  //appendnew_flow_delete_book_start

  async sd_Pv22QHEFIA8usO5b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pv22QHEFIA8usO5b',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.userInfo = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dNQ7pbG3cNCzekuh(bh, parentSpanInst);
      //appendnew_next_sd_Pv22QHEFIA8usO5b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pv22QHEFIA8usO5b',
        spanInst,
        'sd_Pv22QHEFIA8usO5b'
      );
    }
  }

  async sd_dNQ7pbG3cNCzekuh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dNQ7pbG3cNCzekuh',
      parentSpanInst
    );
    try {
      console.log('aaa  ', bh.input.params.isbn);

      bh.local.filter = {
        isbn: bh.input.params.isbn,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteBook(bh, parentSpanInst);
      //appendnew_next_sd_dNQ7pbG3cNCzekuh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNQ7pbG3cNCzekuh',
        spanInst,
        'sd_dNQ7pbG3cNCzekuh'
      );
    }
  }

  async deleteBook(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteBook',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.local.filter,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      this.deleteLog(bh, parentSpanInst);
      bh = await this.sd_JTGJogBJZf2MT7ir(bh, parentSpanInst);
      //appendnew_next_deleteBook
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_baIdz3cLGtXKcvKh',
        spanInst,
        'deleteBook'
      );
    }
  }

  async deleteLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('deleteLog', parentSpanInst);
    try {
      let logobj: any = bh.local.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_deleteLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NHln4YCfRGQpA39p',
        spanInst,
        'deleteLog'
      );
    }
  }

  async sd_JTGJogBJZf2MT7ir(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JTGJogBJZf2MT7ir',
      parentSpanInst
    );
    try {
      bh.local.result = {
        ...bh.local.result,
        status: 200,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_o84CzpWSOXuOmE0x(bh, parentSpanInst);
      bh = await this.auditLogs(bh, parentSpanInst);
      //appendnew_next_sd_JTGJogBJZf2MT7ir
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JTGJogBJZf2MT7ir',
        spanInst,
        'sd_JTGJogBJZf2MT7ir'
      );
    }
  }

  async sd_o84CzpWSOXuOmE0x(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o84CzpWSOXuOmE0x');
    }
  }

  async auditLogs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLogs', parentSpanInst);
    try {
      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'DELETE_BOOK',
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
        'sd_rUHOWtxid2ccxDMF',
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
      return await this.errorHandler(bh, e, 'sd_ZHauTDGa0jn7tXx4');
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
        'sd_kqLmxpOg7xYCUmUh',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_K6be70jnj3la4liJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K6be70jnj3la4liJ',
      parentSpanInst
    );
    try {
      console.log('error ===> ', bh.error.message);

      bh.local.message = bh.error.message || 'Failed to delete Book data';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_igH3KJxaYm5TMquy(bh, parentSpanInst);
      //appendnew_next_sd_K6be70jnj3la4liJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K6be70jnj3la4liJ',
        spanInst,
        'sd_K6be70jnj3la4liJ'
      );
    }
  }

  async sd_igH3KJxaYm5TMquy(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_igH3KJxaYm5TMquy');
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
    const catchConnectedNodes = ['sd_K6be70jnj3la4liJ', 'sd_igH3KJxaYm5TMquy'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_K6be70jnj3la4liJ(bh, parentSpanInst);
    //appendnew_next_catchNode
    return true;
  }
  //appendnew_flow_delete_book_Catch
}
