export interface IPostCreate {
  title: string;
  subtitle: string;
  content: string;
  tagstag_ids?: number[];
}

export interface IPost extends IPostCreate {
  id: number,
  created_by: string,
  created_at: string,
  updated_at: string,
  tags: ITag[]
}

export interface ITag {
  id: number,
  name: string
}
