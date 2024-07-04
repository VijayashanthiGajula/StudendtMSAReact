using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace StudendtMSAReact.Models
{
   
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int Fees { get; set; }

        // Foreign key to the related Intake
        [Required]
        public int IntakeId { get; set; }
        [JsonIgnore]
        public virtual Intake? Intake { get; set; }
    }

}
