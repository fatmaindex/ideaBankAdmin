import { Component } from '@angular/core';
import { Idea } from '../../models/idea';
import { IdeaService } from '../../services/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-assessment-card',
  templateUrl: './assessment-card.component.html',
  styleUrl: './assessment-card.component.scss'
})
export class AssessmentCardComponent {
  currentIdea: Idea | null = null
  currentIdeaID: string | null = null
  activeButton: 'btn1' | 'btn2' = 'btn2';
  isRated!: boolean;

  constructor(private ideaService: IdeaService,
    private ActivatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }
  ngOnInit(): void {
    // get the idea id from the rout   
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.currentIdeaID = paramMap.get('ideaID')
    })
    if (this.currentIdeaID) {
      // Fetch the idea if currentIdeaID is not null
      this.ideaService.getIdeaByID(this.currentIdeaID).subscribe((currentIdea) => {
        this.currentIdea = currentIdea;
      });
      // check if the idea is rated
      this.ideaService.isRated(this.currentIdeaID).subscribe(response => {
        this.isRated = response;
        // Disable form if already rated
        if (this.isRated) {
          this.ratingForm.disable();
        }
      }) }}
  private showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 100000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['thesnackbar']
    });
  }

  // form initialization
  ratingForm = new FormGroup({
    Alignment: new FormControl(0, [Validators.required]),
    innovation: new FormControl(0, [Validators.required]),
    feasibility: new FormControl(0, [Validators.required]),
    scalability: new FormControl(0, [Validators.required]),
    status: new FormControl('', [Validators.required]),
    comment: new FormControl(''),
  })

  onSubmitRating(ideaId: string | undefined) {
    if (!this.isRated && ideaId) {
      let status = this.ratingForm.get('status')?.value;
      let comment = this.ratingForm.get('comment')?.value;

      if (status == "declined" && !comment) {
        alert("Please provide a comment before submitting.");
        // this.showSnackbar('comment is mandatory');
      }
      else {
        this.ideaService.rateIdea(ideaId, this.ratingForm.value)
        alert("Idea rated successfully.")
        this.ratingForm.disable();
        // this.showSnackbar('Idea rated successfully.');
      }
    }
    else {
      alert("the rating  already submitted.")
    }
  }
  setStatus(status: string) {
    this.ratingForm.get('status')?.setValue(status)
  }
  // Navigate to assessment-card component
  navAsseessment() {
    this.router.navigate(['/assessment']);
  }
  // Navigate to idea-details component
  detailsCom() {
    this.router.navigate(['/ideaDetails', this.currentIdeaID]);
    this.activeButton = "btn1"
  }
  // Navigate to home component
  navHome() {
    this.router.navigate(['/landing']);
    this.activeButton = "btn2"
  }
}
