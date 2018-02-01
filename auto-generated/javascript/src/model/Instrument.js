/**
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)    ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Instrument model module.
* @module model/Instrument
* @version 1.2.0
*/
export default class Instrument {
    /**
    * Constructs a new <code>Instrument</code>.
    * Tradeable Contracts, Indices, and History
    * @alias module:model/Instrument
    * @class
    * @param symbol {String} 
    */

    constructor(symbol) {
        

        
        

        this['symbol'] = symbol;

        
    }

    /**
    * Constructs a <code>Instrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Instrument} obj Optional instance to populate.
    * @return {module:model/Instrument} The populated <code>Instrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instrument();

            
            
            

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('rootSymbol')) {
                obj['rootSymbol'] = ApiClient.convertToType(data['rootSymbol'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('typ')) {
                obj['typ'] = ApiClient.convertToType(data['typ'], 'String');
            }
            if (data.hasOwnProperty('listing')) {
                obj['listing'] = ApiClient.convertToType(data['listing'], 'Date');
            }
            if (data.hasOwnProperty('front')) {
                obj['front'] = ApiClient.convertToType(data['front'], 'Date');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('settle')) {
                obj['settle'] = ApiClient.convertToType(data['settle'], 'Date');
            }
            if (data.hasOwnProperty('relistInterval')) {
                obj['relistInterval'] = ApiClient.convertToType(data['relistInterval'], 'Date');
            }
            if (data.hasOwnProperty('inverseLeg')) {
                obj['inverseLeg'] = ApiClient.convertToType(data['inverseLeg'], 'String');
            }
            if (data.hasOwnProperty('sellLeg')) {
                obj['sellLeg'] = ApiClient.convertToType(data['sellLeg'], 'String');
            }
            if (data.hasOwnProperty('buyLeg')) {
                obj['buyLeg'] = ApiClient.convertToType(data['buyLeg'], 'String');
            }
            if (data.hasOwnProperty('positionCurrency')) {
                obj['positionCurrency'] = ApiClient.convertToType(data['positionCurrency'], 'String');
            }
            if (data.hasOwnProperty('underlying')) {
                obj['underlying'] = ApiClient.convertToType(data['underlying'], 'String');
            }
            if (data.hasOwnProperty('quoteCurrency')) {
                obj['quoteCurrency'] = ApiClient.convertToType(data['quoteCurrency'], 'String');
            }
            if (data.hasOwnProperty('underlyingSymbol')) {
                obj['underlyingSymbol'] = ApiClient.convertToType(data['underlyingSymbol'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('referenceSymbol')) {
                obj['referenceSymbol'] = ApiClient.convertToType(data['referenceSymbol'], 'String');
            }
            if (data.hasOwnProperty('calcInterval')) {
                obj['calcInterval'] = ApiClient.convertToType(data['calcInterval'], 'Date');
            }
            if (data.hasOwnProperty('publishInterval')) {
                obj['publishInterval'] = ApiClient.convertToType(data['publishInterval'], 'Date');
            }
            if (data.hasOwnProperty('publishTime')) {
                obj['publishTime'] = ApiClient.convertToType(data['publishTime'], 'Date');
            }
            if (data.hasOwnProperty('maxOrderQty')) {
                obj['maxOrderQty'] = ApiClient.convertToType(data['maxOrderQty'], 'Number');
            }
            if (data.hasOwnProperty('maxPrice')) {
                obj['maxPrice'] = ApiClient.convertToType(data['maxPrice'], 'Number');
            }
            if (data.hasOwnProperty('lotSize')) {
                obj['lotSize'] = ApiClient.convertToType(data['lotSize'], 'Number');
            }
            if (data.hasOwnProperty('tickSize')) {
                obj['tickSize'] = ApiClient.convertToType(data['tickSize'], 'Number');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = ApiClient.convertToType(data['multiplier'], 'Number');
            }
            if (data.hasOwnProperty('settlCurrency')) {
                obj['settlCurrency'] = ApiClient.convertToType(data['settlCurrency'], 'String');
            }
            if (data.hasOwnProperty('underlyingToPositionMultiplier')) {
                obj['underlyingToPositionMultiplier'] = ApiClient.convertToType(data['underlyingToPositionMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('underlyingToSettleMultiplier')) {
                obj['underlyingToSettleMultiplier'] = ApiClient.convertToType(data['underlyingToSettleMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('quoteToSettleMultiplier')) {
                obj['quoteToSettleMultiplier'] = ApiClient.convertToType(data['quoteToSettleMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('isQuanto')) {
                obj['isQuanto'] = ApiClient.convertToType(data['isQuanto'], 'Boolean');
            }
            if (data.hasOwnProperty('isInverse')) {
                obj['isInverse'] = ApiClient.convertToType(data['isInverse'], 'Boolean');
            }
            if (data.hasOwnProperty('initMargin')) {
                obj['initMargin'] = ApiClient.convertToType(data['initMargin'], 'Number');
            }
            if (data.hasOwnProperty('maintMargin')) {
                obj['maintMargin'] = ApiClient.convertToType(data['maintMargin'], 'Number');
            }
            if (data.hasOwnProperty('riskLimit')) {
                obj['riskLimit'] = ApiClient.convertToType(data['riskLimit'], 'Number');
            }
            if (data.hasOwnProperty('riskStep')) {
                obj['riskStep'] = ApiClient.convertToType(data['riskStep'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('capped')) {
                obj['capped'] = ApiClient.convertToType(data['capped'], 'Boolean');
            }
            if (data.hasOwnProperty('taxed')) {
                obj['taxed'] = ApiClient.convertToType(data['taxed'], 'Boolean');
            }
            if (data.hasOwnProperty('deleverage')) {
                obj['deleverage'] = ApiClient.convertToType(data['deleverage'], 'Boolean');
            }
            if (data.hasOwnProperty('makerFee')) {
                obj['makerFee'] = ApiClient.convertToType(data['makerFee'], 'Number');
            }
            if (data.hasOwnProperty('takerFee')) {
                obj['takerFee'] = ApiClient.convertToType(data['takerFee'], 'Number');
            }
            if (data.hasOwnProperty('settlementFee')) {
                obj['settlementFee'] = ApiClient.convertToType(data['settlementFee'], 'Number');
            }
            if (data.hasOwnProperty('insuranceFee')) {
                obj['insuranceFee'] = ApiClient.convertToType(data['insuranceFee'], 'Number');
            }
            if (data.hasOwnProperty('fundingBaseSymbol')) {
                obj['fundingBaseSymbol'] = ApiClient.convertToType(data['fundingBaseSymbol'], 'String');
            }
            if (data.hasOwnProperty('fundingQuoteSymbol')) {
                obj['fundingQuoteSymbol'] = ApiClient.convertToType(data['fundingQuoteSymbol'], 'String');
            }
            if (data.hasOwnProperty('fundingPremiumSymbol')) {
                obj['fundingPremiumSymbol'] = ApiClient.convertToType(data['fundingPremiumSymbol'], 'String');
            }
            if (data.hasOwnProperty('fundingTimestamp')) {
                obj['fundingTimestamp'] = ApiClient.convertToType(data['fundingTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('fundingInterval')) {
                obj['fundingInterval'] = ApiClient.convertToType(data['fundingInterval'], 'Date');
            }
            if (data.hasOwnProperty('fundingRate')) {
                obj['fundingRate'] = ApiClient.convertToType(data['fundingRate'], 'Number');
            }
            if (data.hasOwnProperty('indicativeFundingRate')) {
                obj['indicativeFundingRate'] = ApiClient.convertToType(data['indicativeFundingRate'], 'Number');
            }
            if (data.hasOwnProperty('rebalanceTimestamp')) {
                obj['rebalanceTimestamp'] = ApiClient.convertToType(data['rebalanceTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('rebalanceInterval')) {
                obj['rebalanceInterval'] = ApiClient.convertToType(data['rebalanceInterval'], 'Date');
            }
            if (data.hasOwnProperty('openingTimestamp')) {
                obj['openingTimestamp'] = ApiClient.convertToType(data['openingTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('closingTimestamp')) {
                obj['closingTimestamp'] = ApiClient.convertToType(data['closingTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('sessionInterval')) {
                obj['sessionInterval'] = ApiClient.convertToType(data['sessionInterval'], 'Date');
            }
            if (data.hasOwnProperty('prevClosePrice')) {
                obj['prevClosePrice'] = ApiClient.convertToType(data['prevClosePrice'], 'Number');
            }
            if (data.hasOwnProperty('limitDownPrice')) {
                obj['limitDownPrice'] = ApiClient.convertToType(data['limitDownPrice'], 'Number');
            }
            if (data.hasOwnProperty('limitUpPrice')) {
                obj['limitUpPrice'] = ApiClient.convertToType(data['limitUpPrice'], 'Number');
            }
            if (data.hasOwnProperty('bankruptLimitDownPrice')) {
                obj['bankruptLimitDownPrice'] = ApiClient.convertToType(data['bankruptLimitDownPrice'], 'Number');
            }
            if (data.hasOwnProperty('bankruptLimitUpPrice')) {
                obj['bankruptLimitUpPrice'] = ApiClient.convertToType(data['bankruptLimitUpPrice'], 'Number');
            }
            if (data.hasOwnProperty('prevTotalVolume')) {
                obj['prevTotalVolume'] = ApiClient.convertToType(data['prevTotalVolume'], 'Number');
            }
            if (data.hasOwnProperty('totalVolume')) {
                obj['totalVolume'] = ApiClient.convertToType(data['totalVolume'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('volume24h')) {
                obj['volume24h'] = ApiClient.convertToType(data['volume24h'], 'Number');
            }
            if (data.hasOwnProperty('prevTotalTurnover')) {
                obj['prevTotalTurnover'] = ApiClient.convertToType(data['prevTotalTurnover'], 'Number');
            }
            if (data.hasOwnProperty('totalTurnover')) {
                obj['totalTurnover'] = ApiClient.convertToType(data['totalTurnover'], 'Number');
            }
            if (data.hasOwnProperty('turnover')) {
                obj['turnover'] = ApiClient.convertToType(data['turnover'], 'Number');
            }
            if (data.hasOwnProperty('turnover24h')) {
                obj['turnover24h'] = ApiClient.convertToType(data['turnover24h'], 'Number');
            }
            if (data.hasOwnProperty('prevPrice24h')) {
                obj['prevPrice24h'] = ApiClient.convertToType(data['prevPrice24h'], 'Number');
            }
            if (data.hasOwnProperty('vwap')) {
                obj['vwap'] = ApiClient.convertToType(data['vwap'], 'Number');
            }
            if (data.hasOwnProperty('highPrice')) {
                obj['highPrice'] = ApiClient.convertToType(data['highPrice'], 'Number');
            }
            if (data.hasOwnProperty('lowPrice')) {
                obj['lowPrice'] = ApiClient.convertToType(data['lowPrice'], 'Number');
            }
            if (data.hasOwnProperty('lastPrice')) {
                obj['lastPrice'] = ApiClient.convertToType(data['lastPrice'], 'Number');
            }
            if (data.hasOwnProperty('lastPriceProtected')) {
                obj['lastPriceProtected'] = ApiClient.convertToType(data['lastPriceProtected'], 'Number');
            }
            if (data.hasOwnProperty('lastTickDirection')) {
                obj['lastTickDirection'] = ApiClient.convertToType(data['lastTickDirection'], 'String');
            }
            if (data.hasOwnProperty('lastChangePcnt')) {
                obj['lastChangePcnt'] = ApiClient.convertToType(data['lastChangePcnt'], 'Number');
            }
            if (data.hasOwnProperty('bidPrice')) {
                obj['bidPrice'] = ApiClient.convertToType(data['bidPrice'], 'Number');
            }
            if (data.hasOwnProperty('midPrice')) {
                obj['midPrice'] = ApiClient.convertToType(data['midPrice'], 'Number');
            }
            if (data.hasOwnProperty('askPrice')) {
                obj['askPrice'] = ApiClient.convertToType(data['askPrice'], 'Number');
            }
            if (data.hasOwnProperty('impactBidPrice')) {
                obj['impactBidPrice'] = ApiClient.convertToType(data['impactBidPrice'], 'Number');
            }
            if (data.hasOwnProperty('impactMidPrice')) {
                obj['impactMidPrice'] = ApiClient.convertToType(data['impactMidPrice'], 'Number');
            }
            if (data.hasOwnProperty('impactAskPrice')) {
                obj['impactAskPrice'] = ApiClient.convertToType(data['impactAskPrice'], 'Number');
            }
            if (data.hasOwnProperty('hasLiquidity')) {
                obj['hasLiquidity'] = ApiClient.convertToType(data['hasLiquidity'], 'Boolean');
            }
            if (data.hasOwnProperty('openInterest')) {
                obj['openInterest'] = ApiClient.convertToType(data['openInterest'], 'Number');
            }
            if (data.hasOwnProperty('openValue')) {
                obj['openValue'] = ApiClient.convertToType(data['openValue'], 'Number');
            }
            if (data.hasOwnProperty('fairMethod')) {
                obj['fairMethod'] = ApiClient.convertToType(data['fairMethod'], 'String');
            }
            if (data.hasOwnProperty('fairBasisRate')) {
                obj['fairBasisRate'] = ApiClient.convertToType(data['fairBasisRate'], 'Number');
            }
            if (data.hasOwnProperty('fairBasis')) {
                obj['fairBasis'] = ApiClient.convertToType(data['fairBasis'], 'Number');
            }
            if (data.hasOwnProperty('fairPrice')) {
                obj['fairPrice'] = ApiClient.convertToType(data['fairPrice'], 'Number');
            }
            if (data.hasOwnProperty('markMethod')) {
                obj['markMethod'] = ApiClient.convertToType(data['markMethod'], 'String');
            }
            if (data.hasOwnProperty('markPrice')) {
                obj['markPrice'] = ApiClient.convertToType(data['markPrice'], 'Number');
            }
            if (data.hasOwnProperty('indicativeTaxRate')) {
                obj['indicativeTaxRate'] = ApiClient.convertToType(data['indicativeTaxRate'], 'Number');
            }
            if (data.hasOwnProperty('indicativeSettlePrice')) {
                obj['indicativeSettlePrice'] = ApiClient.convertToType(data['indicativeSettlePrice'], 'Number');
            }
            if (data.hasOwnProperty('settledPrice')) {
                obj['settledPrice'] = ApiClient.convertToType(data['settledPrice'], 'Number');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} symbol
    */
    symbol = undefined;
    /**
    * @member {String} rootSymbol
    */
    rootSymbol = undefined;
    /**
    * @member {String} state
    */
    state = undefined;
    /**
    * @member {String} typ
    */
    typ = undefined;
    /**
    * @member {Date} listing
    */
    listing = undefined;
    /**
    * @member {Date} front
    */
    front = undefined;
    /**
    * @member {Date} expiry
    */
    expiry = undefined;
    /**
    * @member {Date} settle
    */
    settle = undefined;
    /**
    * @member {Date} relistInterval
    */
    relistInterval = undefined;
    /**
    * @member {String} inverseLeg
    */
    inverseLeg = undefined;
    /**
    * @member {String} sellLeg
    */
    sellLeg = undefined;
    /**
    * @member {String} buyLeg
    */
    buyLeg = undefined;
    /**
    * @member {String} positionCurrency
    */
    positionCurrency = undefined;
    /**
    * @member {String} underlying
    */
    underlying = undefined;
    /**
    * @member {String} quoteCurrency
    */
    quoteCurrency = undefined;
    /**
    * @member {String} underlyingSymbol
    */
    underlyingSymbol = undefined;
    /**
    * @member {String} reference
    */
    reference = undefined;
    /**
    * @member {String} referenceSymbol
    */
    referenceSymbol = undefined;
    /**
    * @member {Date} calcInterval
    */
    calcInterval = undefined;
    /**
    * @member {Date} publishInterval
    */
    publishInterval = undefined;
    /**
    * @member {Date} publishTime
    */
    publishTime = undefined;
    /**
    * @member {Number} maxOrderQty
    */
    maxOrderQty = undefined;
    /**
    * @member {Number} maxPrice
    */
    maxPrice = undefined;
    /**
    * @member {Number} lotSize
    */
    lotSize = undefined;
    /**
    * @member {Number} tickSize
    */
    tickSize = undefined;
    /**
    * @member {Number} multiplier
    */
    multiplier = undefined;
    /**
    * @member {String} settlCurrency
    */
    settlCurrency = undefined;
    /**
    * @member {Number} underlyingToPositionMultiplier
    */
    underlyingToPositionMultiplier = undefined;
    /**
    * @member {Number} underlyingToSettleMultiplier
    */
    underlyingToSettleMultiplier = undefined;
    /**
    * @member {Number} quoteToSettleMultiplier
    */
    quoteToSettleMultiplier = undefined;
    /**
    * @member {Boolean} isQuanto
    */
    isQuanto = undefined;
    /**
    * @member {Boolean} isInverse
    */
    isInverse = undefined;
    /**
    * @member {Number} initMargin
    */
    initMargin = undefined;
    /**
    * @member {Number} maintMargin
    */
    maintMargin = undefined;
    /**
    * @member {Number} riskLimit
    */
    riskLimit = undefined;
    /**
    * @member {Number} riskStep
    */
    riskStep = undefined;
    /**
    * @member {Number} limit
    */
    limit = undefined;
    /**
    * @member {Boolean} capped
    */
    capped = undefined;
    /**
    * @member {Boolean} taxed
    */
    taxed = undefined;
    /**
    * @member {Boolean} deleverage
    */
    deleverage = undefined;
    /**
    * @member {Number} makerFee
    */
    makerFee = undefined;
    /**
    * @member {Number} takerFee
    */
    takerFee = undefined;
    /**
    * @member {Number} settlementFee
    */
    settlementFee = undefined;
    /**
    * @member {Number} insuranceFee
    */
    insuranceFee = undefined;
    /**
    * @member {String} fundingBaseSymbol
    */
    fundingBaseSymbol = undefined;
    /**
    * @member {String} fundingQuoteSymbol
    */
    fundingQuoteSymbol = undefined;
    /**
    * @member {String} fundingPremiumSymbol
    */
    fundingPremiumSymbol = undefined;
    /**
    * @member {Date} fundingTimestamp
    */
    fundingTimestamp = undefined;
    /**
    * @member {Date} fundingInterval
    */
    fundingInterval = undefined;
    /**
    * @member {Number} fundingRate
    */
    fundingRate = undefined;
    /**
    * @member {Number} indicativeFundingRate
    */
    indicativeFundingRate = undefined;
    /**
    * @member {Date} rebalanceTimestamp
    */
    rebalanceTimestamp = undefined;
    /**
    * @member {Date} rebalanceInterval
    */
    rebalanceInterval = undefined;
    /**
    * @member {Date} openingTimestamp
    */
    openingTimestamp = undefined;
    /**
    * @member {Date} closingTimestamp
    */
    closingTimestamp = undefined;
    /**
    * @member {Date} sessionInterval
    */
    sessionInterval = undefined;
    /**
    * @member {Number} prevClosePrice
    */
    prevClosePrice = undefined;
    /**
    * @member {Number} limitDownPrice
    */
    limitDownPrice = undefined;
    /**
    * @member {Number} limitUpPrice
    */
    limitUpPrice = undefined;
    /**
    * @member {Number} bankruptLimitDownPrice
    */
    bankruptLimitDownPrice = undefined;
    /**
    * @member {Number} bankruptLimitUpPrice
    */
    bankruptLimitUpPrice = undefined;
    /**
    * @member {Number} prevTotalVolume
    */
    prevTotalVolume = undefined;
    /**
    * @member {Number} totalVolume
    */
    totalVolume = undefined;
    /**
    * @member {Number} volume
    */
    volume = undefined;
    /**
    * @member {Number} volume24h
    */
    volume24h = undefined;
    /**
    * @member {Number} prevTotalTurnover
    */
    prevTotalTurnover = undefined;
    /**
    * @member {Number} totalTurnover
    */
    totalTurnover = undefined;
    /**
    * @member {Number} turnover
    */
    turnover = undefined;
    /**
    * @member {Number} turnover24h
    */
    turnover24h = undefined;
    /**
    * @member {Number} prevPrice24h
    */
    prevPrice24h = undefined;
    /**
    * @member {Number} vwap
    */
    vwap = undefined;
    /**
    * @member {Number} highPrice
    */
    highPrice = undefined;
    /**
    * @member {Number} lowPrice
    */
    lowPrice = undefined;
    /**
    * @member {Number} lastPrice
    */
    lastPrice = undefined;
    /**
    * @member {Number} lastPriceProtected
    */
    lastPriceProtected = undefined;
    /**
    * @member {String} lastTickDirection
    */
    lastTickDirection = undefined;
    /**
    * @member {Number} lastChangePcnt
    */
    lastChangePcnt = undefined;
    /**
    * @member {Number} bidPrice
    */
    bidPrice = undefined;
    /**
    * @member {Number} midPrice
    */
    midPrice = undefined;
    /**
    * @member {Number} askPrice
    */
    askPrice = undefined;
    /**
    * @member {Number} impactBidPrice
    */
    impactBidPrice = undefined;
    /**
    * @member {Number} impactMidPrice
    */
    impactMidPrice = undefined;
    /**
    * @member {Number} impactAskPrice
    */
    impactAskPrice = undefined;
    /**
    * @member {Boolean} hasLiquidity
    */
    hasLiquidity = undefined;
    /**
    * @member {Number} openInterest
    */
    openInterest = undefined;
    /**
    * @member {Number} openValue
    */
    openValue = undefined;
    /**
    * @member {String} fairMethod
    */
    fairMethod = undefined;
    /**
    * @member {Number} fairBasisRate
    */
    fairBasisRate = undefined;
    /**
    * @member {Number} fairBasis
    */
    fairBasis = undefined;
    /**
    * @member {Number} fairPrice
    */
    fairPrice = undefined;
    /**
    * @member {String} markMethod
    */
    markMethod = undefined;
    /**
    * @member {Number} markPrice
    */
    markPrice = undefined;
    /**
    * @member {Number} indicativeTaxRate
    */
    indicativeTaxRate = undefined;
    /**
    * @member {Number} indicativeSettlePrice
    */
    indicativeSettlePrice = undefined;
    /**
    * @member {Number} settledPrice
    */
    settledPrice = undefined;
    /**
    * @member {Date} timestamp
    */
    timestamp = undefined;








}

