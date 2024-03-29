'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
var EPOCH_TIME = exports.EPOCH_TIME = new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0));
var EPOCH_TIME_MILLISECONDS = exports.EPOCH_TIME_MILLISECONDS = EPOCH_TIME.getTime();
var EPOCH_TIME_SECONDS = exports.EPOCH_TIME_SECONDS = Math.floor(EPOCH_TIME.getTime() / 1000);

// Largest possible address. Derived from bignum.fromBuffer(Buffer.from(new Array(8).fill(255))).
var MAX_ADDRESS_NUMBER = exports.MAX_ADDRESS_NUMBER = '18446744073709551615';
// Largest possible amount. Derived from bignum.fromBuffer(Buffer.from(new Array(8).fill(255))).
var MAX_TRANSACTION_AMOUNT = exports.MAX_TRANSACTION_AMOUNT = '18446744073709551615';

var SIGNED_MESSAGE_PREFIX = exports.SIGNED_MESSAGE_PREFIX = 'Lisk Signed Message:\n';

var TESTNET_NETHASH = exports.TESTNET_NETHASH = 'da3ed6a45429278bac2666961289ca17ad86595d33b31037615d4b8e8f158bba';
var MAINNET_NETHASH = exports.MAINNET_NETHASH = 'ed14889723f24ecc54871d058d98ce91ff2f973192075c0155ba2b7b70ad2511';