import { EmployerInterface } from 'interfaces/employer';
import { DeveloperInterface } from 'interfaces/developer';
import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  employer_id: string;
  developer_id: string;
  date: any;
  time: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  employer?: EmployerInterface;
  developer?: DeveloperInterface;
  _count?: {};
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  employer_id?: string;
  developer_id?: string;
  status?: string;
}
