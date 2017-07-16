import Hello from '@pages/Hello'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Logout from '@pages/Logout'
import Users from '@pages/user/Users'
import UsersList from '@pages/user/UsersList'
import UserView from '@pages/user/UserView'
import UserEdit from '@pages/user/UserEdit'
import Profile from '@pages/profile/Profile'
import ProfileReview from '@pages/profile/ProfileReview'
import ProfileEdit from '@pages/profile/ProfileEdit'

const pages = [
	{
		path: '/',
		name: 'home',
		component: Hello,
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: 'Login'
		}
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
		meta: {
			title: 'Register'
		}
	},
	{
		path: '/logout',
		title: 'Logout',
		name: 'logout',
		component: Logout,
		meta: {
			title: 'Logout'
		}
	},
	{
		path: '/users',
		component: Users,
		children: [
			{
				path: '',
				component: UsersList,
				title: 'Users list',
				name: 'users-list',
				meta: {
					title: 'Users'
				}
			},
			{
				path: ':id',
				component: UserView,
				title: 'User View',
				name: 'user-view',
				meta: {
					title: 'User View'
				}
			},
			{
				path: ':id/edit-user',
				component: UserEdit,
				title: 'User Edit',
				name: 'user-edit',
				meta: {
					title: 'User Edit'
				}
			}
		]
	},
	{
		path: '/profile',
		component: Profile,
		children: [
			{
				path: '',
				component: ProfileReview,
				title: 'Profile Review - Dashboard',
				name: 'profile-review'
			},
			{
				path: 'edit',
				component: ProfileEdit,
				title: 'Edit profile',
				name: 'profile-edit'
			}
		]
	}
]

export default pages
