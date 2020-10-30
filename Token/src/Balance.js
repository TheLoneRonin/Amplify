export function Balance(state, action) {
    const balances = state.balances;
    const input = action.input;
    const caller = action.caller;

    const target = input.target;
    const ticker = state.ticker;

    if (typeof target !== 'string') {
        throw new ContractError('Need a target to get a balance for')
    }

    if (typeof balances[target] !== 'number') {
        throw new ContractError('Cannot get balance, target does not exist')
    }

    return { result: { target, ticker, balance: balances[target] } }
}
