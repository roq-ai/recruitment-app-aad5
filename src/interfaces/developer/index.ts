import { InterviewInterface } from 'interfaces/interview';
import { GetQueryInterface } from 'interfaces';

export interface DeveloperInterface {
  id?: string;
  first_name: string;
  last_name: string;
  skills: string;
  job_title: string;
  created_at?: any;
  updated_at?: any;
  interview?: InterviewInterface[];

  _count?: {
    interview?: number;
  };
}

export interface DeveloperGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  skills?: string;
  job_title?: string;
}
