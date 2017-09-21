/**
 *  Created by daiwenjuan on 17/9/21 下午6:11.
 */
export default store => next => action => {
  // console.log(action)
  return next(action)
}
