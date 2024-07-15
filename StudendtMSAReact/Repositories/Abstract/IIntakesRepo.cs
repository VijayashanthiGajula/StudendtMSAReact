using StudendtMSAReact.Models;

namespace StudendtMSAReact.Repositories.Abstract
{
    public interface IIntakesRepo
    {
        Task<IEnumerable<Intake>> GetAllIntakesAsync();
        Task<Intake> GetIntakeByIdAsync(int id);
        Task AddIntakeAsync(Intake Intake);
        Task UpdateIntakeAsync(Intake Intake);
        Task<bool> DeleteIntakeAsync(int id);
        Task<bool> IntakeExistsAsync(int id);
        Task BulkAddIntakesAsync(IEnumerable<Intake> Intakes);
    }
}
