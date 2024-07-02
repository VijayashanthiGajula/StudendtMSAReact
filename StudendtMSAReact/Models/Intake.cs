namespace StudendtMSAReact.Models
{
    public class Intake
    {
        public long IntakeId { get; set; }
        public string? IntakeName { get; set; }
        public ICollection<Course> Course { get; set; } 
    }
}
