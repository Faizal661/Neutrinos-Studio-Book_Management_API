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
export class get_books_all {
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
    this.serviceName = 'get_books_all';
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
      instance = new get_books_all(
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
    //appendnew_flow_get_books_all_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_books_all');
    //appendnew_flow_get_books_all_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_books_all');

    this.app['get'](
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
          bh = await this.sd_Zt9sD5O30Bv8uukJ(bh, parentSpanInst);
          //appendnew_next_sd_yposWwdswmuadTP5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yposWwdswmuadTP5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_books_all_HttpIn
  }
  //   service flows_get_books_all

  async countDocumentsOfBooks(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'countDocumentsOfBooks',
      parentSpanInst
    );
    let bh: any = {
      input: {},
      local: {
        docsCount: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hFxAVNik7wrY0Njs(bh, parentSpanInst);
      //appendnew_next_countDocumentsOfBooks
      return (
        // formatting output variables
        {
          input: {},
          local: {
            docsCount: bh.local.docsCount,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lpujAFTkOJU4Ickr',
        spanInst,
        'countDocumentsOfBooks'
      );
    }
  }

  async fetchPaginatedBooksData(
    parentSpanInst,
    pipeline: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'fetchPaginatedBooksData',
      parentSpanInst
    );
    let bh: any = {
      input: {
        pipeline,
      },
      local: {
        bookData: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TTi44D0nuM3T0w8V(bh, parentSpanInst);
      //appendnew_next_fetchPaginatedBooksData
      return (
        // formatting output variables
        {
          input: {},
          local: {
            bookData: bh.local.bookData,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ofhL4tJiHS6w3mxG',
        spanInst,
        'fetchPaginatedBooksData'
      );
    }
  }
  //appendnew_flow_get_books_all_start

  async sd_Zt9sD5O30Bv8uukJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zt9sD5O30Bv8uukJ',
      parentSpanInst
    );
    try {
      console.log('query', bh.input.query);

      let page = parseInt(bh.input.query.page) || 1;
      let limit = parseInt(bh.input.query.limit) || 5;
      let skip = (page - 1) * limit;

      bh.local.limit = limit;
      bh.local.skip = skip;
      bh.local.pipeline = [{ $match: {} }, { $skip: skip }, { $limit: limit }];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jApssqRx5eOoYuTv(bh, parentSpanInst);
      //appendnew_next_sd_Zt9sD5O30Bv8uukJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zt9sD5O30Bv8uukJ',
        spanInst,
        'sd_Zt9sD5O30Bv8uukJ'
      );
    }
  }

  async sd_jApssqRx5eOoYuTv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jApssqRx5eOoYuTv',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_Hr5Ez4lqm0iH7h2hInstance: get_books_all =
        get_books_all.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_Hr5Ez4lqm0iH7h2hInstance.countDocumentsOfBooks(
          spanInst
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_Hr5Ez4lqm0iH7h2hInstance.fetchPaginatedBooksData(
          spanInst,
          bh.local.pipeline
        )
      );

      bh.local.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jwkXo8Ln3q3VF9CX(bh, parentSpanInst);
      //appendnew_next_sd_jApssqRx5eOoYuTv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jApssqRx5eOoYuTv',
        spanInst,
        'sd_jApssqRx5eOoYuTv'
      );
    }
  }

  async sd_jwkXo8Ln3q3VF9CX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jwkXo8Ln3q3VF9CX',
      parentSpanInst
    );
    try {
      bh.local.response = {
        totalDocuments: bh.local.result[0].local.docsCount.count,
        bookData: bh.local.result[1].local.bookData,
        limit: bh.local.limit,
      };

      // console.log(' ===>' ,bh.local.response)
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RQf3yge2hIy5xwo3(bh, parentSpanInst);
      //appendnew_next_sd_jwkXo8Ln3q3VF9CX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jwkXo8Ln3q3VF9CX',
        spanInst,
        'sd_jwkXo8Ln3q3VF9CX'
      );
    }
  }

  async sd_RQf3yge2hIy5xwo3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RQf3yge2hIy5xwo3');
    }
  }

  async sd_hFxAVNik7wrY0Njs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hFxAVNik7wrY0Njs',
      parentSpanInst
    );
    try {
      bh.local.docsCount = await MongoPersistance.getInstance().countDocuments(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_hFxAVNik7wrY0Njs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hFxAVNik7wrY0Njs',
        spanInst,
        'sd_hFxAVNik7wrY0Njs'
      );
    }
  }

  async sd_TTi44D0nuM3T0w8V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TTi44D0nuM3T0w8V',
      parentSpanInst
    );
    try {
      bh.local.bookData = await MongoPersistance.getInstance().aggregate(
        'sd_SsGwZHR2Z3WiKBs9',
        'books',
        bh.input.pipeline,
        bh.local.body
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_TTi44D0nuM3T0w8V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TTi44D0nuM3T0w8V',
        spanInst,
        'sd_TTi44D0nuM3T0w8V'
      );
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
  //appendnew_flow_get_books_all_Catch
}
