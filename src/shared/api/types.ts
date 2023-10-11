export interface postResponce {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type postsResponce = postResponce[];

export interface commentResponce {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type commentsResponce = commentResponce[];

export interface userResponce {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
