using StudendtMSAReact.Models;

namespace StudendtMSAReact.Repositories.Abstract
{
    public interface ICourseRepo
    {
        
        
            Task<IEnumerable<Course>> GetAllCoursesAsync();
            Task<Course> GetCourseByIdAsync(int id);
            Task AddCourseAsync(Course course);
            Task UpdateCourseAsync(Course course);
            Task<bool> DeleteCourseAsync(int id);
            Task<bool> CourseExistsAsync(int id);
            Task BulkAddCoursesAsync(IEnumerable<Course> courses);
        


    }
}
