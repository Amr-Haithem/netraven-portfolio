export class Project{
    
    constructor(title, description,githubLink,youtubeLink) {
        this.title = title;
        this.description = description;
        this.githubLink=githubLink;
        this.youtubeLink=youtubeLink;
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


}