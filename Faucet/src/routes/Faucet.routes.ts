import { Database } from '../Database';
import { TransferTokens } from '../util/Wallet.util';

export async function DispenseTokens(req, res) {
  try {
    const counter = Number(await Database.get('issued'));
    try {
      const claimed = await Database.get(req.body.address);
      
      return res.status(400).send({
        message: 'OK',
        result: 'Already claimed tokens',
      });
    } catch (error) {
      TransferTokens(req.body.address, 100);
      await Database.put(req.body.address, 'OK');
      await Database.put('issued', counter + 100);

      console.log('Issued 100 AMP tokens'.green, ', counter is at', counter + 100, 'AMP'.green.bold);
      
      return res.status(200).send({
        message: 'OK',
        result: 'Tokens claimed!',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'ERROR',
      result: error,
    })
  }
}