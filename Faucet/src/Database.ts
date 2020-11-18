import levelup from 'levelup';
import leveldown from 'leveldown';

export const Database = levelup(leveldown(process.env.DATABASE || './faucet.ldb'));

(async () => {
  try {
    const counter = await Database.get('issued');
    console.log('Token counter is at'.green.bold, Number(counter), 'AMP');
  } catch (error) {
    await Database.put('issued', 0);
    console.log('New token counter generated'.green.bold);
  }
})();