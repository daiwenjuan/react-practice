/**
 *  Created by daiwenjuan on 17/9/21 下午5:31.
 */
import { useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

export default useRouterHistory(createHashHistory)({queryKey: false})
