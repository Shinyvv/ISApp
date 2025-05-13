import { useAuthStore } from '../../store/authStore';
import { FiUser, FiActivity, FiLogOut } from 'react-icons/fi';

export const UserNavbar = () => {
  const { logout } = useAuthStore();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">User Dashboard</div>
        <div className="flex items-center space-x-6">
          <a href="/user/profile" className="flex items-center space-x-2 hover:text-gray-200">
            <FiUser />
            <span>Profile</span>
          </a>
          <a href="/user/activity" className="flex items-center space-x-2 hover:text-gray-200">
            <FiActivity />
            <span>Activity</span>
          </a>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-red-200 hover:text-red-100"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};