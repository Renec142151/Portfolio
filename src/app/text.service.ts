import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  jsonText = 
    {Pascal: "''I had the pleasure of working with Rene on a programming project. His exceptional problem-solving skills and strong team collaboration made him an invaluable asset. Rene's dedication and positive attitude ensured our project's success. Highly recommended for any team.''",
      Vanessa: "''René was exceptionally dedicated and played a crucial role in driving our team forward. His insightful ideas and vast knowledge greatly contributed to our success, and I benefited immensely from his expertise. Working with him was not only productive but also genuinely enjoyable. I would be delighted to collaborate with him again in the future!''"
    };
  

  constructor() { }
}
