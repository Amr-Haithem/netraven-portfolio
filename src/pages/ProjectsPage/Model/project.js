export class Project{
    
    constructor(title, description,githubLink,youtubeLink,photoName) {
        this.title = title;
        this.description = description;
        this.githubLink=githubLink;
        this.youtubeLink=youtubeLink;
        this.photoName=photoName;
      }

      getTitle(){
          return this.title;
      }
      getDescription(){
          return this.description;
      }
      getGithubLink(){
          return this.githubLink;
      }
      getYoutubeLink(){
          return this.youtubeLink;
      }
      getPhotoName(){
          return this.photoName;
      }


}