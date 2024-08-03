using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Concrete;
using StudendtMSAReact.Repositories.Abstract;

namespace StudendtMSAReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        //private readonly StudnetDBContext _context;
        private readonly ICourseRepo _courseRepo;

        public CoursesController(ICourseRepo courseRepo)
        {
            _courseRepo = courseRepo;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            var Course = await _courseRepo.GetAllCoursesAsync();
            return Ok(Course);
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _courseRepo.GetCourseByIdAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }
        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse(Course course)
        {
            await _courseRepo.AddCourseAsync(course);
            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }
        
        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            //if (id != course.Id)
            //{
            //    return BadRequest();
            //}       

            try
            {
               // var r = await _courseRepo.GetCourseByIdAsync(id);
                await _courseRepo.UpdateCourseAsync(course);                
            }
            catch (DbUpdateConcurrencyException)
            {

                if (!await _courseRepo.CourseExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }      

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            bool result=await _courseRepo.DeleteCourseAsync(id);
            if (result == false)
            {
                return NotFound();
            }  
            return NoContent();
        }       
    }
}
