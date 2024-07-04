using Microsoft.EntityFrameworkCore;

namespace StudendtMSAReact.Models
{
    public static class DataToSeed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Intake>().HasData(
                new Intake { IntakeId = 1, Name = "Term 1" },
                new Intake { IntakeId = 2, Name = "Term 2" },
                new Intake { IntakeId = 3, Name = "Term 3" },
               new Intake { IntakeId = 4, Name = "Term 4" });

            modelBuilder.Entity<Course>().HasData(
                new Course { Id = 1, IntakeId = 1, Name = "Web Designs", Capacity = 10, Fees = 500 },
                 new Course { Id = 2, IntakeId = 1, Name = "Web Development", Capacity = 10, Fees = 700 },
                new Course { Id = 3, IntakeId = 1, Name = "Mobile Development", Capacity = 10, Fees = 600 });

        }
    }
}

