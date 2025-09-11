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
export class get_book_exists {
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
    this.serviceName = 'get_book_exists';
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
      instance = new get_book_exists(
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
    //appendnew_flow_get_book_exists_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_book_exists');
    //appendnew_flow_get_book_exists_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_book_exists');

    this.app['get'](
      `${this.serviceBasePath}/book/exists`,
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
          bh = await this.sd_ZKarB7H3Tcl3Y7KZ(bh, parentSpanInst);
          //appendnew_next_sd_TabguAYyMtDKmCdT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TabguAYyMtDKmCdT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_book_exists_HttpIn
  }
  //   service flows_get_book_exists

  //appendnew_flow_get_book_exists_start

  async sd_ZKarB7H3Tcl3Y7KZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZKarB7H3Tcl3Y7KZ',
      parentSpanInst
    );
    try {
      bh.local.existingDocuments = await MongoPersistance.getInstance().find(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.input.query,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6FOSWIObkZ2bJX9A(bh, parentSpanInst);
      //appendnew_next_sd_ZKarB7H3Tcl3Y7KZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZKarB7H3Tcl3Y7KZ',
        spanInst,
        'sd_ZKarB7H3Tcl3Y7KZ'
      );
    }
  }

  async sd_6FOSWIObkZ2bJX9A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6FOSWIObkZ2bJX9A',
      parentSpanInst
    );
    try {
      console.log('book exists query', bh.input.query);
      console.log('book exists api res', bh.local.exists);

      if (bh.local.existingDocuments.length > 0) {
        bh.local.response = {
          exists: true,
        };
      } else {
        bh.local.response = {
          exists: false,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jw3qK43RY090gUyu(bh, parentSpanInst);
      //appendnew_next_sd_6FOSWIObkZ2bJX9A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6FOSWIObkZ2bJX9A',
        spanInst,
        'sd_6FOSWIObkZ2bJX9A'
      );
    }
  }

  async sd_jw3qK43RY090gUyu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jw3qK43RY090gUyu');
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
  //appendnew_flow_get_book_exists_Catch
}
