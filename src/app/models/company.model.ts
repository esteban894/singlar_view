export interface Company {
  id: number;
  sync: number;
  name: string;
  webUrl: string;
  email: string;
  phone: string;
  description: string;
  usersCount: string;
  users: User[];
}

interface User {
  id: number;
  name: string;
  email: string;
  area: string;
  phone: string;
}
