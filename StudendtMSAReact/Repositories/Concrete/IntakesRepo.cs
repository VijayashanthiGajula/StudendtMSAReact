using Humanizer;
using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;
using System.Linq;

namespace StudendtMSAReact.Repositories.Concrete
{
    public class IntakesRepo : IIntakesRepo
    {

        private readonly StudnetDBContext _context;
       // private DbSet<Intake> IntakeRepo;
        public IntakesRepo(StudnetDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Intake>> GetAllIntakesAsync()
        {
            return await _context.Intakes.ToListAsync();
        }

        public async Task<Intake> GetIntakeByIdAsync(int id)
        {

            var Intake = await _context.Intakes.FindAsync(id);

            return Intake;
        }
        public async Task AddIntakeAsync(Intake Intake)
        {
            _context.Intakes.Add(Intake);
            await _context.SaveChangesAsync();


        }

        public Task BulkAddIntakesAsync(IEnumerable<Intake> Intakes)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IntakeExistsAsync(int id)
        {
            return _context.Intakes.Any(e => e.IntakeId == id);
        }

        public async Task<bool> DeleteIntakeAsync(int id)
        {
            var Intake = await _context.Intakes.FindAsync(id);
            if (Intake != null)
            {
                _context.Intakes.Remove(Intake);
                await _context.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }

        }

        public async Task UpdateIntakeAsync(Intake Intake)
        {
            _context.Entry(Intake).State = EntityState.Modified;
            await _context.SaveChangesAsync();

        }
        private bool IntakeExists(int id)
        {
            return _context.Intakes.Any(e => e.IntakeId == id);
        }
    }
}
