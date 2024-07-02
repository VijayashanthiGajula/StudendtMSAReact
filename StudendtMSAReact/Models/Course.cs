using System.ComponentModel.DataAnnotations.Schema;

namespace StudendtMSAReact.Models
{
    public class Course
    {
        public long Id { get; set; }
        public string? CourseName { get; set; }
        public int Capacity { get; set; }
        // Foreign Key        
        public long IntakeId { get; set; }

    }
}
