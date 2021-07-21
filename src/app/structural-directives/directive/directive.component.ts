import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  students = ["Uma", "Madhu", "Gowtham", "Alam"]  

  movies = [
    {title: 'The Avengers', director:'Joss Whedon', cast: 'Scarlett Johansson, Chris Hemsworth', date: '27 April 2012 (India)'},
    {title: 'Cast Away', director:'Robert Zemeckis', cast: 'Tom Hanks', date: '7 December 2000 (USA)'},
    {title: 'The Shawshank Redemption', director:'Frank Darabont', cast: 'Morgan Freeman, Tim Robbins, Bob Gunton', date: '22 September 1994 (Beverly Hills)'},
    {title: 'Ice Age', director:'Chris Wedge', cast: 'John Leguizamo, Ray Romano, Denis Leary,', date: '3 May 2002 (India)'}
  ]

  products = ["Laptop", "Mobile", "Desktop", "iPad"]

  employees = [
    {
      name: "Scott",
      email: 'Scott@ef.com',
      skills: [
        {
          skill: 'Scrum Master',
          exp: '10 years'
        }
      ]
    },
    {
      name: "Adam",
      email: 'Adam@ef.com',
      skills: [
        {
          skill: 'Business Analyst',
          exp: '9 years'
        }
      ]
    },
    {
      name: "Tuan",
      email: 'Tuan@ef.com',
      skills: [
        {
          skill: 'Tech Lead',
          exp: '8 years'
        }
      ]
    },
    {
      name: "Uma",
      email: 'Uma@ef.com',
      skills: [
        {
          skill: 'JavaSctipt',
          exp: '10 years'
        }
      ]
    }
  ]
}
