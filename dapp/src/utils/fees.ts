const FEE_DIVIDER = 10_000;
export const calculateFees = (
    price: number,
    originValidatedProposalFeeRate: number,
    originServiceFeeRate: number,
    protocolEscrowFeeRate: number,
): BigInt => {
    const value = price +
        price * (originValidatedProposalFeeRate+originServiceFeeRate+protocolEscrowFeeRate)/FEE_DIVIDER;
    console.log(value)
    return BigInt(value);
};