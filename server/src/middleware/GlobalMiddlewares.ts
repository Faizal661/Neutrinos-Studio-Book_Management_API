// _neu_generated_code__dont_modify_directly_

//append_imports_start

import cors from 'cors'; //_splitter_
import expressSession from 'express-session'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export let Middlewares = {
  cors: () => {
    let corsOptions = {
      origin: ['http://localhost:4200'],

      exposedHeaders: ['Content-Disposition'],
      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  sd_2X3lHjqYU2gBQCRT: () => {
    let sess: expressSession.SessionOptions = {
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: 'lax',
      },

      proxy: true,

      resave: true,

      rolling: true,

      saveUninitialized: true,

      secret: 'qPXoLFLDtk',

      unset: 'keep',
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
