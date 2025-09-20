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
export class post_pdf_report {
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
    this.serviceName = 'post_pdf_report';
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
      instance = new post_pdf_report(
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
    //appendnew_flow_post_pdf_report_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_pdf_report');
    //appendnew_flow_post_pdf_report_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_pdf_report');

    this.app['get'](
      `${this.serviceBasePath}/audits/report/pdf`,
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
          bh = await this.sd_kaY02o3IP1brFCw0(bh, parentSpanInst);
          //appendnew_next_sd_Uhfjw7ksyDPV8QOZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Uhfjw7ksyDPV8QOZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_post_pdf_report_HttpIn
  }
  //   service flows_post_pdf_report

  //appendnew_flow_post_pdf_report_start

  async sd_kaY02o3IP1brFCw0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kaY02o3IP1brFCw0',
      parentSpanInst
    );
    try {
      console.log('query  === ', bh.input.query);

      if (bh.input.query?.startDate === 'null') {
        bh.input.query.startDate = JSON.stringify(new Date(null));
      }

      let operations = bh.input.query?.operations
        ? JSON.parse(bh.input.query.operations)
        : [];
      let startDate = bh.input.query?.startDate
        ? new Date(JSON.parse(bh.input.query.startDate))
        : null;
      let endDate = bh.input.query?.endDate
        ? new Date(JSON.parse(bh.input.query.endDate))
        : null;

      const filter = {};

      if (operations && operations.length > 0) {
        filter['operation'] = { $in: operations };
      }

      if (isValidDate(startDate) && isValidDate(endDate)) {
        filter['timestamp'] = {
          $gte: JSON.parse(bh.input.query.startDate),
          $lte: JSON.parse(bh.input.query.endDate),
        };
      }

      function isValidDate(date) {
        return date instanceof Date && !isNaN(date);
      }

      bh.local.filter = filter;

      console.log('filter = = = =', bh.local.filter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6MiQeYcc0ZsvjZIx(bh, parentSpanInst);
      //appendnew_next_sd_kaY02o3IP1brFCw0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kaY02o3IP1brFCw0',
        spanInst,
        'sd_kaY02o3IP1brFCw0'
      );
    }
  }

  async sd_6MiQeYcc0ZsvjZIx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6MiQeYcc0ZsvjZIx',
      parentSpanInst
    );
    try {
      bh.local.resultData = await MongoPersistance.getInstance().find(
        'sd_SsGwZHR2Z3WiKBs9',
        'audits',
        bh.local.filter,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QkDEbXzbSHIJSFYk(bh, parentSpanInst);
      //appendnew_next_sd_6MiQeYcc0ZsvjZIx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6MiQeYcc0ZsvjZIx',
        spanInst,
        'sd_6MiQeYcc0ZsvjZIx'
      );
    }
  }

  async sd_QkDEbXzbSHIJSFYk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QkDEbXzbSHIJSFYk',
      parentSpanInst
    );
    try {
      console.log('resultData of pdf generate === ', bh.local.resultData);

      const puppeteer = require('puppeteer');

      (async function () {
        await generateAuditPDF(bh.local.resultData, 'audit-report.pdf');

        bh.web.res.setHeader('Content-Type', 'application/pdf');
        bh.web.res.setHeader(
          'Content-Disposition',
          'attachment; filename="audit-report.pdf"'
        );
        bh.web.res.sendFile('audit-report.pdf', { root: '.' });
      })();

      async function generateAuditPDF(filteredAudits, pdfPath) {
        const htmlContent = generateHTML(filteredAudits);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlContent);
        await page.pdf({
          format: 'A4',
          printBackground: true,
          path: pdfPath,
        });
        await browser.close();
      }

      function generateHTML(audits) {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Audit Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f4f4f4; }
        tr:nth-child(even) { background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      <h1>Audit Report</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Operation</th>
            <th>Resource ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          ${audits
            .map(
              (audit, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${audit.timestamp}</td>
              <td>${audit.operation}</td>
              <td>${audit.resourceId !== null ? audit.resourceId : 'N/A'}</td>
              <td>${audit.userId || 'N/A'}</td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QkDEbXzbSHIJSFYk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QkDEbXzbSHIJSFYk',
        spanInst,
        'sd_QkDEbXzbSHIJSFYk'
      );
    }
  }

  async sd_VoNMKw7spVnGneki(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send('Failed to generate pdf report.');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VoNMKw7spVnGneki');
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
      (await this.sd_gwBtp0TuE7cbJQiB(bh, parentSpanInst))
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
  async sd_gwBtp0TuE7cbJQiB(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_VoNMKw7spVnGneki'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_VoNMKw7spVnGneki(bh, parentSpanInst);
    //appendnew_next_sd_gwBtp0TuE7cbJQiB
    return true;
  }
  //appendnew_flow_post_pdf_report_Catch
}
