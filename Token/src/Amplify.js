import { Transfer } from './Transfer';
import { Balance } from './Balance';
import { Gateway } from './Gateway';
import { Stake } from './Stake';

export function handle(state, action) {
  switch (action.input.function) {
    case 'transfer':
      return Transfer(state, action);
    case 'balance':
      return Balance(state, action);
    case 'gateway':
      return Gateway(state, action);
    case 'stake':
      return Stake(state, action);
    default:
      throw new ContractError(`Invalid function: "${action.input.function}"`)
  }
}
