using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MoviesApp
{
    public class MoviesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [Route("Movies/{id}")]
        public IActionResult Details(int? id)
        {
            return View();
        }
    }
}