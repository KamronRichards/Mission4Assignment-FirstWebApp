using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment_FirstWebApp.Models
{
    //Creating the models for each of the form inputs
    public class GradeCalculatorModel
    {
        [Required]
        [Range(1,100)]
        public string Assignment{ get; set; }
        public string Groupproject { get; set; }
        public string Quiz { get; set; }
        public string Midterm { get; set; }
        public string FinalExam { get; set; }
        public string Intex { get; set; }

    }
}
