/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime
import java.util.UUID

case class Position (
  account: Double,
  symbol: String,
  currency: String,
  underlying: Option[String],
  quoteCurrency: Option[String],
  commission: Option[Double],
  initMarginReq: Option[Double],
  maintMarginReq: Option[Double],
  riskLimit: Option[Double],
  leverage: Option[Double],
  crossMargin: Option[Boolean],
  deleveragePercentile: Option[Double],
  rebalancedPnl: Option[Double],
  prevRealisedPnl: Option[Double],
  prevUnrealisedPnl: Option[Double],
  prevClosePrice: Option[Double],
  openingTimestamp: Option[DateTime],
  openingQty: Option[Double],
  openingCost: Option[Double],
  openingComm: Option[Double],
  openOrderBuyQty: Option[Double],
  openOrderBuyCost: Option[Double],
  openOrderBuyPremium: Option[Double],
  openOrderSellQty: Option[Double],
  openOrderSellCost: Option[Double],
  openOrderSellPremium: Option[Double],
  execBuyQty: Option[Double],
  execBuyCost: Option[Double],
  execSellQty: Option[Double],
  execSellCost: Option[Double],
  execQty: Option[Double],
  execCost: Option[Double],
  execComm: Option[Double],
  currentTimestamp: Option[DateTime],
  currentQty: Option[Double],
  currentCost: Option[Double],
  currentComm: Option[Double],
  realisedCost: Option[Double],
  unrealisedCost: Option[Double],
  grossOpenCost: Option[Double],
  grossOpenPremium: Option[Double],
  grossExecCost: Option[Double],
  isOpen: Option[Boolean],
  markPrice: Option[Double],
  markValue: Option[Double],
  riskValue: Option[Double],
  homeNotional: Option[Double],
  foreignNotional: Option[Double],
  posState: Option[String],
  posCost: Option[Double],
  posCost2: Option[Double],
  posCross: Option[Double],
  posInit: Option[Double],
  posComm: Option[Double],
  posLoss: Option[Double],
  posMargin: Option[Double],
  posMaint: Option[Double],
  posAllowance: Option[Double],
  taxableMargin: Option[Double],
  initMargin: Option[Double],
  maintMargin: Option[Double],
  sessionMargin: Option[Double],
  targetExcessMargin: Option[Double],
  varMargin: Option[Double],
  realisedGrossPnl: Option[Double],
  realisedTax: Option[Double],
  realisedPnl: Option[Double],
  unrealisedGrossPnl: Option[Double],
  longBankrupt: Option[Double],
  shortBankrupt: Option[Double],
  taxBase: Option[Double],
  indicativeTaxRate: Option[Double],
  indicativeTax: Option[Double],
  unrealisedTax: Option[Double],
  unrealisedPnl: Option[Double],
  unrealisedPnlPcnt: Option[Double],
  unrealisedRoePcnt: Option[Double],
  simpleQty: Option[Double],
  simpleCost: Option[Double],
  simpleValue: Option[Double],
  simplePnl: Option[Double],
  simplePnlPcnt: Option[Double],
  avgCostPrice: Option[Double],
  avgEntryPrice: Option[Double],
  breakEvenPrice: Option[Double],
  marginCallPrice: Option[Double],
  liquidationPrice: Option[Double],
  bankruptPrice: Option[Double],
  timestamp: Option[DateTime],
  lastPrice: Option[Double],
  lastValue: Option[Double]
) extends ApiModel

