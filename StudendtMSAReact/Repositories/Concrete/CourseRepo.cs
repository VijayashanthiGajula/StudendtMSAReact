using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Mvc;

namespace StudendtMSAReact.Repositories.Concrete
{
    public class CourseRepo 
    {
        private readonly StudnetDBContext _context;
        private DbSet<Course> _CourseRepo;
     
        public CourseRepo(StudnetDBContext context)
        {
            _context = context;
        }

      
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }
               
        public async Task<ActionResult<Course>> GetCourse(long id)
        {
            var course = await _context.Courses.FindAsync(id);
            return course;
        }
     
        public async Task PutCourseAsync(long id, Course course)
        {    
            _context.Entry(course).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return ;
                }
                else
                {
                    throw;
                }
            }
        }

      
        public async Task<ActionResult<Course>> PostCourse(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return course;
        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public void DeleteCourse(long id)
        {
            Course course = _context.Courses.FirstOrDefault(e => e.Id == id);
            _context.Courses.Remove(course);
        }
             
        private bool CourseExists(long id)
        {
            return _context.Courses.Any(e => e.Id == id);
        }
    }
}


