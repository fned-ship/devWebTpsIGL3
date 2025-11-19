export interface Question {
  id: number;
  question: string;
  options: string[];
  reponse: string; 
  type?: 'mcq' | 'text'; 
  answered?: boolean; 
}
