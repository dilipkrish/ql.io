/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Event emitted when the engine receives a script to execute.
 */
exports.SCRIPT_ACK = 'ql.io-script-ack';

/**
 * Event emitted when the script has compilation errors
 */
exports.SCRIPT_COMPILE_ERROR = 'ql.io-script-compile-error';

/**
 * Event emitted when the script has no compilation errors.
 */
exports.SCRIPT_COMPILE_OK = 'ql.io-script-compile-ok';

/**
 * Event emitted when the engine has executing a script, but the given statement is waiting its
 * turn.
 */
exports.STATEMENT_WAITING = 'ql.io-statement-waiting'; // Statement waiting to be executed

/**
 * Event emitted when a statement is currently in progress.
 */
exports.STATEMENT_IN_FLIGHT = 'ql.io-statement-in-flight';

/**
 * Event emitted when a statement execution succeeds.
 */
exports.STATEMENT_SUCCESS = 'ql.io-statement-success';

/**
 * Event emitted when a statement execution fails.
 */
exports.STATEMENT_ERROR = 'ql.io-statement-error';

/**
 * Event emitted when a request is sent out.
 */
exports.STATEMENT_REQUEST = 'ql.io-statement-request';

/**
 * Event emitted when response arrives for a previously sent request.
 */
exports.STATEMENT_RESPONSE = 'ql.io-statement-response';

/**
 * Event emitted when script execution is done.
 */
exports.SCRIPT_DONE = 'ql.io-script-done';

/**
 * Event emitted when results of script execution are computed and ready.
 */
exports.SCRIPT_RESULT = 'ql.io-script-result';

/**
 * Event emitted when an event starts. An event may encompass one or more activities.
 *
 * Events may be nested. Look for the end event to determine when an event ends.
 */
exports.BEGIN_EVENT = 'ql.io-begin-event';

/**
 * Event emitted when an event ends.
 */
exports.END_EVENT = 'ql.io-end-event';

/**
 * Event emitted periodically by an instance of the ql.io server..
 */
exports.HEART_BEAT = 'ql.io-heart-beat'

/**
 * An event.
 */
exports.EVENT = 'ql.io-event';

/**
 * Warning event.
 */
exports.WARNING = 'ql.io-warning';

/**
 * Error event.
 */
exports.ERROR = 'ql.io-error';

/**
 * Gather request ID for Call tracing
 */
exports.REQUEST_ID_RECEIVED = 'ql-io-request-id-received';
