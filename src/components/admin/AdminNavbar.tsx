import { useAuthStore } from '../../store/authStore';
import { FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

export const AdminNavbar = () => {
  const { logout } = useAuthStore();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Admin Panel</div>
        <div className="flex items-center space-x-6">
          <a href="/admin/users" className="flex items-center space-x-2 hover:text-gray-300">
            <FiUsers />
            <span>Users</span>
          </a>
          <a href="/admin/settings" className="flex items-center space-x-2 hover:text-gray-300">
            <FiSettings />
            <span>Settings</span>
          </a>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-red-400 hover:text-red-300"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};