export default interface IError {
  status: number;
  errors: string[];
}

export interface ApiErrors {
  name: string;
  message: string;
  errors: ApiError[];
}

export interface ApiError {
  target: TargetError;
  value: string;
  property: string;
  children: [];
  constraints: {minLength: string, maxLength: string; };
}

export interface TargetError {
  key: string;
  language: string;
  value: string;
}
