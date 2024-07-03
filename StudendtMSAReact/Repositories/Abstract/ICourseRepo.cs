using StudendtMSAReact.Models;

namespace StudendtMSAReact.Repositories.Abstract
{
    public interface ICourseRepo
    {
        //CRUD operation interfaces
        //Creating an enity
        Task AddCourseAsync(Course course);
     
        //Reading single or multiple entities
        Task<IEnumerable<Course>> GetAllSoursesAsync();
        Task<Course> GetCourseByIdAsync(long id);
        Task<bool> CourseExistsAsync(long id);

        //Update an entity
        Task UpdateCourseAsync(Course course);
        //Deleting an entity
        Task DeleteCourseAsync(long id);
       
       

    }
}
