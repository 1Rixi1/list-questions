type AuthorInfo = {
  id: string;
  username: string;
};

type Specialization = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string | null;
  createdAt: string;
  updatedAt: string;
};

type Skill = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
};

export type Question = {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc?: string | null;
  keywords?: string[];
  longAnswer?: string;
  shortAnswer?: string;
  status?: string;
  rate?: number;
  complexity?: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById?: string;
  createdBy: AuthorInfo;
  updatedBy: AuthorInfo;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
};

//RESPONSE

export type QuestionsResponse = {
  data: Question[];
  page?: number;
  limit?: number;
  total: number;
};

export type QuestionsRequest = {
  page?: number;
  limit?: number;
  title?: string;
  titleOrDescription?: string;
  skills?: string;
  skillFilterMode?: string;
  complexity?: number;
  collection?: number;
  rate?: number;
  keywords?: string;
  specialization?: number;
  orderBy?: string;
  order?: string;
  random?: boolean;
};
