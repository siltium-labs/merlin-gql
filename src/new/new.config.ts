export enum NewProjectTemplatesEnum {
  Basic = "basic",
  Example = "example",
}

export type NewProjectConfig = {
  name: string;
  template: NewProjectTemplatesEnum;
};
