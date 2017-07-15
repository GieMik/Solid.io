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
		title: 'Hello',
		name: 'hello',
		component: Hello
	},
	{
		path: '/login',
		title: 'Login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		title: 'Register',
		name: 'register',
		component: Register
	},
	{
		path: '/logout',
		title: 'Logout',
		name: 'logout',
		component: Logout
	},
	{
		path: '/users',
		component: Users,
		children: [
			{
				path: '',
				component: UsersList,
				title: 'Users list',
				name: 'users-list'
			},
			{
				path: ':id',
				component: UserView,
				title: 'User View',
				name: 'user-view'
			},
			{
				path: ':id/edit-user',
				component: UserEdit,
				title: 'User Edit',
				name: 'user-edit'
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
