using Microsoft.EntityFrameworkCore;// use
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using StudendtMSAReact.Models;//Use

namespace StudendtMSAReact.Context
{
    public class StudnetDBContext : DbContext
    {
        public StudnetDBContext(DbContextOptions<StudnetDBContext> options) : base(options)
        {
            Intakes = Set<Intake>();
            Courses = Set<Course>();
        }

        // Code for bringing the entity model that we created for intakes and courses  
        public DbSet<Intake> Intakes { get; set; } = null!;
        public DbSet<Course> Courses { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            DataToSeed.Seed(modelBuilder);
        }
    }
}
