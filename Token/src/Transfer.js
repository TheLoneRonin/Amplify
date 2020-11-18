export function Transfer(state, action) {
    const balances = state.balances;
    const input = action.input;
    const caller = action.caller;

    const target = input.target;
    const qty = input.qty;

    if (!Number.isInteger(qty)) {
        throw new ContractError('Invalid value for "qty". Must be an integer');
    }

    if (!target) {
        throw new ContractError('No target specified');
    }

    if (qty <= 0 || caller === target) {
        throw new ContractError('Invalid token transfer');
    }

    if (balances[caller] < qty) {
        throw new ContractError(`Caller balance not high enough to send ${qty} token(s)!`);
    }

    balances[caller] -= qty
    
    if (target in balances) {
        balances[target] += qty
    } else {
        balances[target] = qty
    }

    return { state }
}
