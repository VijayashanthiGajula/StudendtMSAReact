using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;

namespace StudendtMSAReact.Repositories.Concrete
{
    public class IntakesRepo : IIntakes
    {
        public Task AddIntakeAsync(Intake intake)
        {
            throw new NotImplementedException();
        }

        public Task DeleteIntakeAsync(long id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Intake>> GetAllSoursesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Course> GetIntakeByIdAsync(long id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IntakeExistsAsync(long id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateIntakeAsync(Intake intake)
        {
            throw new NotImplementedException();
        }
    }
}
