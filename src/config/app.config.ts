interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employer'],
  customerRoles: [],
  tenantRoles: ['Employer', 'Recruiter', 'HR Manager'],
  tenantName: 'Employer',
  applicationName: 'Recruitment App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage account.',
    'Access application.',
    'Search software developers by job title and skills.',
    'View developer profiles.',
    'Book and manage interviews.',
    'Invite Recruiters or HR Managers.',
  ],
};
