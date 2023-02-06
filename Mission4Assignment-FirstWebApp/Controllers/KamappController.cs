using Microsoft.AspNetCore.Mvc;
using Mission4Assignment_FirstWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment_FirstWebApp.Controllers
{
    //Setting the controllers for the pages
    public class KamappController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Get method for the grade Calculator
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //Post method for the Grade Calculator
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
 }
