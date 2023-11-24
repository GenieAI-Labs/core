const FEE_DIVIDER = 10_000;
export const calculateFees = (
  price: bigint,
  originValidatedProposalFeeRate: number,
  originServiceFeeRate: number,
  protocolEscrowFeeRate: number,
): bigint => {
  const value =
    price +
    (price *
      (BigInt(originValidatedProposalFeeRate) +
        BigInt(originServiceFeeRate) +
        BigInt(protocolEscrowFeeRate))) /
      BigInt(FEE_DIVIDER);
  return value;
};
