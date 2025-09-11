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
export class post_book {
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
    this.serviceName = 'post_book';
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
      instance = new post_book(
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
    //appendnew_flow_post_book_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_book');
    //appendnew_flow_post_book_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_book');

    this.app['post'](
      `${this.serviceBasePath}/books`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_oLGmKKBKT8316qob(bh, parentSpanInst);
          //appendnew_next_sd_5AnkJ0rJBgjvtPvu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5AnkJ0rJBgjvtPvu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_post_book_HttpIn
  }
  //   service flows_post_book

  //appendnew_flow_post_book_start

  async sd_oLGmKKBKT8316qob(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oLGmKKBKT8316qob',
      parentSpanInst
    );
    try {
      bh.local.query = {
        isbn: bh.input.body.isbn,
      };
      console.log('res body==>', bh.input.body.isbn);

      bh.local.bookExistsURL = `http://localhost:8081/api/book/exists`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.existingBookCheck(bh, parentSpanInst);
      //appendnew_next_sd_oLGmKKBKT8316qob
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oLGmKKBKT8316qob',
        spanInst,
        'sd_oLGmKKBKT8316qob'
      );
    }
  }

  async existingBookCheck(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.bookExistsURL,
        timeout: 5000,
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
        params: bh.local.query,
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

      bh.local.response = responseMsg;
      bh = await this.sd_MdxOSec6Mbw6U90X(bh, parentSpanInst);
      //appendnew_next_existingBookCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LFJhJlCXwn6S7OhN');
    }
  }

  async sd_MdxOSec6Mbw6U90X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MdxOSec6Mbw6U90X',
      parentSpanInst
    );
    try {
      console.log('0. existing or not ====>');

      console.log('book exists http res ===', bh.local.response.payload);
      if (bh.local.response.payload.exists) {
        throw new Error('Book already exists');
      }

      console.log('1.req params ====>');
      console.log(bh.input.body);

      bh.local.openLibraryUrl = `https://openlibrary.org/isbn/${bh.input.body.isbn}`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.openLibraryBookFetch(bh, parentSpanInst);
      //appendnew_next_sd_MdxOSec6Mbw6U90X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MdxOSec6Mbw6U90X',
        spanInst,
        'sd_MdxOSec6Mbw6U90X'
      );
    }
  }

  async openLibraryBookFetch(bh, parentSpanInst) {
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
      bh = await this.sd_02V3E8lYNUPH4p16(bh, parentSpanInst);
      //appendnew_next_openLibraryBookFetch
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JS5DVXhgbGVyDQG9');
    }
  }

  async sd_02V3E8lYNUPH4p16(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_02V3E8lYNUPH4p16',
      parentSpanInst
    );
    try {
      console.log('2. open api library data ====>');
      // console.log(bh.local.openApiLibraryData)

      bh.local.bookData = {
        id: bh.local.openApiLibraryData.payload.isbn_10[0],
        isbn: bh.local.openApiLibraryData.payload.isbn_13[0],
        title: bh.local.openApiLibraryData.payload.title,
        publishers: bh.local.openApiLibraryData.payload.publishers[0],
        publishedYear: bh.local.openApiLibraryData.payload.publish_date,
      };

      console.log('3. after sanitizing data ===>');
      console.log(bh.local.bookData);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertBook(bh, parentSpanInst);
      //appendnew_next_sd_02V3E8lYNUPH4p16
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_02V3E8lYNUPH4p16',
        spanInst,
        'sd_02V3E8lYNUPH4p16'
      );
    }
  }

  async insertBook(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertBook',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.local.bookData,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_buqNyEHk3CYxg9yz(bh, parentSpanInst);
      //appendnew_next_insertBook
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XmzfvfhNO6JKfV1E',
        spanInst,
        'insertBook'
      );
    }
  }

  async sd_buqNyEHk3CYxg9yz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_buqNyEHk3CYxg9yz',
      parentSpanInst
    );
    try {
      bh.local.result = {
        ...bh.local.result,
        status: 200,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CCwdqiwpcNjreDgy(bh, parentSpanInst);
      bh = await this.auditLogs(bh, parentSpanInst);
      //appendnew_next_sd_buqNyEHk3CYxg9yz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_buqNyEHk3CYxg9yz',
        spanInst,
        'sd_buqNyEHk3CYxg9yz'
      );
    }
  }

  async sd_CCwdqiwpcNjreDgy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CCwdqiwpcNjreDgy');
    }
  }

  async auditLogs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLogs', parentSpanInst);
    try {
      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'CREATE_BOOK',
        resourceId: bh.input.body.isbn,
        userId: 'Demo_id_12345678',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditHttpReq(bh, parentSpanInst);
      //appendnew_next_auditLogs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6QEcj0aYJsVE7GJo',
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
        cookies: undefined,
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
      return await this.errorHandler(bh, e, 'sd_0rRA7jUu1W0JZNRp');
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
        'sd_LbbXuN9BJTn6WU8d',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_5MxSCQbNdhrir6gA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5MxSCQbNdhrir6gA',
      parentSpanInst
    );
    try {
      console.log('error ===> ', bh.error.message);

      bh.local.message = bh.error.message || 'Failed to Add new Book';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sUDFbuua9yK4uTHF(bh, parentSpanInst);
      //appendnew_next_sd_5MxSCQbNdhrir6gA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5MxSCQbNdhrir6gA',
        spanInst,
        'sd_5MxSCQbNdhrir6gA'
      );
    }
  }

  async sd_sUDFbuua9yK4uTHF(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sUDFbuua9yK4uTHF');
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
      (await this.sd_4w5E1psC6qnWvV12(bh, parentSpanInst))
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
  async sd_4w5E1psC6qnWvV12(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_5MxSCQbNdhrir6gA', 'sd_sUDFbuua9yK4uTHF'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_5MxSCQbNdhrir6gA(bh, parentSpanInst);
    //appendnew_next_sd_4w5E1psC6qnWvV12
    return true;
  }
  //appendnew_flow_post_book_Catch
}
