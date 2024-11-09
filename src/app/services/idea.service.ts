import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from '../models/idea';
import { environment } from '../../enviroments/environment';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private Http: HttpClient) { }
  // Method to create a new idea
  createIdea(newIdea: Idea): Observable<Idea> {
    return this.Http.post<Idea>(environment.ideasUrl, newIdea);
  }

  // Method to get all ideas
  getIdeas(): Observable<Idea[]> {
    return this.Http.get<Idea[]>(environment.ideasUrl);
  }
  // method to get idea by id
  getIdeaByID(id: string | null): Observable<Idea> {
    return this.Http.get<Idea>(`${environment.ideasUrl}/${id}`)
  }

  rateIdea(ideaId: string, form: any): void {
    // Fetch the existing idea to update
    this.Http.get<Idea>(`${environment.ideasUrl}/${ideaId}`).subscribe(idea => {
      if (idea) {
        idea.criterias.Alignment = form.Alignment;
        idea.criterias.innovation = form.innovation;
        idea.criterias.feasibility = form.feasibility;
        idea.criterias.scalability = form.scalability;
        idea.totalEvaluation = (((form.Alignment + form.innovation + form.feasibility + form.scalability) / 20) * 5)
        idea.ideaStatus = form.status;
        idea.comment = form.comment;
        idea.isRated = true;

        this.Http.put<Idea>(`${environment.ideasUrl}/${ideaId}`, idea).subscribe(
          (response) => {
            this.getTopThree();
          },)
      }
      else {
        alert('Idea not found');
      }
    });
  }
  getTopThree(): Observable<Idea[]> {
    return this.Http.get<Idea[]>(environment.ideasUrl).pipe(
      map((ideas) => {
        return ideas
          .filter((idea) => idea.ideaStatus === "selected")
          .sort((a, b) => b.totalEvaluation - a.totalEvaluation)
          .slice(0, 3);
      })
    );
  }
  //method to  check if the idea is rated
  isRated(ideaId: string | null): Observable<boolean> {
    return this.Http.get<{ isRated: boolean }>(`${environment.ideasUrl}/${ideaId}`).pipe(
      map((idea) => idea.isRated === true)
    );
  }

}

