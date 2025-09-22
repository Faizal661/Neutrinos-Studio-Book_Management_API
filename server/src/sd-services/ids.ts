// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_VPy7Q5B9YcqF6lBI from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_o5ZO6PbK7OGt5j9n(bh, parentSpanInst);
          //appendnew_next_sd_EDdbhQpzCdxgUSCu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EDdbhQpzCdxgUSCu');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_Z0W9CehrdHHylUAu(bh, parentSpanInst);
          //appendnew_next_sd_9n3mvMRu2nG8GpM0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9n3mvMRu2nG8GpM0');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_qgXV7msyiV8tULsc(bh, parentSpanInst);
          //appendnew_next_sd_f3OtF8CCNPK8cIJT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f3OtF8CCNPK8cIJT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_1LCaf1Hj3e4RixBl(bh, parentSpanInst);
          //appendnew_next_sd_ULDmGQl2hfYOIHmJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ULDmGQl2hfYOIHmJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
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
          bh = await this.sd_f3ct5YjcwEqNz5bL(bh, parentSpanInst);
          //appendnew_next_sd_cUJk5tOrwKNyrVPg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cUJk5tOrwKNyrVPg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_jPcOnHuVmUwwLnvz(bh, parentSpanInst);
          //appendnew_next_sd_0WJMjkdbSbi6m0aK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0WJMjkdbSbi6m0aK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_cva6e4ojcX5tk4Ic(bh, parentSpanInst);
          //appendnew_next_sd_QwyA7fx7QE7WfuhV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QwyA7fx7QE7WfuhV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_qgXV7msyiV8tULsc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qgXV7msyiV8tULsc',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TNZxcIksJbpwlyLT(bh, parentSpanInst);
      //appendnew_next_sd_qgXV7msyiV8tULsc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qgXV7msyiV8tULsc',
        spanInst,
        'sd_qgXV7msyiV8tULsc'
      );
    }
  }

  async sd_TNZxcIksJbpwlyLT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TNZxcIksJbpwlyLT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H3P3AthbsxXEEPFW(bh, parentSpanInst);
      } else {
        bh = await this.sd_kVYWhwBvI2ZteU1X(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TNZxcIksJbpwlyLT',
        spanInst,
        'sd_TNZxcIksJbpwlyLT'
      );
    }
  }

  async sd_H3P3AthbsxXEEPFW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H3P3AthbsxXEEPFW',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xC0JkT1WVEdvDKg0(bh, parentSpanInst);
      //appendnew_next_sd_H3P3AthbsxXEEPFW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H3P3AthbsxXEEPFW',
        spanInst,
        'sd_H3P3AthbsxXEEPFW'
      );
    }
  }

  async sd_xC0JkT1WVEdvDKg0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xC0JkT1WVEdvDKg0',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ak6LnD5jnB0JP6Ja(bh, parentSpanInst);
      //appendnew_next_sd_xC0JkT1WVEdvDKg0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xC0JkT1WVEdvDKg0',
        spanInst,
        'sd_xC0JkT1WVEdvDKg0'
      );
    }
  }

  async sd_Ak6LnD5jnB0JP6Ja(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ak6LnD5jnB0JP6Ja',
      parentSpanInst
    );
    try {
      const sd_VPy7Q5B9YcqF6lBIInstance: sd_VPy7Q5B9YcqF6lBI.idsutil =
        sd_VPy7Q5B9YcqF6lBI.idsutil.getInstance();
      let outputVariables =
        await sd_VPy7Q5B9YcqF6lBIInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CHXpLoEegXxmXYyV(bh, parentSpanInst);
      //appendnew_next_sd_Ak6LnD5jnB0JP6Ja
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ak6LnD5jnB0JP6Ja',
        spanInst,
        'sd_Ak6LnD5jnB0JP6Ja'
      );
    }
  }

  async sd_CHXpLoEegXxmXYyV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CHXpLoEegXxmXYyV',
      parentSpanInst
    );
    try {
      const sd_VPy7Q5B9YcqF6lBIInstance: sd_VPy7Q5B9YcqF6lBI.idsutil =
        sd_VPy7Q5B9YcqF6lBI.idsutil.getInstance();
      let outputVariables =
        await sd_VPy7Q5B9YcqF6lBIInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M7Q7YyvNhWei4G6R(bh, parentSpanInst);
      //appendnew_next_sd_CHXpLoEegXxmXYyV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CHXpLoEegXxmXYyV',
        spanInst,
        'sd_CHXpLoEegXxmXYyV'
      );
    }
  }

  async sd_M7Q7YyvNhWei4G6R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M7Q7YyvNhWei4G6R',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      console.log('bh.local.reqParams', bh.local.reqParams);
      console.log('bh.input.clientInstance', bh.input.clientInstance);
      console.log('bh.input.authParams', bh.input.authParams);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_p2FEL6MrDUF7zsDw(bh, parentSpanInst);
      //appendnew_next_sd_M7Q7YyvNhWei4G6R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M7Q7YyvNhWei4G6R',
        spanInst,
        'sd_M7Q7YyvNhWei4G6R'
      );
    }
  }

  async sd_p2FEL6MrDUF7zsDw(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p2FEL6MrDUF7zsDw');
    }
  }

  async sd_kVYWhwBvI2ZteU1X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kVYWhwBvI2ZteU1X',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gRLNmCcZ4hggaYXX(bh, parentSpanInst);
      //appendnew_next_sd_kVYWhwBvI2ZteU1X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kVYWhwBvI2ZteU1X',
        spanInst,
        'sd_kVYWhwBvI2ZteU1X'
      );
    }
  }

  async sd_gRLNmCcZ4hggaYXX(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gRLNmCcZ4hggaYXX');
    }
  }

  async sd_o5ZO6PbK7OGt5j9n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o5ZO6PbK7OGt5j9n',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mkR2DwVkeqlIztUz(bh, parentSpanInst);
      //appendnew_next_sd_o5ZO6PbK7OGt5j9n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o5ZO6PbK7OGt5j9n',
        spanInst,
        'sd_o5ZO6PbK7OGt5j9n'
      );
    }
  }

  async sd_mkR2DwVkeqlIztUz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mkR2DwVkeqlIztUz',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mkR2DwVkeqlIztUz',
        spanInst,
        'sd_mkR2DwVkeqlIztUz'
      );
    }
  }

  async sd_1LCaf1Hj3e4RixBl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1LCaf1Hj3e4RixBl',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_stAMTKytUewHJQOr(bh, parentSpanInst);
      //appendnew_next_sd_1LCaf1Hj3e4RixBl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1LCaf1Hj3e4RixBl',
        spanInst,
        'sd_1LCaf1Hj3e4RixBl'
      );
    }
  }

  async sd_stAMTKytUewHJQOr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_stAMTKytUewHJQOr',
      parentSpanInst
    );
    try {
      const sd_VPy7Q5B9YcqF6lBIInstance: sd_VPy7Q5B9YcqF6lBI.idsutil =
        sd_VPy7Q5B9YcqF6lBI.idsutil.getInstance();
      let outputVariables =
        await sd_VPy7Q5B9YcqF6lBIInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iwEcNq6RQzs79BKi(bh, parentSpanInst);
      //appendnew_next_sd_stAMTKytUewHJQOr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_stAMTKytUewHJQOr',
        spanInst,
        'sd_stAMTKytUewHJQOr'
      );
    }
  }

  async sd_iwEcNq6RQzs79BKi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iwEcNq6RQzs79BKi',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AMEpFRRFekuEVh7H(bh, parentSpanInst);
      bh = await this.loginAuditLog(bh, parentSpanInst);
      //appendnew_next_sd_iwEcNq6RQzs79BKi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iwEcNq6RQzs79BKi',
        spanInst,
        'sd_iwEcNq6RQzs79BKi'
      );
    }
  }

  async sd_AMEpFRRFekuEVh7H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AMEpFRRFekuEVh7H',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ywXMWqTpsgMJr4tH(bh, parentSpanInst);
      //appendnew_next_sd_AMEpFRRFekuEVh7H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AMEpFRRFekuEVh7H',
        spanInst,
        'sd_AMEpFRRFekuEVh7H'
      );
    }
  }

  async sd_ywXMWqTpsgMJr4tH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ywXMWqTpsgMJr4tH',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rieMzX7SK2jBGuEm(bh, parentSpanInst);
      } else {
        bh = await this.sd_iTHgawlrOdIWKI42(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ywXMWqTpsgMJr4tH',
        spanInst,
        'sd_ywXMWqTpsgMJr4tH'
      );
    }
  }

  async sd_rieMzX7SK2jBGuEm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rieMzX7SK2jBGuEm',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7SQEvYubJ9ZOGOJ0(bh, parentSpanInst);
      //appendnew_next_sd_rieMzX7SK2jBGuEm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rieMzX7SK2jBGuEm',
        spanInst,
        'sd_rieMzX7SK2jBGuEm'
      );
    }
  }

  async sd_7SQEvYubJ9ZOGOJ0(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7SQEvYubJ9ZOGOJ0');
    }
  }

  async sd_iTHgawlrOdIWKI42(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iTHgawlrOdIWKI42',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Mjey2Aaci6viCpyy(bh, parentSpanInst);
      //appendnew_next_sd_iTHgawlrOdIWKI42
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iTHgawlrOdIWKI42',
        spanInst,
        'sd_iTHgawlrOdIWKI42'
      );
    }
  }

  async sd_Mjey2Aaci6viCpyy(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mjey2Aaci6viCpyy');
    }
  }

  async loginAuditLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'loginAuditLog',
      parentSpanInst
    );
    try {
      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'LOGIN',
        resourceId: 'N/A',
        userId: bh.local.userDetails.userInfo.username,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.auditHttpReq(bh, parentSpanInst);
      //appendnew_next_loginAuditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hbC8X4BTbIxLZ20P',
        spanInst,
        'loginAuditLog'
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
      return await this.errorHandler(bh, e, 'sd_uqWvD4OdHeRaVvSX');
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
        'sd_Ili2MXn5prJeiHgd',
        spanInst,
        'auditLog'
      );
    }
  }

  async sd_f3ct5YjcwEqNz5bL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f3ct5YjcwEqNz5bL',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_rqQDbqheLrfPT37A(bh, parentSpanInst);
      //appendnew_next_sd_f3ct5YjcwEqNz5bL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f3ct5YjcwEqNz5bL',
        spanInst,
        'sd_f3ct5YjcwEqNz5bL'
      );
    }
  }

  async sd_rqQDbqheLrfPT37A(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rqQDbqheLrfPT37A');
    }
  }

  async sd_nBWNNo4no9xHUvBX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nBWNNo4no9xHUvBX',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_nBWNNo4no9xHUvBX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nBWNNo4no9xHUvBX',
        spanInst,
        'sd_nBWNNo4no9xHUvBX'
      );
    }
  }

  async sd_jPcOnHuVmUwwLnvz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jPcOnHuVmUwwLnvz',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.logoutAuditLog(bh, parentSpanInst);
      //appendnew_next_sd_jPcOnHuVmUwwLnvz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jPcOnHuVmUwwLnvz',
        spanInst,
        'sd_jPcOnHuVmUwwLnvz'
      );
    }
  }

  async logoutAuditLog(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'logoutAuditLog',
      parentSpanInst
    );
    try {
      console.log('logout sessionData', bh.local.sessionData);

      bh.local.insertAuditURL = `http://localhost:8081/api/audits`;

      bh.local.auditDocument = {
        timestamp: new Date(),
        operation: 'LOGOUT',
        resourceId: 'N/A',
        userId: bh.local.sessionData?.data?.userInfo?.username || 'N/A',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_d8luxuX5yy5PT3R3(bh, parentSpanInst);
      //appendnew_next_logoutAuditLog
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FPoPo89HMIUw2h8A',
        spanInst,
        'logoutAuditLog'
      );
    }
  }

  async sd_d8luxuX5yy5PT3R3(bh, parentSpanInst) {
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
      bh = await this.sd_GR786ekV2jBGwMJa(bh, parentSpanInst);
      //appendnew_next_sd_d8luxuX5yy5PT3R3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d8luxuX5yy5PT3R3');
    }
  }

  async sd_GR786ekV2jBGwMJa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GR786ekV2jBGwMJa',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IsGdMnfmUbVw4UyL(bh, parentSpanInst);
      //appendnew_next_sd_GR786ekV2jBGwMJa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GR786ekV2jBGwMJa',
        spanInst,
        'sd_GR786ekV2jBGwMJa'
      );
    }
  }

  async sd_IsGdMnfmUbVw4UyL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IsGdMnfmUbVw4UyL',
      parentSpanInst
    );
    try {
      const sd_VPy7Q5B9YcqF6lBIInstance: sd_VPy7Q5B9YcqF6lBI.idsutil =
        sd_VPy7Q5B9YcqF6lBI.idsutil.getInstance();
      let outputVariables =
        await sd_VPy7Q5B9YcqF6lBIInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B8roVXJkpPtBbDoU(bh, parentSpanInst);
      //appendnew_next_sd_IsGdMnfmUbVw4UyL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IsGdMnfmUbVw4UyL',
        spanInst,
        'sd_IsGdMnfmUbVw4UyL'
      );
    }
  }

  async sd_B8roVXJkpPtBbDoU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B8roVXJkpPtBbDoU',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FRZnMo5BuhZIzUaA(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_tYgh9WoKMxmDrU6G(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B8roVXJkpPtBbDoU',
        spanInst,
        'sd_B8roVXJkpPtBbDoU'
      );
    }
  }

  async sd_FRZnMo5BuhZIzUaA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FRZnMo5BuhZIzUaA',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_FRZnMo5BuhZIzUaA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FRZnMo5BuhZIzUaA',
        spanInst,
        'sd_FRZnMo5BuhZIzUaA'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fzS3EJtv5bKvO1Ry(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_fzS3EJtv5bKvO1Ry(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fzS3EJtv5bKvO1Ry');
    }
  }

  async sd_tYgh9WoKMxmDrU6G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tYgh9WoKMxmDrU6G',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fzS3EJtv5bKvO1Ry(bh, parentSpanInst);
      //appendnew_next_sd_tYgh9WoKMxmDrU6G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tYgh9WoKMxmDrU6G',
        spanInst,
        'sd_tYgh9WoKMxmDrU6G'
      );
    }
  }

  async sd_cva6e4ojcX5tk4Ic(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cva6e4ojcX5tk4Ic',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ho0DtFqqRCVK6s9C(bh, parentSpanInst);
      //appendnew_next_sd_cva6e4ojcX5tk4Ic
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cva6e4ojcX5tk4Ic',
        spanInst,
        'sd_cva6e4ojcX5tk4Ic'
      );
    }
  }

  async sd_Ho0DtFqqRCVK6s9C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ho0DtFqqRCVK6s9C',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_X8l7VRNJM1gJ9woB(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BWn1Bxagr0pCxf7B(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ho0DtFqqRCVK6s9C',
        spanInst,
        'sd_Ho0DtFqqRCVK6s9C'
      );
    }
  }

  async sd_X8l7VRNJM1gJ9woB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X8l7VRNJM1gJ9woB',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ctd4tY4awIKkGfVk(bh, parentSpanInst);
      //appendnew_next_sd_X8l7VRNJM1gJ9woB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X8l7VRNJM1gJ9woB',
        spanInst,
        'sd_X8l7VRNJM1gJ9woB'
      );
    }
  }

  async sd_ctd4tY4awIKkGfVk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ctd4tY4awIKkGfVk');
    }
  }

  async sd_BWn1Bxagr0pCxf7B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BWn1Bxagr0pCxf7B',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1Wqy9JX3kxLt4Hjn(bh, parentSpanInst);
      //appendnew_next_sd_BWn1Bxagr0pCxf7B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BWn1Bxagr0pCxf7B',
        spanInst,
        'sd_BWn1Bxagr0pCxf7B'
      );
    }
  }

  async sd_1Wqy9JX3kxLt4Hjn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1Wqy9JX3kxLt4Hjn',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kVUzRUgjKSFb0mRM(bh, parentSpanInst);
      //appendnew_next_sd_1Wqy9JX3kxLt4Hjn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1Wqy9JX3kxLt4Hjn',
        spanInst,
        'sd_1Wqy9JX3kxLt4Hjn'
      );
    }
  }

  async sd_kVUzRUgjKSFb0mRM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kVUzRUgjKSFb0mRM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_IylZLpJ2sIO9aXHR(bh, parentSpanInst);
      } else {
        bh = await this.sd_T39GZgQ6cEihBh5Y(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kVUzRUgjKSFb0mRM',
        spanInst,
        'sd_kVUzRUgjKSFb0mRM'
      );
    }
  }

  async sd_IylZLpJ2sIO9aXHR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IylZLpJ2sIO9aXHR',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ypUUsL04c1EDIGOE(bh, parentSpanInst);
      //appendnew_next_sd_IylZLpJ2sIO9aXHR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IylZLpJ2sIO9aXHR',
        spanInst,
        'sd_IylZLpJ2sIO9aXHR'
      );
    }
  }

  async sd_ypUUsL04c1EDIGOE(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ypUUsL04c1EDIGOE');
    }
  }

  async sd_T39GZgQ6cEihBh5Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T39GZgQ6cEihBh5Y',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_18UZ1O5etOEiP8FM(bh, parentSpanInst);
      //appendnew_next_sd_T39GZgQ6cEihBh5Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T39GZgQ6cEihBh5Y',
        spanInst,
        'sd_T39GZgQ6cEihBh5Y'
      );
    }
  }

  async sd_18UZ1O5etOEiP8FM(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_18UZ1O5etOEiP8FM');
    }
  }

  async sd_Z0W9CehrdHHylUAu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z0W9CehrdHHylUAu',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_utSklAy7s6k7fKmY(bh, parentSpanInst);
      //appendnew_next_sd_Z0W9CehrdHHylUAu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z0W9CehrdHHylUAu',
        spanInst,
        'sd_Z0W9CehrdHHylUAu'
      );
    }
  }

  async sd_utSklAy7s6k7fKmY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_utSklAy7s6k7fKmY',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KUOO4YNfkEDh9a9t(bh, parentSpanInst);
      //appendnew_next_sd_utSklAy7s6k7fKmY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_utSklAy7s6k7fKmY',
        spanInst,
        'sd_utSklAy7s6k7fKmY'
      );
    }
  }

  async sd_KUOO4YNfkEDh9a9t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KUOO4YNfkEDh9a9t',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QC9h61GWjwd2P4LF(bh, parentSpanInst);
      //appendnew_next_sd_KUOO4YNfkEDh9a9t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KUOO4YNfkEDh9a9t',
        spanInst,
        'sd_KUOO4YNfkEDh9a9t'
      );
    }
  }

  async sd_QC9h61GWjwd2P4LF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QC9h61GWjwd2P4LF',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_v13QJZVDpRP3Vhjw(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_h9ApEuy8rYxjdfkz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QC9h61GWjwd2P4LF',
        spanInst,
        'sd_QC9h61GWjwd2P4LF'
      );
    }
  }

  async sd_v13QJZVDpRP3Vhjw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v13QJZVDpRP3Vhjw',
      parentSpanInst
    );
    try {
      const sd_VPy7Q5B9YcqF6lBIInstance: sd_VPy7Q5B9YcqF6lBI.idsutil =
        sd_VPy7Q5B9YcqF6lBI.idsutil.getInstance();
      let outputVariables = await sd_VPy7Q5B9YcqF6lBIInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MCKtv5jM2I2oU1eG(bh, parentSpanInst);
      //appendnew_next_sd_v13QJZVDpRP3Vhjw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v13QJZVDpRP3Vhjw',
        spanInst,
        'sd_v13QJZVDpRP3Vhjw'
      );
    }
  }

  async sd_MCKtv5jM2I2oU1eG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MCKtv5jM2I2oU1eG',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Uz6UlFcIVNRnZeAJ(bh, parentSpanInst);
      } else {
        bh = await this.sd_2KxAuTxjucXMvlhE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MCKtv5jM2I2oU1eG',
        spanInst,
        'sd_MCKtv5jM2I2oU1eG'
      );
    }
  }

  async sd_Uz6UlFcIVNRnZeAJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uz6UlFcIVNRnZeAJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S2CXbXQ4LuvSruEU(bh, parentSpanInst);
      //appendnew_next_sd_Uz6UlFcIVNRnZeAJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uz6UlFcIVNRnZeAJ',
        spanInst,
        'sd_Uz6UlFcIVNRnZeAJ'
      );
    }
  }

  async sd_S2CXbXQ4LuvSruEU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S2CXbXQ4LuvSruEU',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cef3TqnSbRFkpo9M(bh, parentSpanInst);
      //appendnew_next_sd_S2CXbXQ4LuvSruEU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S2CXbXQ4LuvSruEU',
        spanInst,
        'sd_S2CXbXQ4LuvSruEU'
      );
    }
  }

  async sd_cef3TqnSbRFkpo9M(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cef3TqnSbRFkpo9M');
    }
  }

  async sd_2KxAuTxjucXMvlhE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2KxAuTxjucXMvlhE',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_iLoiyv1oG7eqAdaI(bh, parentSpanInst);
      } else {
        bh = await this.sd_fC1hfmHqSxU6UjC1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2KxAuTxjucXMvlhE',
        spanInst,
        'sd_2KxAuTxjucXMvlhE'
      );
    }
  }

  async sd_iLoiyv1oG7eqAdaI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iLoiyv1oG7eqAdaI',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yobAIIkC7SxMM1rK(bh, parentSpanInst);
      //appendnew_next_sd_iLoiyv1oG7eqAdaI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iLoiyv1oG7eqAdaI',
        spanInst,
        'sd_iLoiyv1oG7eqAdaI'
      );
    }
  }

  async sd_yobAIIkC7SxMM1rK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yobAIIkC7SxMM1rK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fC1hfmHqSxU6UjC1(bh, parentSpanInst);
      //appendnew_next_sd_yobAIIkC7SxMM1rK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yobAIIkC7SxMM1rK',
        spanInst,
        'sd_yobAIIkC7SxMM1rK'
      );
    }
  }

  async sd_fC1hfmHqSxU6UjC1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fC1hfmHqSxU6UjC1',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fC1hfmHqSxU6UjC1',
        spanInst,
        'sd_fC1hfmHqSxU6UjC1'
      );
    }
  }

  async sd_h9ApEuy8rYxjdfkz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h9ApEuy8rYxjdfkz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MkYl2nhyxZeH0RsP(bh, parentSpanInst);
      } else {
        bh = await this.sd_LqC12qtoVDsh6IIB(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h9ApEuy8rYxjdfkz',
        spanInst,
        'sd_h9ApEuy8rYxjdfkz'
      );
    }
  }

  async sd_MkYl2nhyxZeH0RsP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MkYl2nhyxZeH0RsP',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cef3TqnSbRFkpo9M(bh, parentSpanInst);
      //appendnew_next_sd_MkYl2nhyxZeH0RsP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MkYl2nhyxZeH0RsP',
        spanInst,
        'sd_MkYl2nhyxZeH0RsP'
      );
    }
  }

  async sd_LqC12qtoVDsh6IIB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LqC12qtoVDsh6IIB',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cef3TqnSbRFkpo9M(bh, parentSpanInst);
      //appendnew_next_sd_LqC12qtoVDsh6IIB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LqC12qtoVDsh6IIB',
        spanInst,
        'sd_LqC12qtoVDsh6IIB'
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
    if (
      false ||
      (await this.sd_qNgQxK3wzzQW7iPt(bh, parentSpanInst)) ||
      (await this.sd_aJg55FInR6bAgOdi(bh, parentSpanInst))
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
  async sd_qNgQxK3wzzQW7iPt(bh, parentSpanInst) {
    const nodes = [
      'sd_CHXpLoEegXxmXYyV',
      'sd_ULDmGQl2hfYOIHmJ',
      'sd_stAMTKytUewHJQOr',
      'sd_iwEcNq6RQzs79BKi',
      'sd_1LCaf1Hj3e4RixBl',
      'sd_ywXMWqTpsgMJr4tH',
      'sd_rieMzX7SK2jBGuEm',
      'sd_iTHgawlrOdIWKI42',
      'sd_7SQEvYubJ9ZOGOJ0',
      'sd_Mjey2Aaci6viCpyy',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_nBWNNo4no9xHUvBX(bh, parentSpanInst);
      //appendnew_next_sd_qNgQxK3wzzQW7iPt
      return true;
    }
    return false;
  }
  async sd_aJg55FInR6bAgOdi(bh, parentSpanInst) {
    const nodes = ['sd_v13QJZVDpRP3Vhjw'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_S2CXbXQ4LuvSruEU(bh, parentSpanInst);
      //appendnew_next_sd_aJg55FInR6bAgOdi
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
