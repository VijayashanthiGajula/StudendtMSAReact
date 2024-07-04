using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Mvc;

namespace StudendtMSAReact.Repositories.Concrete
{
    public class CourseRepo: ICourseRepo
    {
        private readonly StudnetDBContext _context;
        private DbSet<Course> _CourseRepo;
     
        public CourseRepo(StudnetDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return await _context.Courses.ToListAsync();
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {

            var course = await _context.Courses.FindAsync(id);

            return course;
        }
        public async Task AddCourseAsync(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

           
        }

        public Task BulkAddCoursesAsync(IEnumerable<Course> courses)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CourseExistsAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCourseAsync(int id)
        {
            throw new NotImplementedException();
        }

      

        public Task UpdateCourseAsync(Course course)
        {
            throw new NotImplementedException();
        }
    }
}


