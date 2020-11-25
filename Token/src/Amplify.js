import { Transfer } from './Transfer';
import { Account } from './Account';
import { Gateway } from './Gateway';
import { Stake } from './Stake';
import { Withdraw } from './Withdraw';
import { Vote } from './Vote';

export function handle(state, action) {
  switch (action.input.function) {
    case 'transfer':
      return Transfer(state, action);
    case 'account':
      return Account(state, action);
    case 'gateway':
      return Gateway(state, action);
    case 'stake':
      return Stake(state, action);
    case 'withdraw':
      return Withdraw(state, action);
    case 'vote':
      return Vote(state, action);
    default:
      throw new ContractError(`Invalid function: "${action.input.function}"`)
  }
}
