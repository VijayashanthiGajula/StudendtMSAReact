using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;

namespace StudendtMSAReact.Repositories.Concrete
{
    public class CourseRepo : ICourseRepo
    {
        private readonly StudnetDBContext _Context;
        private DbSet<Course> _CourseRepo;
        public CourseRepo(StudnetDBContext context)
        {
            _Context = context;
            _CourseRepo = _Context.Set<Course>();
        }

        public async Task AddCourseAsync(Course course)
        {
            await _CourseRepo.AddAsync(course);
        }

       

        public Task<bool> CourseExistsAsync(long id)
        {
            throw new NotImplementedException();
        }


        public async Task<IEnumerable<Course>> GetAllSoursesAsync()
        {
            return await _CourseRepo.ToListAsync();            
        }

        public async Task<Course> GetCourseByIdAsync(long id)
        {
            return await _CourseRepo.FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task UpdateCourseAsync(Course course)
        {
            _CourseRepo.Update(course);
        }

        public async Task DeleteCourseAsync(long id)
        {  
            var course = await GetCourseByIdAsync(id);
            if (course != null)
             {
               _Context.Courses.Remove(course);            
             }            
        }
        public async Task SaveChangesAsync()
        {
            await _Context.SaveChangesAsync();
        }
    }
}
