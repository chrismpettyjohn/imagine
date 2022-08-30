export interface ArticleCreateInputDTO {
  name: string;
  description: string;
  content: string;
  imageURL: string;
}

export interface ArticleUpdateInputDTO {
  name?: string;
  description?: string;
  content?: string;
  imageURL?: string;
}
