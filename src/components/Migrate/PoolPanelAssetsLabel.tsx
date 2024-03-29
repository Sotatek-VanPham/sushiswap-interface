import { CurrencyLogo } from 'app/components/CurrencyLogo'
import { Pair } from 'colend-forking-sdk'
import React, { FC } from 'react'

export const PoolPanelAssetsLabel: FC<{ pair: Pair }> = ({ pair }) => (
  <div className="flex items-center">
    <CurrencyLogo className="rounded-full" currency={pair.token0} size={40} />
    <div className="-ml-2">
      <CurrencyLogo className="rounded-full" currency={pair.token1} size={40} />
    </div>
    <div className="ml-2 text-high-emphesis">
      {pair.token0.symbol}-{pair.token1.symbol}
    </div>
  </div>
)
