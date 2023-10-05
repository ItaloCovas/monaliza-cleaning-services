import { useLocation, Link } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  label: string;
}

export function NavigationLink({ to, label }: NavigationLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={
        pathname === to ? 'border-b-[2px] border-blue-0 font-bold' : ''
      }
    >
      {label}
    </Link>
  );
}
