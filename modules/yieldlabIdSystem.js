/**
 * This module adds yieldlabId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/yieldlabIdSystem
 * @requires module:modules/userId
 */

/** @type {Submodule} */
export const yieldlabIdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'yieldlabId',
  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {{TDID:string}} value
   * @returns {{tdid:Object}}
   */
  decode(value) {
    return { 'ylid': value }
  }
};
