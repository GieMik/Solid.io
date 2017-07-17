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
import TestField from '@pages/test-field/TestField'

const pages = [
	{
		path: '/',
		name: 'home',
		component: Hello,
		meta: {
			title: 'Home',
			location: 'main'
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: 'Login',
			location: 'profile'
		}
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
		meta: {
			title: 'Register',
			location: 'profile'
		}
	},
	{
		path: '/logout',
		name: 'logout',
		component: Logout,
		meta: {
			title: 'Logout',
			location: 'profile'
		}
	},
	{
		path: '/users',
		component: Users,
		children: [
			{
				path: '',
				component: UsersList,
				name: 'users-list',
				meta: {
					title: 'Users',
					location: 'main'
				}
			},
			{
				path: ':id',
				component: UserView,
				name: 'user-view',
				meta: {
					title: 'User View',
					location: ''
				}
			},
			{
				path: ':id/edit-user',
				component: UserEdit,
				name: 'user-edit',
				meta: {
					title: 'User Edit',
					location: ''
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
				name: 'profile-review',
				meta: {
					title: 'Profile Review - Dashboard',
					location: 'profile'
				}
			},
			{
				path: 'edit',
				component: ProfileEdit,
				name: 'profile-edit',
				meta: {
					title: 'Profile Edit',
					location: 'profile'
				}
			}
		]
	},
	{
		path: '/test-field',
		name: 'test-field',
		component: TestField,
		meta: {
			title: 'Test FIeld',
			location: 'test'
		}
	}
]

export default pages
