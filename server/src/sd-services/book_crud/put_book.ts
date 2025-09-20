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
export class put_book {
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
    this.serviceName = 'put_book';
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
      instance = new put_book(
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
    //appendnew_flow_put_book_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: put_book');
    //appendnew_flow_put_book_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: put_book');

    this.app['put'](
      `${this.serviceBasePath}/books/:isbn`,
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
          bh = await this.sd_JHYYnvmT6yilDPhs(bh, parentSpanInst);
          //appendnew_next_sd_mHzlC823jEUf4oX3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mHzlC823jEUf4oX3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_put_book_HttpIn
  }
  //   service flows_put_book

  //appendnew_flow_put_book_start

  async sd_JHYYnvmT6yilDPhs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JHYYnvmT6yilDPhs',
      parentSpanInst
    );
    try {
      bh.local.filter = {
        isbn: bh.input.params.isbn,
      };

      bh.local.updatedData = {
        $set: {
          title: bh.input.body.title,
          publishers: bh.input.body.publishers,
          publishedYear: bh.input.body.publishedYear,
        },
      };

      console.log('patch input data ===>  ', bh.input.body);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4E8GCXvPrEtBNw9f(bh, parentSpanInst);
      //appendnew_next_sd_JHYYnvmT6yilDPhs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JHYYnvmT6yilDPhs',
        spanInst,
        'sd_JHYYnvmT6yilDPhs'
      );
    }
  }

  async sd_4E8GCXvPrEtBNw9f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4E8GCXvPrEtBNw9f',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.local.filter,
        bh.local.updatedData,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DbOcK5Jlaob0ZE3l(bh, parentSpanInst);
      //appendnew_next_sd_4E8GCXvPrEtBNw9f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4E8GCXvPrEtBNw9f',
        spanInst,
        'sd_4E8GCXvPrEtBNw9f'
      );
    }
  }

  async sd_DbOcK5Jlaob0ZE3l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DbOcK5Jlaob0ZE3l',
      parentSpanInst
    );
    try {
      bh.local.result = {
        ...bh.local.result,
        status: 200,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_1OOfc8IS4dWTZaM9(bh, parentSpanInst);
      bh = await this.auditLogs(bh, parentSpanInst);
      //appendnew_next_sd_DbOcK5Jlaob0ZE3l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DbOcK5Jlaob0ZE3l',
        spanInst,
        'sd_DbOcK5Jlaob0ZE3l'
      );
    }
  }

  async sd_1OOfc8IS4dWTZaM9(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1OOfc8IS4dWTZaM9');
    }
  }

  async auditLogs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('auditLogs', parentSpanInst);
    try {
      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'UPDATE_BOOK',
        resourceId: bh.input.params.isbn,
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
        'sd_0wqw7tyvEUFRZTcK',
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
      return await this.errorHandler(bh, e, 'sd_el46xu95QqB9z0DP');
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
        'sd_Ui9yPkYu5yLOe3vr',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_PGESEcQjIy1uzRR3(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send('failed to update book details');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PGESEcQjIy1uzRR3');
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
      (await this.sd_bYXjsgWbVnviKb4d(bh, parentSpanInst))
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
  async sd_bYXjsgWbVnviKb4d(bh, parentSpanInst) {
    const nodes = [
      'sd_mHzlC823jEUf4oX3',
      'sd_1OOfc8IS4dWTZaM9',
      'sd_JHYYnvmT6yilDPhs',
      'sd_4E8GCXvPrEtBNw9f',
      'sd_DbOcK5Jlaob0ZE3l',
    ];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_PGESEcQjIy1uzRR3(bh, parentSpanInst);
      //appendnew_next_sd_bYXjsgWbVnviKb4d
      return true;
    }
    return false;
  }
  //appendnew_flow_put_book_Catch
}
