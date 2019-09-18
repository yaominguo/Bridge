const Layout = () => import('@/components/Layout/main')
const HomePage = () => import('@/views/home')
const LoginPage = () => import('@/views/login')
const Option1 = () => import('@/views/option1')
const Option2 = () => import('@/views/option2')
const Option3 = () => import('@/views/option3')
const Option4 = () => import('@/views/option4')
const Option5 = () => import('@/views/option5')
const Option6 = () => import('@/views/option6')
const Option7 = () => import('@/views/option7')
const Option8 = () => import('@/views/option8')
const Option9 = () => import('@/views/option9')
const PersonCenter = () => import('@/views/person-center')

const appRoutes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    // meta: {
    //   title: '首页',
    // },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: HomePage,
      },
      {
        path: '/person',
        name: 'person',
        meta: {
          title: '个人中心'
        },
        component: PersonCenter,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
]

export const routes = [
  ...appRoutes,
]
