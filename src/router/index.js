import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Zong from '@/components/zong'
import Fenlei from '@/components/fenlei'
import ZHI from '@/components/zhi'
import Shang from '@/components/shang'
import Mine from '@/components/mine'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/zong',
            name: 'zong',
            component: Zong,
            children: [{
                    path: '/zong/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/zong/zhi',
                    name: 'zhi',
                    component: ZHI,
                },
                // {
                // path: '/zong/add',
                // name: 'index',
                // component: Index,
                // },
                {
                    path: '/zong/shang',
                    name: 'shang',
                    component: Shang,
                },
                {
                    path: '/zong/mine',
                    name: 'mine',
                    component: Mine,
                }
            ]
        },
        {
            path: '/fenlei',
            name: 'fenlei',
            component: Fenlei,
        }
    ]
})
router.push({ path: "/zong/index" })
export default router;