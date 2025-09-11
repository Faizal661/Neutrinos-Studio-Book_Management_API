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
export class get_audit_logs {
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
    this.serviceName = 'get_audit_logs';
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
      instance = new get_audit_logs(
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
    //appendnew_flow_get_audit_logs_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_audit_logs');
    //appendnew_flow_get_audit_logs_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_audit_logs');

    this.app['get'](
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
          bh = await this.sd_7zS99wyPhOajPL6L(bh, parentSpanInst);
          //appendnew_next_sd_wwdoS1qEORhMxEY5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wwdoS1qEORhMxEY5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_audit_logs_HttpIn
  }
  //   service flows_get_audit_logs

  //appendnew_flow_get_audit_logs_start

  async sd_7zS99wyPhOajPL6L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7zS99wyPhOajPL6L',
      parentSpanInst
    );
    try {
      console.log('query', bh.input.query);
      if (bh.input.query?.startDate === 'null') {
        bh.input.query.startDate = JSON.stringify(new Date(null));
      }

      let page = parseInt(bh.input.query.page) || 1;
      let limit = parseInt(bh.input.query.limit) || 5;
      let skip = (page - 1) * limit;

      let operations = bh.input.query?.operations
        ? JSON.parse(bh.input.query.operations)
        : [];
      let startDate = bh.input.query?.startDate
        ? new Date(JSON.parse(bh.input.query.startDate))
        : null;
      let endDate = bh.input.query?.endDate
        ? new Date(JSON.parse(bh.input.query.endDate))
        : null;

      bh.local.limit = limit;
      bh.local.skip = skip;

      let matchConditions = {};

      if (operations && operations.length > 0) {
        matchConditions['operation'] = { $in: operations };
      }

      function isValidDate(date) {
        return date instanceof Date && !isNaN(date);
      }

      if (isValidDate(startDate) && isValidDate(endDate)) {
        matchConditions['timestamp'] = {
          $gte: JSON.parse(bh.input.query.startDate),
          $lte: JSON.parse(bh.input.query.endDate),
        };
      }

      let pipeline = [];

      if (Object.keys(matchConditions).length > 0) {
        pipeline.push({
          $match: matchConditions,
        });
      }

      pipeline.push({
        $facet: {
          totalDocuments: [{ $count: 'total' }],
          paginatedResults: [{ $skip: skip }, { $limit: limit }],
        },
      });

      bh.local.pipeline = pipeline;
      console.log('pipeline = = = =', pipeline);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A592j3hB2Qccet9s(bh, parentSpanInst);
      //appendnew_next_sd_7zS99wyPhOajPL6L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7zS99wyPhOajPL6L',
        spanInst,
        'sd_7zS99wyPhOajPL6L'
      );
    }
  }

  async sd_A592j3hB2Qccet9s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A592j3hB2Qccet9s',
      parentSpanInst
    );
    try {
      bh.local.aggregationResult =
        await MongoPersistance.getInstance().aggregate(
          'sd_SsGwZHR2Z3WiKBs9',
          'audits',
          bh.local.pipeline,
          bh.web
        );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JMlBrA79i80MonOG(bh, parentSpanInst);
      //appendnew_next_sd_A592j3hB2Qccet9s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A592j3hB2Qccet9s',
        spanInst,
        'sd_A592j3hB2Qccet9s'
      );
    }
  }

  async sd_JMlBrA79i80MonOG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMlBrA79i80MonOG',
      parentSpanInst
    );
    try {
      console.log('total document count ,', bh.local.aggregationResult[0]);

      bh.local.response = {
        totalDocuments: bh.local.aggregationResult[0].totalDocuments[0]?.total,
        auditLogsData: bh.local.aggregationResult[0].paginatedResults.map(
          (doc) => ({
            ...doc,
            timestamp: new Date(doc.timestamp).toLocaleString(),
          })
        ),
        limit: bh.local.limit,
      };

      console.log(
        '2. audit response after sanitization ===>',
        bh.local.response
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PePuXM0Vu2ViboKe(bh, parentSpanInst);
      //appendnew_next_sd_JMlBrA79i80MonOG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMlBrA79i80MonOG',
        spanInst,
        'sd_JMlBrA79i80MonOG'
      );
    }
  }

  async sd_PePuXM0Vu2ViboKe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PePuXM0Vu2ViboKe');
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
  //appendnew_flow_get_audit_logs_Catch
}
