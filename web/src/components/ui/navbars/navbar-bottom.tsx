import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import {
  Cog6ToothIcon as Cog6ToothIcon_Outline,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router';
import { useState } from 'react';
import { useUser } from '@/lib/auth';
export default function NavBarBottom() {
  const [, setPath] = useState<string | undefined>(undefined);

  const user = useUser();

  return (
    <>
      <div className="sm:hidden px-4 w-full fixed bottom-0 h-14 shadow-[0_5px_10px_rgba(0,0,0,0.25)] flex justify-between items-center bg-white z-20 rounded-t-3xl">
        <NavLink
          to="/"
          onClick={() => setPath('/')}
          className={
            'hover:bg-gray-100 rounded-full px-4 py-2 pt-3 cursor-pointer'
          }
        >
          {'/' === window.location.pathname ? (
            <span
              style={{ fontVariationSettings: "'FILL' 1" }}
              className="material-symbols-rounded text-gray-800"
            >
              home
            </span>
          ) : (
            <span
              style={{ fontVariationSettings: "'FILL' 0" }}
              className="material-symbols-rounded text-gray-400"
            >
              home
            </span>
          )}
        </NavLink>
        <NavLink
          to="/feed"
          onClick={() => setPath('/feed')}
          className={
            'hover:bg-gray-100 rounded-full px-4 py-2 pt-3 cursor-pointer '
          }
        >
          {'/feed' === window.location.pathname ? (
            <span
              style={{ fontVariationSettings: "'FILL' 1" }}
              className="material-symbols-rounded text-gray-800"
            >
              stacks
            </span>
          ) : (
            <span
              style={{ fontVariationSettings: "'FILL' 0" }}
              className="material-symbols-rounded text-gray-400"
            >
              stacks
            </span>
          )}
        </NavLink>
        <NavLink
          onClick={() => setPath('/route_setting')}
          to="/route_setting"
          className="flex shrink-0 items-center m-2"
        >
          <img alt="Your Company" src="/logo.svg" className="h-6 pl-2 w-auto" />
        </NavLink>
        <NavLink
          onClick={() => setPath('/settings')}
          to="/settings"
          className={
            'hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer ' +
            ('/settings' === window.location.pathname
              ? 'text-gray-800'
              : 'text-gray-400')
          }
        >
          {'/settings' === window.location.pathname ? (
            <Cog6ToothIcon className="h-6 w-6" />
          ) : (
            <Cog6ToothIcon_Outline className="h-6 w-6" />
          )}
        </NavLink>
        <NavLink
          onClick={() => setPath('/profile')}
          to={user.data ? '/profile' : '/login'}
          className={
            'hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer ' +
            ('/profile' === window.location.pathname
              ? 'text-gray-800'
              : 'text-gray-400')
          }
        >
          {user.data && user.data.has_profile_photo ? (
            <img
              className="rounded-full size-7"
              onError={(e) => (e.currentTarget.style.display = 'none')}
              src={`/api/profile_photo/${user.data.id}`}
            />
          ) : (
            <UserCircleIcon
              aria-hidden="true"
              className="size-6 text-gray-400"
            />
          )}
        </NavLink>
      </div>
    </>
  );
}
