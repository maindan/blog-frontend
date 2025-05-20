export interface IPostCreate {
  title: string,
  subtitle: string,
  content: string,
  created_by: number,
  tags?: ITag[]
}

export interface IPost extends IPostCreate {
  id: number,
  created_at: string,
  updated_at: string
}

export interface ITag {
  id: number,
  name: string
}
