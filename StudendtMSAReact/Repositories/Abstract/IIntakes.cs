using StudendtMSAReact.Models;

namespace StudendtMSAReact.Repositories.Abstract
{
    public interface IIntakes
    {
        Task AddIntakeAsync(Intake intake);
        Task<IEnumerable<Intake>> GetAllSoursesAsync();
        Task<Course> GetIntakeByIdAsync(long id);
        Task<bool> IntakeExistsAsync(long id);     
        Task UpdateIntakeAsync(Intake intake);       
        Task DeleteIntakeAsync(long id);
    }
}
