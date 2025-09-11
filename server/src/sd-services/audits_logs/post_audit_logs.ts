// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class post_audit_logs {
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
    this.serviceName = 'post_audit_logs';
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
      instance = new post_audit_logs(
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
    //appendnew_flow_post_audit_logs_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_audit_logs');
    //appendnew_flow_post_audit_logs_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_audit_logs');

    this.app['post'](
      `${this.serviceBasePath}/audits`,
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
          bh = await this.insertDocument(bh, parentSpanInst);
          //appendnew_next_sd_1hvpPewTiRIcbqJW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1hvpPewTiRIcbqJW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_post_audit_logs_HttpIn
  }
  //   service flows_post_audit_logs

  //appendnew_flow_post_audit_logs_start

  async insertDocument(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertDocument',
      parentSpanInst
    );
    try {
      bh.local.document = bh.input.body;

      console.log('inside audit save ==>', bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertAuditLogs(bh, parentSpanInst);
      //appendnew_next_insertDocument
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P5YYkYKw8OSuKeMU',
        spanInst,
        'insertDocument'
      );
    }
  }

  async insertAuditLogs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertAuditLogs',
      parentSpanInst
    );
    try {
      bh.local.response = await MongoPersistance.getInstance().insertOne(
        'sd_SsGwZHR2Z3WiKBs9',
        'audits',
        bh.local.document,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0UFMhDtbXgtYBmcx(bh, parentSpanInst);
      //appendnew_next_insertAuditLogs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tqr3ZoKCKykIvaJd',
        spanInst,
        'insertAuditLogs'
      );
    }
  }

  async sd_0UFMhDtbXgtYBmcx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0UFMhDtbXgtYBmcx');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_post_audit_logs_Catch
}
