import MainLayout from '@/layouts/MainLayout.vue'
import Home from '../../pages/Home/index.vue';
import product from '../../pages/Product/index.vue'
import Cart from '../../pages/Cart/index.vue'
import Category from '../../pages/category/index.vue'
import NotFound from '../../layouts/NotFound.vue';
import Register from '../../pages/Auth/Register.vue';
import Login from '../../pages/Auth/Login.vue';
import ProductDetails from '@/components/Home/ProductDetails.vue';
import Payment from '../../pages/Payment/index.vue';
import AllOrders from '../../pages/Payment/AllOrders.vue';
export default [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home',
                meta: { requiresAuth: true }
            },
            {
                path: 'product',
                component: product,
                name: 'product',
                meta: { requiresAuth: true }

            },
            {
                path: 'product/:id',
                component: ProductDetails,
                name: 'productDetails',
                meta: { requiresAuth: true }

            },
            {
                path: 'cart',
                component: Cart,
                name: 'cart',
                meta: { requiresAuth: true }
            },
            {
                path: 'category',
                component: Category,
                name: 'category',
                meta: { requiresAuth: true }
            },
            {
                path: 'payment',
                component: Payment,
                name: 'payment',
                meta: { requiresAuth: true }
            },
            {
                path: 'allorders',
                component: AllOrders,
                name: 'orders',
                meta: { requiresAuth: true }
            },
            {
                path: 'register',
                component: Register,
                name: 'register',
                meta: { requiresAuth: false }
            },
            {
                path: 'login',
                component: Login,
                name: 'login',
                meta: { requiresAuth: false }
            }
        ]

    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }

]