import * as multer from 'multer';
import Arweave from 'arweave';
import deepHash from 'arweave/node/lib/deepHash';
import ArweaveData from 'arweave-bundles';

export const UPLOAD = multer.diskStorage({
  destination(_, __, callback) { return callback(null, './upload') },
  filename(_, file, callback) {
    const filename = String(Number(new Date())) + '-' + file.originalname;
    return callback(null, filename);
  }
});

export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
  timeout: 20000,
  logging: false,
});

export const ArData = ArweaveData({
  utils: Arweave.utils,
  crypto: Arweave.crypto,
  deepHash,
});

export const ContractAddress = 'TUY1f1xSc5tzCEKhKsVylMB8ly2nOGDSGgEl9rR-m78';