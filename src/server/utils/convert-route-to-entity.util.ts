const mapping: Record<string, string> = {
  developers: 'developer',
  employers: 'employer',
  'hr-managers': 'hr_manager',
  interviews: 'interview',
  recruiters: 'recruiter',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
